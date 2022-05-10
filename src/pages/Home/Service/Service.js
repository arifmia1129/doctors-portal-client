import React from 'react';

const Service = ({ service }) => {
    const { img, name, description } = service;
    return (
        <div className="card bg-base-100 shadow-2xl">
            <div className='flex justify-center items-center pt-5'>
                <img src={img} alt="" />
            </div>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Service;