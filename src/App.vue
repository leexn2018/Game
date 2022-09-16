<template>
  <div id="loading">
    <div>
      <h1> loading </h1>
    </div>
  </div>
  <div v-if="settings" id="settings"> {{ text }}
    <!--   <input v-model="bR" placeholder="no valid">
    <input v-model="mM" placeholder="no valid">
    <input v-model="fZ" placeholder="no vaild">   -->
    
    <div v-if="_a" id="start" @click="start"><p>start</p></div>
    <div v-else id="reset" @click="reset"><p>reset</p></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
//import { Game , test } from "./assets/js/class.js"
import { ref } from 'vue'
//import * as ability from './assets/js/ability.js'
import { Game } from './assets/js/game.js'
let _a = ref(true)
let settings = ref(false)
let text = ref('')
const mM = ref('')
const bR = ref('')
const fZ = ref('')
const change = () => {

}
const start = () => {
  if (bR.value != "" || mM.value != "") {
    game.start({ birthRate: Number(bR.value), maxMember: Number(mM.value) })
  }
  else {
    game.start()
  }
  _a.value = !_a.value
}

const reset = () => {
  game.reset()
  _a.value = !_a.value
}



onMounted(() => {
  //delete loading view

  //set view
  settings.value = !settings.value
  //ability define

  window.game = new Game()
  game.init()
  let i = setInterval(() => {
    if (game.isReady) {
      console.log("loaded");
      let loading = document.querySelector("#loading")
      loading?.parentNode?.removeChild(loading)
      clearInterval(i)
    }
  }, 500)
})


//test code

</script>
<style>
#loading {
  width: 100vw;
  height: 100vh;
}

#loading > div {
  margin: 44vh 33vw;
}

body {
  margin: 0;
  overflow: hidden;
}
#settings {
  position:absolute;
  bottom: 0px;
  left: 45vw;
  width: 10vw;
  height: 6vh;
  background-color: aqua;
  justify-content: center;
}
#settings > div {
  margin: 0;
  width: 100%;
  height: 100%;
  user-select: none;
}

#settings > div > p {
  text-align: center;
}
</style>
