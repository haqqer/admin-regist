<template>
  <v-container>
      <qrcode-stream @decode="onDecode"></qrcode-stream>
      <!-- <qrcode-capture @decode="onDecode"></qrcode-capture> -->
  </v-container>
</template>

<script>
import { QrcodeStream, QrcodeCapture } from 'vue-qrcode-reader'

export default {
    data: () => ({

    }),
    components: {
        QrcodeStream,
        QrcodeCapture
    },
    methods: {
        onDecode (decoded) {
            console.log(decoded)
            this.$router.push('/admin/registrant/'+decoded)
        }
    }
}
</script>

<style>

</style>