class door {
  constructor() {
    this.generatorDoor = localStorage.getItem('generatorDoor') || false;
    this.phoneDoor = localStorage.getItem('phoneDoor') || false;
  }
  haveKey(key, door, name, path){
    if(key || door){
      if(door){ return}
      door = true
      localStorage.setItem(name, door)
      // this.getKey(name)
    } else {
      this.$router.push(path)
    } 
  } 
}