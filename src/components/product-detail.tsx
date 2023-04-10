import { Link, useParams } from "react-router-dom"
import { getById } from "../api/products"
import { useEffect, useState } from "react"
import { IProduct } from "../models"

const ProductDetail = () => {
    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });

    const [product, setProduct] = useState<IProduct>({} as IProduct)
    const { id } = useParams()

    const fetchProducts = async () => {
        if (id) {
            const { data } = await getById(id)
            setProduct(data)
        }
    }
    useEffect(() => {
        fetchProducts()
    }, [])

    return <div className="block">
        <div className="drop-shadow-lg bg-white flex items-center  my-5">
            <ul className="flex container mx-auto">
                <li>Trang chủ</li>
                <li className="mx-5">Điện thoại</li>
                <li className="mr-5">Samsung</li>
                <li>Samsung Galaxy A73 (5G) 256GB</li>
            </ul>
        </div>

        <div className="container mx-auto">
            <h1 className="text-2xl">{product.name}</h1>
        </div>
        <hr className="my-8" />
        <div className="flex gap-16 container mx-auto">
            <div className="pl-10">
                <img src={product.images?.[0].base_url} alt="" className="w-[700px]" />
                <div className=" flex items-center gap-4 mt-3 ">
                    <div className="border-2 border-red-500 w-24 pl-2">
                        <img src="../public/Rectangle(5).png" alt="" className="pl-6" />
                        <span className="">Tính năng nổi bật</span>
                    </div>
                    <img src={product.images?.[0].base_url} alt="" className="border-2 border-red-500 w-16 h-16" />
                    <img src={product.images?.[0].base_url} alt="" className="w-16 h-16" />
                    <img src={product.images?.[0].base_url} alt="" className="w-16 h-16" />
                    <img src={product.images?.[0].base_url} alt="" className="w-16 h-16" />
                </div>
            </div>
            <div className="pl-16">
                <p className="text-gray-500 text-md mb-4"><span className="text-red-500 text-2xl mr-5">{VND.format(product.price)}</span>{VND.format(product.original_price)}</p>
                <p className="w-4/5"> Mô tả ngắn: Trước khi mua bất kỳ chiếc điện thoại nào, người dùng cũng sẽ quan tâm đến thiết kế sản phẩm trước. Với phiên bản A73, Samsung đã tạo nên một chiếc smartphone với vẻ ngoài mang đến cảm giác sang trọng và tinh tế.</p>
                <div className="mt-80 flex items-center">
                    <button className="bg-red-500 w-1/4 h-12 rounded-md  text-white">Mua ngay</button>
                    <button className=" border-2 border-red-500 w-12 h-12 rounded-md ml-10"><img src="../public/icon.png" alt="cart" className="ml-2 w-6 h-6" /></button>
                    <span className="w-20 ml-3">Thêm vào giỏ hàng</span>
                </div>
            </div>
        </div>
        <div className="container mx-auto bg-gray-100 mt-14">
            <h2 className="text-red-500 text-center text-xl mb-2">ĐẶC ĐIỂM NỔI BẬT</h2>
            <div className="ml-8">
                <p>Camera chất lượng, bắt trọn từng khoảng khắc - Cụm 4 camera với cảm biến chính lên đến 108 MP</p>
                <p className="my-3">Thưởng thức không gian giải trí cực đỉnh - Màn hình lớn 6.7 inch, độ phân giải Full HD+, 120Hz mượt mà</p>
                <p className="mb-3">Cấu hình Galaxy A73 5G được nâng cấp mạnh với chip Snapdragon 778G, RAM lên đến 8 GB</p>
                <p>Chiến game thoải mái không lo gián đoạn - Viên pin lớn 5000 mAh, hỗ trợ sạc nhanh 25 W</p>
            </div>
        </div>
        <div className="container mx-auto mt-6">
            <div className="" dangerouslySetInnerHTML={{ __html: product.description }}></div>
        </div>
    </div>
}

export default ProductDetail