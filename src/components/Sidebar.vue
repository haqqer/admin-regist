<template>
    <v-navigation-drawer
        v-model="drawer"
        absolute
        bottom
        temporary
    >
        <v-list
        nav
        dense
        >
        <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
        >
            <v-list-item to="/admin/registrants">
                <v-list-item-icon>
                    <v-icon>mdi-book</v-icon>
                </v-list-item-icon>                
                <v-list-item-title>List Peserta</v-list-item-title>
            </v-list-item>

            <v-list-item to="/admin/scanner">
                <v-list-item-icon>
                    <v-icon>mdi-camera</v-icon>
                </v-list-item-icon>                
                <v-list-item-title>Scan Peserta</v-list-item-title>
            </v-list-item>
        </v-list-item-group>
        </v-list>
    </v-navigation-drawer>  
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
    data: () => ({
        group: {}
    }),
    computed: {
        drawer: {
            get () {
                return this.$store.state.drawer
            },
            set(val) {
                this.setDrawer(val)
            }
    }
    },
    methods: {
        ...mapMutations(['setDrawer', 'toggleDrawer'])
    }
}
</script>

<style>

</style>