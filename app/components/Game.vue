<template>
<transition name="opacity" appear>
  <div class="big-header">
    <audio src="../assets/audio/menu.ogg" autoplay loop ref="audio"></audio>
    <div v-if="audio" class="mute" @click="mute"></div>
    <div v-else class="mute sound" @click="mute"></div>
    <img class="background" :src="steps.image" alt="">
    <div class="titles">
      <h1>{{ steps.message }}</h1>
      <h1 v-if="this.steps.id === 5" v-show="errorPhone">{{ steps.error }}</h1>
      <h1 v-if="this.steps.id === 1 || this.steps.id === 3" v-show="errorDoor">J'ai besoin d'une clé pour aller là</h1>
      <h1 v-if="this.steps.id === 2" v-show="generator">Générateur activé</h1>
    </div>

    <img v-show="personnage == 'clara'" class="game-perso" src="../assets/images/clara.png" alt="perso">
    <img v-show="personnage == 'tommy'" class="game-perso" src="../assets/images/tommy.png" alt="perso">
    
    <br />
    <ul class="actions">
      <li class="action" v-for="(action, index) in steps.actions" :key="index">
          <router-link class="button" :to="action.path" @click.native.prevent="access" >
            {{ action.message }}
          </router-link>
      </li>
    </ul>

    <div class="key keyGenerator" v-if="this.steps.id === 1" v-show="!keyGenerator && !generatorDoor" @click="getKey('generator')"></div>

    <div class="key keyPhone" v-if="this.steps.id === 4" v-show="!keyPhone && !phoneDoor" @click="getKey('phone')"></div>

    <div class="phone" v-if="this.steps.id === 5" @click="canCall"></div>

    <div class="generator" v-if="this.steps.id === 2" @click="isGenerate "></div>

    <ul class="inventory">
      <li class="full" v-show="keyGenerator && !generatorDoor"></li>
      <li class="full" v-show="keyPhone && !phoneDoor"></li>
    </ul>
  </div>
</transition>

</template>

<script>
import data from '../data.js';
import inventory from '../services/inventory.js';

export default {
  data() {
    return {
      steps: this.getRoute(),
      keyGenerator: inventory.keyGenerator,
      keyPhone: inventory.keyPhone,
      generatorDoor: localStorage.getItem('generator') || false,
      phoneDoor: localStorage.getItem('phone') || false,
      errorPhone: false,
      errorDoor: false,
      generator: localStorage.getItem('isGenerate') || false,
      personnage: localStorage.getItem('personnage') ,
      audio: true,
    };
  },
  methods: {
    mute(){
      if(this.audio){
        this.$refs.audio.pause()
        this.audio = false
      }else{
        this.$refs.audio.play()
        this.audio = true
      }
       
    },
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
        this.errorDoor = true;
        this.$router.push(path)
      }  
    },
    reset(){
      localStorage.removeItem('isGenerate');
      localStorage.removeItem('keyGenerator');
      localStorage.removeItem('generator');
      localStorage.removeItem('phone');
      localStorage.removeItem('keyPhone');
    },
    access(){
      localStorage.setItem('save', this.steps.id)
      this.errorPhone = false
      this.errorDoor = false
      if(this.steps.id === 4){
        this.haveKey(this.keyGenerator, this.generatorDoor, 'generator', '/game/3')
        this.generatorDoor = localStorage.getItem('generator')
      } else if(this.steps.id === 2) {
        this.haveKey(this.keyPhone, this.phoneDoor, 'phone', '/game/1')
        this.phoneDoor = localStorage.getItem('phone')
      }
    },
    canCall(){
      if(this.generator){
        this.reset()
        this.$router.push('/win')
      } else {
        this.errorPhone = true;
      }
    },
    isGenerate(){
      localStorage.setItem('isGenerate', this.generator)
      this.generator = localStorage.getItem('isGenerate');
    },
    getRoute(){
      return data.game.find(
       game => game.id === parseInt(this.$route.params.id)
      )
    },
  },
  mounted(){
    inventory.keyGenerator = localStorage.getItem('keyGenerator') || false;
    this.keyGenerator = inventory.keyGenerator;
    inventory.keyPhone = localStorage.getItem('keyPhone') || false;
    this.keyPhone = inventory.keyPhone;
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

  // <audio src="../assets/audio/son.mp3" autoplay red="audio"></audio>
  // this.$refs.audio
  // this.$refs.audio.pause()
};
</script>

<style>

.key{
  position: absolute;
  cursor: pointer;
  width: 20px;
  height: 20px;
  background: url('../assets/images/key.svg') no-repeat;
  background-size: cover;
}

.keyGenerator{
  left: 347.84px;
  top: 440px;
}

.keyPhone{
  left: 440.84px;
  top: 346px;
}

.phone{
  position: absolute;
  left: 410px;
  top: 440px;
  width: 40px;
  height: 30px;
  cursor: pointer;
  background: url('../assets/images/phone.svg') no-repeat;

}

.generator{
  position: absolute;
  width: 135px;
  height: 142px;
  left: 700px;
  top: 251px;
  background: url('../assets/images/generateur.svg') no-repeat;  
  cursor: pointer;
}

.game-perso{
  position: absolute;
  bottom: 15%;
  left: 10%;
}

.mute{
  position: absolute;
  top: 5%;
  right: 5%;
  width: 50px;
  height: 50px;
  background: url('../assets/images/speaker.svg');
  cursor: pointer;
}

.sound{
  background: url('../assets/images/speaker (1).svg');
}

</style>
