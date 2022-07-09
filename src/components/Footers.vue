<script setup>
function scrolea(){
    window.scrollTo(0,0)
console.log('scrolié')
}


</script>
<template>
    <div class="container-footer d-flex row ">
        <nav class="d-flex  col-6 ">
            
            <RouterLink to="/contacto" >
                <BIconEnvelopeFill  style=" padding-bottom: -1%;" />
            </RouterLink>
            <RouterLink to="/ideas">
                <BIconCartCheckFill  style=" padding-top: -2%;"  />
            </RouterLink>
      </nav>
      <div class="col-4 pt-5 d-flex abajo-footer">
        <RouterLink to="/" class="d-flex start">
          <BIconArrowUpCircle @click="scrolea"   />
        </RouterLink>
            <p> volver arriba</p>

      </div>
    </div>
</template>
<style scoped>
.container-footer{
    position:relative;
    justify-content: space-around;
    background-color: #7858996b;
    width: 100%;
}
.abajo-footer{
    flex-flow: column nowrap;
    align-items: center;
}
nav{
    flex-flow: column wrap;
    margin: 0%;
}
</style>