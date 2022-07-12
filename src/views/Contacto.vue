<script setup>
function registrarme(){
    console.log("quiere registrarse")
}
</script>
<template>
    <div class="container row d-flex mx-5">
        <img class="d-flex col-s-12" src="https://cezannehr.com/wp-content/uploads/2019/11/Cezanne_Hr_Support_Team_Vector.png">
        <h1 class="col-s-12" >Regístrate para contactarte con nosotros!</h1>
<b-button pill variant="success" class=" col-2 mt-3 py-2" @click="registrarme">Registrarme</b-button>
     </div>
</template>
<style scoped>
.container{
    position: absolute;
    width: 100%;
    justify-content: center;
}
.container img{
    position: relative;
    width: 60%;
    margin-top: 10%;

}
.container h1{
    color: aliceblue;
    display: flex;
    justify-content: center;
}
button{
    position: relative;
}
</style>