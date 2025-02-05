import { DataTypes } from "sequelize";
const BookingRestaurantModel = {
    id_reservation: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    id_restaurant: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    id_booking: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    reservation_rate: {
        type: DataTypes.DECIMAL,
        allowNull: false,   
    },
    reservation_date:  {
    type: DataTypes.DATE,
    allowNull: false, 
    },
    reservation_time: {
        type: DataTypes.TIME,
        allowNull: false,
    } ,
    state: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },

    
} 
export {BookingRestaurantModel};


    
    
