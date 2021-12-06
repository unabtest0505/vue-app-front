<template>
  <div>
    <NavBar/>   
    <CardLogin/>
    
    
  </div>
</template>
<script>
import NavBar from "@/components/NavBar/NavBar.vue";
import CardLogin from "@/components/CardLogin/CardLogin.vue";

export default {
  name:"Login",
  components:{
    NavBar,
    CardLogin
  }
}
</script>

