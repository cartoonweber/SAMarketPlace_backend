import CartItem from '../CartItem'
import styles from './index.module.scss'
import { MDBBtn } from 'mdbreact'
import Link from 'next/link'

const CartList = ({cart_list}) => {
  return (
    <div className="pt-2 flex-grow">
      {
        cart_list?.map((item, i) => (
          <CartItem key={i} {...item}/>
        ))
      }
      {
        cart_list.length == 0 &&
        <div className="pt-4 text-xl">
          No items is in your cart.
          Search your domains.
          <div className="pt-2">
            <MDBBtn color="dark">
              <Link href="/search">Find Domains</Link>
            </MDBBtn>
          </div>
        </div>
      }
    </div>
  )
}

export default CartList