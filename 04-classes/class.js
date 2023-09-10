"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Customer_1 = require("./Customer");
let customer1 = new Customer_1.Customer("Brandon", "Ibanez");
console.log(customer1);
console.log(`First customer: ${customer1.firstName} ${customer1.lastName}`);
console.log("Inside class file");
