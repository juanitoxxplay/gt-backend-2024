import { DataTypes } from "sequelize";

const EventRegistrationModel = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      id_event: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      id_client: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      registrationDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      unitPrice: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
};

export { EventRegistrationModel };
