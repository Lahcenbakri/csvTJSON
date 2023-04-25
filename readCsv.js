import neatCsv from 'neat-csv';
import csvParaser from 'csv-parser'
import fs from 'fs';
import csv  from 'node-csv';


//const fs= require ('fs');

const input = fs.readFile('./daten.csv', async (err,data)=> {
    if (err){
        console.error(err)
        return
    }
    console.log(await neatCsv(data));
});

module.exports= input;