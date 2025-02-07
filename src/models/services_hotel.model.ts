import { DataTypes } from "sequelize";

const ServiceHotelModel = {
  hotel_id: {
    type: DataTypes.INTEGER,
    },
  service_id:{
    type: DataTypes.INTEGER,
  },
  
};

export { ServiceHotelModel };
