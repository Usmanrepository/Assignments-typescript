console.log("well come to the Usman's Happiness Calculator");
import inquirer from "inquirer";
//  const answer = await inquirer.prompt([
//     {
//         type: 'input',
//         name: 'num1',
//         message: 'Enter first digit'
//     }
//     ,
//     {
//         type: 'input',
//         name: 'num2',
//         message : 'Enter Second Digit'
//     }
//  ])
// let number1 = '';
// let number2 = '';
// console.log('message')
//  if(number1+number2)
//  {
//     console.log("sum of" + 'number')
//  }
//  else
//  {
//     console.log("Please Enter Digits Only")
//  }
// import * as inquirer from 'inquirer';
// async function getNumbersAndAdd() {
//   const questions = [
//     {
//       type: 'input',
//       name: 'firstNumber',
//       message: 'Enter the first number:',
//       validate: (input:any) => {
//         if (!isNaN(parseFloat(input))) {
//           return true;
//         }
//         return 'Please enter a valid number.';
//       }
//     },
//     {
//       type: 'input',
//       name: 'secondNumber',
//       message: 'Enter the second number:',
//       validate: (input:any) => {
//         if (!isNaN(parseFloat(input))) {
//           return true;
//         }
//         return 'Please enter a valid number.';
//       }
//     }
//   ];
//   const answers = await inquirer.prompt(questions);
//   const num1 = parseFloat(answers.firstNumber);
//   const num2 = parseFloat(answers.secondNumber);
//   if (!isNaN(num1) && !isNaN(num2)) {
//     console.log(`The sum of ${num1} and ${num2} is ${num1 + num2}`);
//   } else {
//     console.log('Invalid input. Please enter two numbers.');
//   }
// }
// getNumbersAndAdd();
// import * as inquirer from 'inquirer';
async function performCalculation() {
    const questions = [
        {
            type: 'input',
            name: 'firstNumber',
            message: 'Enter the first Digit:',
            validate: (input) => !isNaN(parseFloat(input)) || 'wrong Entry : Please enter a valid number.'
        },
        {
            type: 'input',
            name: 'secondNumber',
            message: 'Enter the second Digit:',
            validate: (input) => !isNaN(parseFloat(input)) || 'wrong Entry : Please enter a valid number.'
        },
        {
            type: 'list',
            name: 'operation',
            message: 'Choose the operation from the list below : You want to Perform:',
            choices: ['+', '-', '*', '/'],
            filter: (val) => val.toLowerCase()
        }
    ];
    const answers = await inquirer.prompt(questions);
    const num1 = parseFloat(answers.firstNumber);
    const num2 = parseFloat(answers.secondNumber);
    const operation = answers.operation;
    let result;
    if (operation === '+') {
        result = num1 + num2;
    }
    else if (operation === '-') {
        result = num1 - num2;
    }
    else if (operation === '*') {
        result = num1 * num2;
    }
    else if (operation === '/') {
        if (num2 !== 0) {
            result = num1 / num2;
        }
        else {
            console.log('Cannot divide by zero.');
            return;
        }
    }
    console.log(`The result is: ${result}`);
}
performCalculation();
