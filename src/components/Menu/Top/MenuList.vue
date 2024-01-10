<template>
<div>
  list here
  <div v-for="menuItem in menuList" :key="menuItem.id">
    <span>{{ menuItem.title }}</span>
    <!-- <span :class="{ completed: menuItem.completed }" @click.stop="toggleCompleted(menuItem.id)">&#10004;</span> -->
 <span @click="deleteMenuItem(menuItem.id)">&#10060;</span>
  </div>
</div>
</template>
<script>
import { useMenuStore } from '../../store/useMenuStore'
import { storeToRefs } from "pinia";
export default {
    setup () {
         const store = useMenuStore()
         // storeToRefs lets menuList keep reactivity:
    const { menuList } = storeToRefs(store);

// destructuring action method doesn't require using storeToRefs:
    const { toggleCompleted } = store;
     const { deleteMenuItem } = store;
    return { menuList,toggleCompleted,deleteMenuItem };

       
    }
}
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>