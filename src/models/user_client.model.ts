import { DataTypes } from "sequelize";
const UserClientModel = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
id_user:{
    type: DataTypes.INTEGER,
    allowNull: false,
},
id_client: {
    type: DataTypes.INTEGER,
    allowNull: false,
},
deletedAt: {
    type: DataTypes.DATE,
  },

    }; export { UserClientModel };
    
