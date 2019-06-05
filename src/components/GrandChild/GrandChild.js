import React from 'react';
import { ProductsConsumer } from '../../context/card';

const Child = props => {

  return (
    <ProductsConsumer>
      {
        state => 
          state.products.map((item,index) => {
            return ( 
              <p key={`d${index}`}>GrandChild: {item.name }</p>
            )
          })
      }
    </ProductsConsumer>
  )
}

export default Child;