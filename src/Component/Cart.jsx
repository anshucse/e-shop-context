import React,{ useContext , useState , useEffect } from 'react'
import { ProductContext } from '../ProductContext'

function Cart() {
  const context = useContext(ProductContext)
  const [cart ,setCart] = context.productApi.cart

  // states to handler subtotal,total,dc,tax

  const [subTotal,setSubTotal] = context.productApi.subTotal
  const [discount,setDiscount] = context.productApi.discount
  const [dc,setDc] = context.productApi.dc
  const [gst,setGst] = context.productApi.gst

  const getTotal = () => {
    const total = cart.reduce((prev,item)=>{
      let discountPrice = item.price - (item.price * (item.discountPercentage/100))
      return prev + (discountPrice * item.quantity)
    },0)

    setSubTotal(total)
    setGst(5)
      if(total >=1000){
        setDc(0)
        setDiscount(10)
      }
  }

  useEffect(()=>{
    getTotal()
  },[cart,subTotal,dc,gst,discount])

  // increment

  const increment = (id) => {
    cart.forEach(item => {
      if(item.id === id){
        item.quantity +=1
      }
    })
    setCart([...cart])
  }

  // decrement 

  const decrement = (id) => {
      cart.forEach(item => {
        if(item.id === id){
          item.quantity === 1 ? item.quantity = 1 : item.quantity -=1
        }
      })
      setCart([...cart])
  }

  //delete item

  const delItem = (id) => {
    if(window.confirm(`Do you want to remove product `)){
      cart.forEach((item,index) => {
        if(item.id === id) {
          cart.splice(index,1)
        }
      })
      setCart([...cart])
    }
  }

  // if(cart.length ===0){
  //   return(
  //     <div className="container">
  //       <div className="row">
  //         <div className="col-md-12 text-center">
  //           <div className="display-3 text-secondary">Cart is Empty </div>
  //         </div>
  //       </div>
  //     </div>
  //   )

  return(
    <div className="container-fluid">
      {
        cart.length === 0 ? (
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h3 className="display-3 text-danger ">Cart is Empty! &#128533; </h3>
              </div>
            </div>
          </div>
        ):(
          <div className='container-fluid'>
              <div className="row">
                <div className="col-md-12 text-center">
            <h3 className="display-3 text-success">Cart</h3>
            <h6 className="display-3 text-success"> Your Items &#128526;</h6>
        </div>
      </div>

      <div className="row">
        <div className="col-md-8 col-lg-9 col-sm-12">
          <table className='table table-bordered table-striped table-hover'>
            <thead className='text-center'>
              <tr>
                <th>Title</th>
                <th>Image</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>SubTotal</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className='text-center'>
                  {
                    cart && cart.map((item,index)=>{
                      return (
                        <tr key={index}>
                          <td>{item.title}</td>
                          <td>
                            <img src={item.thumbnail} alt="no image" width={80} height={80} />
                          </td>
                          <td>&#8377; { item.price} </td>
                          <td>
                            <div className="d-flex justify-content-evenly">
                              <i onClick={() => decrement(item.id)} className="bi bi-dash-circle text-danger pointer"></i>
                              <strong>{item.quantity}</strong>
                              <i onClick={() => increment(item.id)} className="bi bi-plus-circle text-success pointer"></i>
                            </div>
                          </td>
                          <td>&#8377; { item.price * item.quantity }</td>
                          <td>
                            <i onClick={() => delItem(item.id)} className="bi bi-trash text-danger pointer"></i>
                          </td>
                        </tr>
                      )
                    })
                  }
            </tbody>
          </table>
        </div>
        <div className="col-md-4 col-lg-3 col-sm-12">
          <div className="card">
            <div className="card-header">
              <h4 className="text-center"> Cart Info </h4>
            </div>
            <div className="card-body">
              <ul className="list-group">

                <li className="list-group-item">
                  <strong>SubTotal</strong>
                  <span className="text-success float-end"> + &#8377; {Math.round(subTotal) }</span>
                </li>

                <li className="list-group-item">
                <strong>Discount</strong>
                  <span className="text-danger float-end"> - &#8377; {Math.round(subTotal *(discount/100)) }</span>
                </li>

                <li className="list-group-item">
                <strong>Delivery Charge</strong>
                  <span className="text-danger float-end"> + &#8377; { dc }</span>
                </li>
              </ul>

              <ul className="list-group">
                <li className="list-group-item mt-2 mb-2">
                  <strong>Total</strong>
                  <span className="text-success float-end">
                    = &#8377; { Math.round((subTotal + dc) - (Math.round(subTotal * (discount/100))))}
                  </span>
                </li>
              </ul>
            </div>
            <div className="card-footer d-grid">
              <button className="btn btn-outline-success">Checkout </button>
            </div>
          </div>
        </div>
      </div>
    </div>
        )
      }
    </div>
  )

}

export default Cart
