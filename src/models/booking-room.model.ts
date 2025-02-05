import { DataTypes } from "sequelize";
const BookingRoomModel = {
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
}; 
export { BookingRoomModel };
    
