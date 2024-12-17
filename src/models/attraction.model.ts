import { DataTypes } from "sequelize";
const AttractionModel = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
    },
    capacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    theme: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },

    createAt: {
        type: DataTypes.DATE,

    },

    deletedAt: {
        type: DataTypes.DATE,
    },

    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
    
}; 
export {AttractionModel};
