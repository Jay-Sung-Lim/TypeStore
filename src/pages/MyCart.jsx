import React from 'react';
import CartItem from '../components/CartItem';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { FaEquals } from 'react-icons/fa';
import PriceCard from '../components/PriceCard';
import Button from '../components/ui/Button';
import useCart from '../hooks/useCart';

const SHIPPING = 3.99;
const TAX = 0.05;

export default function MyCart() {
  const {
    cartQuery: { isLoading, data: products },
  } = useCart();

  if (isLoading) return <p>Loading...</p>;

  const hasProducts = products && products.length > 0;
  const totalPrice = products && products.reduce((prev, current) => prev + parseInt(current.price) * current.quantity, 0);
  const formattedTotalPrice = totalPrice.toFixed(2);

  const formattedShipping = SHIPPING.toFixed(2);

  const gstHst = totalPrice * TAX;
  const formattedGSTHST = gstHst.toFixed(2);

  const orderTotal = totalPrice + SHIPPING + gstHst;
  const formattedOrderTotal = orderTotal.toFixed(2);

  return (
    <section className='p-8 flex flex-col'>
      <p className='text-2xl text-center font-bold pb-4 border-b border-gray-300'>Shopping Cart</p>
      {!hasProducts && <p>There is no items</p>}
      {hasProducts && (
        <>
          <ul className='border-b border-gray-300 mb-8 p-4 px-8'>
            {products && products.map((product) => <CartItem key={product.id} product={product} />)}
          </ul>
          <div className='flex justify-between items-center mb-6 px-2 md:px-8 lg:px-16'>
            <PriceCard text='Item(s)' price={formattedTotalPrice} />
            <BsFillPlusCircleFill className='shrink-0' />
            <PriceCard text='Shipping' price={formattedShipping} />
            <BsFillPlusCircleFill className='shrink-0' />
            <PriceCard text='GST/HST' price={formattedGSTHST} />
            <FaEquals className='shrink-0' />
            <PriceCard text='Order Total' price={formattedOrderTotal} />
          </div>
          <Button text='Checkout' />
        </>
      )}
    </section>
  );
}
