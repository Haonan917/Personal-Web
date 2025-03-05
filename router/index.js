import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Main',
        component: () => import('../views/Main'),
        redirect:'/About',
        children:[
            {
                path: '/About',
                name: 'About',
                component: () => import('../views/About.vue'),
            },
            {
                path: '/Projects',
                name: 'Projects',
                component: () => import('../views/Projects.vue'),
            },
            {
                path: '/Publications',
                name: 'Publications',
                component: () => import('../views/Publications.vue'),
            },
            {
                path: '/Teaching',
                name: 'Teaching',
                component: () => import('../views/Teaching.vue'),
            },

            {
                path: '/Honors',
                name: 'Honors',
                component: () => import('../views/Honors.vue'),
            },
            {
                path: '/Selected',
                name: 'Selected',
                component: () => import('../views/Selected.vue'),
            },
            {
                path: '/Awesome',
                name: 'Awesome',
                component: () => import('../views/Awesome.vue'),
            },
            {
                path: '/Letter',
                name: 'Letter',
                component: () => import('../views/Letter.vue'),
            },
        ]
    }
]

const router = new VueRouter( {
    mode: 'history', //网页上的#不显示
    routes
  })

  const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

  export default router