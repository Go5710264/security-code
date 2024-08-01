import { IEmployeeItem } from "./EmployeeItem/EmployeeItem.props";

interface IEmployee extends IEmployeeItem {
    about: string;
    address: string;
    balance: string;
    company: string;
    email: string;
    age: number
    readonly gender: string;
    index: number
    phone: string;
    registered: string;
    tags: string[]; 
    readonly _id: string;
}

export interface IEmployees{
    employees:{
        default: IEmployee[]
    }
}