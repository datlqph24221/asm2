import { Link } from "react-router-dom"
import { IProduct } from "../models"

type Props = {
    data: IProduct
}

const Product = ({ data }: Props) => {
    return <Link to={`product/${data.id}`} className="block mb-10">
        <img alt="" src={data.images?.[0].base_url} className="h-64 w-full object-cover sm: lg:h-60" id="san-pham1" />

        <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
            {data.name}
        </h3>

        <p className="mt-2 max-w-sm">
            <span className="text-red-500 text-lg mr-2">{data.price}</span> <del className="text-gray-400">{data.original_price}</del>
        </p>
    </Link>
}

export default Product