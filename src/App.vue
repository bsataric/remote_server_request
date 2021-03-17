/* eslint-disable prettier/prettier */
<template>
  <div id="app">
    <Home :keyCloakToken="keycloak" />
  </div>
</template>

<script lang="ts">
import Home from './views/Home.vue'

import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  components: {
    Home,
  },
})
export default class App extends Vue {
  @Prop(Object) readonly keycloak: Record<string, any> | undefined

  created() {
    //console.log('KEYCLOAK' + JSON.stringify(this.keycloak))
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
