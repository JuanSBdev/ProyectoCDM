<script setup>
function scrolea(){
    window.scrollTo(0,0)
console.log('scrolié')
}
</script>
<template>
    <div class="container-footer d-flex row ">
        <nav class="d-flex  col-8 pt-2 ml-5">
            
            <RouterLink to="/contacto" >
                <BIconEnvelopeFill  />
            </RouterLink>
            <RouterLink to="/ideas">
                <BIconCartCheckFill  />
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
    position: absolute;
    justify-content: space-around;
    background-color: #7858996b;
    /*margin-top: 200%;*/
}
.abajo-footer{
    flex-flow: column nowrap;
    align-items: center;
}
nav{
    flex-flow: column nowrap;
}
</style>