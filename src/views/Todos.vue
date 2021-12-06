<template>
  <div class="contenedor" >
    <NavBar/>
    <Alert texto="Token Expiro" v-if="!render"/>
    <div v-if="render">
      <div  v-for="(valor) in info" :key="valor._id">      
      <Tarjeta :nombre="valor.nombre" :descripcion="valor.descripcion" :codigo="valor.codigo" :precio="valor.precio" :unidades="valor.unidades" @selec="redireccionar" />
    </div>
    
    </div>
    
  
    

  </div>
</template>

<script>
// @ is an alias to /src

import NavBar from "@/components/NavBar/NavBar.vue";
import Tarjeta from "@/components/Tarjeta/Tarjeta.vue";

import Alert from "@/components/Alert.vue"
import api from "@/logic/api"
import auth from "@/logic/autenticacion.js"

export default {
  name: "Home",
  components: {
    Alert,
    NavBar,
    Tarjeta
  },
  data:function(){
    return{

      info:[],
      render:false
      
    }
  },
  methods:{

     async buscarInfo(){
      let respuesta =  await  api.obtenerTodo("productos",auth.getToken());
      if(respuesta.status==200){
        this.info = respuesta.data;
        this.render = true
      }
      
      console.log(respuesta)
    },
    redireccionar(dato){
      this.$router.push(`/persona/${dato}`)

      // let objetoTemporal = {};
      // for (const key in this.info) {
      //   if (key.telefono == dato) {
          
      //     objetoTemporal = {
      //       nombre : key.nombre,
      //       apellido : key.apellido,
      //       telefono : key.telefono
      //     }
          
      //   }
      // }
    }
  },
  created(){
    this.buscarInfo();
    
  }
};
</script>

<style scoped>
.contenedor{
  
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.contenedor>div{
  
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
