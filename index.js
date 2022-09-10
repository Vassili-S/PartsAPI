import express from 'express';
import fs from 'fs';

const app = express();
var data = fs.readFileSync('LE.txt', 'utf-8').split("\n").slice(0,10)
var resData = []
for(var i in data){
    var line = data[i].split("\t")
    for(var j in line){
        line[j] = line[j].replaceAll("\"", "")
    }
    resData.push({
        "id": line[0].toString().toLowerCase(),
        "name": line[1].toString(),
        "tallinn": (line[2]),
        "tartu": (line[3]),
        "parnu": (line[4]),
        "rakvere": (line[5]),
        "kunda": (line[6]),
        "sus1": (line[7].replace(",", ".")),
        "sus2": (line[8].replace(",", ".")),
        "mark": line[9],
        "price": (line[10].replace(",", "."))
    })
}

function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property].toString().toLowerCase() < b[property].toString().toLowerCase()) ? -1 : (a[property].toString().toLowerCase() > b[property].toString().toLowerCase()) ? 1 : 0;
        return result * sortOrder;
    }
}


console.log(resData)

app.get('/parts', (req, res) => {
    let send = [...resData]
    console.log(req.query)
    if(req.query.filterName){
        var filter = req.query.filterName
        send = send.filter(obj => obj.name.toLowerCase().includes(filter))
    }
    if(req.query.filterId){
        var filter = req.query.filterId
        send = send.filter(obj => obj.id.toLowerCase().includes(filter))
    } 
    if (req.query.sortName == "asc") {
        console.log("retard")
        send = send.sort(dynamicSort("name"))
    } 
    if(req.query.sortId == "asc"){
        send = send.sort(dynamicSort("id"))
    }
    if (req.query.sortName == "desc") {
        console.log("retard")
        send = send.sort(dynamicSort("-name"))
    } 
    if(req.query.sortId == "desc"){
        send = send.sort(dynamicSort("-id"))
    }
    return res.json(send)
});


app.listen("3030", () => {
    console.log("Example app listening on port 3030}")
})




