import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const DeleteModal = ({ deleteDoctor, refetch, setLoading }) => {
    const handleDelete = doctor => {
        setLoading(true);
        fetch(`http://localhost:5000/doctor/${doctor?.email}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setLoading(false);
                if (data.deletedCount) {
                    toast.success(`Doctor : ${doctor?.name} is deleted successfully!`);
                    refetch();
                }
                else {
                    toast.error("Delete operation is failed!")
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="my-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Are you sure delete this doctor from here?</h3>
                    <p class="py-4">If you delete this doctor you will not access or display her/his information!</p>
                    <div class="modal-action">
                        <label onClick={() => handleDelete(deleteDoctor)} for="my-modal" class="btn btn-error text-white font-bold">Yes</label>
                        <label for="my-modal" class="btn btn-success text-white font-bold">No</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;