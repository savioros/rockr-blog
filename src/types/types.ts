import { UseFormRegister } from "react-hook-form"

export interface IFormInputs {
    name?: string
    email?: string
    phone?: string
    title?: string
    author?: string
    imageUrl?: string
    article?: string
    message?: string
}

export interface IInputProps{
    labelName: string 
    name: string
    placeholder: string
    type?: string
    register: UseFormRegister<any>
    error?: string
    rows?: number
}