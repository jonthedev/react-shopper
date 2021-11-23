import { formatCurrencyString } from 'use-shopping-cart';

export default function formatTotalPrice(totalPrice, currency) {
  return formatCurrencyString({
    value: totalPrice,
    currency: currency,
    language: navigator.language,
  });
}
