// масив стрічок string[]
// void - якщо ф-я нічого не повертає
// const func = (str: string[]): void => {
//     console.log('hello')
//
//     return
// }
//
// func(['fjvnkjfnv', 'ddnfjkdk'])

// number - якщо ф-я повинна повернути тільки number
// number|string - якщо ф-я повинна повернути number або string
// const func2 = (str: number): number | string => {
//     console.log('hello')
//
//     return
// }
//
// func2(67)

// <T> - дженерик дає свободу в типізації
// interface IUser<T> {
//     name: string;
//     age: number;
//     status: boolean;
//     data:T
// }
//
// const user1: IUser<string[]> = {name:'olga', age:34, status:true, data:['ffgg','fgg']}
// const user2: IUser<number> = {name:'olga', age:34, status:true, data:555}
//
// // Partial - дає можливість частково заповнювати інтерфес юзера
// const user3: Partial<IUser<number>> = {name:'egor', age:4}

// class User {
//     protected id: number;
//     public name: string;
//     private age: number
//     // для створення constructor комбінація клавіш - control+enter
//     constructor(id: number,  name: string,  age: number) {
//         this.id = id;
//         this.name = name;
//         this.age = age;
//     }
//
//     getName(){
//         return this.name
//     }
// }
//
//
// const user = new User (22, 'oleg', 23);
// console.log(user.getName());

class User {

    constructor(protected id: number, private name: string, private age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name
    }
}

const user = new User(15, 'Max', 15);

console.log(user.getName());