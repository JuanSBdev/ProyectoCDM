<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { onMounted, ref } from 'vue';
import Footers from './components/Footers.vue';




</script>

<template>
  <header>
    <div class="wraper row">
        <div class="wel col-6">
          <img class="pt-1" src="https://capilladelmonte.gov.ar/municipalidad/wp-content/uploads/2021/02/capilla-logo-2.png" alt="">
        </div>
        <nav class="d-flex col-4 pt-2 ml-5">
          <RouterLink to="/">
            <BIconHouseDoorFill/>
          </RouterLink>
          <RouterLink to="/contacto">
            <BIconEnvelopeFill/>
          </RouterLink>
          <RouterLink to="/compras">
            <BIconCartCheckFill/>
          </RouterLink>
        </nav>
    </div>
  </header>
  <main>
    <RouterView ></RouterView>

  </main>
  <footer>
    <Footers />

  </footer>

</template>

<style>
@import './assets/base.css';
header{
  position: fixed;
  width: 100%;
  border-bottom: 1px solid black;
  background-color: #7858996b;
    z-index: 8;
  max-height: 10%;

}
header img{
  max-width: 50%;
  overflow: hidden;
}
.wel h1{
padding: 1%;

}
nav a{
  text-decoration: none;
  color: black;
  padding: 1%;
}
footer{
  position: absolute;
  padding-top: 120rem;
  width: 100%;
}
</style>
