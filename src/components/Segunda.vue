<template>
<div class="container row d-flex ">
  <div class="col-3 com mx-1">
    <h2>comidas</h2>
  </div>
  <div class="col-3 mx-1 pas">
    <h2>paseos</h2>
  </div>
  <div class="col-4 lug">
    <h2>lugares</h2>
  </div>
</div>
</template>
<style scoped>
.container{
  width: 100%;
  position: absolute;
  margin-top: 15rem;
  margin-left: 5rem;
  justify-content: space-between;
  align-items: center;
  align-content: center;
}
.pas{
  display: flex;
  justify-content: center;
  border: 1px solid violet;
  border-radius: 1rem;
  background-color: rgba(167, 89, 167, 0.705);
}
.com{
 display: flex;
  justify-content: center;
  border: 1px solid violet;
  border-radius: 1rem;
  background-color: rgba(167, 89, 167, 0.705);
}
.lug{
 display: flex;
  justify-content: center;
  border: 1px solid violet;
  border-radius: 1rem;
  background-color: rgba(167, 89, 167, 0.705);
}
</style>
