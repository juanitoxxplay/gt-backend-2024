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
    references: {
      model: 'attraction_id', 
      key: 'id',
    },
  },
  contract_Id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    references: {
      model: 'contracts',  
      key: 'id_contract',
    },
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
