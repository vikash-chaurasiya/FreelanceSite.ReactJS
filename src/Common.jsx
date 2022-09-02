import React from 'react'
import { NavLink } from 'react-router-dom'
import web from '../src/images/img1.png'

const Common = (props) => {
  return (
    <>
        <section id='header' className='d-flex align-items-center'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <div className='row' >
                            <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column' id='welcomeBox'>
                            <h1 >{props.name}<strong className='text-primary'><br></br>   Vikash Chaurasia</strong></h1>
                            <h4 className='my-3'>We are the team of Talented developer making website</h4>
                            <div className='mt-3'>
                                <NavLink to={props.visit} className='btn btn-primary rounded-pill'>{props.btnName}</NavLink>
                            </div>
                        </div>
                        <div className='col-lg-6 order-1 order-lg-2 header-img'>
                            <img src={props.imgsrc} className='img-fluid animated' alt='img1'/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        <br></br>
    </>
  )
}

export default Common