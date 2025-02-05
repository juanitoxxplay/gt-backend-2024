import { DataTypes } from "sequelize";

const BookingTransportationModel = {
    
    id_transport: {
        type: DataTypes.INTEGER,
        allowNull: false,
    
    },
    id_booking: {
        type: DataTypes.INTEGER,
        allowNull: false,
     
    },

    }; 
    export { BookingTransportationModel };