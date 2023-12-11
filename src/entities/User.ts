import { differenceInYears } from "date-fns"


interface User {
    id: number
    name: string
    email: string
    password: string
    dateOfBirth: Date
    gender: string
    height: number
    weight: number
    modalites: string
    isAdmin: boolean
}


export default class UserEntity implements User {
    id: number
    name: string
    email: string
    password: string
    dateOfBirth: Date
    age: number
    gender: string
    height: number
    weight: number
    modalites: string
    isAdmin: boolean
    dateCreated: Date

    constructor(user: User) {
        this.id = user.id
        this.name = user.name
        this.email = user.email
        this.password = user.password
        this.dateOfBirth = user.dateOfBirth
        this.age = differenceInYears(new Date(), user.dateOfBirth)
        this.gender = user.gender
        this.height = user.height
        this.weight = user.weight
        this.modalites = user.modalites
        this.isAdmin = user.isAdmin
        this.dateCreated = new Date()
    }
}