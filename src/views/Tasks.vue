<template >
   <h1 class="text-white center" v-if="getTasks.length===0">Задач пока нет</h1>

<div v-else>
  <h3 class="text-white">Всего активных задач: {{ tasks.length }}</h3>
  <div class="card" v-for="task in tasks">
    <h2 class="card-title">
      {{ task.title }}
      <AppStatus :type="'done'"/>
    </h2>
    <p>
      <strong>
        <small>
          {{ task.date}}
          </small>
      </strong>
    </p>
    <router-link :to="'/task/'+task.id">
      <button class="btn primary" >Посмотреть</button>
    </router-link>

  </div></div>


</template>

<script>
import AppStatus from '../components/AppStatus'
import {mapGetters} from 'vuex'

export default {
  components: {AppStatus},
  computed: {
    ...mapGetters(['getTasks']),
    tasks() {
      return JSON.parse(localStorage.getItem('tasks'))
    }
  },
}
</script>
