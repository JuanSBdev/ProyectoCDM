<script setup>
import { ref, onMounted, onUpdated} from 'vue'
import Hacer from '../components/Hacer.vue'
import Segunda from '../components/Segunda.vue';
 const titulo = '¿Que puedo hacer en #CDM?'
 const antes2 = 'Galería'
</script>

<template>
<main class="row">
  
    <h1 class="d-flex titulo" data-aos="fade-right" v-text="titulo"></h1>
  
  <Transition> 
    <Hacer  class="uno" ></Hacer>
  </Transition>

  <h2 class="d-flex col-12 " v-text="antes2"></h2>
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
  padding-top: 25%;
-webkit-text-stroke: #fff .5px;
}
main h2{
  justify-content: center;
}
main .uno{
    margin-top: 35%;
    margin-bottom: 10%;
}

</style>
