<template>
  <div class="contenedor" >
    <NavBar/>
    <div class="card_mid">
      <label for="">Nombre: </label>
      <h2>{{datos.nombre}}</h2>
      <label for="">Apellido: </label>
      <h3>{{datos.apellido}}</h3>
      <label for="">Telefono: </label>
      <h3>{{datos.telefono}}</h3>
    </div>
    
    
  </div>
</template>

<script>
// @ is an alias to /src



import NavBar from "@/components/NavBar/NavBar.vue"
 import api from "@/logic/api"

export default {
  name: "Persona",
  data: function(){
    return{
      valorDinamico: this.$route.params.nombre,
      datos: {}
    }
  },
  components: {
    NavBar
  },
  methods:{
    async consultar(){
      
      let respuesta = await api.obtenerUno(this.valorDinamico);
      console.log(respuesta);
      if(respuesta.data[0]!=undefined && respuesta.data[0].nombre == this.valorDinamico){                
        this.datos = {
          nombre:  respuesta.data[0].nombre,
          apellido : respuesta.data[0].apellido,
          telefono: respuesta.data[0].telefono
        }
      }else{
        alert(`${this.valorDinamico} no existe en la base de datos`)
      }
    }         
  },
  created(){
      this.consultar();
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
