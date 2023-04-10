import instance from ".";
import { AddProductForm, IProduct, UpdateProductForm } from "../models";

export const getAll = () => {
    const uri = "/products"
    return instance.get(uri)
}

export const getById = (id: string) => {
    const uri = "/products/" + id
    return instance.get(uri)
}

export const create = (data: AddProductForm) => {
    const uri = "/products"
    return instance.post(uri, data)
}

export const update = (id: string, body: UpdateProductForm) => {
    const uri = "/products/" + id
    return instance.put(uri, body)
}