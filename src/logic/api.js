import axios from "axios";

const API = "https://api-grupo-16.herokuapp.com";

//const API = "http://localhost:3001";

export default {

    obtenerTodo(subdir,tok){
        const ax1 = `${API}/${subdir}`;
        return axios.post(ax1,{token:tok});
    },


    
    obtenerUno(subdir){
        const ax1 = `${API}/personas/${subdir}`;
        return axios.get(ax1);
    },


    crear(subdir,data){
        const ax1 = `${API}/${subdir}`;
        return axios.post(ax1,data);
    },

    actualizar(subdir,dato){
        const ax1 = `${API}/personas/${subdir}`;
        return axios.put(ax1,dato);
    },

    borrar(subdir){
        const ax1 = `${API}/personas/${subdir}`;
        return axios.put(ax1);
    },

    token(param){        

        
        const ax1 = `${API}/persona/token`;
        return axios.post(ax1,param);
    },



};