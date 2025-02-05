export interface SettingsInterface{
    id?:number;
    name:string;
    formula:number;
    description:string;
    createdAt:Date;
    updatedAt:Date;
    deletedAt:Date;
    status?:boolean
}