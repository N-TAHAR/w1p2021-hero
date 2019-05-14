class inventory {
  constructor() {
    this.keyGenerator = false;
    this.keyPhone = false;
    this.keyCount = 0;
  }
  getKey() {
    console.log('ye');
    this.keyGenerator = true;
    console.log(this.keyGenerator);
    return this.keyGenerator
    // if (key === generator){

    // }
  }
}

module.exports = new inventory();


