import express from "express";
import router  from "./routes";
import morgan from "morgan"
import cors from "cors"
import fileUpload from "express-fileupload"
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use(fileUpload({useTempFiles: true, tempFileDir: '/tmp/', createParentPath: true}));
app.use(router);


export default app