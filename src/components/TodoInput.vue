<template>
  <div>
    <div class="row">
      
      <input
        @change="todoTextChange"
        v-bind:value="todoText"
        class="col form-control mr-2"
        type="text"
      />
    
      
      <button @click="addTodoI" class="btn btn-primary">Add</button>
     
    </div>
    <h5 class="error">{{this.error}}</h5>
    
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { v1 } from "uuid";

export default {
  data() {
    return {
     
      todoText: "",
      error: ''
    };
  },

  methods: {
    
    ...mapActions(["addTodo"]),
    todoTextChange(e) {
      this.todoText = e.target.value;
    },
   
    addTodoI() {
      if (this.todoText != "" && this.todoText.length < 15) {
      this.error = "";
      this.addTodo({
        
        id: v1(),
        title: this.todoText,
        complete: false
      });
      
      }else{
        
        this.error = "Текст пустой или слишком длинный!!!" ;
        
        
        this.todoText = "";
      }
      this.todoText = "";
      
    }
    
    
      
      
    
    
  }
  
};

</script>

<style scoped>
</style>