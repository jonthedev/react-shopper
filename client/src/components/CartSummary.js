import React, { useState } from 'react';
import { useShoppingCart } from 'use-shopping-cart';
import formatTotalPrice from '../utils/formatTotalPrice';
import CartModal from './CartModal';
import { CartIcon } from './Icons';

export default function CartSummary() {
  const { cartCount, totalPrice } = useShoppingCart();
  const [isOpen, setOpen] = useState(false);

  const toggleModal = () => setOpen(!isOpen);
  const price = formatTotalPrice(totalPrice, 'EUR');
  return (
    <>
      <nav
        onClick={toggleModal}
        className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
        <span className='mr-5 hover:text-white flex items-center'>
          <CartIcon />
          <span className='ml-3'>
            {price} ({cartCount})
          </span>
        </span>
      </nav>
      <CartModal isOpen={isOpen} toggleModal={toggleModal} />
    </>
  );
}
