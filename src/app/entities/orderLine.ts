import { Item } from "./item";
import { Order } from "./order";

//Should we use DTOs?
//Why is orderline saved when added to cart?
//Orderline is saved to check item stock price etc??
export class OrderLine {
    id: number;
    addedToCart: Date;
    price: number;
    refunded: boolean;
    refundedAt: Date;

    //Relation to Item
    // item: Item;
    // itemId: number;

    //Relation to Order
    // order: Order;
    // orderId: number;
}