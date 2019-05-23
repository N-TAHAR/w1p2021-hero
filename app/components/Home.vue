<template>
<transition name="opacity" appear>
  <div class="big-header">
    <!-- <img src="" alt=""> -->
    <h1>Le site dont vous êtes le héros</h1>
    <br />
    <router-link class="button" to="/character">Start</router-link>
  </div>
</transition>

</template>

<script>
export default {
  data() {
    return{
      
    }
  }
};
</script>
