export interface DetailsPurcharseOrderInterface {
    id?: number;
    id_order: number;
    id_product: number;
    unit_price: number;
    quantity: number;
    status?: boolean;
    deletedAt?: Date;
    createdAt?: Date;
    updatedAt?: Date;
}
