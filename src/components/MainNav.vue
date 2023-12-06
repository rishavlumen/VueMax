<template>
  <header :class="['text-sm', 'w-full', headerHeightClass]">
    <div class="left-0 top-0 h-16 w-full bg-white">
      <div class="mx-auto flex h-full flex-nowrap border-b border-solid border-brand-grey-1 px-8">
        <a :href="url" class="flex h-full items-center text-xl">{{ companyName }}</a>
        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li class="ml-9 h-full first:ml-0" v-for="menu in menuItems" :key="menu">
              <a href="" class="flex h-full items-center py-2.5">{{ menu }}</a>
            </li>
          </ul>
        </nav>
        <div class="ml-auto flex h-full items-center">
          <profile-image v-if="isLoggedIn" @click="logOutFn" />
          <action-button display-text="Sign In" type="primary" v-else @click="loginFn" />
        </div>
      </div>
      <the-subnav v-if="isLoggedIn"></the-subnav>
    </div>
  </header>
</template>

<script>
import ActionButton from "@/components/shared/ActionButton.vue";
import ProfileImage from "@/components/ProfileImage.vue";
import TheSubnav from "@/components/TheSubnav.vue";

export default {
  name: "MainNav",
  components: { ActionButton, ProfileImage, TheSubnav },

  data() {
    return {
      companyName: "Andromeda",
      url: "https://careers.google.com",
      isLoggedIn: false,
      menuItems: ["Teams", "Locations", "Life At Andromeda", "How We Hire", "Students", "Jobs"],
    };
  },
  computed: {
    headerHeightClass() {
      return {
        "h-16": !this.isLoggedIn,
        "h-32": this.isLoggedIn,
      };
    },
  },
  methods: {
    loginFn() {
      this.isLoggedIn = true;
    },
    logOutFn() {
      this.isLoggedIn = false;
    },
  },
};
</script>
