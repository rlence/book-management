const Enviroment = {
    PORT: process.env.PORT,
    ENVIROMENT: process.env.NODE_ENV,
    KEY_TOKEN: process.env.KEY_TOKEN,
    POSTGRES_USER: process.env.POSTGRES_USER,
    POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
    POSTGRES_PORT: process.env.POSTGRES_PORT,
    POSTGRES_DATABASE:  process.env.POSTGRES_DATABASE,
    POSTGRES_HOST: process.env.POSTGRES_HOST,
}

export default Enviroment;