import { DataTypes } from "sequelize";

const UserModel = {
  id_user: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  user: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
      notEmpty: true,
    },
  },
  password: {
    type: DataTypes.STRING(400),
  },

  
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
   
  createdAt: {
  type: DataTypes.DATE,
},

deletedAt: {
  type: DataTypes.DATE,
},
};

export { UserModel };
