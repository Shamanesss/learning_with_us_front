import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '../views/HomeView.vue'
// import UnauthorizedView from '../views/UnauthorizedView.vue'
import LoginView from '@/views/LoginView.vue';
import { supabase } from "../Clients/supabase";
let localUser;




const routes = [
  {
    path: '/',
    name: 'home',
    component: InicioView
  },


  {
    path: '/course',
    name: 'course',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CursosView.vue'),
    meta: { requiresAuth: true }
  },

  {
    path: '/login',
    name: 'login',

    component: LoginView
  },

  {
    path: '/register',
    name: 'register',

    component: () => import(/* webpackChunkName: "login" */ '../views/RegistreView.vue')
  },
  {
    path: '/leccion/:idleccion',
    name: 'leccion',
    component: () => import(/* webpackChunkName: "login" */ '../views/LeccionView.vue'),
    props: true
  },
  {
    path: '/lecciones/:idlecciones',
    name: 'lista-lecciones',
    component: () => import(/* webpackChunkName: "login" */ '../views/ListaLecciones.vue'),

  }

];




const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

//get user

async function getUser(next) {
  localUser = await supabase.auth.getSession();
  console.log(localUser.data.session)
  if (localUser.data.session == null) {
    next('/login')
  }
  else {
    next();
  }
}



//auth requirements
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    getUser(next)
    console.log("requires Auth");
  }
  else {
    next(); //allow access to public pages without auth check
  }
});


export default router
