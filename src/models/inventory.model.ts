import { DataTypes } from "sequelize";

const InventoryModel = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    id_departament: {
        type: DataTypes.INTEGER,
    },
    location: {
        type: DataTypes.STRING(300),
        allowNull: false,
    },
    id_product: {
        type: DataTypes.INTEGER,
    },
    quantity_in:{
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    current_quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    note:{
        type: DataTypes.TEXT,
        allowNull: true
    },
    deletedAt: {
        type: DataTypes.DATE,
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
};

export { InventoryModel };