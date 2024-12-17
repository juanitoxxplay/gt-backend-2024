import { DataTypes } from "sequelize";
const BookingAttractionModel = {
    id_attraction: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    id_booking: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    
    date:{
        type: DataTypes.DATE,
        allowNull: false,

    },
};