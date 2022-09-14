<template>
  <div id="loading">
    <h1> loading </h1>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { Game } from "./assets/js/class.js"

onMounted(() => {
  //delete loading view
  console.log("loaded");
  let loading = document.querySelector("#loading")
  loading?.parentNode?.removeChild(loading)
  //set view

  //ability define
  const lifeImprove: ability = {
    name: "lifeImprove", description: "will have a age increase", probability: 0.00001, method: (babe: any) => { babe.max_age += 1 }
  }
  const someab: ability = {
    name: "tmp", description: "tmp", probability: 0.01
  }

  const config = { birthRate: 0.5, maxMember: 23 }

  window.game = new Game()
  !game.regAbility(lifeImprove)
  game.regAbility(someab)

  game.start(config)
})


//test code

</script>
<style scoped>
#loading {
  margin: 40vh 33vw;
}

#loading>div {
  margin: 0;
}
html {
  margin: 0
}
</style>
