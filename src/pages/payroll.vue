<template>
  <q-page class="q-pa-lg">
    <q-modal v-model="opened">
      <div class="col-12">
        <h3>Todo List</h3>
        <q-btn @click="openModal" label="SET" />
        <br><br>
        <p>FirstName: {{answer.firstname}}</p>
        <p>LastName: {{answer.lastname}}</p>
        <p>Salary per Hour: {{answer.salary}}</p>
        <p>Hours Rendered: {{answer.hours}}</p>
        <p>Computed Salary: {{answer.salary * answer.hours}}</p>
        <p>Philhealth Deduction: {{(answer.salary * answer.hours) * .0275}}</p>
        <p>SSS Deduction: {{(answer.salary * answer.hours) * .0363}}</p><br>
        <p>OUTPUT</p>
        <p>TOTAL: {{(answer.salary * answer.hours)-(((answer.salary * answer.hours) * .0363)+(answer.salary * answer.hours) * .0275)}}</p>
        <p>FULLNAME: {{answer.firstname + " " + answer.lastname}}</p>
      </div>
    </q-modal>
    <!-- <img alt="Quasar logo" src="~assets/quasar-logo-full.svg"> -->
    <div class="row">
      <div class="q-pa-lg">
        <h4 class="q-mt-none">{{index == null ? 'Salary Deduction Calculator' : 'Update Todo'}}</h4>
        <div class="row q-mb-sm">
          <div class="col">
            <q-input type="text" float-label="First Name" v-model="answer.firstname" />
            <q-input type="text" float-label="Last Name" v-model="answer.lastname" />
            <q-input type="text" float-label="Salary per hour" v-model="answer.salary" />
            <q-input type="text" float-label="Hour Rendered" v-model="answer.hours" />
          </div>
        </div>
        <q-btn color="red" @click="opened = false" label="Close" />
        <q-btn color="primary" v-bind:label="index == null ? 'Set' : 'Update'" @click="index == null ? opened = true : updateIndex()" />
        <br><br>
        <q-btn color="primary" to="/" label="Go to Main Page" />
        <p>{{id}}</p>
        <q-input stack-label="text" v-model="text" />
        <q-btn color="secondary">UPDATE</q-btn>
      </div>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      id: this.$route.params.id,
      answer: {},
      opened: false,
      index: null,
      todos: [
        { 'text': 'hello', isEdit: false },
        { text: 'hi', 'isEdit': false }
      ]
    }
  },
  methods: {
    addTodo () {
      console.log(this.answer)
      this.text = {}
      this.opened = false
    },
    openModal () {
      this.opened = true
      this.text = ''
      this.index = null
    },
    editModal (i) {
      this.opened = true
      this.text = this.todos[i].text
      this.index = i
    },
    updateIndex () {
      if (this.index != null) {
        this.todos[this.index].text = this.text
        this.text = ''
        this.opened = false
      }
    },
    deleteTodo (index) {
      this.todos.splice(index, 1)
    }
  }
}
</script>
