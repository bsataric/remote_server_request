<template>
  <div id="app">
    <treeselect :options="options" />
  </div>
</template>
<script>
// import the component
import Treeselect from '@riophae/vue-treeselect'
// import the styles
import '@riophae/vue-treeselect/dist/vue-treeselect.css'

export default {
  // register the component
  components: { Treeselect },
  data() {
    return {
      // define the default value
      value: null,
      // define options
      options: [
        {
          id: 'a',
          label: 'a',
          children: [],
        },
        {
          id: 'b',
          label: 'b',
        },
        {
          id: 'c',
          label: 'c',
        },
      ],
    }
  },

  created() {
    for (let i = 0; i < 500; i++) {
      this.options[0].children.push({
        id: i,
        label: i,
      })
    }

    Object.freeze(this.options)
  },
}
</script>
