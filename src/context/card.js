import React from 'react';

const state = {
  products: [
    { id: 1, name: 'product 1'},
    { id: 2, name: 'product 2'}
  ]
};

const context = React.createContext(state);

export const ProductsProvider = context.Provider;
export const ProductsConsumer = context.Consumer;