import instance from "."
import { SignInForm, SignUpForm } from "../models"

export const signup = (data: SignUpForm) => {
    const uri = "/signup"
    return instance.post(uri, data)
}

export const signin = (data: SignInForm) => {
    const uri = "/signin"
    return instance.post(uri, data)
}

