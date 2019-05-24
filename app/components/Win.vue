<template>
<transition name="opacity" appear>

  <div class="big-header">
    <h1>Tu as gagné !</h1>
    <br />
    <router-link class="button" to="/home">Menu principal</router-link>
  </div>

</transition>
</template>

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
