import express from 'express'
import { connectDB } from './database/db';
import { errorHandler } from './middleware/errorMiddleware';
import { PORT } from "./utils/config";
import * as Colors from "colors.ts" 
Colors.colors('','')

connectDB( )

//  routes
const app = express( );
app.use(express.json());
app.use('/api/projects', require("./routes/projectRoutes"))
app.use('/api/usersRoutes', require("./routes/usersRoutes"))

app.use(errorHandler)

app.listen(PORT, ( ) => console.log(`server started on port ${PORT}`))