import { Outlet } from 'react-router-dom'

import UserFooter from "./UserFooter"
import UserHeader from "./UserHeader"
// import Slider from './slider'

const UserLayout = () => {
    return <>
        <UserHeader />
        {/* <Slider /> */}
        <Outlet />
        <UserFooter />
    </>
}

export default UserLayout