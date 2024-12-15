export interface ContractInterface{
    id_contract?:number;
    id_employee:number;
    start_date:Date;
    salary:number;
    position_id:number;
    department_id:number;
    working_hours:number;
    numbers_work_days:number;
    final_date:Date;
    status?:boolean;
    createdAt:Date;
    updatedAt:Date;
    deletedAt:Date;
}