<script setup>
    import { ref } from "vue";
    import { Facebook } from "vue-socialmedia-share";
    
    const url = ref("https://github.com/mbj36");
</script>
    
    <template>
    <div class="hello">
      <Facebook :url="url" scale="3"></Facebook>
    </div>
  </template>
  

    