<template>
  <div>
    <div v-for="todo in allTTodos" :key="todo.id">
      <TodoItem :todo="todo" />
    
    </div>
    
   <Paginate
    :page-count="20"
    :click-handler="pageChangeHandler"
    :prev-text="'Prev'"
    :next-text="'Next'"
    :container-class="'pagination'"
    />
    
  </div>
</template>

<script>

import TodoItem from "@/components/TodoItem";
import { mapGetters } from "vuex";

export default {
  components: {
    TodoItem
    
  },
 
  methods: {
    
     
   pageChangeHandler() {}
  
  },
  
  computed: {
    ...mapGetters(["allTTodos", "completed"])
    
  },
  
};
 
</script>

<style scoped>
</style>