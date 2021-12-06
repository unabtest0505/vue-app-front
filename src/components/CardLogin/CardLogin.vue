<template>
<div class="content-login">
    <div class="card-login">
        <div>
            <h2>Cedula de Ciudadania</h2>
            <input type="text" v-on:input="  entrada = $event.target.value" placeholder="Ingrese su Cedula">
            <label for="">Token:</label>
            <textarea cols="10" rows="6"  v-model="tk"></textarea>
        </div>        
        <button @click="verificar">Autenticar</button>
    </div>
</div>
  
</template>

<script>
import api from "@/logic/api.js"
import auth from "@/logic/autenticacion.js"
export default {
    name:"CardLogin",
    data: function(){
        return{
            entrada:'',
            tk: auth.getToken()
        }
    },
    methods:{
        async verificar(){
            try {
                if(this.entrada == ''){
                    alert("Porfavor Ingrese un valor de entrada");
                }else{
                let respuesta = await api.token({cedula: this.entrada});
                auth.createToken(respuesta.data)
                this.tk = auth.getToken();
                }
                //console.log(auth.getToken());
                //alert(auth.getToken());
            } catch (err) {
                console.error(err);
            }

            

        }
    }

}
</script>

<style scoped>
input{
    margin-bottom: 10px;
}
textarea{
    display: flex;
    width: 80%;
    height: min-content;
    margin-top: 10px;
    resize: none;
}
.content-login{
    display: flex;
    width: 100%;
    height: calc(100vh - 60px);
    justify-content: center;
    align-items: center;
}

.card-login{
    display: flex;
    height: 50%;
    
    width: 30%;
    flex-direction: column;
    padding: 10px;
    box-shadow: 0px 3px 8px rgba(165, 165, 165, 0.438);
    border-radius: 8px;
    justify-content: space-between;
    align-items: center;
}

button{
    display: flex;
    width: 100%;
    height: 15%;
    justify-content: center;
    align-items: center;
    background-color: rgb(44, 194, 64);
    border-radius: 5px;
    border: none;
    box-shadow: 0px 3px 8px  rgba(0, 128, 0, 0.24);
}
button:hover{
    box-shadow: 0px 3px 8px  rgba(0, 128, 0, 0.404);
    cursor: pointer;
}

.card-login>div{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    width: 100%;
}
</style>