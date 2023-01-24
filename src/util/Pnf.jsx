import React from 'react'
import {NavLink} from 'react-router-dom'

function pnf() {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-12 text-center">
            <h1 className="display-1 text-danger">Request path not found</h1>
            <h3 className="text-warning display-3">404 Error</h3>
            <NavLink to={`/`} className='btn btn-outline-warning'>Back to Home</NavLink>
        </div>
      </div>
    </div>
  )
}

export default pnf
