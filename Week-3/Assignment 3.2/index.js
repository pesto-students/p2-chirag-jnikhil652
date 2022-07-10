function add(a, b) { return a + b }

function memoize(fn) {
    const map = new Map();
    return function(...args) {
        let key = args.toString();
        if (map.has(key)) {
            return console.log(map.get(key));
        }
        map.set(key, fn(...args));
        return console.log(map.get(key));
    }
}
const memoizeAdd = memoize(add);
console.time();
memoizeAdd(100);
console.timeEnd();
console.time();
memoizeAdd(100, 100)
console.timeEnd();
console.time();
memoizeAdd(100, 200)
console.timeEnd();
console.time();
memoizeAdd(100, 100)
console.timeEnd();