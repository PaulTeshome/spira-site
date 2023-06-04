import express, { json } from "express";
import serviceRoutes from "./routes/services.js";
import generalRoutes from "./routes/general.js";
import projectRoutes from "./routes/projects.js";

import cors from "cors";

const app= express();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));


app.use('/api/services', serviceRoutes)
app.use('/api/general', generalRoutes)
app.use('/api/projects', projectRoutes)


app.get('/', (req, res) => {
    res.json("success");
})


app.listen(8800, () => {
    console.log("Server running on port 8800...")
})