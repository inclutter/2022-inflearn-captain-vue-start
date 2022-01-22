import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DataBinding from "@/components/DataBinding";
import Methods from "@/components/Methods";
import Watch from "@/components/Watch";
import WatchVsComputed from "@/components/WatchVsComputed";
import ComputedUsage from "@/components/ComputedUsage";
import ExampleApp from "@/components/ExampleApp";
import AppBody from "@/views/AppBody";
import FormView from "@/views/FormView";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/dataBiding',
    name: 'DataBinding',
    component: DataBinding
  },
  {
    path: '/methods',
    name: 'Methods',
    component: Methods
  },
  {
    path: '/watch',
    name: 'Watch',
    component: Watch
  },
  {
    path: '/watchVsComputed',
    name: 'WatchVsComputed',
    component: WatchVsComputed
  },
  {
    path: '/computedUsage',
    name: 'ComputedUsage',
    component: ComputedUsage
  },
  {
    path: '/computedUsage',
    name: 'ComputedUsage',
    component: ComputedUsage
  },
  {
    path: '/exampleApp',
    name: 'ExampleApp',
    component: ExampleApp
  },
  {
    path: '/appBody',
    name: 'AppBody',
    component: AppBody
  },
  {
    path: '/formView',
    name: 'FormView',
    component: FormView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
