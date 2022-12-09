<template>
  <div class="card" v-if="task">
    <h2>{{task.title}}</h2>
    <p><strong>Статус</strong>: <AppStatus :type="'done'" /></p>
    <p><strong>Дэдлайн</strong>: {{task.date}}</p>
    <p><strong>Описание</strong>: {{task.description}}</p>
    <div>
      <button class="btn">Взять в работу</button>
      <button class="btn primary">Завершить</button>
      <button class="btn danger">Отменить</button>
    </div>
  </div>

  <h3 class="text-white center" v-else>
    Задачи с id <strong> {{this.$route.params.taskId}}</strong> нет.
  </h3>
</template>

<script>
import AppStatus from '../components/AppStatus'
import {mapGetters} from "vuex";

export default {
  props: ['taskId'],
  components: {AppStatus},
  computed: {
    ...mapGetters(['getTasks']),
    task() {
      return this.getTasks.find(e => e.id == this.$route.params.taskId)
    },


  }
}
</script>

<style scoped>

</style>