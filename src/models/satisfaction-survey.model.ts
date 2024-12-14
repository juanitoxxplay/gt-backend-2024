import { DataTypes } from "sequelize";

const SatisfactionSurveysModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  client_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "clients",
      key: "id_client",
    },
  },
  attraction_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "attractions",
      key: "id",
    },
  },
  survey_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  comment: {
    type: DataTypes.TEXT,
  },
  evaluated_area: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

export { SatisfactionSurveysModel };
