const users = [
  { id: 1, name: "Anna", age: 22, city: "Moscow", isActive: true },
  { id: 2, name: "Oleg", age: 17, city: "Kazan", isActive: false },
  { id: 3, name: "Ivan", age: 30, city: "Moscow", isActive: true },
  { id: 4, name: "Maria", age: 25, city: "Sochi", isActive: false }
];

function getActiveUsers(users) {
    return users.filter(user => user.isActive)
}

function getUserNames(users) {
    return users.map(user => user.name)
}

function findById(users, id) {
    return users.find(user => user.id === id)
}

function getUserStatistic(users) {
    return users.reduce(
        (stats, user) => {
            if (user.isActive) {
                stats.active++
            }else {
                stats.unactive++
            }
            return stats;
        },
        {
            total: users.length,
            active: 0,
            inactive: 0
        }
    )
} 

function getAverageAge(users) {
    totalAge = users.reduce((sum, user) => sum += user.age, 0);

    return totalAge / users.length
}

function groupByCity(users) {
    return users.reduce(
        (groups, user) => {
            if(!groups[user.city]) {
                groups[user.city] = []
            }

            groups[user.city].push(user);
            return groups;
        }, {}
    )
}

console.log(getActiveUsers(users));

console.log(getUserNames(users));

console.log(findById(users, 3));

console.log(getUserStatistic(users));

console.log(getAverageAge(users));

console.log(groupByCity(users));

