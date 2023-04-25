
import fs from 'fs';
//import replaceall from 'replaceall'
function csvToJSON(csv){
    const lines=csv.toString().split("\n");
    //lines.replaceAll("|", ",");
    //lines.split("|").join(",");
    //replaceall("|", ",", lines)
    // lines.replace(/|/g,",");
    console.log(lines);
    const result=[];
    const headers =lines[0].toString().split(",");

    for ( let i= 1; i<lines.length;i++){
        let obj={};
        let currentline= lines[i].toString().split(",");
        for (let j=0; j < headers.length;j++){
            obj[headers[j]]= currentline[j];
        }
        result.push(obj);
    }
    return JSON.stringify(result);

}

let daten= fs.readFileSync('./daten.csv')
let data = daten.toString().replaceAll("|",",")
 let json = csvToJSON(data);
 console.log(json);
//  console.log(json.replaceAll("|",","));
//  let json_2 = json.replaceAll("|",",")
 fs.writeFileSync('./output.json', json)

 let jsonData= fs.readFileSync("./output.json")
let parseData=JSON.parse(jsonData)
 if (parseData.Rolle === "1"){
    console.log(jsonData.replace("1","Auftraggeber"))
 }
 



