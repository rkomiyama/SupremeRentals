<template>
  <v-content class="front-page-content">
    <section>
      <v-parallax src="https://i.imgur.com/IEgqmyS.jpg">
        <v-container>
          <v-layout
            align-center
            column
            justify-center
          >
            <v-flex xs12>
              <h1 class="title-heading display-2 font-weight-normal mb-4">
                <span>SUPREME </span><span class="display-2 font-weight-thin">RENTALS</span>
              </h1>
            </v-flex>
            <h4 class="subheading">
              Find the perfect Benz today
            </h4>
          </v-layout>
          <v-layout>
            <v-container grid-list-lg>
              <v-layout d-flex justify-center row wrap>
                  <v-menu
                    v-model="fromMenu"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    full-width
                  >
                    <template v-slot:activator="{ on }">
                      <v-flex xs12 sm4 md4>
                        <v-text-field
                          v-model="fromDate"
                          label="From"
                          prepend-icon="mdi-calendar"
                          readonly
                          v-on="on"
                          hide-details
                          dark
                        ></v-text-field>
                      </v-flex>
                    </template>
                    <v-date-picker
                      v-model="fromDate"
                      @input="menu = false"
                      :min="minDate"
                    ></v-date-picker>
                  </v-menu>
                  <v-menu
                    v-model="endMenu"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    full-width
                  >
                    <template v-slot:activator="{ on }">
                      <v-flex xs12 sm4 md4>
                        <v-text-field
                          v-model="endDate"
                          label="Until"
                          prepend-icon="mdi-calendar"
                          readonly
                          v-on="on"
                          hide-details
                          dark
                        ></v-text-field>
                      </v-flex>
                    </template>
                    <v-date-picker
                      v-model="endDate"
                      @input="menu = false"
                      :min="minDate"
                    ></v-date-picker>
                  </v-menu>
                  <v-flex xs6 sm2 md1 class="text-center my-auto">
                    <router-link to="/inventory" tag="button">
                      <v-btn>Search</v-btn>
                    </router-link>
                  </v-flex>
              </v-layout>
            </v-container>
          </v-layout>
        </v-container>
      </v-parallax>
    </section>
    <section>
      <v-container class="my-12">
        <v-layout
          align-center
          column
          justify-center
        >
          <v-flex xs12>
            <v-card flat class="transparent">
              <v-card-title>
                Our Mission
              </v-card-title>
              <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec hendrerit nunc. Sed at hendrerit tortor. 
                Nunc tristique felis non lorem blandit blandit. Morbi ante nunc, dignissim in varius eget, efficitur 
                ultrices urna. Nullam in viverra enim, ac euismod ex. Curabitur placerat iaculis euismod. Aenean eget 
                volutpat massa, blandit imperdiet nisl. Integer id massa odio. Quisque at elementum justo. Sed tincidunt 
                sagittis est, sed consectetur nibh tristique sed.<br><br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec hendrerit nunc. Sed at hendrerit tortor. 
                Nunc tristique felis non lorem blandit blandit. Morbi ante nunc, dignissim in varius eget, efficitur 
                ultrices urna. Nullam in viverra enim, ac euismod ex. Curabitur placerat iaculis euismod. Aenean eget 
                volutpat massa, blandit imperdiet nisl. Integer id massa odio. Quisque at elementum justo. Sed tincidunt 
                sagittis est, sed consectetur nibh tristique sed.<br><br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec hendrerit nunc. Sed at hendrerit tortor. 
                Nunc tristique felis non lorem blandit blandit. Morbi ante nunc, dignissim in varius eget, efficitur 
                ultrices urna. Nullam in viverra enim, ac euismod ex. Curabitur placerat iaculis euismod. Aenean eget 
                volutpat massa, blandit imperdiet nisl. Integer id massa odio. Quisque at elementum justo. Sed tincidunt 
                sagittis est, sed consectetur nibh tristique sed.
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
    <section>
      <v-parallax src="https://i.imgur.com/3QZBfKh.png">
        <v-container>
          <v-layout
            align-center
            column
            justify-center
          >
            <v-flex xs12>
              <v-card flat dark class="transparent">
                <v-card-title class="px-0">
                  Our Inventory
                </v-card-title>
                <v-card-text class="px-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec hendrerit nunc. Sed at hendrerit tortor. 
                  Nunc tristique felis non lorem blandit blandit. Morbi ante nunc, dignissim in varius eget, efficitur 
                  ultrices urna. Nullam in viverra enim, ac euismod ex.
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-parallax>
    </section>
    <section>
      <v-container class="my-12">
        <v-layout
          align-center
          column
          justify-center
        >
          <v-flex xs12>
            <v-card flat class="transparent">
              <v-card-title>
                Contact Us
              </v-card-title>
              <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec hendrerit nunc. Sed at hendrerit tortor. 
                Nunc tristique felis non lorem blandit blandit. Morbi ante nunc, dignissim in varius eget, efficitur 
                ultrices urna. Nullam in viverra enim, ac euismod ex. Curabitur placerat iaculis euismod. Aenean eget 
                volutpat massa, blandit imperdiet nisl. Integer id massa odio. Quisque at elementum justo. Sed tincidunt 
                sagittis est, sed consectetur nibh tristique sed.<br><br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec hendrerit nunc. Sed at hendrerit tortor. 
                Nunc tristique felis non lorem blandit blandit. Morbi ante nunc, dignissim in varius eget, efficitur 
                ultrices urna. Nullam in viverra enim, ac euismod ex. Curabitur placerat iaculis euismod. Aenean eget 
                volutpat massa, blandit imperdiet nisl. Integer id massa odio. Quisque at elementum justo. Sed tincidunt 
                sagittis est, sed consectetur nibh tristique sed.<br><br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec hendrerit nunc. Sed at hendrerit tortor. 
                Nunc tristique felis non lorem blandit blandit. Morbi ante nunc, dignissim in varius eget, efficitur 
                ultrices urna. Nullam in viverra enim, ac euismod ex. Curabitur placerat iaculis euismod. Aenean eget 
                volutpat massa, blandit imperdiet nisl. Integer id massa odio. Quisque at elementum justo. Sed tincidunt 
                sagittis est, sed consectetur nibh tristique sed.
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
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
.title-heading {
  text-align: center;
  word-wrap: break-word;
}
</style>
