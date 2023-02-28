console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function plus(number) {
    return function(plusNumber) {
        return plusNumber + number
    }
}

let plus15 = plus(15);
console.log(plus15(10))

console.log("EXERCISE 2:\n==========\n");

let users = [{
        name: "Frodo",
        age: 50,
        score: 85,
        isActive: false,
    },
    {
        name: "Sam",
        age: 38,
        score: 94,
        isActive: true,
    },
    {
        name: "Merry",
        age: 36,
        score: 82,
        isActive: true,
    },
    {
        name: "Pippin",
        age: 26,
        score: 77,
        isActive: false,
    },
];

users.forEach(user => console.log(user.name))

console.log("EXERCISE 3:\n==========\n");

let newUsers = users.map((user) => {
    return { name: user.name, score: user.score }
})


console.log(newUsers)

console.log("EXERCISE 4:\n==========\n");

let filteredUsers = users.filter((user) => {
    if (user.isActive === true) {
        return user
    }
})

console.log(filteredUsers)

console.log("EXERCISE 5:\n==========\n");

users.sort((a, b) => b.score - a.score)

console.log(users)

console.log("EXERCISE 6:\n==========\n");

let avgScore = users.reduce((sum, user, i, arr) => {
    if (i === arr.length - 1) {
        return (sum + user.score) / users.length
    } else {
        return sum + user.score
    }
}, 0)

console.log(avgScore)