<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br />
    <ul class="actions">
      <li class="action" v-for="(action, index) in actions" :key="index">
        <router-link class="button" :to="action.path">
          {{ index }} : {{ action.message }}
        </router-link>
      </li>
    </ul>
    <div class="key" v-show="!key" @click="getKey"></div>

    <ul class="inventory" v-show="key">
      <li class="full"></li>
    </ul>
  </div>
</template>

<script>
import data from '../../data.json';
import {inventory} from '../../app.js';


export default {
  data() {
    return {
      message: data.game[1].message,
      actions: data.game[1].actions,
      key: inventory.key,
    };
  },
  methods: {
    getKey(){
      console.log(inventory.key)
      inventory.key = true
      this.key = inventory.key
      console.log(inventory.key)
    }
  }
};
</script>

<style>

.key{
  position: absolute;
  top: 10%;
  left: 25%;
  width: 100px;
  height: 100px;
  background-color: white;
  cursor: pointer;
}

</style>
