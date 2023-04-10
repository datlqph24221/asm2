import { Link } from "react-router-dom"
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { AddProductForm, AddProductSchema, IProduct } from "../../models"
import * as Yup from 'yup'
import { create } from "../../api/products"



const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<AddProductForm>({
        resolver: yupResolver(AddProductSchema)
    })


    const navigate = useNavigate()

    const onSubmit = async (data: AddProductForm) => {
        try {
            const response = await create(data)
            console.log(response);

            navigate('/admin')

        } catch (error) {
            console.log(error);

        }

    }

    return <section className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                <div className="lg:col-span-2 lg:py-12">


                </div>

                <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                    <form action="" className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label className="sr-only" htmlFor="name">Name</label>
                            <input
                                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                placeholder="Name"
                                {...register('name')}
                            />
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <label className="sr-only" htmlFor="email">Giá</label>
                                <input
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Price"
                                    {...register('price')}
                                />
                            </div>

                            <div>
                                <label className="sr-only" htmlFor="phone">Original Price</label>
                                <input
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Original price"
                                    {...register('original_price')}
                                />
                            </div>
                        </div>

                        <div>
                            <label className="sr-only" htmlFor="name">Images</label>
                            <input
                                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                placeholder="Name"
                                type="file"
                                {...register('images')}
                            />
                        </div>

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
                            <label className="sr-only" htmlFor="message">Message</label>

                            <textarea
                                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                placeholder="Message"

                                id="message"
                            ></textarea>
                        </div>

                        <div className="mt-4">
                            <button
                                type="submit"
                                className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                            >
                                Thêm mới
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>


}

export default AddProduct


// 1. Xây dựng giao diện form
// 2. Cần import thư viện quản lý form
// 3. Khai bao cac truong du lieu trong form va validate form
// 4. Su dung resolver de tich hop yup va react-hook-form

