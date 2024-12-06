import React from "react";

const Card = (props) => {
    return (
        <div className="col" bis_skin_checked="1">
            <div className="card shadow-sm" bis_skin_checked="1">
            <img src={props.imageUrl} className="card-img-top" alt="Cute Dog" />
                <div className="card-body" bis_skin_checked="1">
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div className="d-flex justify-content-center align-items-center" bis_skin_checked="1">
                        <a href="#" className="btn btn-primary">Find out more</a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Card
