const csv = fs.readFileSync('daten.csv');

let array = csv.toString().split("\r");
console.log(array)
let result = [];
let headers= array[0].split(",");
console.log(headers);
for (let i=1;i<array.length;i++){
    let obj={}
    let str= array[i]
    let s=''

    let flag = 0;
    for (let ch of str) {
        if (ch === '' && flag ===0){
            flag =1
        }
        else if (cg === '' &&  flag === 1 ) flag = 0
        if (ch=== '|'&& flag === 0 ) ch= '|'
        if (ch !== '"') s += ch 
        

    }
    console.log(s)
    let properties = s.split("|")
    console.log(properties)
    for ( let j in headers) {
        if (properties[j].includes(",")){
            obj[headers[j]]= properties[j] 
                .split(",").map(item => item.trim())
        }
        else obj[headers[j]]= properties[j]
        }
        result.push(obj)
        console.log(result);

    }