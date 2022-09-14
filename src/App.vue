<template>
  <div id="loading">
    <h1> loading </h1>
  </div>
  <div v-if="settings" id="settings">
    <input v-model="bR" placeholder="birthRate:[0,1]">
    <input v-model="mM" placeholder="maxMember:type what you like">
    <input v-model="fZ" placeholder="no vaild">
    <br />
    <span v-if="_a" id="start" @click="start">start</span>
    <span v-else id="reset" @click="reset">reset</span>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { Game } from "./assets/js/class.js"
import { ref } from 'vue'
import * as ability from './assets/js/ability.js'
let _a = ref(true)
let settings = ref(false)
const mM = ref('')
const bR = ref('')
const fZ = ref('')
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
  console.log("loaded");
  let loading = document.querySelector("#loading")
  loading?.parentNode?.removeChild(loading)
  //set view
  settings.value = !settings.value
  //ability define

  window.game = new Game()
  ability.reg()
})


//test code

</script>
<style>
#settings {
  position: absolute;
  top: 10vh;
  background-color: aqua;
  justify-content: center;
}

#loading {
  margin: 40vh 33vw;
}

#loading>div {
  margin: 0;
}

body {
  margin: 0
}

span {
  margin-left: 5vw;
}
</style>
