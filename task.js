
//Task - 1

const name = 'Noyon';
let profession = 'student';

// Task-2

const Information = {
    name: 'Noyon',
    profession: 'student',
    uvName: 'RPSU',
    department: 'CSE',
    batch: '18th'

}

const info = `My name is ${name}. I am a ${profession} of programming-hero. My university name is ${Information.uvName}. My department is ${Information.department}`
console.log(info)

//Task - 3

const calculation2 = number => number / 5;

const div = calculation2(9);
console.log(div)

// Task-4

const calculation = (num1, num2) => {
    let add1 = num1 + 2;
    let add2 = num2 + 2;
    let mult = add1 * add2;

    return mult
}

const result2 = calculation(10, 15);
console.log(result2);

//Task-5

const calculation3 = (num1, num2, num3) => num1 * num2 * num3;
const mult = calculation3(1.5, 2.5, 4)
console.log(mult)

//Task-6

const calculation4 = (num1, num2) => {
    const add1 = num1 + 2;
    const add2 = num2 + 2;
    const mult = add1 * add2;
    return mult
}

const result3 = calculation4(8.5, 3.5);
console.log(result3)

//Task-7

const array1 = [10, 5, 2, 3, 14, 15, 20, 25, 23];

const calculation5 = array1.map(number => number * 5);
console.log(calculation5)

//Task-8

const array2 = [9, 4, 3, 8, 10, 22, 29, 45, 53, 55, 60];

const calculation6 = array2.filter(number => number % 2 != 0);
console.log(calculation6);


//Task-9

const product = [
    Mobile =
    { name: 'Samsung', model: 'Cor-2', color: 'black', price: '7000' },
    Mobile =
    { name: 'Oppo', model: 'A-3', color: 'White', price: '10000' },
    Mobile =
    { name: 'iphone', model: '13 pro', color: 'black', price: '120000' },
    Mobile =
    { name: 'mi', model: 'Mi-10', color: 'water', price: '15000' },
    Mobile =
    { name: 'nokia', model: 'W-15', color: 'black', price: '15000' }

]

const search = product.find(mobile => mobile.price > 5000);
console.log(search);

//Task-10

const mark = {
    physics: '75',
    chemistry: '85',
    math: '95',
    spl: '82',
    oop: '88',
    os: '92'
}

// Using destructuring.
const { physics, oop, spl, math } = mark;
console.log(physics, oop, spl, math);

//Task-11(Uncomplete)

const [first, second, third, forth, fifth] = ['Noyon', 'Jahid', 'Nahid', 'Abir', 'Mahi'];

//Task-12

const calculation7 = (num1, num2, num3 = 7) => num1 + num2 + num3;
const result = calculation7(10, 2.5);
console.log(result)

// Task-13

const student = {
    name: 'Noyon',
    id: '96',
    department: 'CSE',
    batch: '18',

    teacher: {
        name: 'KPG',
        department: 'CSE',
        age: '35',
        position: 'headOfTheDepartment',

        otherInfo: {
            presantAddress: 'Dhaka',
            parmanentAddress: 'Khulna',
            educationQualification: 'phd holder',
            From: 'Rashia'
        }
    },

    teachersId: [101, 102, 520, 478, 001, 025]
}

//Using optional chaining
console.log(student.teacher.name.income?.year);
//without optional chaining
console.log(student.bio)
//Using optional chaining
console.log(student?.bio)

