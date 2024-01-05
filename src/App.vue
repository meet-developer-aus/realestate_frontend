<template>
  <div id="app">
    <metainfo>
      <template v-slot:title="{ content }">{{ content ? `${content} | SITE_NAME` : `SITE_NAME` }}</template>
    </metainfo>
    <header />
    <TopMenu @menu-item-selected="selectedMenuItem" />
    <router-view :meta_info="selectedMenu"></router-view>
  </div>
</template>

<script>
import { useMeta } from 'vue-meta';
import { ref } from 'vue';

export default {
  setup() {
    const selectedMenu = ref(null);

    // Set up the meta information
     useMeta({
      title: 'SITE_NAME', // Set a default title
      htmlAttrs: { lang: 'en', amp: true },
      meta: 
        {
          //  name: 'description',
            meta_description: selectedMenu.value ? selectedMenu.value.meta_description || 'Default Description' : 'Default Description',
       
       },
      
    });


    return {
      selectedMenu,
    };
  },
  name: 'App',
  components: {},
  methods: {
    selectedMenuItem(selectedMenu) {
      // Assuming menuItems is not declared elsewhere, you should assign to selectedMenu
      this.selectedMenu = selectedMenu;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
