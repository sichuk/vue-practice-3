<template>
  <form class="card">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название </label>
      <input type="text" v-model="title">
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" data-date-format="DD.MM.YYYY" v-model="date">
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea v-model="description"></textarea>
    </div>

    <router-link to="/tasks">
      <button
          class="btn primary"
          @click.prevent="add"
          :disabled="isFalse"
      >Создать
      </button>
    </router-link>

  </form>
</template>


<script>
import {ref, computed} from 'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'


export default {
  setup() {
    const store = useStore()
    const router = useRouter()
    const title = ref('')
    const date = ref('')
    const description = ref('')

    const isFalse = computed(() => description.value.length < 1 || title.value.length < 1 || !date.value)

    function add() {
      store.commit('add', {title, date, description})
      title.value = ''
      date.value = ''
      description.value = ''
      router.push('./')
    }

    return {
      title,
      date,
      description,
      isFalse,
      add
    }
  },
}
</script>