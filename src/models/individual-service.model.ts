import { DataTypes } from "sequelize";

const IndividualServicesModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {  
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  hotelId: {
    type: DataTypes.INTEGER,
    references: {
      model: "hotels",
      key: "id",
    },
    allowNull: true,
  },
  transport_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "transports",
      key: "id",
    },
    allowNull: true,
  },
  attraction_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "attractions", 
      key: "id",
    },
    allowNull: true,
  },
  deleted_at: {
    type: DataTypes.DATE,
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
};

export { IndividualServicesModel };

