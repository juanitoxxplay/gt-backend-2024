import { DataTypes } from "sequelize";
const ContractModel = {
    id_contract: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    id_employee: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    start_date: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            isDate: true,
            notEmpty: true,
        },
    },
    salary:{
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    position_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "position",
            key: "id_position",
        },
    },

    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },

    department_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "department",
            key: "id_department",
        },
    },

    working_hours: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isNumeric: true,
            notEmpty: true,
        },
    },
    numbers_work_days: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isNumeric: true,
            notEmpty: true,
        },
    },
    final_date: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            isDate: true,
            notEmpty: true,
        },
    },

      };
      export {ContractModel};