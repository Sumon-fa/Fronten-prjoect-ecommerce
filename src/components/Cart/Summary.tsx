import React from 'react';
import { useAppSelector } from '../../hooks/reduxHook';

const Summary = () => {
  const { totalPrice, subTotal } = useAppSelector((state) => state.cart);

  return (
    <section className="summary-container">
      <div className="summary-container__summary">
        <ul>
          <li>
            Subtotal <span>${subTotal.toFixed(2)}</span>
          </li>

          <li>
            VAT<span>24%</span>
          </li>
          <li className="summary-container__summary__total">
            Total <span>${totalPrice.toFixed(2)}</span>
          </li>
        </ul>
      </div>

      <div className="summary-container__checkout">
        <button type="button">Check Out</button>
      </div>
    </section>
  );
};

export default Summary;
