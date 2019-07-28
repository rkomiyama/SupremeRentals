<template>
  <v-container fill-height>
    <v-layout>
      <NavDrawer
        v-model="drawer"
        @input:drawer="drawer = $event"
      />
      <AppBar
        @click:drawer="drawer = !drawer"
      />
      <router-view />
      <Footer />
    </v-layout>
  </v-container>
</template>

<script>
import NavDrawer from '@/components/NavDrawer/NavDrawer'
import AppBar from '@/components/AppBar'
import Footer from '@/components/Footer'

export default {
  name: 'MainSiteContainer',
  data () {
    return {
      drawer: null
    }
  },
  components: {
    NavDrawer,
    AppBar,
    Footer
  }
};
</script>
