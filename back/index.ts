import app from "./src/server";
import "reflect-metadata";
import "dotenv/config";
import { AppDataSource } from "./src/config/data-source";
const port = process.env.PORT

AppDataSource.initialize()
    .then(() => {
        app.listen(port, () => {
            console.log(`Listening on port ${port}`);
        })
    })
    .catch((error) => console.log(error))