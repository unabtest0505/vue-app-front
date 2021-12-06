<template>
  <div class="contenedor">
      <h2>{{titulo}}</h2>
      <router-link class="btn-go" :to="ruta"> Navegar </router-link>



      <!-- 
          
    <router-link to="/rutaadondequeremosir"> Navegar </router-link>
    <router-link :to="{name:'Crear'}"> Navegar </router-link>
    <router-link :to="Crear"> Navegar </router-link> 
      
      -->
  </div>
</template>

<script>
export default {
    name:"HCard",
    props:{
        titulo:String,
        ruta:String
    }

}
</script>

<style scoped>
.contenedor{
    display: flex;
    flex-direction: column;
    width: 30vw;
    height: 20vh;
    box-shadow: 0px 3px 8px rgba(109, 109, 109, 0.534);
    border-radius: 5px;
    padding: 10px;
    margin: 5px;
    margin-top: 20px;
}
.btn-go{
  display: flex;
  background-color: rgba(44, 194, 64, 0.5);
  text-decoration: none;
  color: black;
  height: 40px;
  width: 20%;
  border-radius: 3px;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 18px;
}
.btn-go:hover{
  background-color: rgba(44, 194, 64, 0.644);
}
</style>