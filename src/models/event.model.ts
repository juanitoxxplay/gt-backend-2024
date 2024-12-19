import { DataTypes } from "sequelize";

const EventsModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  date: {
    type: DataTypes.DATE,
  },
  attraction_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_supervisor: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  capacity: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  ticketPrice: {
    type: DataTypes.DECIMAL(10,2), 
    allowNull: false,
  },
};

export { EventsModel };
