import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AddDoctor = () => {
    const [loading, setLoading] = useState(false);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const { isLoading, data: services } = useQuery('available', () =>
        fetch("http://localhost:5000/service").then(res =>
            res.json()
        )
    )
    if (isLoading || loading) {
        return <Loading />
    }
    const imgKey = "9c1c8b6fefa135346f18195e686948e6";

    const onSubmit = (data) => {
        setLoading(true);
        const img = data.picture[0];
        const url = `https://api.imgbb.com/1/upload?key=${imgKey}`;
        const formData = new FormData();
        formData.append('image', img);

        fetch(url, {
            method: "POST",
            body: formData
        })

            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const image = result.data.url;
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        image
                    }
                    fetch("http://localhost:5000/doctor", {
                        method: "POST",
                        headers: {
                            "content-type": "application/json",
                            authorization: `Bearer ${localStorage.getItem("token")}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success("Doctor added successfully");
                                reset();
                            }
                            else {
                                toast.error("Failed to add the doctor. Try again!");
                            }
                            setLoading(false)
                        })
                }
            })
    };
    return (
        <div className='flex justify-center '>
            <div>
                <h1 className="text-2xl text-secondary font-bold text-center my-5">Add a New Doctor</h1>
                <div className="border-4 lg:p-10 p-5 rounded-xl ml-auto">
                    <form onSubmit={handleSubmit(onSubmit)} >

                        <div className="form-control w-full max-w-xs md:w-96">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Name field is required."
                                    }
                                })}
                                type="text"
                                placeholder="Type Doctor Name"
                                className="input input-bordered w-full" />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs md:w-96">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email field is required."
                                    },
                                    pattern: {
                                        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                        message: 'Enter a valid email address.'
                                    }
                                })}
                                type="email"
                                placeholder="Type Doctor Email"
                                className="input input-bordered w-full" />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs md:w-96">
                            <label className="label">
                                <span className="label-text">Doctor Specialty</span>
                            </label>

                            <select {...register("specialty")} className="select select-bordered w-full max-w-xs">
                                {
                                    services.map(service => <option
                                        key={service._id}
                                        value={service.name}
                                    >{service.name}</option>)
                                }
                            </select>
                            <label className="label">
                                {errors.specialty?.type === 'required' && <span className="label-text-alt text-red-500">{errors.specialty.message}</span>}
                                {errors.specialty?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.specialty.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs md:w-96">
                            <label className="label">
                                <span className="label-text">Picture</span>
                            </label>
                            <input
                                {...register("picture", {
                                    required: {
                                        value: true,
                                        message: "Name field is required."
                                    }
                                })}
                                type="file"
                                className="input input-bordered w-full text-sm pt-2.5" />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>
                        <div className='pb-3'>
                        </div>
                        <input className='btn btn-secondary text-white w-full max-w-xs md:w-96 bg-gradient-to-r from-secondary to-primary' type="submit" value="Add Doctor" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddDoctor;