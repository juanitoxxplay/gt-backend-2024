import { DataTypes } from "sequelize";
const UserClientModel = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
user_id:{
    type: DataTypes.INTEGER,
    allowNull: false,
},
client_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
},
deletedAt: {
    type: DataTypes.DATE,
  },

    }; export { UserClientModel };
    
