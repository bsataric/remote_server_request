import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Keycloak from 'keycloak-js'

Vue.config.productionTip = false

/* new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

 */
const initOptions = {
  url: 'https://auth.cern.ch/auth',
  realm: 'cern',
  clientId: 'cms-hlt-gui-test',
}

const keycloak = Keycloak(initOptions)

keycloak
  .init({ onLoad: 'login-required', flow: 'implicit' })
  .then((auth) => {
    if (!auth) {
      window.location.reload()
    } else {
      Vue.set(store, 'token', keycloak.token)
      new Vue({
        store,
        render: (h) => h(App, { props: { keycloak: keycloak } }),
      }).$mount('#app')
    }

    //Token Refresh
    setInterval(() => {
      keycloak
        .updateToken(70)
        .then((refreshed) => {
          //Vue.$log.error("Refreshed token");
          console.log('Refreshed token')
        })
        .catch(() => {
          //Vue.$log.error("Failed to refresh token");
          console.log('Failed to refresh token')
        })
    }, 6000)
  })
  .catch(() => {
    //Vue.$log.error("Authenticated Failed");
  })
