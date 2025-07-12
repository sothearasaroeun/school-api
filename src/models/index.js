import { Sequelize } from 'sequelize';
import dbConfig from '../config/db.config.js';
import StudentModel from './student.model.js';
import CourseModel from './course.model.js';
import TeacherModel from './teacher.model.js';
import AuthModel from './auth.model.js';

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port: dbConfig.PORT,
  dialect: dbConfig.dialect,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Fix: Rename Auth to User for consistency
db.User = AuthModel(sequelize, Sequelize);
db.Student = StudentModel(sequelize, Sequelize);
db.Course = CourseModel(sequelize, Sequelize);
db.Teacher = TeacherModel(sequelize, Sequelize);

// Associations
db.Teacher.hasMany(db.Course);
db.Course.belongsTo(db.Teacher);
db.Course.belongsToMany(db.Student, { through: 'CourseStudent' });
db.Student.belongsToMany(db.Course, { through: 'CourseStudent' });

export const syncDb = async () => {
  await sequelize.sync({ alter: true }); // only for development
};

export default db;
