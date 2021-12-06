<template>
<div class="padre">
    <form action="">
        <div>
           <input type="text" required placeholder="Ingrese el nombre a Consultar" id="consultar" v-on:input="entrada = $event.target.value"> 

           <button type="button" @click="consultar"> consultar </button>
        </div>
        

        <div v-show="existe"> 
            <input type="text" required placeholder="Nombre" id="nombre">

            <input type="text" required placeholder="Apellido" id="apellido">

            <input type="number" required placeholder="Telefono" id="telefono">

            <button type="button" @click="actualizar"> Actualizar </button>

            <button class="btn_eliminar" type="button" @click="eliminar"> Eliminar </button>
            <div v-show="existe2">
                <p>Estas Seguro</p>
                <button class="btn_eliminar" type="button" @click="confirmacion = true"> Confirmar </button>
            </div>

        </div>
        

        
    </form>
</div>
  
</template>

<script>
import api from "@/logic/api.js"
export default {
    name:"FormEdit",
    data:function(){
        return{
            existe: false,
             existe2: false,
             confirmacion: false,
            entrada:""
        }
    },
    methods:{
        async consultar(){
            const consult = document.getElementById('consultar').value;
            let respuesta = await api.obtenerUno(consult);

            if(respuesta.data[0]!=undefined && respuesta.data[0].nombre == consult){
                this.existe = true;
                document.getElementById('nombre').value = respuesta.data[0].nombre;

                document.getElementById('apellido').value = respuesta.data[0].apellido;

                document.getElementById('telefono').value = respuesta.data[0].telefono;
            }else{
                alert(`${this.entrada} no existe`)
            }
            

        },
        async actualizar(){
             const nombre = document.getElementById('nombre').value;
            const apellido = document.getElementById('apellido').value;
            const telefono = document.getElementById('telefono').value;

            await api.actualizar(this.entrada,{nombre:nombre,apellido:apellido,telefono:telefono});
            alert("Actualizacion Exitosa")
        },
         async eliminar(){
             this.existe2 = true;
             if(this.confirmacion == true){
                 await api.borrar(this.entrada).then(alert("Borrado Exitoso")).catch(alert("Error"));
             }else{
                 alert("No  se Confirmo la operacion.")
             }
             
            
        }

    }

}
</script>

<style scoped>
.padre{
    border: 1px solid red;
}
.btn_eliminar{
    color: red;
}
</style>



