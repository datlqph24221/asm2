import { Link } from "react-router-dom"
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { signup } from "../../../api/auth"
import { SignUpForm, SignUpSchema } from "../../../models"
import * as Yup from 'yup'



const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<SignUpForm>({
        resolver: yupResolver(SignUpSchema)
    })

    const navigate = useNavigate()

    const onSubmit = async (data: SignUpForm) => {
        try {
            const response = await signup(data)
            console.log(response);

            navigate('/signin')

        } catch (error) {
            console.log(error);

        }

    }

    return <section className="relative flex flex-wrap lg:h-screen lg:items-center">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-lg text-center">
                <h1 className="text-2xl font-bold sm:text-3xl">Đăng ký</h1>
            </div>

            <form action="#" className="mt-8 grid grid-cols-6 gap-6" onSubmit={handleSubmit(onSubmit)}>
                <div className="col-span-6 sm:col-span-3">
                    <label
                        htmlFor="FirstName"
                        className="block text-sm font-medium text-gray-700"
                    >
                        First Name
                    </label>

                    <input
                        {...register('firstName')}
                        className="mt-1 w-full h-10 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                    <p className="text-red-600 text-[15px]">
                        {errors.firstName && errors.firstName.message}
                    </p>
                </div>

                <div className="col-span-6 sm:col-span-3">
                    <label
                        htmlFor="LastName"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Last Name
                    </label>

                    <input
                        {...register('lastName')}
                        className="mt-1 w-full h-10 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                    <p className="text-red-600 text-[15px]">
                        {errors.lastName && errors.lastName.message}
                    </p>
                </div>

                <div className="col-span-6">
                    <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>

                    <input
                        {...register('email')}
                        className="mt-1 w-full h-10 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                    <p className="text-red-600 text-[15px]">
                        {errors.email && errors.email.message}
                    </p>
                </div>

                <div className="col-span-6 sm:col-span-3">
                    <label
                        htmlFor="Password"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Password
                    </label>

                    <input
                        type="password"
                        {...register('password')}
                        className="mt-1 w-full h-10 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                    <p className="text-red-600 text-[15px]">
                        {errors.password && errors.password.message}
                    </p>
                </div>

                <div className="col-span-6 sm:col-span-3">
                    <label
                        htmlFor="PasswordConfirmation"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Password Confirmation
                    </label>

                    <input
                        type="password"
                        {...register('re_password')}
                        className="mt-1 w-full h-10 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                    <p className="text-red-600 text-[15px]">
                        {errors.re_password && errors.re_password.message}
                    </p>
                </div>


                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                    <button
                        className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                    >
                        Create an account
                    </button>

                    <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                        Already have an account?
                        <Link to="/signin" className="text-gray-700 underline">Log in</Link>.
                    </p>
                </div>
            </form>
        </div>

        <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
            <img
                alt="Welcome"
                src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                className="absolute inset-0 h-full w-full object-cover"
            />
        </div>
    </section>

}

export default SignUp


// 1. Xây dựng giao diện form
// 2. Cần import thư viện quản lý form
// 3. Khai bao cac truong du lieu trong form va validate form
// 4. Su dung resolver de tich hop yup va react-hook-form

