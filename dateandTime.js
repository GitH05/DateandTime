// const DT= new Date();
// console.log(DT)

// const date = new Date();    //initialize daten

// const year=date.getFullYear();
// const month=date.getMonth();
// const day=date.getDay();
// const hours=date.getHours();
// const minutes=date.getMinutes();
// const seconds=date.getSeconds();
// const milliseconds=date.getMilliseconds();
// console.log([`Year:${year},Month:${month},Day:${day},Hour:${hours},Minute${minutes},
// Second:${seconds},Millisecond:${milliseconds}`])

//set date as per the required[either previous or next]
const date=new Date();
date.setDate(date.getDate() - 1);
console.log(date.toDateString())

//setInterval(): this function execute a code under a particular interval of time.
function A()
{
    console.log("execute in every two second.");
}
// setInterval((A),2000)

//setTimeout(): this specified a time for execution,execute only once
setTimeout((A),300)

//Stop the setinterval we use the setTimeout:
setTimeout(function()
{
    clearInterval(A)
    console.log("Interval stop ")
},1000)