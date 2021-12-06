<template>
<div class="padre">
    <form class="hijo" action="">
        <input type="text" required placeholder="Nombre" id="nombre">
        <input type="text" required placeholder="descripcion" id="descripcion">
        <input type="number" required placeholder="codigo" id="codigo">
        <input type="text" required placeholder="precio" id="precio">
        <input type="number" required placeholder="unidades" id="unidades">




        <button type="button" @click="crear"> Crear </button>
    </form>
</div>
  
</template>

<script>
import api from "@/logic/api.js"
import auth from "@/logic/autenticacion.js"
export default {
    name:"FormEntrada",
    data:function(){
        return{

        }
    },
    methods:{
        async crear(){
            const miobj ={
                nombre : document.getElementById('nombre').value,
                descripcion : document.getElementById('descripcion').value,
                codigo : document.getElementById('codigo').value,
                precio : document.getElementById('precio').value,
                unidades : document.getElementById('unidades').value,
                token: auth.getToken()
            }          

            await api.crear("producto",miobj);
            alert("Exito")
            
        }
    }

}
</script>

<style scoped>
.padre{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    border: 1px solid red;
}
.hijo{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 30%;
    height: 60%;
    box-shadow: 0px 3px 7px grey;
    padding: 20px;
    border-radius: 10px;
}
input{
    display: flex;
    width: 100%;
    height: 100%;
    margin: 5px;
    border-radius: 30px;
    border: none;
    box-shadow: 0px 0px 7px rgba(128, 128, 128, 0.2);
    padding: 5px;
}
button{
    display: flex;
    width: 80%;
    margin: 5px;
    margin-top: 20px;
    height: 100%;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    background-color: chartreuse;
    border-radius: 10px;
    border: none;
}
button:hover{
     background-color: rgb(91, 182, 1);
     cursor: pointer;
}
</style>