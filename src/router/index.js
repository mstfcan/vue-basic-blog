import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import SinglePost from '@/components/SinglePost'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/single-post',
      name: 'SinglePost',
      component: SinglePost
    }
  ]
})
