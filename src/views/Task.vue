<template>
  <div class="card" v-if="task">
    <h2>{{ task.title }} </h2>
    <p><strong>Статус</strong>:
      <AppStatus :type="type"/>
    </p>
    <p><strong>Дэдлайн</strong>: {{ task.date }}</p>
    <p><strong>Описание</strong>: {{ task.description }}</p>
    <div>

      <button class="btn" @click="setStatus('pending')">Взять в работу</button>
      <button class="btn primary" @click="setStatus('done')">Завершить</button>
      <button class="btn danger" @click="setStatus('cancelled')">Отменить</button>
    </div>
  </div>

  <h3 class="text-white center" v-else>
    Задачи с id <strong> {{ $route.params.taskId }}</strong> нет.
  </h3>
</template>

<script>
import AppStatus from '../components/AppStatus'
import {useStore} from "vuex"
import {computed, ref} from "vue"
import {useRoute} from "vue-router"

export default {
  setup() {
    const store = useStore()
    const route = useRoute()
    const id = route.params.taskId

    function setStatus(val) {
      store.commit('setStatus', {id, val})
      type.value = val
    }

    const task = computed(() => store.state.tasks.find(e => e.id == route.params.taskId))
    const type = ref(task.value.status)

    return {
      task, route, setStatus, id, type
    }
  },
  components: {AppStatus},


}
</script>

<style scoped>

</style>