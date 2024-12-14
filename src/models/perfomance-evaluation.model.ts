import { DataTypes } from "sequelize"; 

const PerformanceEvaluationsModel =
 {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  employee_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'employees',
      key: 'id_employee',
    },
    allowNull: false,
  },
  evaluation_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  evaluation: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  comments: {
    type: DataTypes.TEXT,
  },
  supervisor_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'supervisors',
      key: 'id_supervisor',
    },
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

export { PerformanceEvaluationsModel };
 
