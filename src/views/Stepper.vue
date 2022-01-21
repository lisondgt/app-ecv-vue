<template>
  <div class="content-page">
    <v-container>
      <div class="stepper">
        <h1>Page stepper</h1>
        <v-stepper v-model="e1">
          <v-stepper-header>
            <v-stepper-step
                :complete="e1 > 1"
                step="1"
            >
              Mail
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step
                :complete="e1 > 2"
                step="2"
            >
              Mot de passe
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step
                :complete="e1 > 3"
                step="3">
              Adresse
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step
                :complete="e1 > 4"
                step="4">
              CGV
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step
                :complete="e1 > 5"
                step="5">
              Résumé
            </v-stepper-step>
          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content step="1">
              <div class="strepper-content">
                <v-text-field
                    label="Email"
                    v-model="$store.state.email">

                </v-text-field>
              </div>

              <v-btn
                  color="primary"
                  @click="e1 = 2"
              >
                Continue
              </v-btn>

              <v-btn text>
                Cancel
              </v-btn>
            </v-stepper-content>

            <v-stepper-content step="2">
              <div class="strepper-content">
                <v-text-field
                    label="Mot de passe"
                    v-model="$store.state.password">

                </v-text-field>
              </div>

              <v-btn
                  color="primary"
                  @click="e1 = 3"
              >
                Continue
              </v-btn>

              <v-btn text>
                Cancel
              </v-btn>
            </v-stepper-content>

            <v-stepper-content step="3">
              <div class="strepper-content">
                <v-text-field
                    label="Adresse"
                    v-model="$store.state.address">

                </v-text-field>
              </div>

              <v-btn
                  color="primary"
                  @click="e1 = 4"
              >
                Continue
              </v-btn>

              <v-btn text>
                Cancel
              </v-btn>
            </v-stepper-content>
            <v-stepper-content step="4">
              <div class="strepper-content">
                <v-checkbox
                    v-model="$store.state.cgv"
                    label="CGV"
                ></v-checkbox>
              </div>

              <v-btn
                  color="primary"
                  @click="e1 = 5"
              >
                Continue
              </v-btn>

              <v-btn text>
                Cancel
              </v-btn>
            </v-stepper-content>
            <v-stepper-content step="5">
              <div class="strepper-content">
                <resume></resume>
              </div>

              <v-btn
                  color="primary"
                  @click="e1 = 1"
              >
                Continue
              </v-btn>

              <v-btn text>
                Cancel
              </v-btn>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </div>
    </v-container>
  </div>
</template>

<script>
import Resume from "@/components/Resume";

export default {
  name: 'Stepper',
  components: {
    Resume
  },
  data () {
    return {
      e1: 1,
    }
  },
}
</script>
