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
// // для створення constructor комбінація клавіш - control+enter
//     constructor(protected id: number, private name: string, private age: number) {
//         this.id = id;
//         this.name = name;
//         this.age = age;
//     }
//
//     getName() {
//         return this.name
//     }
// }
//
// const user = new User(15, 'Max', 15);
//
// console.log(user.getName());
//
// // Iмплементація інтерфейсу до скласу - ^+enter
//
// interface IShapeActions {
//     area: () => number;
//     perimeter: () => number
// }
//
// interface IGreeting {
//     print: () => void
// }
//
// class Rectangle implements IShapeActions, IGreeting {
//     constructor(private a: number, private b: number) {
//     }
//
//     print(): void {
//         console.log('hello');
//     }
//
//     area(): number {
//         return this.a + this.b;
//     }
//
//     perimeter(): number {
//         return (this.a + this.b) * 2;
//     }
// }
//
// class Triangle implements IShapeActions {
//     constructor(private a: number, private b: number, private c: number) {
//     }
//
//     area(): number {
//         return this.a * this.b / this.c;
//     }
//
//     perimeter(): number {
//         return this.a + this.b + this.c;
//     }
// }
//
// const shapes: IShapeActions[] = [
//     new Triangle(2, 4, 6),
//     new Rectangle(4, 1),
//     new Triangle(1, 3, 4)
// ]
//
// for (const shape of shapes) {
//     console.log(shape.area());
//     console.log(shape.perimeter());
// }

// import {UserService} from "./services/user.service";
//
// UserService.getAll().then(value => value.data).then(users => {
//     for (const user of users) {
//         console.log(user.name);
//     }
// } )


// Можна присвоїти власні значення константам enum
enum DaysOfWeek {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
}

// Значення констант може бути будь-якого типу, а не тільки числовим. Наприклад:
enum Colors {
    Red = 'red',
    Green = 'green',
    Blue = 'blue',
}