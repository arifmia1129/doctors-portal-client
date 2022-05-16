import { useState } from "react"

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    const email = user?.email;
    if (email) {
        fetch(`http://localhost:5000/admin/${email}`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setAdmin(data.isAdmin);
            })
    }

    return [admin];
}

export default useAdmin;