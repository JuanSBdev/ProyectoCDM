<template>
    <div class="container d-flex row ">
        <nav class="d-flex  col-6 pt-2 ml-5">
            <RouterLink to="/" >
                <BIconHouseDoorFill />
            </RouterLink>
            <RouterLink to="/contacto" >
                <BIconEnvelopeFill  />
            </RouterLink>
            <RouterLink to="/ideas">
                <BIconCartCheckFill  />
            </RouterLink>
      </nav>
        <BIconArrowUpCircle class="col-6" />
    </div>
</template>
<style scoped>
:root{
    }
.container{
    position: absolute;
    justify-content: space-between;
    background-color: #7858996b;
    margin-top: 160%;
    padding-left:20% ;
    padding-right:80% ;
}
nav{
    flex-flow: column nowrap;
}
</style>