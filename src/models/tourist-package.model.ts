import { DataTypes } from "sequelize";
const TouristPackageModel = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    
};
export { TouristPackageModel };