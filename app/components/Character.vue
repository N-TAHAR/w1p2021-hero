<template>
<transition name="opacity" appear>
  <div class="big-header character-page">
    <h1 class="titles">Choissisez votre personnage</h1>
    <br />
    <ul class="actions">
      <li class="action">
        <div class="perso tommy" @click="savePerso('tommy')">
          <figure>
            <img src="../assets/images/tommy.png" alt="perso clara">
            <figcaption>TOMMY</figcaption>  
          </figure>
        </div>
      </li>
      <li class="action">
        <div class="perso clara" @click="savePerso('clara')">
          <figure>
            <img src="../assets/images/clara.png" alt="perso clara">
            <figcaption>CLARA</figcaption>  
          </figure>
        </div>
      </li>
    </ul>
  </div>
</transition>

</template>

<style>
.character-page{
  background: linear-gradient(#000000 65%, #AA0000);
}

figure img{
  margin-bottom: 30px;
}

figcaption{
  text-align: center;
  text-decoration: none;
  list-style-type: none;
  /* background-color: #fafafa; */
  padding: 10px 20px;
  /* border-radius: 10px; */
  color: #fafafa;
}


.perso{
  cursor: pointer;
}

</style>
<script>
export default {
  mounted(){
    if(localStorage.getItem('personnage')){ localStorage.removeItem('personnage') }
  },
  methods: {
    savePerso(perso){
      localStorage.setItem("personnage", perso);
      this.$router.push('game/0')
    }
  }
};
</script>
