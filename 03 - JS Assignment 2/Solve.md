1. Write code to display from 1 to 100 but just even numbers.

   ```
   function displayEvenNumbers() {
    for (let i = 2; i <= 100; i += 2) {
        console.log(i);
    }
   }
   displayEvenNumbers();
   ```

2. Write a function to calculate which can add, subtract, multiply and divide two numbers. Use switch inside function.

   ```
   function calculate(operation, num1, num2) {
    let result;
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = "Cannot divide by zero";
            }
            break;
        default:
            result = "Invalid operation";
    }
    return result;
   }
   ```

3. You need to write a function findTax() that takes a number type variable as an argument which is the salary of a person. You need to calculate the tax amount on his salary by using the Js switch control flow. The tax rates are given below.<br><br>

   if 500000 >= salary > 0 then 0% tax on the entire salary.
   If 1000000 >= salary > 500000 then 10% tax on the entire salary.
   If 1500000 >= salary > 1000000 then 20% tax on the entire salary.
   If the salary > 1500000 then 30% tax on the entire salary.

   ```
   function findTax(salary) {
   let tax;
   switch (true) {
       case (salary > 0 && salary <= 500000):
           tax = 0;
           break;
       case (salary > 500000 && salary <=1000000):
           tax = salary * 0.1;
           break;
       case (salary > 1000000 && salary <=1500000):
           tax = salary * 0.2;
           break;
       case (salary > 1500000):
           tax = salary * 0.3;
           break;
       default:
           tax = "Invalid salary";
       }
       return tax;
   }
   let salary = parseFloat(prompt("Enter your salary:"));
   let taxAmount = findTax(salary);
   if (typeof taxAmount === "number") {
       alert("Tax amount: " + taxAmount);
   }
   else {
       alert(taxAmount);
   }
   ```

4. Write a function to perform this. You are given two numbers n1 and n2. You need to find the sum of the products of their corresponding digits. So, for a number n1 = 6 and n2 = 34, you'll do (6 x 4) + (0 x 3) = 24.

   ```
   function sumOfProductDigits(n1, n2) {
    let str1 = n1.toString();
    let str2 = n2.toString();
    let sum = 0;

    for (let i = 0; i < str1.length; i++) {
        let digit1 = parseInt(str1[i]);
        let digit2 = i < str2.length ? parseInt(str2[i]) : 0;
        sum += digit1 * digit2;
    }

        return sum;
    }

    let n1 = 6;
    let n2 = 34;
    let result = sumOfProductDigits(n1, n2);
    console.log(result);
   ```
