import csvParser from "csv-parser";
import fs from "fs";
import express from "express";
import cors from "cors"

const app = express();
app.use(cors());

const port = 3000;


app.get("/", (_, res) => {
    const result = [];

fs.createReadStream("./WhatsgoodlyData-10.csv")
    .pipe(csvParser())
    .on("data", (data) => {
     result.push(data);
    })
    .on("end", () => {
        res.send(result)
    });

})

app.listen(port, () => {
    console.log()
  })