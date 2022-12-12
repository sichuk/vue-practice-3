import {createRouter, createWebHistory} from "vue-router";
import New from "./views/New"
import Task from "./views/Task"
import Tasks from "./views/Tasks";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/new', component: New},
        {path: '/', component: Tasks, alias: '/'},
        {path: '/task/:taskId', component: Task, props: true}
    ],
    linkActiveClass: 'active',
    linkExactActiveClass: 'active'
})