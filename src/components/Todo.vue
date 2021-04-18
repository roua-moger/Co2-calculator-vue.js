<template>
  <div class="todos">
    <h1>Todo App</h1>

    <input @keyup.enter="add" type="text" v-model="title" placeholder="What you want todo?">
    <button @click="add">Add to list</button>

    <ul>
        <li v-for="(todo,index) in todos"
         :key="todo.id"> {{todo}}
         <span @click="remove(index)" class="remove">x</span>
         </li>
    </ul>
    
  </div>
</template>

<script>
export default {
  name: 'todo',
  props: {
    msg: String
  }, 
  data(){
      return {
          title: '',
          todos: [
          
         ]   
      }
  },

  methods: {
      add(){
          if(this.title != ''){
        //this.todos.push(this.title); to add the items under the old one
          this.todos.unshift(this.title); //to add the new item above the old one
          this.title="";
          }
          
      },
      remove(id){
          //this.todos.splice(id, 1);
          this.$delete(this.todos, id);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.remove{
    padding: .3rem .6rem;
    color: red;
    
}
.remove:hover{
    color: rgb(27, 66, 238);
}
ul li{
    padding: .4rem;
}
</style>
