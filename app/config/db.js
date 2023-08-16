import { Sequelize } from "sequelize";

const sequelize = new Sequelize('red_social', 'root', 'toor', {
    host: 'localhost',
    dialect: 'mysql',
})

export default sequelize