export default function Cart() {
  const 장바구니 = ["Tomatoes", "Pasta", "Cream"];
  return (
    <div>
      <h4 className="title">Cart</h4>
      <CartItem item={장바구니[0]} />
      <CartItem item={장바구니[1]} />
      <CartItem item={장바구니[2]} />
      <Btn color="blue"/>
    </div>
  );
}
interface CartItemProps {
  item: string;
}
interface BtnProps {
  color: string;
}
function Btn(props: BtnProps) {
  return <button style={{ background: props.color }}> 버튼 </button>;
}

function CartItem(props: CartItemProps) {
  return (
    <div className="cart-item">
      <p>{props.item}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}
