import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBox from "components/nav-search";
import styles from './index.module.scss';
import {MDBBtn, MDBIcon} from 'mdbreact'
import Link from 'next/link'
import IconButton from 'components/IconButton'
import { useRouter } from "next/router";

const Header = (props) => {
  const [pageName, setPageName] = useState("");
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.authentication.loggedIn);
  const shouldHaveSearch = !props.noSearch;
  const router = useRouter()

  useEffect(() => {
    var path = window.location.pathname;
    var pn = path.split("/").pop();
    setPageName(pn);
  })
  if (process.browser) {
  }

  return (
    <header className={styles.header}>
      <nav className="flex-wrap top-nav px-1 py-1">
        <div className="flex items-start items-center justify-between  lg:px-4">
          <div className="flex items-start justify-start">
            <MDBBtn floating="true" style={{borderRadius: "50%"}} className={styles.hamburger} outline={true} color="primary">
              <MDBIcon icon="bars" />
            </MDBBtn>
          </div>
          <div className={`hidden flex-grow ${pageName ? 'xl:flex' : 'nav-home'} nav-links pl-2 ` + styles.title}>
            <Link href="/" className="cursor-pointer">
              Metrix Address
            </Link>
          </div>
          <div className="flex items-end items-center flex-grow justify-end">
            <SearchBox inNav={true} />
            <IconButton onClick={() => router.push("/cart")}>
              <MDBIcon icon="shopping-cart" style={{fontSize:"1rem"}}/>
            </IconButton>
            <MDBBtn color="primary" className="px-3 py-2 text-base" onClick={() => router.push("/auth")}>
              <MDBIcon icon="lock" className="pr-2"/>
              Sign In / Sign Up
            </MDBBtn>
          </div>
        </div>

      </nav>
    </header>
  );
}

export default Header