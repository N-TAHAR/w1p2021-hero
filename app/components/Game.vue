<template>
  <div class="big-header">
    <h1>{{ steps.message }}</h1>
    <h1 v-if="this.steps.id === 5" v-show="errorPhone">{{ steps.error }}</h1>
    <br />
    <ul class="actions">
      <li class="action" v-for="(action, index) in steps.actions" :key="index">
          <router-link class="button" :to="action.path" @click.native.prevent="access">
            {{ index }} : {{ action.message }}
          </router-link>
      </li>
    </ul>

    <div class="key keyGenerator" v-if="this.steps.id === 1" v-show="!keyGenerator && !generatorDoor" @click="getKey('generator')"></div>

    <div class="key keyPhone" v-if="this.steps.id === 4" v-show="!keyPhone && !phoneDoor" @click="getKey('phone')"></div>

    <div class="phone" v-if="this.steps.id === 5" @click="errorPhone = true "></div>

    <ul class="inventory">
      <li class="full" v-show="keyGenerator && !generatorDoor"></li>
      <li class="full" v-show="keyPhone && !phoneDoor"></li>
    </ul>

  </div>
</template>

<script>
import data from '../data.json';
import inventory from '../services/inventory.js';

export default {
  data() {
    return {
      steps: this.getRoute(),
      keyGenerator: inventory.keyGenerator,
      keyPhone: inventory.keyPhone,
      generatorDoor: localStorage.getItem('generator') || false,
      phoneDoor: localStorage.getItem('phone') || false,
      errorPhone: false
    };
  },
  methods: {
    getKey(key){ 
      if(key === 'generator'){
        inventory.getKey(key);
        this.keyGenerator = inventory.keyGenerator;
      }else if(key === 'phone'){
        inventory.getKey(key);
        this.keyPhone = inventory.keyPhone;
      }
    },
    haveKey(key, door, name, path){
      if(key || door){
        if(door){ return}
        door = true
        localStorage.setItem(name, door)
        this.getKey(name)
      } else {
        this.$router.push(path)
      }  
    },
    access(){
      if(this.steps.id === 4){
        this.haveKey(this.keyGenerator, this.generatorDoor, 'generator', '/game/3')
        this.generatorDoor = localStorage.getItem('generator')
      } else if(this.steps.id === 2) {
        this.haveKey(this.keyPhone, this.phoneDoor, 'phone', '/game/1')
        this.phoneDoor = localStorage.getItem('phone')
      }
    },
    isWork(){

    },
    getRoute(){
      return data.game.find(
       game => game.id === parseInt(this.$route.params.id)
      )
    },
  },
  watch: {
    '$route' (to, from) {
      this.steps = this.getRoute();
      // react to route changes...
    }
  }
  //character = {name: "Najib", skills: 10}
  //localStorage.setItem('character', JSON.stringify(character))
  //JSON.parse(localStorage.getItem('character'))
};
</script>

<style>

.key{
  width: 100px;
  height: 100px;
  background-color: white;
  cursor: pointer;
}

.keyGenerator{
  position: absolute;
  top: 10%;
  left: 25%;
}

.keyPhone{
  position: absolute;
  top: 60%;
  left: 65%;
}

.phone{
  position: absolute;
  top: 80%;
  left: 80%;
  width: 100px;
  height: 100px;
  background-color: green;
  cursor: pointer;
}

</style>
