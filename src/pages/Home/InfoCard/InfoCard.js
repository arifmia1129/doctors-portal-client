import React from 'react';

const InfoCard = ({ img, cardTitle, cardBody, bgColor }) => {
    return (
        <div className={`card card-side shadow-xl flex justify-between items-center text-white mb-10 p-10 w-full ${bgColor}`}>
            <img src={img} alt="icon" />
            <div className="card-body">
                <h2 className="card-title">{cardTitle}</h2>
                <p>{cardBody}</p>
            </div>
        </div>
    );
};

export default InfoCard;