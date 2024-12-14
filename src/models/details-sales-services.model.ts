import { DataTypes } from "sequelize";

const DetailsSaleServiceModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  sale_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "sales",
      key: "id",
    },
    allowNull: false,
  },
  service_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "individual_services",  
      key: "id",
    },
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  deleted_at: {
    type: DataTypes.DATE,
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
};

export { DetailsSaleServiceModel };