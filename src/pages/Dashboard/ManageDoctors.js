import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteModal from './DeleteModal';
import Doctor from "./Doctor";

const ManageDoctors = () => {
    const [modalStatus, setModalStatus] = useState(false);
    const [deleteDoctor, setDeleteDoctor] = useState("");
    const [loading, setLoading] = useState(false);
    const { data: doctors, isLoading, refetch } = useQuery("doctors", () => fetch("http://localhost:5000/doctor", {
        headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }).then(res => res.json()))
    if (isLoading || loading) {
        return <Loading />
    }
    return (
        <div>
            <div class="overflow-x-auto w-full">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors?.map(doctor => <Doctor
                                key={doctor._id}
                                doctor={doctor}
                                setModalStatus={setModalStatus}
                                setDeleteDoctor={setDeleteDoctor}
                            />)
                        }
                    </tbody>
                </table>
            </div>
            {
                modalStatus && <DeleteModal setLoading={setLoading} refetch={refetch} deleteDoctor={deleteDoctor} />
            }
        </div>
    );
};

export default ManageDoctors;