import app from "./server";
import "reflect-metadata";
import "dotenv/config";
import { AppDataSource } from "./config/data-source";
import { preLoadCategory } from "./helpers/preLoadCategory";
const port = process.env.PORT

AppDataSource.initialize()
    .then(async () => {
        await preLoadCategory();
        app.listen(port, () => {
            console.log(`Listening on port ${port}`);
        })
    })
    .catch((error) => console.log(error))