import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import Users from '@/components/Users'
import Arrays from '@/components/Arrays'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/users',
      name: 'Users',
      component: Users
    },
    {
      path: '/Arrays',
      name: 'Arrays',
      component: Arrays
    }
  ]
})
