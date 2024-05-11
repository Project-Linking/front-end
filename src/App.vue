<template>
  <v-app>
    <navigation-bar />
    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
    <bottom-navigation-bar />
  </v-app>
</template>

<script>
import NavigationBar from "./components/global/NavigationBar.vue";
import BottomNavigationBar from "./components/global/BottomNavigationBar.vue";
export default {
  components: { NavigationBar, BottomNavigationBar },
  name: "App",
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
