import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='mx-auto text-center'>
    
    <section className="vh-100 gradient-custom">
  <div className="container py-5 h-100">
    <div className="row justify-content-center align-items-center h-100">
      <div className="col-12 col-lg-9 col-xl-7">
        <div className="card shadow-2-strong card-registration style" >
          <div className="card-body p-4 p-md-5">
            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Client Management System</h3>
            <form>

              <div className="row">
                <div className="col-md-6 mb-4">

                  <div data-mdb-input-init className="form-outline">
                    <NavLink to='/add_client'><input type="text" id="firstName" className="form-control form-control-lg"/></NavLink>
                    <label className="form-label" htmlFor="firstName">Add Client</label>
                  </div>

                </div>
                <div className="col-md-6 mb-4">

                  <div data-mdb-input-init className="form-outline">
                    <NavLink to='view_cilent'><input type="text" id="lastName" className="form-control form-control-lg" /></NavLink>
                    <label className="form-label" htmlFor="lastName">View Client</label>
                  </div>

                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-4 d-flex align-items-center">

                  <div data-mdb-input-init className="form-outline datepicker w-100">
                    <NavLink to='/edit'><input type="text" className="form-control form-control-lg" id="birthdayDate" /></NavLink>
                    <label htmlFor="birthdayDate" className="form-label">Edit</label>
                  </div>

                </div>
                <div className="col-md-6 mb-4">

                 

                  <div className="form-check form-check-inline">
                   <NavLink to='/delete'><input className="form-check-input" type="email" name="inlineRadioOptions" id="femaleGender"
                      value="option1" checked /></NavLink>
                    <label className="form-check-label" htmlFor="femaleGender">Delete</label>
                  </div>

                </div>
              </div>
              <div className="mt-4 pt-2">
                <input data-mdb-ripple-init className="btn btn-primary btn-lg" type="submit" value="Submit" />
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Navbar