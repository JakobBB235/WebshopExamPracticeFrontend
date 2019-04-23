import { Item } from "./item";

// This user matches the DTO from the backend
export class User {
    userId: number;
    username: string;
    password: string;
    email: string;
    role: string;
    enabled: boolean;
    lastLogin: Date;
    confirmedEmail: boolean;
    phoneNumber: number;
    address: string;
    firstName: string;
    lastName: string;
    postalCode: number;
    city: string;
    country: string;
    gender: string;
}