//const neatCsv= require('neat-csv');
//const csv = require ('node-csv');

/*const result= [];
fs.createReadStream('./daten.csv')
.pipe(csvParaser())
.on("data", (data) => {
    result.push(data);
})
.on("end", () => {
    console.log(result);
})*/


import fs from 'fs';
const daten= fs.readFileSync('./daten.csv')
   


    let toJSON = csv => {
        const lines = csv.toString().split('\n')
        const result =[];
        const headers = lines[0].split(',')

        lines.map(l => {
            const obj = {}
            const line = l.split(',')
            headers.map(h, i => {
                obj[h]= line[i]
        })
        result.push(obj)
        console.log(result);

            
        })
        return JSON.stringify(result);
    }
    const data = toJSON(daten);
    console.log(data);
    // let json = JSON.stringify(toJSON);
    // fs.writeFileSync('./output.json', json)