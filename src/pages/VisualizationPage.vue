<template>
  <div class="container mx-auto">
    <PlatformPicker />
  </div>
</template>

<script>
import PlatformPicker from '../components/PlatformPicker.vue'

export default {
  components: {
    PlatformPicker,
  },
  data() {
    return {
      count: 0,
    };
  },
}
</script>
