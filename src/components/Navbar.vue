<template>
    <v-app-bar
      app
      color="primary"
      dark
      dense=""
    >
      <v-app-bar-nav-icon @click.stop="showDrawer"></v-app-bar-nav-icon>
      <!-- <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div> -->

      <v-spacer></v-spacer>

      <v-btn
        @click="logout"
        text
      >
        <span class="mr-2">Logout</span>
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>    
</template>
<script>
import { mapMutations } from 'vuex'
export default {
    name: 'Navbar',
    methods: {
        ...mapMutations(['setDrawer', 'toggleDrawer']),
        showDrawer() {
            this.setDrawer(!this.$store.state.drawer)
        },
        logout() {
          this.$store.dispatch('logout')
          this.$router.push('/login')
        }
    }    
}
</script>