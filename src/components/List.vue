<template>
    <v-container>
        <div class="text-center">
            <h2>Daftar Peserta</h2>
        </div>
        <v-row align="center" justify="center">
            <v-col cols="12">
                <v-data-table
                    :headers="header"
                    :items="registrants"
                >
                    <template v-slot:item.status="{ item }">
                        <span v-if="item.status == 2">
                            Hadir
                        </span>
                        <span v-else>
                            Tidak Hadir
                        </span>
                    </template>
                    <template v-slot:item.action="{ item }">
                        <v-btn icon color="primary" @click="showRegistrant(item)">
                            <v-icon>mdi-eye</v-icon>
                        </v-btn>
                        <v-btn icon color="error"  @click="deleteRegistrant(item)">
                            <v-icon>mdi-delete</v-icon>
                        </v-btn>
                        <v-btn icon color="success">
                            <v-icon>mdi-pencil</v-icon>
                        </v-btn>
                    </template>
                </v-data-table>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        dialog: false,
        header: [
            {
                text: 'nama',
                value: 'name'
            },
            {
                text: 'NIM',
                value: 'nim'
            },
            {
                text: 'Email',
                value: 'email'
            },
            {
                text: 'No HP',
                value: 'phone'
            },
            {
                text: 'Institusi',
                value: 'institute'
            },
            {
                text: 'Social',
                value: 'socmed'
            },
            {
                text: 'Status',
                value: 'status'
            },
            {
                text: 'Action',
                value: 'action'
            },
        ],
        registrants: []
    }),
    methods: {
       async getData() {
           try {
               const result = await this.$http.get(this.$store.state.url+'/registrant/')
               this.registrants = result.data.data 
           } catch (error) {
               console.log(error)
           }
        },
        showRegistrant(value) {
            this.$router.push('/admin/registrant/'+value.regisId)
        },
        async deleteRegistrant(value) {
            const result = await this.$http.delete(this.$store.state.url+'/registrant/'+value.id)
            await this.getData()
        }
    },
    mounted() {
        this.getData()
    }

}
</script>

<style>

</style>