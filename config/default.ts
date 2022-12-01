import { config } from "dotenv";

config();

export default {
    NODE_ENV: "development",
    PORT: 3001,
    MONGODB_CONTAINER_NAME: "mongo",
    MONGODB_USERNAME: "admin",
    MONGODB_PASSWORD: "admin",
    MONGODB_AUTH_DATABASE_NAME: "admin",
    MONGODB_DATABASE_NAME: "test",
    MONGODB_HOST: "localhost",
    MONGODB_PORT: 27017,
    ...process.env
};
