import { DataTypes } from "sequelize";
const BookingRoomModel = {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    id_room: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    id_booking: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
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
export { BookingRoomModel };
    
