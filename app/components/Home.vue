<template>
<transition name="opacity" appear>
  <div class="big-header">
    <!-- <img src="" alt=""> -->
    <video src="../assets/images/entrée.mp4" autoplay class="video"></video>
    <div :class="name">
      <h1 class="title-home">CALL HIM</h1>
      <p class="goal-home">Vous avez été kidnapé.<br>
      Appelez la police pour vous échapper.</p>
      <div class="save" v-show="save">
        <h2>Voulez-vous reprendre la partie ?</h2>
        <div>
          <button @click="doSave('yes')">oui</button>
          <button @click="doSave('no')">non</button>
        </div>
      </div>
    </div>
      <router-link :class="name" class="button-home" to="/character">JOUER</router-link>
  </div>
</transition>

</template>

<style lang="scss">

.goal-home{
  text-align: center;
  line-height: 32px;
}

.button-home{
  position: absolute;
  text-align: center;
  z-index: 1;
  background-color: #fafafa;
  border: 1px solid #000;
  padding: 10px 20px;
  border-radius: 10px;
}

.menu{
  position: relative;
  transition: opacity 2s, transform 1s;
  opacity: 0;
  transform: translateY(100px);
}

.fade{
  opacity: 1;
  transform: none;
}

.video{
  position: absolute;
  width: 100%;
  object-fit: cover;
  z-index: -1;
}


.title-home{
  font-size: 60px;
  color: #AA0000;
  text-shadow: 8px 8px 4px #410202;
  margin-bottom: 50px;
}

.save{
  position: absolute;
  top: 300px;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 500px;
  height: 500px;
  background-color: #101010;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
  h2{
    margin-bottom: 50px;
  }

  button{
    cursor: pointer;
  }
}

</style>

<script>
export default {
  data() {
    return{
      save: localStorage.getItem('save') || false,
      name: "menu",
    }
  },
  mounted(){
    setTimeout(()=> this.name = "menu fade", 10000)
  },
  methods: {
    reset(){
      localStorage.removeItem('isGenerate');
      localStorage.removeItem('keyGenerator');
      localStorage.removeItem('generator');
      localStorage.removeItem('phone');
      localStorage.removeItem('keyPhone');
      localStorage.removeItem('save');
    },
    doSave(answer){
      if(answer === 'yes'){
        this.$router.push('/game/' + this.save);
        
      }else{
        this.reset()
        this.save = false
      }
    }
  }
};
</script>
