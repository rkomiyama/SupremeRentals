<template>
  <v-app-bar
    height=64
    app
  >
    <v-app-bar-nav-icon
      class="hidden-md-and-up"
      @click.stop="$emit('click:drawer')"
    ></v-app-bar-nav-icon>
    <v-toolbar-title class="headline text-uppercase hidden-xs-only">
      <v-flex class="d-flex align-center">
        <v-img
          class="hidden-xs-only"
          :src="require('@/assets/logo.svg')"
          height=64
        />
        <span>SUPREME&nbsp;</span>
        <span class="font-weight-light">Rentals</span>
      </v-flex>
    </v-toolbar-title>
    <v-spacer class="hidden-xs-only"></v-spacer>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppBar'
}
</script>
