import React, { useState } from "react";

const Contact = () => {

  const [data,setData] = useState({
    fullname : "",
    phone : "",
    email : "",
    message : ""
  })

  const InputEvent = (event) => {
    const {name,value} =event.target;

    setData ((preval) => {
      return {
        ...preval,
        [name] : value,
      };
    });
  };

  const formSubmit = (e) =>{
    e.preventDefault();
    alert(` My Name is ${data.fullname} \n My phone number ${data.phone} \n My email address ${data.email} \n My Message are -: ${data.message}`)
  }

  return (
    <>
      <div className="my-5">
        {/* <div className="text-center fs-1 fw-semibold">Let's</div> */}
        <h1 className="contact-heading">Let's Create Great Product Togerther</h1>
        <hr></hr>
      </div>
      <div className="container contact-div ">


        <div className="row ">
          <div className="col-md-6 col-12 mx-auto">

            <from  >
            <label className="fs-2 mb-3">Enter your details</label>
            <div className="input-group has-validation">

                <div className="form-floating is-invalid mb-4">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInputGroup2"
                      name="fullname"
                      value={data.fullname}
                      onChange={InputEvent}
                      placeholder="Username"
                    />
                    <label for="floatingInputGroup2">Enter Full Name</label>
                </div>
            </div>

            <div className="input-group ">
                <span className="input-group-text">+91</span>
                <div className="form-floating">
                    <input
                      type="number"
                      className="form-control "
                      id="floatingInputGroup2"
                      name="phone"
                      value={data.phone}
                      onChange={InputEvent}
                      placeholder="number"
                      required/>
                    <label for="floatingInputGroup2">Mobile Number</label>
                </div>
            </div>

            <div className="input-group my-4">
                <span className="input-group-text">@</span>
                <div className="form-floating is-invalid">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInputGroup2"
                      name="email"
                      value={data.email}
                      onChange={InputEvent}
                      placeholder="Username"
                      required
                      />
                    <label for="floatingInputGroup2">Enter Email address</label>
                </div>
            </div>

            <div className="input-group has-validation">
            <div className="form-floating">
                <textarea
                  className="form-control"
                  rows='3'
                  name="message"
                  value={data.message}
                  onChange={InputEvent}
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"/>
                <label for="floatingTextarea2">Message</label>
            </div>
            </div>

            <div className="col-12 my-4">
                <button className="btn btn-outline-primary" type="submit" onClick={formSubmit}>
                    Submit Form
                </button>
            </div>
            </from>
            <div class="social-icon">
                        <a href="https://www.facebook.com/jai.chaurasiall/" target='_blank'><i class="fab fa-facebook"></i></a>
                        <a href="https://twitter.com/jaichaurasia7" target='_blank'><i class="fab fa-twitter-square"></i></a>
                        <a href="https://github.com/vikash7379" target='_blank'><i class="fab fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/vikash-chaurasia/" target='_blank'><i class="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
