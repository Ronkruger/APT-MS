import express from "express";
import dotenv from 'dotenv'
dotenv.config();
import connectDB from './config/db.js'
import { notfound, errorHandler } from "./middleware/errorMiddleware.js";
import tenantRoutes from './routes/tenantRoutes.js'
const port = process.env.PORT;

connectDB(); //Connect to mongoDB

const app = express();

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.use('/api/tenants', tenantRoutes);

//error handler
app.use(notfound);
app.use(errorHandler);


app.listen(port, () => console.log(`Server is running on port ${port}`));