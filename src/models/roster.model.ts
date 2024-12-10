import { DataTypes } from "sequelize";

const RosterModel = {
  id_roster: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  start_date: {
    type: DataTypes.DATE,
    allowNull: false,
    validate: {
      isDate: true,
      notEmpty: true,
    },
},
    finally_date: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          isDate: true,
          notEmpty: true,
        },
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }, 
  contract_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "contract",
      key: "id_contract",
    },
  }, 
};
export {RosterModel};