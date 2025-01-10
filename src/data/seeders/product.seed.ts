import { ProductInterface } from "../../interfaces";

const productSeeds: Partial<ProductInterface>[] = [
  {
       id:1,
       name:"DATA de Tainy",
       unit_price:100 ,
       category_id:3, 
       cost_price: 10.10,
       sales_price: 20.20,
       id_unitMeasurement: 1,
  },
];

export{
    productSeeds
}