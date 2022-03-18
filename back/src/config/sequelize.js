import Sequilize from "sequelize";
import Enviroment from "./config.js";

const { POSTGRES_DATABASE, POSTGRES_PASSWORD,POSTGRES_HOST, POSTGRES_PORT, POSTGRES_USER } = Enviroment;

const config = {
    // Conexión
    host:POSTGRES_HOST || "localhost",
    dialect: "postgres",
    // Configurar Seeds
    seederStorage: "sequelize",
    //seederStoragePath: "sequelizeSeeds.json",
    seederStorageTableName: "seeds",
  
    // Configurar Migraciones
    migrationStorage: "sequelize",
    migrationStorageTableName: "migrations",
    
    define: {
      // Genera claves foraneas de este tipo user_id en vez de userId
      underscored: true
    },
    logging: false,
    pool: {
      max: 5,
      min: 0,
      idle: 1000
    }
}

const sequelize = new Sequilize(POSTGRES_DATABASE, POSTGRES_USER, POSTGRES_PASSWORD ,config);

export default sequelize;