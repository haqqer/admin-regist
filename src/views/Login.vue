<template>
  <v-container fluid class="fill-height">
      <v-row align="center" justify="center">
        <v-col cols="12" md="4" sm="8">
            <v-card>
                <v-toolbar
                    color="primary"
                    dark
                    flat
                >
                    <v-toolbar-title>Login</v-toolbar-title>
                    <v-spacer></v-spacer>
                </v-toolbar>
                <v-card-text>
                    <v-spacer></v-spacer>
                    <v-form>
                        <v-text-field v-model="email" label="email" name="email" prepend-icon="mdi-email" type="text"/>
                        <v-text-field v-model="password" label="password" name="password" prepend-icon="mdi-key" type="password" @keyup.enter="login"/>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-row class="text-center">
                        <v-col cols="12">
                            <v-btn color="primary" @click.prevent="login">Login</v-btn>
                        </v-col>
                    </v-row>
                </v-card-actions>
            </v-card>
        </v-col>
      </v-row>
  </v-container>
</template>

<script>
export default {
    data: () => ({
        email: '',
        password: '',
    }),
    methods: {
        async login() {
            try {
                const auth = {
                    email: this.email,
                    password: this.password,
                }
                const result = await this.$store.dispatch('login', auth)
                this.$router.push('/admin')
            } catch (error) {
                console.log(error)
                alert('gagal login')
            }
        }
    }

}
</script>

<style>

</style>