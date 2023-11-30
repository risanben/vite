import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import CarApp from '../views/CarApp.vue'
import CarDetails from '../views/CarDetails.vue'
import CarEdit from '../views/CarEdit.vue'

const routerOptions = {
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: HomeView,
        },
        {
            path: '/car',
            component: CarApp,
        },
        {
            path: '/car/:_id',
            component: CarDetails,
        },
        {
            path: '/car/edit/:_id?',
            component: CarEdit,
        },
        {
            path: '/about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/AboutView.vue'),
        },
    ],
}
const router = createRouter(routerOptions)
export default router
