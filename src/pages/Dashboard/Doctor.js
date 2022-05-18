import React from 'react';

const Doctor = ({ doctor, setDeleteDoctor }) => {
    const { image, name, specialty, email } = doctor;
    const handleDelete = () => {
        setDeleteDoctor(doctor);
    }
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} alt={name} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50">{email}</div>
                    </div>
                </div>
            </td>
            <td>
                {specialty}
            </td>
            <th>
                <label htmlFor="my-modal" onClick={handleDelete} className="btn modal-button btn-xs btn-error text-white font-bold">Delete</label>
            </th>

        </tr>
    );
};

export default Doctor;