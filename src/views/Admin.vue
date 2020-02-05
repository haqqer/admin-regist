<template>
  <v-app>
    <Navbar/>
    <v-content>
      <Sidebar/>
      <router-view></router-view>
    </v-content>    
  </v-app>
</template>

<script>
import { mapMutations } from 'vuex'
import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Navbar'

export default {
  name: 'Admin',
  components: {
    Sidebar,
    Navbar
  },
  methods: {
    ...mapMutations(['setDrawer', 'toggleDrawer']),
    showDrawer() {
      this.setDrawer(!this.$store.state.drawer)
    }    
  }
}
</script>

<style>

</style>