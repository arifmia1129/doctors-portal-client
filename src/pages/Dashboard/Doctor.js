import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import DeleteModal from './DeleteModal';

const Doctor = ({ doctor, refetch, setModalStatus, setDeleteDoctor }) => {
    const { image, name, specialty, email } = doctor;
    const handleDelete = () => {
        setModalStatus(true);
        setDeleteDoctor(doctor);
        // fetch(`http://localhost:5000/doctor/${email}`, {
        //     method: "DELETE",
        //     headers: {
        //         authorization: `Bearer ${localStorage.getItem("token")}`
        //     }
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data.deleteCount) {
        //             toast.success(`Doctor : ${name} is deleted successfully!`);
        //             refetch();
        //         }
        //         else {
        //             toast.error("Delete operation is failed!")
        //         }
        //     })
    }
    return (
        <tr>
            <td>
                <div class="flex items-center space-x-3">
                    <div class="avatar">
                        <div class="mask mask-squircle w-12 h-12">
                            <img src={image} alt={name} />
                        </div>
                    </div>
                    <div>
                        <div class="font-bold">{name}</div>
                        <div class="text-sm opacity-50">{email}</div>
                    </div>
                </div>
            </td>
            <td>
                {specialty}
            </td>
            <th>
                <label for="my-modal" onClick={handleDelete} class="btn modal-button btn-xs btn-error text-white font-bold">Delete</label>
            </th>

        </tr>
    );
};

export default Doctor;