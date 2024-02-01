// code your solution here
function saturdayFun(doSomething = "roller-skate") {
    return `This Saturday, I want to ${doSomething}!`
}
saturdayFun()
saturdayFun("bath my dog!")

function mondayWork(job = "go to the office"){
    return `This Monday, I will ${job}.`
}
mondayWork()
mondayWork("work from home.")


let wrapAdjective = function(special = "*") {
    return function(adjective = "a hard worker") {
        return `You are ${special}${adjective}${special}!`
    }   
}
wrapAdjective()
wrapAdjective("||")("a dedicated programmer")