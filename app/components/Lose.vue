<template>
  <div class="big-header">
    <audio src="../assets/audio/lose.ogg" autoplay ref="audio"></audio>
    <img class="background" src="../assets/images/scary.gif" alt="">
    <h1 class="title-home">You Lose</h1>
    <br />
    <router-link class="button" to="/home">Menu principal</router-link>
  </div>
</template>

<script>
export default {
  mounted(){
      localStorage.removeItem('isGenerate');
      localStorage.removeItem('keyGenerator');
      localStorage.removeItem('generator');
      localStorage.removeItem('phone');
      localStorage.removeItem('keyPhone');
      setTimeout(()=> localStorage.removeItem('save'), 1000)

  }
};
</script>
