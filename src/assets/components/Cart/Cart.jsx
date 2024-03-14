import { totalCredits } from "../../../App";

const Cart = ({ carts }) => {
  const credits = carts.reduce(
    (previous, current) => previous + current.credit,
    0
  );
  return (
    <div className="bg-base-200 rounded-xl ml-4  h-96 p-5">
      <div className="font-bold">
        Credit Hour Remaining: {totalCredits - credits}
      </div>
      <div className="divider"></div>
      <div>
        <h3 className="font-bold">Course Name: </h3>
        <ul>
          {carts.map((c) => (
            <li key={c.id}>{c.name}</li>
          ))}
        </ul>
      </div>
      <div className="divider"></div>
      <div className="font-bold">Total Credit Hour: {credits};</div>
      <div className="divider"></div>
      <div className="font-bold">
        Total Price: $
        {carts.reduce((previous, current) => previous + current.price, 0)}
      </div>
    </div>
  );
};

export default Cart;
