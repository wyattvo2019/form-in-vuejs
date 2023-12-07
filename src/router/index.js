import { createWebHistory, createRouter } from "vue-router"
import Home from "../components/Home.vue"
import Form1 from "../components/Form1.vue"
import Form2 from "../components/Form2.vue"


const routes = [
  {
    path: "/v1",
    name: "Form1",
    component: Form1,
  },
  {
    path: '/v2',
    name: 'Form2',
    component: Form2
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router