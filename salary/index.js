//const prompt = require('prompt-sync')();
function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;

    // Calculate NSSF Deduction
    const nssfDeduction = grossSalary * 0.06;
    const maxNssfDeduction = 1080;
    const nssf = nssfDeduction > maxNssfDeduction ? maxNssfDeduction : nssfDeduction;

    // Calculate PAYE (Tax)
    let paye;
    if (grossSalary <= 24000) {
        paye = grossSalary * 0.1;
    } else if (grossSalary <= 32333) {
        paye = 2400 + (grossSalary - 24000) * 0.25;
    } else {
        paye = 4483.25 + (grossSalary - 32333) * 0.3;
    }

    // Calculate NHIF Deduction
    let nhif;
    if (grossSalary <= 5999) {
        nhif = 150;
    } else if (grossSalary <= 7999) {
        nhif = 300;
    } else if (grossSalary <= 11999) {
        nhif = 400;
    } else if (grossSalary <= 14999) {
        nhif = 500;
    } else if (grossSalary <= 19999) {
        nhif = 600;
    } else if (grossSalary <= 24999) {
        nhif = 750;
    } else if (grossSalary <= 29999) {
        nhif = 850;
    } else if (grossSalary <= 34999) {
        nhif = 900;
    } else if (grossSalary <= 39999) {
        nhif = 950;
    } else if (grossSalary <= 44999) {
        nhif = 1000;
    } else if (grossSalary <= 49999) {
        nhif = 1100;
    } else if (grossSalary <= 59999) {
        nhif = 1200;
    } else if (grossSalary <= 69999) {
        nhif = 1300;
    } else if (grossSalary <= 79999) {
        nhif = 1400;
    } else if (grossSalary <= 89999) {
        nhif = 1500;
    } else if (grossSalary <= 99999) {
        nhif = 1600;
    } else {
        nhif = 1700;
    }

    // Calculate Net Salary
    const netSalary = grossSalary - paye - nhif - nssf;

    return {
        grossSalary,
        nssf,
        paye,
        nhif,
        netSalary
    };
}

// Example usage
const basicSalary = 30000;
const benefits = 5000;
const salaryDetails = calculateNetSalary(basicSalary, benefits);
console.log(salaryDetails);
