// 2) протипізувати функції:
// const user = {
//     name:"Max",
//     age:18,
//     gender:'male'
// }
// function sum(a, b) {
//     return a + b
// }
//
// function showSum(a, b) {
//     console.log(a + b);
// }
//
// function incAge(someUser, inc) {
//     someUser.age += inc
//     return someUser
// }
//
// console.log(sum(1, 2));
// showSum(2, 3)
// incAge(user, 2)

interface IUser {
    name: string;
    age: number;
    gender: string
}

function sum(a: number, b: number): number {
    return a + b
}

function showSum(a: number, b: number): void {
    console.log(a + b)
}

function incAge(someUser: IUser, inc: number): IUser {
    someUser.age += inc
    return someUser
}

const user: IUser = {name: 'Max', age: 18, gender: 'male'};

console.log(sum(2, 2));
showSum(3, 3);
console.log(incAge(user, 10));







