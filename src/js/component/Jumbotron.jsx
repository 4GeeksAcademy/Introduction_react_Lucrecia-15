import React from "react";

const Jumbotron = () => {
  return (
    <div className="container py-4 bg-light text-dark " bis_skin_checked="1">
      <h1 className="col-md-8 display-8 fs-1 d-md-flex justify-content-md-start">Welcome to... ! </h1>
      <p className="text-start col-md-10 fs-5">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
      <button className="d-md-flex justify-content-md-end btn btn-primary py-2 btn-lg" type="button">Call to action!</button>
    </div>   
   
  )
};

export default Jumbotron
