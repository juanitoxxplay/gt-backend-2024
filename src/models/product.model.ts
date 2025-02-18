import { DataTypes } from "sequelize";
const ProductModel = {
    id: {
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
    },

    cost_price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },

    sales_price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },

    id_unitMeasurement:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },

};    
    export {ProductModel}; 