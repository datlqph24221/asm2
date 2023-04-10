const MenuAdmin = () => {
    return <div className="flex h-screen flex-col justify-between border-r bg-white">
        <div className="pr-16 ml-10 py-6">
            <nav aria-label="Main Nav" className="mt-6 flex flex-col space-y-1 ">
                <a href="#" className="flex items-center gap-2 rounded-lg bg-blue-300 px-4 py-2 text-gray-700 w-52">
                    <span className="text-sm font-medium "> Điện thoại </span>
                </a>

                <a href="#" className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-blue-300 hover:text-gray-700">
                    <span className="text-sm font-medium"> Laptop </span>
                </a>

                <a href="#" className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-blue-300 hover:text-gray-700">
                    <span className="text-sm font-medium"> Máy tính bảng </span>
                </a>
                <a href="#" className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-blue-300 hover:text-gray-700">
                    <span className="text-sm font-medium"> Âm thanh</span>
                </a>
            </nav>
        </div>
    </div>
}

export default MenuAdmin