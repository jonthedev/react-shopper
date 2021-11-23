import { formatCurrencyString } from 'use-shopping-cart';

export default function formatProductPrice(product) {
  return formatCurrencyString({
    value: product.price,
    currency: 'EUR',
    language: navigator.language,
  });
}
