<template>
  <div class="home">
    {{ output }}
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import axios from 'axios'

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  @Watch('events')
  onEventsReceived(val: any, oldVal: any) {
    this.output = val
    //console.log('OUTPUT: ' + this.output)
  }
  private events: any = null
  private output: any = null

  created() {
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
