import {createLogger, createStore} from "vuex";

export const store = createStore({
    state() {

        const tasks = [
            {
                id: Date.now(),
                title: "Задача 1",
                date: new Date().toLocaleDateString(),
                description: "Описание",
                status: "Active"
            },
            {
                id: Date.now()+1,
                title: "Задача 2",
                date: new Date().toLocaleDateString(),
                description: "Описание",
                status: "Active"
            },
               ]


        return {
            tasks,
            status: 'active',
            name: '',
            date: '',
            title: '',
            description: ''
        }
    },
    getters: {
        getTasks(state) {
            return state.tasks
        }
    },
    mutations: {
        add(state, payload) {
            state.tasks.push({
                id: Date.toLocaleString(),
                title: payload.title.value,
                date: payload.date.value.replace(/(\d*)-(\d*)-(\d*)/,'$3.$2.$1'),
                description: payload.description.value
            }),

                localStorage.setItem('tasks', JSON.stringify(this.state.tasks) )
            console.log(payload.date.value)
        }
    },



})