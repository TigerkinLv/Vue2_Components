import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/views/Home";
import DatePickerDemo from "@/views/DatePickerDemo";
import LineInputDemo from "@/views/LineInputDemo";
import LinePickerDemo from "@/views/LinePickerDemo";
import QADemo from "@/views/QADemo";
import NoticeDemo from "@/views/NoticeDemo";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/date-picker-demo',
    name: 'DatePickerDemo',
    component: DatePickerDemo
  },
  {
    path: '/line-input-demo',
    name: 'LineInputDemo',
    component: LineInputDemo
  },
  {
    path: '/line-picker-demo',
    name: 'LinePickerDemo',
    component: LinePickerDemo
  },
  {
    path: '/qa-demo',
    name: 'QADemo',
    component: QADemo
  },
  {
    path: '/notice-demo',
    name: 'NoticeDemo',
    component: NoticeDemo
  },
]

const router = new VueRouter({
  routes
})

export default router;