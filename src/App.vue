<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wraper row">
      <div class="wel col-6">
        <img class="pt-1" src="https://capilladelmonte.gov.ar/municipalidad/wp-content/uploads/2021/02/capilla-logo-2.png" alt="">
    </div>
      <nav class="d-flex col-4 pt-2">
        <RouterLink to="/">
          <BIconHouseDoorFill/>
        </RouterLink>
        <RouterLink to="/contacto">
          <BIconEnvelopeFill/>
        </RouterLink>
        <RouterLink to="/ideas">
          <BIconCartCheckFill/>
        </RouterLink>
      </nav>
      </div>
  </header>

  <RouterView @mouseover="headerno" />
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

</style>
