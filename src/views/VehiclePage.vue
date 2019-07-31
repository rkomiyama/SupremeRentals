<template>
  <v-content>
    <v-layout>
      <v-flex x12>
        <v-img
          :src="car.image_url"
          max-height=500
        ></v-img>
      </v-flex>
    </v-layout>
    <v-layout wrap>
      <v-flex xs12 lg6 order-lg2>
        <VehicleRequestForm />
      </v-flex>
      <v-flex xs12 lg6>
        <VehicleInfo :car="car" />
      </v-flex>
    </v-layout>
  </v-content>
</template>

<script>
import { mapGetters } from 'vuex'
import VehicleInfo from '@/components/Vehicle/VehicleInfo'
import VehicleRequestForm from '@/components/Vehicle/VehicleRequestForm'

export default {
  name: 'VehiclePage',
  data () {
    return {
      car: null,
    }
  },
  created () {
    this.car = this.getVehicle(this.$route.params.id)
  },
  computed: {
    ...mapGetters([
      'getVehicle'
    ])
  },
  components: {
    VehicleInfo,
    VehicleRequestForm
  }
}
</script>
