<template>
  <h1 class="text-white center" v-if="tasks.length === 0">Задач пока нет</h1>

  <div v-else>
    <h3 class="text-white">Всего активных задач: {{ counter }}</h3>
    <div class="card" v-for="task in tasks">
      <h2 class="card-title">
        {{ task.title }}
        <AppStatus :type="task.status"/>
      </h2>
      <p>
        <strong>
          <small>
            {{ task.date }}
          </small>
        </strong>
      </p>
      <button class="btn primary" @click="open(task.id)">Посмотреть</button>
    </div>
  </div>


</template>

<script>
import AppStatus from '../components/AppStatus'
import {useStore} from 'vuex'
import {computed} from "vue";
import {router} from "@/router";

export default {
  setup() {
    const store = useStore()
    const tasks = computed(() => store.getters.tasks)
    const counter = computed(() => store.getters.activeCounter)

    return {
      tasks, counter,
      open: id => router.push(`task/${id}`),
    }
  },
  components: {AppStatus},
}
</script>
