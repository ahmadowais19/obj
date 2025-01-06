
// 1
// let user ={
//     nam:"Adam",
//      age:25, 
//      gender:"male",
//     }

// console.log(user.nam,user.age,user.gender)

// 2

// let Input ={
//     name: "Adam",
//     age: 25,
        // gender:"male",

// }
// user.gender="male";
// console.log(`{name:${Input.name},age:${Input.age},gender:${user.gender}`)


// 3

// let user={
//     name: "Adam",
//     age: "25",
// gender:"male",

// }
// user[gender = "male"];
// console.log(user["name"],user["age"],user["gender"])


// // 4
// let user ={
//     name:"Adam",
//     age: 25,
// gender:"male",
//  }
//  console.log(user.name)

// // 5
// let user={
//     name:"Adam",
//     age: 25,
// gender:"male",
// }
// console.log(user["name"])

// 6


// 7
// let user={
//         name:"Adam",
//         age: 25,
//         gender:"male",
//     }
//     let keys = Object.keys(user)

//     console.log( keys)

// 8
// let user={
//     name:"Adam",
//     age: 25,
//     gender:"male",
// }
//  let values = Object.values(user)
//  console.log(values)

// //  9
// let user={
//     name:"Adam",
//     age: 25,
//     gender:"male",
// }
// let entries = Object.entries(user)
// console.log(entries)

// 10
let user1={
    name:"Adam",
    age: 25,
    gender:"male",
}

let user2={
  
}
let user3={
    
}

let user4=Object.assign(user1,user2,user3,{
    num4:4
})
user4.num1=50
user4.r=100
console.log(user4)