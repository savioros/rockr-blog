import { Api } from "../../services/api"

export async function request(typeRequest: string, email: string, password: string){
    try {
        const request = await Api.post(typeRequest, {email, password})

        return request.data
    } catch (error) {
        return null
    }
}