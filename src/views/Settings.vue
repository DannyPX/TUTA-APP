<template>
  <div class="tuta">
    <header>
      <router-link to="/"><button class="tuta-back"></button></router-link>
      <p class="tuta-title">SETTINGS</p>
      <button class="tuta-settings invis"></button>
    </header>
    <div class="tuta-grid-container-settings">
      <!-- Train settings -->
      <div class="tuta-box">
        <p class="tuta-box-title">Train</p>
        <hr class="tuta-divider-train">
        <div class="tuta-grid-details-settings">
          <p class="tuta-details-constant">Station A</p>
          <!-- The dropdown for choosing train station A -->
          <multiselect
          placeholder="Choose a station"
          :value="selectedTrainStationA"
          :options="trainStations"
          track-by="id"
          label="name"
          @select="updateTrainStationA">
          </multiselect>
        </div>
        <div class="tuta-grid-details-settings">
          <p class="tuta-details-constant">Station B</p>
          <!-- The dropdown for choosing train station A -->
          <multiselect
          placeholder="Choose a station"
          :value="selectedTrainStationA"
          :options="trainStations"
          track-by="id"
          label="name"
          @select="updateTrainStationA">
          </multiselect>
        </div>
        <!-- Bus settings -->
        <p style="margin-top: .5em;" class="tuta-box-title">Bus</p>
        <hr class="tuta-divider-bus">
        <div class="tuta-grid-details-settings">
          <p class="tuta-details-constant">Location A</p>
          <!-- The dropdown for choosing train station A -->
          <multiselect
          placeholder="Choose a station"
          :value="selectedTrainStationA"
          :options="trainStations"
          track-by="id"
          label="name"
          @select="updateTrainStationA">
          </multiselect>
          <p class="tuta-details-constant">Location B</p>
          <!-- The dropdown for choosing train station A -->
          <multiselect
          placeholder="Choose a station"
          :value="selectedTrainStationA"
          :options="trainStations"
          track-by="id"
          label="name"
          @select="updateTrainStationA">
          </multiselect>
        </div>
        <!-- Weather settings -->
        <p style="margin-top: .5em;" class="tuta-box-title">Weather</p>
        <hr class="tuta-divider-weather">
        <div class="tuta-grid-details-settings">
          <p class="tuta-details-constant">Location</p>
          <p class="tuta-details-placeholder2">{{ settings_weatherLocation }}</p>
          <p class="tuta-details-constant">Current Location</p>
          <p class="tuta-details-placeholder2" @click="weatherCurrentLocationChange">{{ settings_weatherLocationCurrent }}</p>
        </div>
        <p class="tuta-settings-tip">press any name to edit</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Multiselect from 'vue-multiselect'

export default {
  data () {
    return {
      settings_trainStationB: 'Eindhoven',
      settings_busStationA: 'Eindhoven',
      settings_busStationB: 'Rachelsmolen 1',
      settings_weatherLocation: 'Weert',
      settings_weatherLocationCurrent: 'On'
    }
  },
  computed: {
    ...mapGetters([
      'trainStations',
      'selectedTrainStationA'
    ])
    // ------- OLD CODE ------------
    // // Retrieve all train stations from the store
    // trainStations () {
    //   return this.$store.getters.trainStations
    // },
    // // Retrieve the currently selected train station A from the store
    // selectedTrainStationA () {
    //   return this.$store.getters.stateTrainStationA
    // }
  },
  methods: {
    // Turn the current weather location on / off
    weatherCurrentLocationChange () {
      if (this.settings_weatherLocationCurrent === 'On') {
        this.settings_weatherLocationCurrent = 'Off'
      } else {
        this.settings_weatherLocationCurrent = 'On'
      }
    },
    // Import the actions from the store into the methods
    ...mapActions([
      'updateTrainStationA'
    ])
  },
  // Execute the method that retrieves all the train stations
  mounted () {
    this.$store.dispatch('getTrainStations')
  },
  // Add the Multiselect component to the page
  components: {
    Multiselect
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style scoped>
.invis {
  opacity: 0;
}

.tuta {
  width: 100vw;
  height: 100vh;
  color: white;
  padding: 4%;
}

header {
  display: flex;
  justify-content: space-between;
  height: 5em;
  align-items: center;
  padding: 0 0.5em;
}

.tuta-title {
  font-family: "Optien";
  font-size: 1.8em;
  justify-self: center;
  align-self: center;
}

.tuta-back {
  background: url('../assets/icon_back.png');
  background-size: cover;
  width: 1.3em;
  height: 1.3em;
}

.tuta-settings {
  background: url('../assets/icon_settings.png');
  background-size: cover;
  width: 1.3em;
  height: 1.3em;
}

.tuta-grid-container-settings {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.tuta-box {
  background: #24242E;
  border-radius: .8em;
  margin-bottom: 4%;
  padding: 1em 1.5em;
  box-shadow: 0px 0px 20px rgba(0,0,0,.6);
}

.tuta-divider-train {
  border: #FFE021 solid .04em;
  margin-top: .5em;
}

.tuta-divider-bus {
  border: #E81D2B solid .04em;
  margin-top: .5em;
}

.tuta-divider-weather {
  border: #0BBDFF solid .04em;
  margin-top: .5em;
}

.tuta-settings-tip {
  color: #ACACAC;
  font-family: 'Faucet';
  text-align: center;
  font-size: 1em;
  margin-bottom: -.5em;
  margin-top: .5em;
}

.tuta-box-side-image {
  float: right;
  max-height: 9.2em;
  margin: -1em -1.5em;
  border-radius: .8em;
  z-index: -10;
}

.tuta-box-title {
  font-family: "Faucet";
  font-size: 1.7em;
  margin-right: 0.7em;
  margin-bottom: -0.3em;
}

.tuta-box-title img {
  width: 5%;
  height: auto;
}

.tuta-grid-details-settings {
  display: grid;
  grid-template-columns: auto;
  margin-right: 1em;
}

.tuta-details-constant {
  color: #ACACAC;
  font-family: "Faucet";
  font-size: 1em;
  margin-top: .3em;
}

.tuta-details-placeholder2 {
  font-family: "Faucet";
  font-size: 1.3em;
  margin-top: -.2em;
}

@media (min-width:544px) {
  .tuta-box-side-image {
    max-height: 10.9em;
  }
}

@media (max-width: 450px) {
  .tuta-box-side-image {
    max-height: 11em;
  }
}
</style>
