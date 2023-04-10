import * as Yup from 'yup'

export interface IProduct {
    [x: string]: any
    id: string,
    name: string,
    price: number,
    original_price: number,
    short_description: string,
    description: string,
    images: { base_url: string }[],
    brand: {
        id: number,
        name: string,
        slug: string
    },
    specifications: ISpecification[]
}

export interface IUser {
    _id?: number | string,
    firstName?: string,
    lastName?: string,
    email: string,
    password: string,
    re_password?: string,
    role?: string,
}

export interface ISpecification {
    name: string,
    attributes: {
        code: string,
        name: string,
        value: string
    }
}
export const AddProductSchema = Yup.object({
    name: Yup.string().required("Trường dữ liệu bắt buộc"),
    price: Yup.number().required("Trường dữ liệu bắt buộc"),
    original_price: Yup.number().required("Trường dữ liệu bắt buộc"),
    images: Yup.string(),
    description: Yup.string()
})
export type AddProductForm = Yup.InferType<typeof AddProductSchema>


export const SignUpSchema = Yup.object({
    firstName: Yup.string().required("Trường dữ liệu bắt buộc"),
    lastName: Yup.string().required("Trường dữ liệu bắt buộc"),
    email: Yup.string().email("Email sai định dạng").required("Trường dữ liệu bắt buộc"),
    password: Yup.string().min(6).required("Trường dữ liệu bắt buộc"),
    re_password: Yup.string().oneOf([Yup.ref('password')], "Mật khẩu không khớp"),
    role: Yup.string()
})

export type SignUpForm = Yup.InferType<typeof SignUpSchema>

export const SignInSchema = Yup.object({
    email: Yup.string().email("Email không định dạng").required("Trường dữ liệu bắt buộc"),
    password: Yup.string().min(6).required("Trường dữ liệu bắt buộc"),
    role: Yup.string()
})

export type SignInForm = Yup.InferType<typeof SignInSchema>


export const UpdateProductSchema = Yup.object({
    name: Yup.string().required("Trường dữ liệu bắt buộc"),
    price: Yup.number().required("Trường dữ liệu bắt buộc"),
    original_price: Yup.number().required("Trường dữ liệu bắt buộc"),
    description: Yup.string().min(10, "Tối thiểu 10 ký tự").required("Trường dữ liệu bắt buộc"),
})
export type UpdateProductForm = Yup.InferType<typeof UpdateProductSchema>