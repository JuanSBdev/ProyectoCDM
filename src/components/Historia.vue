<script setup>
function fut (){
    console.log(footerSi.value)
    footerSi = true
    
}

defineExpose({ fut });
</script>
<template>
<div class="container-historia row d-flex" @mouseover="fut">
    <div class="izquierda col-8 py-2">
        <h1  class="" >¿Como Funciona la app?</h1>
        <p class="">
            Cada vez que veas SYMBOLO este codigo QR puedes escanearlo desde tu camara y te mostrará información sobre el lugar en donde te encuentres,
            ya sea precios, historias, eventos que habrá, reseñas de otros usuarios e incluso beneficios en muchos lugares :) 
        </p>
    </div>
    <div class="derecha col-3">
        <img   src="https://icones.pro/wp-content/uploads/2021/04/icone-de-telephone-portable-violet.png" alt="">
    </div>
</div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');
.container-historia{
    justify-content: space-around;
    align-items: end;
    align-content: end;
    padding-bottom: 8rem;
}
.izquierda h1{
    font-size: 5rem;
    font-family: 'Varela Round';
    }
.izquierda p{
    font-family: 'Varela Round'
}
.derecha img{
    width: 100%;
}
</style>