import {createStore} from "vuex";

export const store = createStore({
    state() {
        return {
            now: new Date().toLocaleDateString(),
            tasks: [
                {
                    id: Date.now(),
                    title: "Задача 1",
                    date: new Date().toLocaleDateString(),
                    description: "Описание",
                    status: "active"
                },
                {
                    id: Date.now() + 1,
                    title: "Задача 2",
                    date: new Date().toLocaleDateString(),
                    description: "Описание",
                    status: "active"
                },
            ],

            status: 'active',
            name: '',
            date: '',
            title: '',
            description: '',

        }
    },
    getters: {
        tasks(state) {
            return state.tasks
        },
        activeCounter(state) {
            return state.tasks.filter(t => t.status === 'active').length
        }
    },
    mutations: {
        add(state, payload) {
            state.tasks.push({
                id: Date.now(),
                title: payload.title.value,
                date: payload.date.value.replace(/(\d*)-(\d*)-(\d*)/, '$3.$2.$1'),
                description: payload.description.value,
                status: Date.parse(payload.date.value) > Date.now() ? 'active' : 'cancelled'
            })
        },
        setStatus(state, payload) {
            const el = state.tasks.find(e => e.id == payload.id)
            el.status = payload.val

        },
    }
})