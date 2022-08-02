//BOOTSTRA
import Table from "react-bootstrap/Table";

//CUSTOM COMPONENTS
import { useCartContext } from "../../context/CartContext";

//STYLES
import "./CartTotal.scss"

const CartTotal = () => {
  const { cartList } = useCartContext(); //UseContext + CartContext
  let totalPrice = 0;
  cartList.map((prod) => (totalPrice = totalPrice + prod.qty * prod.price));
  return (
    <Table>
      <tbody>
        <tr>
          <td className="text-start cartTotal-txt">TOTAL</td>
          <td className="text-end cartTotal-price">${totalPrice}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default CartTotal;
