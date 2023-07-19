import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',

    component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
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
  //,

  // {
  //   path: '/html',
  //   name: 'html',
  //   component: () => import('./components/HtmlLecciones.vue'),
  // },
  // {
  //   path: '/javascript',
  //   name: 'javascript',
  //   component: () => import('./components/JavaScriptLecciones.vue'),
  // },
  // {
  //   path: '/css',
  //   name: 'css',
  //   component: () => import('./components/CssLecciones.vue'),
  // },
  // {
  //   path: '/python',
  //   name: 'python',
  //   component: () => import('./components/PythonLecciones.vue'),
  // },
  // {
  //   path: '/java',
  //   name: 'java',
  //   component: () => import('./components/JavaLecciones.vue'),
  // }





  // --------------esto es par permitir  si estas autenticado seguir
  // {
  //   path: '/card/:id',
  //   name: 'CardDetails',
  //   component: CardDetailsView,
  //   beforeEnter: (to, from, next) => {
  //     // Verificar si el usuario está autenticado
  //     if (isAuthenticated()) {
  //       // Permitir el acceso a la ruta
  //       next();
  //     } else {
  //       // Redirigir al login si el usuario no está autenticado
  //       next({ name: 'Login' });
  //     }
  //   }
  // },
  // {
  //   path: '/login',
  //   name: 'Login',
  //   component: LoginView
  // }
];




const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// function isAuthenticated() {
//   const session = supabase.auth.session();
//   return session !== null;
// }

export default router
