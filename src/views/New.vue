<template>
  <form class="card">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" v-model="title" id="title">
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" data-date-format="DD.MM.YYYY" v-model="date" id="date">
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea v-model="description" id="description"></textarea>
    </div>

    <button
        class="btn primary"
        @click.prevent="add"
        :disabled="isFalse"
    >Создать
    </button>
  </form>
</template>


<script>
export default {
  data() {
    return{
    title:'',
      date:'',
      description:''
    }
  },
  methods: {
    add() {
      this.$store.commit('add', {
        title,
        date,
        description
      })
      title.value = ''
      date.value = ''
      description.value = ''
    }
  },
  computed:{
    isFalse () {
      return this.description.length<3 || this.title.length<3 || !this.date
    }
  }



}
</script>