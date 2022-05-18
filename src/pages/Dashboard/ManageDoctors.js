import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteModal from './DeleteModal';
import Doctor from "./Doctor";

const ManageDoctors = () => {
    const [deleteDoctor, setDeleteDoctor] = useState(null);
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
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
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
                                setDeleteDoctor={setDeleteDoctor}
                            />)
                        }
                    </tbody>
                </table>
            </div>
            {
                deleteDoctor && <DeleteModal setLoading={setLoading} refetch={refetch} deleteDoctor={deleteDoctor} setDeleteDoctor={setDeleteDoctor} />
            }

        </div>
    );
};

export default ManageDoctors;