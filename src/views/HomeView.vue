<script setup>
import { ref, onMounted, onUpdated} from 'vue'
import Hacer from '../components/Hacer.vue'
import Segunda from '../components/Segunda.vue';
import Historia from '../components/Historia.vue';

 const titulo = '¿Que puedo hacer en #CDM?'
 const antes2 = 'Galería'
</script>

<template>
<main class="row">
  
    <h1 class="d-flex titulo col-8 pl-2" data-aos="fade-right" v-text="titulo"></h1>
    <img src="../assets/images/frame.png " class="col-4 qr d-flex ml-2" alt="QR">
  
  <Transition> 
    <Hacer  class="uno" ></Hacer>
  </Transition>

  <h2 class="d-flex col-12 " v-text="antes2"></h2>
  <transition>
<Segunda @mouseover="verOpciones2"></Segunda>
  </transition>
  <Historia/>
  
</main>

</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Khand:wght@500&display=swap');


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
font-family: 'Khand', sans-serif;
}
main h2{
  justify-content: center;
}
main .uno{
    margin-top: 35%;
    margin-bottom: 10%;
}
main .qr {
max-width: 12%;
height: 5%;
justify-content: center;
align-self: end;
margin-left: 10%;
}

</style>
