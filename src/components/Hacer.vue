<script setup>
</script>
<template>
  <div class="row wraper  d-flex" data-aos="fade-right" >
    <div class="card col-3" style="">
          <img src="https://media.istockphoto.com/photos/summer-holidays-in-finland-picture-id1148294777?k=20&m=1148294777&s=612x612&w=0&h=Ax8xwUmMJF52lAX6I8MuDPMpZhz1p3emKyWe-DE63_A=" class="card-img-top pt-2" alt="...">
      <div class="card-body">
          <h5 class="card-title col-12">Alojamientos</h5>
          <p  class="card-text col-12">Aquí encontraras las mejores opciones para realizar actividades en capilla del monte dependioendo 
              de la hora, transporte y energía
          </p>
          <router-link  to="/alojamientos">
            <div class="d-grid gap-2">
              <button class="btn block btn-secondary">
                Donde
              </button>
            </div>
          </router-link>
      </div>
    </div>  
    
    <div class="card col-3" style="">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjhPbHlmaMFjFlON_LarjU6W8dgGDSdNsQnQ&usqp=CAU'" class="card-img-top pt-2" alt="...">
      <div class="card-body">
          <h5 class="card-title col-12">Explorar</h5>
          <p  class="card-text col-12">Aquí encontraras las mejores opciones para realizar actividades en capilla del monte dependioendo 
              de la hora, transporte y energía
          </p>
          <router-link  to="/explorar">
            <div class="d-grid gap-2">
              <button class="btn block btn-secondary">
                Quiero ir
              </button>
            </div>
          </router-link>
      </div>
    </div>
    
    
    
    <div class="card col-3" style="">
          <img src="https://static4.depositphotos.com/1026085/367/i/600/depositphotos_3670776-stock-photo-paragliding.jpg" class="card-img-top pt-2" alt="...">
      <div class="card-body">
          <h5 class="card-title col-12">Actividades</h5>
          <p  class="card-text col-12">Aquí encontraras las mejores opciones para realizar actividades en capilla del monte dependioendo 
              de la hora, transporte y energía
          </p>
          <router-link  to="/actividades">
            <div class="d-grid gap-2 sin">
              <button class="btn block btn-secondary boton-hacer">
                Vamos
              </button>
            </div>
          </router-link>
      </div>
    </div>

  </div>
</template>
<style>
 .wraper {
  display: flex;
justify-content: space-evenly;

}
.wraper img{
  max-height: 48%;
}
.actividades img{
  width: 80%;
  padding-top: 10%;
  
}
.actividades{
  background-color: rgba(13, 134, 19, 0.829);
justify-content: space-evenly;
margin-top: 20%;

}
.alojarse{
  background-color: rgba(13, 134, 19, 0.829);
justify-content: space-evenly;
margin-top: 20%;

}
.conocer{
  background-color: rgba(13, 134, 19, 0.829);
justify-content: space-evenly;
margin-top: 20%;

}
 .card a {
   text-decoration: none;
  
  }
button{
  
}
</style>