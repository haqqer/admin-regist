<template>
    <v-container>
        <v-row align="center" justify="center">
            <v-col cols="8">
                <v-card>
                    <v-card-title>
                        Detail Peserta
                    </v-card-title>
                    <v-card-title>
                        <div class="subtitle-2">
                            {{ checkStatus(registrant.status) }}
                        </div>
                    </v-card-title>
                    <v-card-text>
                        <v-row>
                            <v-col cols="4">
                                <h4>Nama</h4>
                            </v-col>
                            <v-col cols="6">
                                <p>: {{ registrant.name }}</p>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="4">
                                <h4>NIM</h4>
                            </v-col>
                            <v-col cols="6">
                                <p>: {{ registrant.nim }}</p>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="4">
                                <h4>Email</h4>
                            </v-col>
                            <v-col cols="6">
                                <p>: {{ registrant.email }}</p>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="4">
                                <h4>No HP</h4>
                            </v-col>
                            <v-col cols="6">
                                <p>: {{ registrant.phone }}</p>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="4">
                                <h4>Institusi</h4>
                            </v-col>
                            <v-col cols="6">
                                <p>: {{ registrant.institusi }}</p>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="4">
                                <h4>Social Media</h4>
                            </v-col>
                            <v-col cols="6">
                                <p>: {{ registrant.socmed }}</p>
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn v-if="registrant.status < 2" color="success" block="" @click="updateData(2)">Hadir</v-btn>
                        <v-btn v-else-if="registrant.status == 2" color="error" block="" @click="updateData(1)">Batal Hadir</v-btn>
                    </v-card-actions>
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
            socmed: null,
            status: null
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
        },
        async updateData(value) {
            try {
                const regisId = this.$route.params.regisId
                const result = await this.$http.put(this.$store.state.url+'/registrant/status/'+regisId, { status: parseInt(value) })
                if(result) {
                    await this.getData()
                }
            } catch (error) {
                console.log(error)
                alert(error)
            }
        },
        checkStatus(status) {
            if(status == 0) {
                return 'Belum Membayar'
            } else if(status == 1) {
                return 'Sudah Membayar'
            } else if(status == 2) {
                return 'Hadir'
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