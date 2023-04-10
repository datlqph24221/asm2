// import { Link } from "react-router-dom"
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { signin } from "../../../api/auth"
import * as Yup from 'yup'
import { SignInForm, SignInSchema } from "../../../models"
import { useLocalStorage } from '../../../hooks'
import { Link, useNavigate } from 'react-router-dom'



const SignIn = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<SignInForm>({
        resolver: yupResolver(SignInSchema)
    })

    const navigate = useNavigate()

    const [user, setUser] = useLocalStorage("user", null)

    const onSubmit = async (data: SignInForm) => {
        try {
            const { data: { accessToken, user } } = await signin(data)
            // console.log(response);
            setUser({
                accessToken, ...user
            })
            navigate("/")

            if (user.role == "admin") {
                navigate('/admin')
            } else if (user.role == "member") {
                navigate('/')
            }

        } catch (error) {
            console.log(error);

        }

    }

    return <section className="relative flex flex-wrap lg:h-screen lg:items-center">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-lg text-center">
                <h1 className="text-2xl font-bold sm:text-3xl">Đăng nhập</h1>
            </div>

            <form action="#" className="mt-8 " onSubmit={handleSubmit(onSubmit)}>
                <div className="col-span-6 sm:col-span-3 pl-44">
                    <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>

                    <input
                        {...register('email')}
                        className="mt-1 w-[500px] h-10 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                    <p className="text-red-600 text-[15px]">
                        {errors.email && errors.email.message}
                    </p>
                </div>

                <div className="col-span-6 sm:col-span-3 pl-44 pt-5">
                    <label
                        htmlFor="Password"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Password
                    </label>

                    <input
                        type="password"
                        {...register('password')}
                        className="mt-1 w-[500px] h-10 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                    <p className="text-red-600 text-[15px]">
                        {errors.password && errors.password.message}
                    </p>
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4 pl-44 pt-5">
                    <button
                        className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                    >
                        Đăng nhập
                    </button>
                    <Link to="/signup">Đăng ký</Link>
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

export default SignIn