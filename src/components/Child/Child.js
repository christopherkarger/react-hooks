import React from 'react';
import { ProductsConsumer } from '../../context/card';
import GrandChild from '../GrandChild/GrandChild';

const Child = props => {

  return (
    <ProductsConsumer>
      {
        state => 
          state.products.map((item,index) => {
            return ( 
              <React.Fragment key={index}>
                <p >Child: {item.name }</p>
                <GrandChild />
              </React.Fragment>
            )
          })
      }
    </ProductsConsumer>
  )
}

export default Child;