<template>
  <div>
    <NavBar/>
    <FormEntrada/>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar/NavBar.vue";
import FormEntrada from "@/components/FormEntrada/FormEntrada.vue";

export default {
  name:"Crear",
  components:{
    NavBar,
    FormEntrada
  }
}
</script>