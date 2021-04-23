// Your code here
function saturdayFun(fun = "roller-skate") {
    return "This Saturday, I want to " + fun + "!"
}

function mondayWork(work = "go to the office") {
    return "This Monday, I will " + work + "."
}

function wrapAdjective(flair = "*") {
    return function(innervar = "special") {
        return "You are " + flair + innervar + flair + "!"
    }
}

let Calculator = {
    add: function add(num1,num2) {return num1 + num2},
    subtract: function subtract(num1,num2) {return num1 - num2},
    multiply: function multiply(num1,num2) {return num1 * num2},
    divide: function divide(num1,num2) {return num1 / num2}
}

function actionApplyer(start, funcArrays) {
    let solution = start
    if (funcArrays.length > 0) {
        funcArrays.forEach(element => {
            solution = element(solution)
        })
    }
    return solution
}

