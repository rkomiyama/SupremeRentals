<template>
  <v-content>
    <v-container fill-height>
      <v-layout>
        <v-card class="ma-auto">
          <v-card-text>
            {{ $route.params.id }}
          </v-card-text>
        </v-card>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'VehiclePage',
  data () {
    return {

    }
  },
  created () {
    
  },
  computed: {
    ...mapGetters([
      'getVehicle'
    ])
  }
}
</script>
