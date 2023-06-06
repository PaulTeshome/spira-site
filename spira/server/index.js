import express, { json } from "express";
import serviceRoutes from "./routes/services.js";
import generalRoutes from "./routes/general.js";
import projectRoutes from "./routes/projects.js";
import teamRoutes from "./routes/team.js";
import testimonialRoutes from "./routes/testimonials.js"; 
import hireRoutes from "./routes/hire.js";
import resetPasswordRoutes from "./routes/reset.js";

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
app.use('/api/team', teamRoutes)
app.use('/api/testimonials', testimonialRoutes)
app.use('/api/hire', hireRoutes)
app.use('/api/reset-password', resetPasswordRoutes)


app.get('/', (req, res) => {
    res.json("success");
})


app.listen(8800, () => {
    console.log("Server running on port 8800...")
})