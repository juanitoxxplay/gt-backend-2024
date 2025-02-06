export interface RequestTypeInterface{

    id?:number;
    name: string;
    bot: boolean;
    status?: boolean;
    createAt: Date;
    updateAt: Date;
    deleteAt: Date; 

}