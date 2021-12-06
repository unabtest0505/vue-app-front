<template>
  <nav>
    <div class="content-navbar">
      <ul>
        <li><router-link to="/"><h1>Inicio</h1></router-link></li>
        <li><router-link to="/todos">Productos</router-link></li>        
      </ul>
    </div>
    <div class="content-navbar">
      <ul>
        
        <li v-if="!logueado"><router-link to="/login">Iniciar Sesion</router-link></li>
        <li v-if="logueado" @click="cerrarsesion"><router-link to="/">Cerrar Sesion</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
import auth from "@/logic/autenticacion.js"
export default {
  name: "NavBar",
  data:function() {
      return {
        logueado: auth.isToken()
      }
  },
  // updated(){
  //   if(auth.isToken){
  //     this.logueado = true
  //   }
  // },
  methods:{
    cerrarsesion(){
      auth.limpiar();
      this.logueado = auth.isToken();
    }
  }
};
</script>

<style scoped>

.content-navbar {
  display: flex;
  padding-right: 15px;
  padding-left: 15px;
}
nav {
  font-family: 'Ubuntu';
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 60px;
  background: #1b9257;
  box-shadow: 1px 2px 10px rgb(126, 125, 125);
}
ul {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  margin: 0px;
  padding: 0px;
}
li {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
}
a{
  text-decoration: none;
  color: black;
  
}
h1{
  margin: 0px;
}
</style>
