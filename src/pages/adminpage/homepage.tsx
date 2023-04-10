import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import MenuAdmin from "./menuAdmin"
import { IProduct } from "../../models"
import { getAll } from "../../api/products"


const AdminHomepage = () => {
    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });

    const [product, setProduct] = useState<IProduct[]>([])

    const fetchProducts = async () => {
        const { data } = await getAll()
        setProduct(data)
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return <div className="flex flex-1">
        <div className=""><MenuAdmin /></div>
        <div className="bg-gray-100 w-full pl-7 pt-10">
            <h1 className="ml-5">Điện thoại</h1>
            <p className="ml-20 my-4">Danh mục sản phẩm</p>
            <Link to="/admin/add" className="ml-20 my-4 border-2 bg-blue-300 px-2 py-1  rounded-md">Thêm sản phẩm</Link>
            <div className="mb-4">

                <form action="">
                    <b>Bộ lọc:</b>
                    <select name="" id="" className="w-44 border-gray-950 ml-2 my-2
                ">
                        <option value="">Iphone</option>
                        <option value="">Samsung</option>
                        <option value="">Redmi</option>
                    </select>
                </form>

            </div>

            <div className="bg-white h-full">
                <table className="table-auto border-x-black text-center w-full ">
                    <thead>
                        <tr>
                            <th className="border border-slate-300 w-5">STT</th>
                            <th className="border border-slate-300 w-20">Tên sản phẩm</th>
                            <th className="border border-slate-300 w-32">Giá</th>
                            <th className="border border-slate-300 w-32">Giá gốc</th>
                            <th className="border border-slate-300 w-10">Mô tả</th>
                            <th className="border border-slate-300">Ảnh</th>
                            <th className="border border-slate-300 w-8">Sửa</th>
                            <th className="border border-slate-300 w-8">Xóa</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {product.map((product, index: number) => (
                            <tr>
                                <td className="border border-slate-300 ">{index + 1}</td>
                                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    <Link to={`/admin/product/${product.id}`}>
                                        {product.name}
                                    </Link>
                                </td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{product.price}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{product.original_price}</td>

                                <td className="container mx-auto w-[100px] px-4 py-2 text-gray-700"><textarea name="" id="" cols={50} rows={18}>{product.description}</textarea></td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                    <img className="w-[100%]" src={product.images?.[0].base_url} alt="" />
                                </td>
                                <td className="text-center">
                                    <button className="bg-red-600 text-white rounded-md p-2">Sửa</button>
                                </td>
                                <td className="text-center">
                                    <button className="bg-red-600 text-white rounded-md p-2">Xoá</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
    </div >

}

export default AdminHomepage