import { Link } from "react-router-dom"
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { getById, update } from "../../api/products"
import { useEffect } from "react"
import { UpdateProductForm, UpdateProductSchema } from "../../models"



const UpdateProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<UpdateProductForm>({
        resolver: yupResolver(UpdateProductSchema),
        defaultValues: async () => {
            if (id) {
                return await fetchProductById(id)
            }
        }
    })

    const { id } = useParams()


    const navigate = useNavigate()

    const onSubmit = async (data: UpdateProductForm) => {
        try {
            if (id) {
                const response = await update(id, data)
                console.log(response);
            }

            navigate('/admin')

        } catch (error) {
            console.log(error);

        }

    }

    const fetchProductById = async (id: string) => {
        const { data } = await getById(id)
        // console.log(data);
        return data

    }

    useEffect(() => {
        if (id) {
            fetchProductById(id)
        }
    }, [])

    return <section className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                <div className="lg:col-span-2 lg:py-12">


                </div>

                <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                    <form action="" className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label>Name</label>
                            <input
                                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                {...register('name')}
                            />
                            <p className="text-red-600 text-[10px]">
                                {errors.name && errors.name.message}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <label>Price</label>
                                <input
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    {...register('price')}
                                    type="number"
                                />
                                <p className="text-red-600 text-[10px]">
                                    {errors.price && errors.price.message}
                                </p>
                            </div>

                            <div>
                                <label>Original Price</label>
                                <input
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    {...register('original_price')}
                                    type="number"
                                />
                                <p className="text-red-600 text-[10px]">
                                    {errors.original_price && errors.original_price.message}
                                </p>
                            </div>
                        </div>

                        {/* <div>
                            <label>Images</label>
                            <input
                                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                type="file"
                                {...register('images')}
                            />
                            <p className="text-red-600 text-[10px]">
                                {errors.images && errors.images.message}
                            </p>
                        </div> */}

                        <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                            <div>
                                <input
                                    className="peer sr-only"
                                    id="option1"
                                    type="radio"
                                    name="option"
                                />

                                <label
                                    htmlFor="option1"
                                    className="block w-full rounded-lg border border-gray-200 p-3 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"

                                >
                                    <span className="text-sm font-medium"> Iphone </span>
                                </label>
                            </div>

                            <div>
                                <input
                                    className="peer sr-only"
                                    id="option2"
                                    type="radio"
                                    name="option"
                                />

                                <label
                                    htmlFor="option2"
                                    className="block w-full rounded-lg border border-gray-200 p-3 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"

                                >
                                    <span className="text-sm font-medium"> Samsung </span>
                                </label>
                            </div>

                            <div>
                                <input
                                    className="peer sr-only"
                                    id="option3"
                                    type="radio"
                                    name="option"
                                />

                                <label
                                    htmlFor="option3"
                                    className="block w-full rounded-lg border border-gray-200 p-3 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"

                                >
                                    <span className="text-sm font-medium"> Redmi </span>
                                </label>
                            </div>
                        </div>

                        <div>
                            <label>Description</label>

                            <textarea
                                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                {...register('description')}
                            ></textarea>
                            <p className="text-red-600 text-[10px]">
                                {errors.description && errors.description.message}
                            </p>

                        </div>

                        <div className="mt-4">
                            <button
                                type="submit"
                                className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                            >
                                Cập nhật
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>


}

export default UpdateProduct


// 1. Xây dựng giao diện form
// 2. Cần import thư viện quản lý form
// 3. Khai bao cac truong du lieu trong form va validate form
// 4. Su dung resolver de tich hop yup va react-hook-form

