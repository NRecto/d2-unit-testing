function factorial(n) {
  if (typeof n === "string") return undefined;
  if (typeof n !== 'number') return undefined;
  if (typeof n === Symbol) return undefined;
  if (typeof n === BigInt) return undefined;
  if (n < 0) return undefined;
  if (n === 0) return 1;
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

const names = {
    "Brandon" : {
        "name" : "Brandon Boyd",
        "age" : 35
    },
    "Steve" : {
        "name": "Steve Tyler",
        "age" :56
    }
}

module.exports = {
  factorial,
  names
};
