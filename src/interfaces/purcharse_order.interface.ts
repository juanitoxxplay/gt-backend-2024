export interface PurcharseOrderInterface {
    id?: number;
    orderNumber: string; 
    supplierName: string; 
    totalAmount: number; 
    status?: boolean; 
    createdAt: Date; 
    updatedAt: Date; 
    deletedAt?: Date; 
}