import { useState } from "react"

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);
    const email = user?.email;
    if (email) {
        fetch(`https://lit-inlet-69073.herokuapp.com/admin/${email}`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setAdmin(data.isAdmin);
                setAdminLoading(false);
            })
    }

    return [admin, adminLoading];
}

export default useAdmin;