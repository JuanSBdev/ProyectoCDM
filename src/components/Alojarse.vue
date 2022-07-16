<script setup>
import { ref } from 'vue';
  const camping = ref(0)
</script>
<template>
<div class="container d-flex row ">
    <div class="camping col-3 mx-1">
        <h1>
            Campings
        </h1>
        
    </div>
    <div class="cabañas col-3 mx-1">
            <h2>
                cabañas
            </h2>
    </div>
    <div class="hoteles col-3 mx-1"> 
            <h3>
                hoteles
            </h3>
    </div>

</div>
</template>
<style scoped>
.container{
    position: absolute;
    width: 100%;
    justify-content: space-around;
    align-items: flex-start;
    align-content: center;
    margin-top: 20%;
}

h1, h2, h3 {
    font-size: 3rem;
}
.camping{
    border: 1px solid black;
    border-radius: 1rem;
    background-color: #7d73e696;
    
}
.cabañas{
    border: 1px solid black;
    border-radius: 1rem;
    background-color: #7d73e696;
    
}
.hoteles{
    border: 1px solid black;
    border-radius: 1rem;
    background-color: #7d73e696;
    
}
</style>