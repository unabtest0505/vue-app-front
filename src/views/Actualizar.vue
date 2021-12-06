<template>
  <div>
    <NavBar/>
    <FormEdit/>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar/NavBar.vue";
import FormEdit from "@/components/FormEdit/FormEdit.vue";

export default {
  name:"Actualizar",
  components:{
    NavBar,
    FormEdit
  }
}
</script>