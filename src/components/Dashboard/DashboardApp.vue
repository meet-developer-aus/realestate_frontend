<template>
  <div class="flex">
    <div class="w-1/6 bg-gray-200 p-4">
     <LeftMenu />
    </div>
    <div class="flex-grow p-4">
      <h1 class="text-2xl font-bold mb-4">Dashboard for User {{ userRole }}</h1>
       <MenuApp />
    </div>
  </div>
</template>

<script>
import MenuApp from '../Menu/Top/MenuApp.vue'
import LeftMenu from '../Menu/Left/LeftMenu.vue'

export default {
    props: ['userRole'],
    components: {
    // Register MyComponent for use in the template
    MenuApp, 
    LeftMenu,
  },
    setup (props) {
        
    console.log(props.userRole)
        return { }
    }
}
</script>

<style lang="scss" scoped>

</style>