interface cities{
    nameOfcity:string;
    country:string
    visitCost:number
}
let kolampur:cities={
    nameOfcity:"Kolampur",
    country:"Malasiya",
    visitCost:100,
}
let tokyo:cities={
    nameOfcity:"Tokyo",
    country:"America",
    visitCost:200,
}
let abuDhabi:cities={
    nameOfcity:"Abu Dhabi",
    country:"UAE",
    visitCost:150.
}
var city:cities[]=[kolampur,tokyo,abuDhabi];
console.log("list of cities");
console.log(city);
