<!-- /src/views/About.vue -->
<template>
  <div>
    <h2>News Page</h2>
    <p>This is the News page content.</p>
  </div>
</template>

<script>
import { useMeta } from 'vue-meta'

export default {
  name: 'NewsView',
   props: ['meta_info'],
   setup (props) {
    console.log('props.meta_info:', props.meta_info);
   useMeta({
         title: props.meta_info && props.meta_info.meta_title ? props.meta_info.meta_title : 'Default Title',
      meta: 
        {
          // name: 'description',
           meta_description: props.meta_info && props.meta_info.meta_description ? props.meta_info.meta_description : 'Default Description',
        },
      
    });
  }
};
</script>

<style scoped>
/* Your component styles go here */
</style>