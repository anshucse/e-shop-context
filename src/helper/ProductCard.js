import React, { useContext } from 'react'
import { ProductContext } from '../ProductContext'
import { NavLink } from 'react-router-dom'


function ProductCard(props) {
  const context = useContext(ProductContext)
  const addToCart = context.productApi.addToCart
  
  return (
    
      <div className="col-lg-3 col-md-4 col-sm-6 mb-2">
        <div className="card">
          <img src={props.thumbnail} width={200} height={200} alt="no image found"className="card-img-top"/>
              <div className="card-body">
                <h6 className="text-center text-success text-capitalize">{props.title}</h6>
                <h6 className="text-warning">Price: &#8377;{props.price}</h6>
                <details>
                  <summary className='text-primary'>product Description</summary>
                  <p className='card-text text-justify text-secondary'>{props.description}</p>
                </details>
              </div>
            <div className="card-footer">
              <NavLink to={`/product/${props.id}/category/${props.category}`} className='btn btn-sm btn-outline-primary'>
                <i className='bi bi-info-circle-fill'></i>
              </NavLink>
              <button onClick={()=>addToCart(props)} className="btn btn-outline-success btn-sm float-end" title='Add to cart'><i className='bi bi-cart'></i></button>
            </div>
        </div>
      </div>
    
  )
}

export default ProductCard