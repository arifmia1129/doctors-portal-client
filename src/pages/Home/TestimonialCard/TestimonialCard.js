import React from 'react';

const TestimonialCard = ({ singleComment }) => {
    const { comment, img, name, address } = singleComment;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <div>
                    <p>{comment}</p>
                </div>
                <br />
                <div className="flex justify-start items-center">
                    <div>
                        <div className="avatar pr-5">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={img} alt='avatar' />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-xl text-accent font-bold'>{name}</h3>
                        <p>{address}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;