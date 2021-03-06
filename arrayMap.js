Array.prototype.filterMap = function (cb) {
  const map = [];

  for (let i = 0; i < this.length; i++) {
    const test = cb(this[i]);

    if (test !== null && test !== undefined) {
      map.push(test);
    }
  }

  return map;
}
