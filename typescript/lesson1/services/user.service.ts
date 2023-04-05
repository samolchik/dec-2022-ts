import axios, {AxiosResponse} from "axios";
import {IUser} from "../interfaces/user.interface";

type IRes<T> = Promise<AxiosResponse<T>>  // створюємо свій тип
export const UserService = {
    getAll: (): IRes<IUser[]> => axios('https://jsonplaceholder.typicode.com/users'),
    getByAd: (id: number): IRes<IUser>  => axios('https://jsonplaceholder.typicode.com/users/'+id)
}