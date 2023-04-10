import { Outlet, useNavigate } from "react-router-dom"
import AdminHomepage from "../../../pages/adminpage/homepage"
import MenuAdmin from "../../../pages/adminpage/menuAdmin"
import { useEffect, useState } from "react";
import { IUser } from "../../../models";

const AdminHeader = () => {
    const navigate = useNavigate();

    const [loggedIn, setLoggedIn] = useState<IUser | null>(() => {
        const user = localStorage.getItem('user');
        console.log(localStorage);

        return user ? JSON.parse(user) : null;
    });
    // Sử dụng useEffect để kiểm tra trạng thái đăng nhập khi component được render
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user") as string);
        console.log(user.role);


        if (!user) {
            alert("Mật khẩu hoặc tài khoản không chính xác")
            navigate("/signin");
        } else if (user.role !== 'admin') {
            alert("Bạn không có quyền vào trang admin")
            navigate("/");
        }
    }, []);
    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('user');
        setLoggedIn(null);
        navigate("/signin")
    }
    return <div>
        <header className="bg-blue-500 py-2 ">
            <div className="container mx-auto flex gap-4 items-center text-white">
                <img className="w-[50px]" src="../public/logo.png" alt="" />
                <p className=" mr-7">Dashboard</p>
                <input className=" w-1/2 rounded-md py-1.5" type="text" placeholder="Search" />
                <b className="ml-36">Xin chào: {loggedIn?.firstName + " " + loggedIn?.lastName}</b>
                <button onClick={handleLogout} className="bg-red-500 py-1 px-1 "> Logout</button>
            </div>
        </header>
        <div>
            <Outlet />
        </div>
    </div >

}

export default AdminHeader

