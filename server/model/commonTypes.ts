import { Timestamp } from "firebase-admin/firestore"

export type Damage = {
    uuid: string,
    damage: string
}


export type Customers =  {
    uuid: string,
    customer_last_name: string,
    customer_first_name: string
    customer_patronim: string
    birthdate: Timestamp,
    email: string,
    phone: string


}

export type Employees =  {
    uuid: string,
    customer_last_name: string,
    customer_first_name: string
    customer_patronim: string
    login: string,
    password: string,
    


}