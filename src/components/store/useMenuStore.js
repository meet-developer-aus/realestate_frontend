import { defineStore } from 'pinia';

export const useMenuStore = defineStore('menuStore', {
  // state
  state: () => ({
    menuList: [],
    selectedMenu: null,
  }),
  // actions
  actions: {
    setSelectedMenu(menuItem) {
      this.selectedMenu = menuItem;
     
    },
    addMenuItem(menuItem) {
      this.menuList.push({ menuItem, id: this.id++, completed: false });
      //  console.log(this.menuList)
    },
    toggleCompleted(idToFind) {
      const menu = this.menuList.find((obj) => obj.id === idToFind);
      if (menu) {
        menu.completed = !menu.completed;
      }
      console.log(this.menuList);
    },
    deleteMenuItem(menuItemID) {
      this.menuList = this.menuList.filter((object) => {
        return object.id !== menuItemID;
      });
    },
    async fetchMenuItems() {
      try {
        const response = await fetch('http://192.168.48.1:8000/api/menus');
        const data = await response.json();
        this.menuList = data.map((menuItem) => ({
          title: menuItem.title,
          url: menuItem.url,
          meta_title: menuItem.meta_title,
          meta_description: menuItem.meta_description,
        }));
        console.log(this.menuList);
        console.log('The menu is loaded here');
      } catch (error) {
        console.error('Error fetching menu data:', error);
      }
    },
  },
});
