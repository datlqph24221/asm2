import { useEffect, useState } from "react"
import Product from "../../components/product"
import { IProduct } from "../../models"
import { getAll } from "../../api/products"

const Homepage = () => {

    const [products, setProduct] = useState<IProduct[]>([])

    const fetchProducts = async () => {
        const { data } = await getAll()
        setProduct(data)
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return <div className="container mx-auto">
        <div className='my-10'>
            <img src="./banner.png" alt="" className='' />
        </div>
        <h1 className="mb-10 text-2xl">ĐIỆN THOẠI NỔI BẬT NHẤT</h1>
        <div className="grid grid-cols-4 gap-4">
            {products.map(product =>
                <Product
                    data={product}
                    key={product.id} />)
            }
        </div>
    </div>
}

export default Homepage