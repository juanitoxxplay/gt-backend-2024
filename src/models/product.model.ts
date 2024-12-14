import { DataTypes } from "sequelize";
const ProductModel = {
    id_product: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    unit_price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "category",
            key: "id_category",
        },
    },

    cost_price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },

    sales_price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },

    unit_measure:{
        type: DataTypes.STRING(50),
        allowNull: false,
    },

};    
    export {ProductModel}; 