<template>
<div class="cuerpo">
    <img :src="ruta" alt="">
    <h2>{{nombre}}</h2>
    <h3>{{descripcion}}</h3>
    <h3>{{precio}}</h3>
    <h3>{{codigo}}</h3>
    <h3>{{unidades}}</h3>
    
    <button @click="$emit('selec', nombre)">{{boton}}</button>
</div>
</template>

<script>
export default {
name:"Tarjeta",
props:{

    nombre: String,
    codigo: Number,
    descripcion: String,
    precio: String,
    unidades: Number,

},
data: function(){
    return{
        
        ruta: "https://via.placeholder.com/200x100",
       
        boton: "Click Me",
    }
}
}
</script>

<style scoped>
.cuerpo{
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 300px;
    margin: 10px;
    padding: 5px;
    box-shadow: 0px 0px 7px rgba(65, 0, 65, 0.514);
    border-radius: 5px;
}
h2,h3{
    margin: 5px;
}

</style>