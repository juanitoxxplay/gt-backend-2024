import { DataTypes } from "sequelize";
const BookingModel ={
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    state : {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },

    createdAt: {
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
export {BookingModel};