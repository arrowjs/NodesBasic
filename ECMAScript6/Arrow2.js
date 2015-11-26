//https://github.com/lukehoban/es6features/blob/master/README.md
// Expression bodies
var evens = [2, 4, 6, 8, 10, 12];
var odds = evens.map(v => v + 1);
var nums = evens.map((v, i) => v + i);
var pairs = evens.map(v => ({even: v, odd: v + 1}));
var fives = [];
// Statement bodies
nums.forEach(v => {
    if (v % 5 === 0) {
        fives.push(v);
    }
});

console.log(odds);
console.log(pairs);
console.log(fives);

// Lexical this
var bob = {
    _name: "Bob",
    _friends: [],
    printFriends() {
        this._friends.forEach(f =>
            console.log(this._name + " knows " + f));
    }
}