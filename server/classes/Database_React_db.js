// Import Sequelize
import Sequelize from "sequelize";
import InitSchema from "../models/schema_React_db";
import UserModel from "../models/React_db/UserModel";

// Logging
import Logger from "./Logger";
// Properties
import properties from "../properties.js";

class Database {
  constructor() {}

  /**
   * Init database
   */
  async init() {
    await this.authenticate();
    Logger.info(
      "Database connected at: " +
        properties.React_db.host +
        ":" +
        properties.React_db.port +
        "//" +
        properties.React_db.user +
        "@" +
        properties.React_db.name
    );

    // Import schema
    InitSchema();

    await UserModel.createAdminUser();

  }

  /**
   * Start database connection
   */
  async authenticate() {
    Logger.info("Authenticating to the databases...");

    const sequelize = new Sequelize(
      properties.React_db.name,
      properties.React_db.user,
      properties.React_db.password,
      {
        host: properties.React_db.host,
        dialect: properties.React_db.dialect,
        port: properties.React_db.port,
        logging: false
      }
    );
    this.dbConnection_React_db = sequelize;

    try {
      await sequelize.sync();
    } catch (err) {
      // Catch error here
      Logger.error(`Failed connection to the DB`);
      Logger.error(err);
      await new Promise(resolve => setTimeout(resolve, 5000));
      await this.authenticate();
    }
  }

  /**
   * Get connection db
   */
  getConnection() {
    return this.dbConnection_React_db;
  }
}

export default new Database();
