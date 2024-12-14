import { DataTypes } from "sequelize";

const SupplierModel = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING(300),
        allowNull: true,
    },
    product_description: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    state: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
};

export { SupplierModel };
