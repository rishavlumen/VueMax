<template>
  <img :src="imageLocation" alt="user profile image" class="h-8 w-8 rounded-3xl object-contain" />
</template>

<script>
export default {
  name: "ProfileImage",

  data() {
    return {
      imageLocation: "/VueMax/images/pfimage.jpg",
    };
  },
};
</script>
