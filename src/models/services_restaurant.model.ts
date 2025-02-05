import { DataTypes } from "sequelize";

const ServiceRestaurantModel = {
  restaurant_id: {
    type: DataTypes.INTEGER,
    },
  service_id:{
    type: DataTypes.INTEGER,
  },
  
};

export { ServiceRestaurantModel };
