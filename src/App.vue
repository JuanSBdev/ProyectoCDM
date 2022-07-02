<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wraper row">
      <div class="wel col-6">
        <img src="https://www.creativefabrica.com/wp-content/uploads/2021/03/20/Mountain-logo-Design-Graphics-9785421-1.png" alt="">
    </div>
    <nav class="d-flex col-6">
      <RouterLink to="/"> HOMe</RouterLink>
      <RouterLink to="/contacto"> contact</RouterLink>
      <RouterLink to="/ideas"> ideas</RouterLink>
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
  width: 30%;
  height: 50%;
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
