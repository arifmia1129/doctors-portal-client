import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import User from './User';

const Users = () => {
    const { isLoading, data: users, refetch } = useQuery('users', () =>
        fetch(`https://lit-inlet-69073.herokuapp.com/user`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loading />
    }
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>User</th>
                        <th>Make Admin Operation</th>
                        <th>User Remove Operation</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users?.map((user, index) => <User
                            key={user._id}
                            user={user}
                            index={index}
                            refetch={refetch}
                        />)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Users;