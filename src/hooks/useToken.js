import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState("");
    useEffect(() => {
        const email = user?.user?.email;

        const userInfo = {
            email
        }

        if (user) {
            fetch(`https://lit-inlet-69073.herokuapp.com/user/${email}`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(userInfo)
            })

                .then(res => res.json())
                .then(data => {
                    localStorage.setItem('token', data.token);
                    setToken(data.token);
                })

        }

    }, [user])
    return [token];
}

export default useToken;