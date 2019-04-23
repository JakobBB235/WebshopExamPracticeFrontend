// This item matches the DTO from the backend
export class Item {
    itemId: number;
    name: string;
    inStock: number;  
    description: string;
    isActive: boolean;
    category: string;
    price: number;
    dateTimeCreated: Date;
    dateTimeEdited: Date;
    expirationDate: Date;

    //Relation to user
    // user: User;
    userId: number;
}