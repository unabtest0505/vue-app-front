<template>
  <div class="contenedor" >
    <NavBar/>
    <HCard titulo="Home" ruta="/" />
    <HCard titulo="Todos Los Productos" ruta="Todos" />
    <HCard titulo="Crear Producto" ruta="Crear" />
    <HCard titulo="Actualizar Productos" ruta="Actualizar" />
    
    

  </div>
</template>

<script>
// @ is an alias to /src

import NavBar from "@/components/NavBar/NavBar.vue";
import HCard from "@/components/HCard.vue";

import api from "@/logic/api"

export default {
  name: "Home",
  components: {
    HCard,
    NavBar,
  },
  data:function(){
    return{

      info:[],
      
    }
  },
  methods:{

    async buscarInfo(){
      let respuesta =  await  api.obtenerTodo("personas");
      this.info = respuesta.data;
       
      
    }
  },
  created(){
    this.buscarInfo();
    
  }
};
</script>

<style scoped>
.contenedor{
  justify-content: space-between;
  
  display: flex;
  flex-wrap: wrap;
}
</style>
