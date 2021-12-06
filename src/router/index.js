import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Crear from "../views/Crear.vue";
import Actualizar from "../views/Actualizar.vue";
import Todos from "../views/Todos.vue";
import Persona from "../views/Persona.vue";
import Login from "../views/Login.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/crear",
    name: "Crear",
    component: Crear,
  },
  {
    path: "/actualizar",
    name: "Actualizar",
    component: Actualizar,
  },
  {
    path: "/todos",
    name: "Todos",
    component: Todos,
  },
  {
    path: "/persona/:nombre",
    name: "Persona",
    component: Persona,
  },

  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
