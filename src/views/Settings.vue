<template>
  <div class="tuta">
    <header>
      <router-link to="/"><button class="tuta-back"></button></router-link>
      <p class="tuta-title">SETTINGS</p>
      <button class="tuta-settings invis"></button>
    </header>
    <div class="tuta-grid-container-settings">
      <div class="tuta-box">
        <p class="tuta-box-title">
          {{ settings_titleTrain }}
        </p>
        <div class="tuta-grid-details-settings">
          <p class="tuta-details-constant">Station A</p>
          <p class="tuta-details-constant">Station B</p>
          <p class="tuta-details-placeholder2">{{ settings_trainStationA }}</p>
          <p class="tuta-details-placeholder2">{{ settings_trainStationB }}</p>
        </div>
        <hr class="tuta-divider">
        <p class="tuta-box-title">
          {{ settings_titleBus }}
        </p>
        <div class="tuta-grid-details-settings">
          <p class="tuta-details-constant">Location A</p>
          <p class="tuta-details-constant">Location B</p>
          <p class="tuta-details-placeholder2">{{ settings_busStationA }}</p>
          <p class="tuta-details-placeholder2">{{ settings_busStationB }}</p>
        </div>
        <hr class="tuta-divider">
        <p class="tuta-box-title">
          {{ settings_titleWeather }}
        </p>
        <div class="tuta-grid-details-settings">
          <p class="tuta-details-constant">Location</p>
          <p class="tuta-details-constant">Current Location</p>
          <p class="tuta-details-placeholder2">{{ settings_weatherLocation }}</p>
          <p class="tuta-details-placeholder2" @click="weatherCurrentLocationChange">{{ settings_weatherLocationCurrent }}</p>
        </div>
        <p class="tuta-settings-tip">press any name to edit</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      settings_titleTrain: 'Train',
      settings_trainStationA: 'Weert',
      settings_trainStationB: 'Eindhoven',
      settings_titleBus: 'Bus',
      settings_busStationA: 'Eindhoven',
      settings_busStationB: 'Rachelsmolen 1',
      settings_titleWeather: 'Weather',
      settings_weatherLocation: 'Weert',
      settings_weatherLocationCurrent: 'On'
    }
  },
  methods: {
    weatherCurrentLocationChange () {
      if (this.settings_weatherLocationCurrent === 'On') {
        this.settings_weatherLocationCurrent = 'Off'
      } else {
        this.settings_weatherLocationCurrent = 'On'
      }
    }
  }
}
</script>

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

.tuta-divider {
  border: 0;
  border-top: .07em solid #757575;
  margin-top: .4em;
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
  grid-template-columns: auto auto;
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
  .tuta-box {
    margin-right: 4%;
  }

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
