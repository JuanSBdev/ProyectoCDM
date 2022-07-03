<script setup>
import { ref, onMounted, onUpdated} from 'vue'
import Hacer from '../components/Hacer.vue'
import Segunda from '../components/Segunda.vue';
const cuenta = ref(0)
const bajo = ref(1)
function increment(){
  cuenta.value++
}
function verOpciones(){
  bajo.value++
}
function verOpciones2(){
  bajo.value = 0
}
onMounted(() => {
  console.log(` The first value is ${cuenta.value}`)
}),
 
 onUpdated(() => {
  console.log(` The new value is ${cuenta.value}`)

 })
 const titulo = '¿Que puedo hacer en #CDM?'

</script>

<template>
<main>
  <transition>
    <h1 class="d-flex titulo" data-aos="fade-right" v-text="titulo"></h1>
  </transition>
  
  <Transition> 
    <Hacer  class="uno" ></Hacer>
  </Transition>

  <transition>
<Segunda @mouseover="verOpciones2"></Segunda>
   
  </transition>
</main>
</template>
<style>


main{
  position: absolute;
  width: 100%;
}
main h1{
  justify-content: center;
  align-items: center;
  align-content: center;
  margin-top: 10%;
  font-size: 4rem;
  padding-top: 10%;
-webkit-text-stroke: #fff .5px;
}
main .uno{
    margin-top: 30%;
    margin-bottom: 10%;
}

</style>
