<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br />
    <router-link
      v-for="action in actions"
      :key="action"
      class="button"
      :to="action.path">
        {{ action.message }}
      </router-link>
  </div>
</template>

<script>
import data from '../../data.json';
export default {
   data() {
    return {
      message: data.game[1].message,
      actions: data.game[1].actions
    };
  },
};
</script>
