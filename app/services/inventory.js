class inventory {
  constructor() {
    this.keyGenerator = localStorage.getItem('keyGenerator') || false;
    this.keyPhone = localStorage.getItem('keyPhone') || false;
  }
  getKey(key) {
    if (key == 'generator'){
      this.keyGenerator = !this.keyGenerator;
      localStorage.setItem('keyGenerator', this.keyGenerator)
      return this.keyGenerator
    }else if (key == 'phone'){
      this.keyPhone = !this.keyPhone;
      localStorage.setItem('keyPhone', this.keyPhone)
      return this.keyPhone
    }
  }
}

module.exports = new inventory();


