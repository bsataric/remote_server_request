<template>
  <v-app>
    <!--    <div class="home">
      <v-treeview :items="items"></v-treeview>
    </div> -->
  </v-app>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from 'vue-property-decorator'
import axios from 'axios'

@Component({})
export default class Home extends Vue {
  @Prop(Object) readonly keyCloakToken: Record<string, any> | undefined

  @Watch('events')
  onEventsReceived(val: any, oldVal: any) {
    this.output = val
    //console.log('OUTPUT: ' + this.output)
  }
  private events: any = null
  private output: any = null

  created() {
    console.log('HOME RECEIVED KEYTOKEN: ' + JSON.stringify(this.keyCloakToken))
    axios
      .get('http://localhost:3000/events')
      .then((response) => {
        //console.log('RESPONSE DATA: ' + JSON.stringify(response.data))
        this.events = response.data
      })
      .catch((error) => {
        console.log('There was an error: ' + error.response)
      })
  }
}
</script>
