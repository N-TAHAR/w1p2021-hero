import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/Home.vue';
import Page from './components/Page.vue';
import Character from './components/Character.vue';
import Game1 from './components/game/Game1.vue';
import Win from './components/Win.vue';
import Lose from './components/Lose.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/page',
      name: 'page',
      component: Page,
    },
    {
      path: '/character',
      name: 'character',
      component: Character,
    },
    {
      path: '/game/1',
      name: 'game1',
      component: Game1,
    },
    {
      path: '/win',
      name: 'win',
      component: Win,
    },
    {
      path: '/lose',
      name: 'lose',
      component: Lose,
    },
    {
      path: '*',
      redirect: { name: 'home' },
    },
  ],
});

export default router;
