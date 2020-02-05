<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
import { mapMutations } from 'vuex'


export default {
  name: 'App',
  data: () => ({
    //
  }),
  methods: {
    ...mapMutations(['setDrawer', 'toggleDrawer']),
    showDrawer() {
      this.setDrawer(!this.$store.state.drawer)
    }
  }
};
</script>
