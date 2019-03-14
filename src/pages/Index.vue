<template>
  <!-- edit from local -->
  <q-page class="flex flex-center">
           <br><br>
        <q-btn color="primary" to="/payroll" label="Go to Payroll Page" />
    <q-modal v-model="opened">
    <h4>Basic Modal</h4>
    <q-input v-model="text" type="number" stack-label="text"/>
    <!-- <q-input else v-model="text" stack-label="Text" /> -->
      <q-btn
        color="primary"
        @click="closeModal"
        label="Close"
      />
      <q-btn v-if="edit" label="update" color="green" @click="updateTodo"/>
      <q-btn v-else label="add" color="green" @click="addTodo"/>
      <!-- <q-btn :label="edit ? 'update' : 'add'" color="green" @click="edit ? updateTodo : addTodo"/> -->
    </q-modal>

    <!-- <img alt="Quasar logo" src="~assets/quasar-logo-full.svg"> -->
    <h3>Todo List</h3>
    <!-- <input type="text" label="list" v-model="text"> -->
    <!-- <div class="row">
      <div class="col">
        <p>{{text}}</p>
      </div>
    </div> -->
    <q-btn label="add" color="green" @click="openModal"/>
    <!-- <input type="button" value="add" v-on:click="addTodo"> -->
    <br>
    <li v-for="(todo, i) in fbTodo" :key="i">
      <div v-if="!todo.edit">{{i}}:{{todo.text}}</div>
      <!-- unique key in firebase is arrayname['.key'] -->
      <!-- <div v-if="!todo.edit">{{todo['.key']}}:{{todo.text}}</div> -->
      <div v-else>Edit:
        <!-- <input type="text"
        value="Text"
        v-model="todo.text"> -->
        <q-input v-model="todo.text" stack-label="Text" />
      </div>
      <q-btn label="del" color="red" @click="delTodo(todo['.key'])"/>
      <!-- <input type="button"
       value="del"
       v-on:click="delTodo(i)"> -->
       <!-- edit list -->
      <q-btn label="edit" class="button-edit" @click="editModal(todo, todo['.key'])"/>
      <!-- <q-btn v-else label="save" color="grey" @click="todo.edit = false"/> -->
      <!-- <input v-if="!todo.edit"
      type="button"
      value="edit"
      v-on:click="todo.edit = true">
      <input v-else
      type="button"
      value="save"
      v-on:click="todo.edit = false"> -->
    </li>
    <!-- <div class="row">
      {{fbTodo}}
    </div> -->
  </q-page>
</template>

<style>
/* period for class and hastag for id */
.button-edit {
  background: #a2aa33;
  /* color: #ffff; */
}
</style>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      text: 0,
      index: 0,
      edit: false,
      opened: false,
      todos: [
        { text: 'hello', edit: false },
        { text: 'hi', edit: false }
      ],
      fbTodo: []
    }
  },
  created () {
    this.$bindAsArray('fbTodo', this.$db.ref('todo'))
    // this.fbTodo = this.$db.ref('todo')
    // return this.fbTodo
  },
  methods: {
    addTodo () {
      this.$db.ref('todo').push({
        text: this.text,
        edit: false
      })
      // this.todos.push({
      //   text: this.text,
      //   edit: false
      // })
      this.opened = false
      // this.$q.loading.show({
      //   message: 'Some message',
      //   messageColor: '#00ff00',
      //   spinner: 'dots',
      //   spinnerSize: 250, // in pixels
      //   spinnerColor: '#f034a3'
      // })
      // setTimeout(this.goToPayroll, 3000)
      // this.$q.loading.hide()
    },
    goToPayroll () {
      this.$router.push('/payroll')
    },
    updateTodo () {
      // target object or data, index or key, value
      // this.$set(this.todos, this.index, { edit: false, text: this.text })
      this.$db.ref('todo/' + this.index).set({
        edit: false, text: this.text
      })
      this.opened = false
    },
    openModal () {
      this.text = ''
      this.edit = false
      this.opened = true
      // if (i > 0) {
      //   this.index = i
      // } else {
      //   this.index = null
      // }
    },
    closeModal () {
      this.text = ''
      this.opened = false
    },
    editModal (data, i) {
      this.edit = true
      this.index = i
      alert('todo text is : ' + data.text + ' todo index is: ' + i)
      this.opened = true
      this.text = data.text
    },
    editTodo (i) {
      this.$router.push({ path: `payroll/${i}` })
    },
    delTodo (i) {
      // i is the index number
      // var todo = this.todos
      // alert('index number' + i)
      // console.log(i)
      // todo.splice(i, 1)
      this.$db.ref('todo').child(i).remove()
    }
  }
}
</script>
