import React from 'react';

export default function Cart({ cartProducts }) {
  const total = cartProducts.reduce((acc, product) => acc + product.item.cost, 0);

  return (
    <div>
      <div className='container row' style={{ margin: 'auto' }}>
        {cartProducts.map((product, index) => (
          <div className='m-2 col-2' key={index}>
            <div className='card'>
              <img
                className='card-img-top'
                style={{ height: '100px', width: '100px', margin: 'auto' }}
                src={product.item.pic}
                alt='card'
              />
              <div className='card-body'>
                <h5 className='card-title'>{product.item.name}</h5>
                <h2>Price: {product.item.cost}</h2>
                <div className='btn-group' role='group'>
                  <button type='button' className='btn btn-primary'>+</button>
                  <button type='button' className='btn btn-primary'>{product.quantity}</button>
                  <button type='button' className='btn btn-primary'>-</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='jumbotron'>
        <h1 className='display-4'>Total Cart Price: {total} Rs</h1>
        <a className='btn btn-primary btn-lg' role='button'>Make Payment</a>

      </div>
    </div>
  );
}
