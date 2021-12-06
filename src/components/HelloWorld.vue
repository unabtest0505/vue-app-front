<template>

  <div>
    <h1>hola grupo</h1>
    <h2>Mi Varariable:</h2>
    <p>{{miVaraible}}</p>
    <p v-if="condicion">Este mensaje NO se va a mostrar</p>
    <p v-show="condicion">Este mensaje SI se va a mostrar</p>

    <ul>
      <li v-for="(item, i) in info" :key="i"> ID:{{item.id}} - {{item.name}}
        
        
      </li>
    </ul>




  <button @click="otrometodo()"  >Calcular</button>
  <p>{{valor2}}</p>
  </div>
  
</template>

<script>
export default {
  name:"HelloWorld"
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  

</style>



