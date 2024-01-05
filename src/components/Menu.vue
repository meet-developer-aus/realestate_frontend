<template>
  <div>


      <nav class="bg-gray-800 p-4">
      <div class="container mx-auto flex items-center justify-between">
        <!-- Logo -->
        <div class="text-white text-xl font-bold">LOGO</div>

        <!-- Navigation Links (Desktop) -->
        <ul class="hidden md:flex space-x-4">
          <li v-for="menuItem in menuItems" :key="menuItem.id">
            <router-link :to="menuItem.url" class="text-white hover:text-gray-300" @click="updateMetaInfo(menuItem)">{{ menuItem.title }}
              <!-- <p>{{ menuItem.meta_title }}</p>
            <p>{{ menuItem.meta_description }}</p> -->
            </router-link>
          </li>
        </ul>

        <!-- Mobile Navigation Toggle Button -->
        <div class="md:hidden">
          <button  @click="toggleMobileMenu"   class="text-white">
            <!-- Use a different icon for the mobile menu toggle (e.g., burger icon) -->
           <FontAwesomeIcon icon="bars" />
           <!-- Toggle Menu -->
          </button>
             

        </div>
 
        <!-- Mobile Navigation Links (Hidden by default) -->
        <ul v-show="mobileMenuOpen" class="md:hidden absolute top-16 left-0 right-0 bg-gray-800 flex flex-col space-y-2">
          <li v-for="menuItem in menuItems" :key="menuItem.id">
            <router-link :to="menuItem.url" class="text-white hover:text-gray-300 p-2" @click="updateMetaInfo(menuItem)">{{ menuItem.title }}</router-link>

          </li>
                     <button  @click="toggleMobileMenu"   class="text-white self-end mt-auto" >
            <!-- Use a different icon for the mobile menu toggle (e.g., burger icon) -->
           <FontAwesomeIcon icon="bars"  />
           <!-- Toggle Menu -->
          </button>
        </ul>
       

      </div>
    </nav>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '../assets/js/fontowesome.js'
export default {
    components: {
    FontAwesomeIcon,
  },
  name: 'MenuView',
  data() {
    return {
      menuItems: [],
      mobileMenuOpen: false,
      
    };
  },
  mounted() {
    this.fetchMenuItems();
    
  },
  methods: {

    async fetchMenuItems() {
      try {
        const response = await fetch('http://192.168.48.1:8000/api/menus');
        const data = await response.json();
        this.menuItems = data.map(menuItem => ({
            title: menuItem.title,
            url: menuItem.url,
            meta_title: menuItem.meta_title,
            meta_description: menuItem.meta_description,
        }));
      } catch (error) {
        console.error('Error fetching menu data:', error);
      }
    },
    toggleMobileMenu() {
console.log('Button clicked! Triggering JavaScript function.');
      this.mobileMenuOpen = !this.mobileMenuOpen;
      //console.log(this.mobileMenuOpen )
    },

    updateMetaInfo(menuItem) {
     // console.log(menuItem)

      //emit even for catch in parent app.vue
      this.$emit('menu-item-selected', menuItem);
    }
    // ... other methods
    
  },
  
  
};
</script>

<style scoped>
/* Add your component-specific styles here if needed */
</style>
