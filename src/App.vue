<template>
  <div id="app">
    <metainfo>
      <template v-slot:title="{ content }">{{ content ? `${content} | SITE_NAME` : `SITE_NAME` }}</template>
    </metainfo>
    <header />
    <TopMenu  />
    <router-view :meta_info="selectedMenu"></router-view>
  </div>
</template>

<script>
import { useMeta } from 'vue-meta';
import { watch, toRefs } from 'vue';
import { useMenuStore } from './components/store/useMenuStore';
export default {
  setup() {
    
     const selectedMenuStore = useMenuStore();
     
   const { selectedMenu } = toRefs(selectedMenuStore);

    // Watch for changes in selectedMenuStore.selectedMenu
    watch(() => selectedMenuStore.selectedMenu, (newValue) => {
      // Update the local selectedMenu when the store's selectedMenu changes
      selectedMenu.value = newValue;
    });
    // Set up the meta information
     useMeta({
      title: 'SITE_NAME', // Set a default title
      htmlAttrs: { lang: 'en', amp: true },
      meta: {
        meta_description:
          selectedMenuStore.selectedMenu?.meta_description || 'Default Description',
      },
      
    });


    return {
      selectedMenu,   selectedMenuStore,
    };
  },
  name: 'App',
  components: {},
  methods: {
    // selectedMenuItem(selectedMenu) {
    //   // Assuming menuItems is not declared elsewhere, you should assign to selectedMenu
    //   this.selectedMenu = selectedMenu;
    // },

    
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
