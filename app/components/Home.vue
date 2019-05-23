<template>
<transition name="opacity" appear>
  <div class="big-header">
    <!-- <img src="" alt=""> -->
    <h1>Le site dont vous êtes le héros</h1>
    <div class="save" v-show="save">
      <h2>Voulez-vous reprendre la partie ?</h2>
      <div>
        <button @click="doSave('yes')">oui</button>
        <button @click="doSave('no')">non</button>
      </div>
    </div>
    <br />
    <router-link class="button" to="/character">Start</router-link>
  </div>
</transition>

</template>

<style lang="scss">
.save{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 500px;
  height: 500px;
  background-color: #101010;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
      save: localStorage.getItem('save') || false
    }
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
