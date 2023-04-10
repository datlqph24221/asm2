import { Link, useNavigate } from "react-router-dom"
import { useLocalStorage } from "../../../hooks"
import { IUser } from "../../../models";
import { useState } from "react";

const UserHeader = () => {
    const [user, setUser] = useLocalStorage('user', null)

    const navigate = useNavigate()

    const [loggedIn, setLoggedIn] = useState<IUser | null>(() => {
        const user = localStorage.getItem('user');
        console.log(localStorage);

        return user ? JSON.parse(user) : null;
    });
    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('user');
        setLoggedIn(null);
        navigate("/signin")
    }
    return <header className="bg-red-500">
        <div className="container mx-auto flex gap-4 items-center">
            <img className="w-[50px]" src="/logo.png" alt="" />
            <input className="grow" type="text" placeholder="Search" />
            <b className="ml-36">Xin chào: {loggedIn?.firstName + " " + loggedIn?.lastName}</b>
            <button onClick={handleLogout} className="bg-red-500 py-1 px-1 "> Logout</button>
        </div>
    </header>
}

export default UserHeader