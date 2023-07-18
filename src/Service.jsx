import React from "react";
import { NavLink } from "react-router-dom";
import web from "./images/img1.png";
import Sdata from "./Sdata";
import Card from "./Card";

const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center serv-text">Our Services</h1>
        <hr></hr>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto col-sm-10 col-xs-10">
            <div className="row gy-4">

              {
                Sdata.map((val,index) => {
                    return <Card
                        key = {index}
                        imgsrc = {val.imgsrc}
                        title = {val.title}
                    />
                })
              }
              </div>
            </div>
          </div>
        </div>

    </>
  );
};

export default Service;
