import { createRouter, createWebHistory } from 'vue-router'
import T1 from '../views/T1.vue'
import T2 from '../views/T2.vue'
import T3 from '../views/T3.vue'
import T4 from '../views/T4.vue'
import T5 from '../views/T5.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/t1',
      name: 't1',
      component: T1
    },
    {
      path: '/t2',
      name: 't2',
      component: T2
    },
    {
      path: '/t3',
      name: 't3',
      component: T3
    },
    {
      path: '/t4',
      name: 't4',
      component: T4
    },
    {
      path: '/t5',
      name: 't5',
      component: T5
    },
    // {
    //   path: '/',
    //   name: 't6',
    //   component: T6
    // },
    // {
    //   path: '/',
    //   name: 't7',
    //   component: T7
    // },
    // {
    //   path: '/',
    //   name: 't8',
    //   component: T8
    // },
    // {
    //   path: '/',
    //   name: 't9',
    //   component: T9
    // },
    
  ]
})

export default router
