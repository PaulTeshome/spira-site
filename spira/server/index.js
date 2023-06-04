import express, { json } from "express";
import {db} from './db.js'

import cors from "cors";

const app= express();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

app.get('/', (req, res) => {
    res.json("success");
})

app.get('/getServices', (req, res) => {
    const q= "select * from services"

    db.query(q, (err,data) => {

        if (err) {
            res.json(err)
        }else {
            res.json(data)
        }
    });
})

app.get('/getMotto', (req, res) => {
    const q= "select comp_motto,comp_mission from main_data where data_id=1"

    db.query(q, (err,data) => {

        if (err) {
            res.json(err)
        }else {
            res.json(data)
        }
    });
})

app.get('/getProjects', (req, res) => {
    const q= "select * from projects"

    db.query(q, (err,data) => {

        if (err) {
            res.json(err)
        }else {
            res.json(data)
        }
    });
})

app.get('/getFooter', (req, res) => {
    const q= "select * from main_data where data_id=1"

    db.query(q, (err,data) => {

        if (err) {
            res.json(err)
        }else {
            res.json(data)
        }
    });
})

app.listen(8800, () => {
    console.log("Server running on port 8800...")
})