<template>
<transition name="opacity" appear>

  <div class="big-header">
    <div class="won">
      <h1>Tu as gagné !<br> La Police arrive.</h1>
      
      <br />
      <router-link class="button" to="/home">Menu principal</router-link>
    </div>
  </div>

</transition>
</template>

<style lang="scss" scoped>

.won{
  position: absolute;
  width: 949px;
  height: 446px;
  background: linear-gradient(179.93deg, #305387 14%, rgba(145, 22, 22, 0.5) 99.86%);
  box-shadow: 0px 9px 4px rgba(0, 0, 0, 0.25);
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

h1{
  font-size: 40px;
  text-align: center;
  line-height: 50px
}

.button{
  text-align: center;
}
</style>

<script>
export default {
    mounted(){
      localStorage.removeItem('isGenerate');
      localStorage.removeItem('keyGenerator');
      localStorage.removeItem('generator');
      localStorage.removeItem('phone');
      localStorage.removeItem('keyPhone');
      localStorage.removeItem('save');
  }
};
</script>
