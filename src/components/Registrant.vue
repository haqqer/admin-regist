<template>
    <v-container>
        <v-row align="center" justify="center">
            <v-col cols="12">
                <v-card>
                    <v-card-text>
                        <p>Nama : {{ registrant.name }}</p>
                        <p>NIM : {{ registrant.nim }}</p>
                        <p>Email : {{ registrant.email }}</p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        registrant: {
            name: null,
            nim: null,
            email: null,
            phone: null,
            institute: null,
            socmed: null
        }
    }),
    methods: {
       async getData() {
           try {
               const regisId = this.$route.params.regisId
               console.log(regisId)
               const result = await this.$http.get(this.$store.state.url+'/registrant/'+regisId)
               this.registrant = result.data.data 
           } catch (error) {
               console.log(error)
           }
        }
    },
    mounted() {
        this.getData()
    }

}
</script>

<style>

</style>