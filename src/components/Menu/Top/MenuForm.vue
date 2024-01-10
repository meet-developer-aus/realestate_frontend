<template>
    <form @submit.prevent="addMenuAndClear">
    <input v-model="menu" type="text" /><button>Add</button>
  </form>
</template>

<script>
import { ref } from "vue";

import { useMenuStore } from '../../store/useMenuStore.js'
export default {

setup() {
    const menu = ref("");
    const store = useMenuStore()

    function addMenuAndClear() {
  if (menu.value.length === 0) {
    return
  }
  // invokes function in the store:
  store.addMenuItem(menu.value)
  menu.value = ''
}

    return { menu,addMenuAndClear };

  },

}
</script>

<style>

</style>