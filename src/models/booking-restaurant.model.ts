import { DataTypes } from "sequelize";
const BookingRestaurantModel = {
    id_reservation: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        references : {
            model: "reservations",
            key: "id_reservation",
        }
    },
    id_restaurant: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "restaurants",
            key: "id_restaurant",
        },
    },
    Reservation_rate: {
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


    
    
