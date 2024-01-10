<template>
  <div>
    <nav class="bg-gray-800 p-4">
      <div class="container mx-auto flex items-center justify-between">
        <!-- Logo -->
        <div class="text-white text-xl font-bold">LOGO</div>

        <!-- Navigation Links (Desktop) -->
        <ul class="hidden md:flex space-x-4">
          <li v-for="menuItem in menuList" :key="menuItem.id">
            <router-link :to="menuItem.url" class="text-white hover:text-gray-300" @click="selectMenu(menuItem)">
              {{ menuItem.title }}
            </router-link>
          </li>
        </ul>

        <!-- Mobile Navigation Toggle Button -->
        <div class="md:hidden">
          <button @click="toggleMobileMenu" class="text-white">
            <!-- Use a different icon for the mobile menu toggle (e.g., burger icon) -->
            <FontAwesomeIcon icon="bars" />
            <!-- Toggle Menu -->
          </button>
        </div>

        <!-- Mobile Navigation Links (Hidden by default) -->
        <ul v-show="mobileMenuOpen" class="md:hidden absolute top-16 left-0 right-0 bg-gray-800 flex flex-col space-y-2">
          <li v-for="menuItem in menuList" :key="menuItem.id">
            <router-link :to="menuItem.url" class="text-white hover:text-gray-300 p-2" @click="selectMenu(menuItem)">
              {{ menuItem.title }}
            </router-link>
          </li>
          <button @click="toggleMobileMenu" class="text-white self-end mt-auto">
            <!-- Use a different icon for the mobile menu toggle (e.g., burger icon) -->
            <FontAwesomeIcon icon="bars" />
            <!-- Toggle Menu -->
          </button>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { onBeforeMount, ref } from 'vue';
import { FontAwesomeIcon } from '../../../assets/js/fontowesome.js';

import { useMenuStore } from '../../store/useMenuStore.js';
import { storeToRefs } from 'pinia';

export default {
  setup() {
    const store = useMenuStore();

    // Call the fetchMenuItems action before the component is mounted
    onBeforeMount(() => {
      store.fetchMenuItems();
     // console.log('Fetch triggered');
    });

    const { menuList } = storeToRefs(store);
    const mobileMenuOpen = ref(false);

    const toggleMobileMenu = () => {
   //   console.log('Button clicked! Triggering JavaScript function.');
      mobileMenuOpen.value = !mobileMenuOpen.value;
    };

    const selectMenu = (menuItem) => {
      // Update the selected menu in the store
      store.setSelectedMenu(menuItem);
     // console.log(store.selectedMenu)
      // Close the mobile menu if it's open
      mobileMenuOpen.value = false;
    };

    return { menuList, mobileMenuOpen, toggleMobileMenu, selectMenu };
  },
  components: {
    FontAwesomeIcon,
  },
};
</script>

<style scoped>
/* Add your component-specific styles here if needed */
</style>
