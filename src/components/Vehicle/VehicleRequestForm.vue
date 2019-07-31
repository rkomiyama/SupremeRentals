<template>
  <v-container class="pa-6">
    <v-layout column>
      <v-form v-model="valid">
        <v-container grid-list-xl>
          <v-layout wrap>
            <v-flex xs12 class="pa-0">
              <v-progress-circular
                v-if="sendingRequest"
                indeterminate
                color="primary"
              ></v-progress-circular>
              <v-alert
                v-model="showAlert"
                :dismissible=false
                type="success"
                class="mb-4"
              >
                Your form has been submitted!
              </v-alert>
            </v-flex>
            <v-flex xs12 class="pa-0">
              <v-text-field
                v-model="name"
                label="Name"
                counter=30
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs12 class="pa-0">
              <v-text-field
                v-model="email"
                label="E-mail"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs12 class="pa-0">
              <v-text-field
                v-model="phoneNumber"
                label="Phone number"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs12 class="pa-0">
              <v-textarea
                v-model="requestMessage"
                name="requestMessage"
                label="Message (optional)"
                counter=1000
              ></v-textarea>
            </v-flex>
            <v-flex>
              <v-btn @click="submit">Submit request</v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-form>
    </v-layout>
  </v-container>
</template>

<script>
import { setTimeout } from 'timers';
export default {
  name: 'VehicleRequestForm',
  data () {
    return {
      sendingRequest: false,
      showAlert: false,
      valid: null,
      name: null,
      email: null,
      phoneNumber: null,
      requestMessage: null
    }
  },
  methods: {
    submit () {
      this.sendingRequest = true
      setTimeout(() => {
        this.showAlert = true
        this.sendingRequest = false
      }, 1500)
    }
  }
}
</script>
