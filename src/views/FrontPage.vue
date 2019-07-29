<template>
  <v-content class="front-page-content">
    <v-parallax src="https://i.imgur.com/IEgqmyS.jpg">
      <v-container>
        <v-layout
          align-center
          column
          justify-center
        >
          <h1 class="display-2 font-weight-normal mb-4">
            SUPREME&nbsp;<span class="display-2 font-weight-thin">RENTALS</span>
          </h1>
          <h4 class="subheading">
            Find the perfect Benz today!
          </h4>
        </v-layout>
        <v-layout class="white elevation-3">
          <v-container>
            <v-layout wrap>
              <v-flex xs12 sm4 class="mb-3 mx-2">
                <v-menu
                  v-model="fromMenu"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  full-width
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="fromDate"
                      label="From"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-on="on"
                      hide-details
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="fromDate"
                    @input="menu = false"
                    :min="minDate"
                  ></v-date-picker>
                </v-menu>
              </v-flex>
              <v-flex xs12 sm4 class="mb-3 mx-2">
                <v-menu
                  v-model="endMenu"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  full-width
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="endDate"
                      label="Until"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-on="on"
                      hide-details
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="endDate"
                    @input="menu = false"
                    :min="minDate"
                  ></v-date-picker>
                </v-menu>
              </v-flex>
              <v-flex xs6 offset-xs3 sm2 offset-sm0 class="text-center my-auto">
                <router-link to="/inventory" tag="div">
                  <v-btn>Search</v-btn>
                </router-link>
              </v-flex>
            </v-layout>
          </v-container>
        </v-layout>
      </v-container>
    </v-parallax>
  </v-content>
</template>

<script>
export default {
  name: 'FrontPage',
  data () {
    return {
      fromDate: null,
      minDate: null,
      endDate: new Date().toISOString().substr(0, 10),
      fromMenu: false,
      endMenu: false
    }
  },
  created () {
    this.minDate = new Date(
      new Date().toLocaleString(
        "en-US",
        {timeZone: "America/New_York"}
      )
    ).toISOString().substr(0,10)
    this.fromDate = this.minDate
  }
}
</script>

<style lang="scss" scoped>
.front-page-content {
  height: 2000px;
}
</style>
