<template>
<div class="tuta">
  <header>
    <button class="tuta-settings invis"></button>
    <p class="tuta-title">TUTA</p>
    <button class="tuta-settings"></button>
  </header>
  <div class="tuta-grid-container">
      <div class="tuta-box">
        <p class="tuta-box-title">{{ trainStationA }} to {{ trainStationB }}</p>
        <div class="tuta-grid-details">
          <p class="tuta-details-constant">Departure</p>
          <p class="tuta-details-constant">Arrival</p>
          <p class="tuta-details-constant">Traintype</p>
          <p class="tuta-details-placeholder1">{{ trainDeparture }}</p>
          <p class="tuta-details-placeholder1">{{ trainArrival }}</p>
          <p class="tuta-details-placeholder1">{{ trainType }}</p>
          <p class="tuta-details-constant">Platform</p>
          <p class="tuta-details-constant">Platform</p>
          <p class="tuta-details-constant">Length</p>
          <p class="tuta-details-placeholder2">{{ trainPlatformA }}</p>
          <p class="tuta-details-placeholder2">{{ trainPlatformB }}</p>
          <p class="tuta-details-placeholder2">{{ trainLength }}</p>
        </div>
      </div>
      <div class="tuta-box">
        <p class="tuta-box-title">{{ busStationA }} to {{ busStationB }}</p>
        <div class="tuta-grid-details">
          <p class="tuta-details-constant">Departure</p>
          <p class="tuta-details-constant">Arrival</p>
          <p class="tuta-details-constant">Traintype</p>
          <p class="tuta-details-placeholder1">{{ busDeparture }}</p>
          <p class="tuta-details-placeholder1">{{ busArrival }}</p>
          <p class="tuta-details-placeholder1">{{ busLine }}</p>
          <p class="tuta-details-constant">Platform</p>
          <p class="tuta-details-constant">Pwlatform</p>
          <p></p>
          <p class="tuta-details-placeholder2">{{ busPlatformA }}</p>
          <p class="tuta-details-placeholder2">{{ busPlatformB }}</p>
        </div>
      </div>
      <div class="tuta-box">
        <p class="tuta-box-title"><img src="./assets/icon_location.png"> {{ weatherLocation }}</p>
      </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      trainStationA: 'Weert',
      trainStationB: 'Eindhoven',
      trainDeparture: '08:20',
      trainArrival: '08:42',
      trainType: 'Sprinter',
      trainPlatformA: '1B',
      trainPlatformB: '5',
      busStationA: 'Eindhoven',
      busStationB: 'Rachelsmolen 1',
      busDeparture: '08:44',
      busArrival: '08:47',
      busLine: '304',
      busPlatformA: 'E',
      busPlatformB: '-',
      weatherLocation: 'Weert'
    }
  }
}
</script>

<style scoped>
@font-face {
  font-family: "Optien";
  src: url('./assets/fonts/Optien.ttf');
}

@font-face {
  font-family: "Faucet";
  src: url('./assets/fonts/faucet.ttf');
}

* {
  margin: 0;
  padding: 0;
}

.invis {
  opacity: 0;
}

.tuta {
  background: #17171D;
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

.tuta-settings {
  background: url('./assets/icon_settings.png');
  background-size: cover;
  width: 1.3em;
  height: 1.3em;
}

.tuta-grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.tuta-box {
  background: #24242E;
  border-radius: .8em;
  margin-bottom: 4%;
  padding: 3% 4%;
  box-shadow: 0px 0px 20px rgba(0,0,0,.6);
}

.tuta-box-title {
  font-family: "Faucet";
  font-size: 1.5em;
}

.tuta-box-title img {
  width: 5%;
  height: auto;
}

.tuta-grid-details {
  display: grid;
  grid-template-columns: auto auto auto;
}

.tuta-details-constant {
  color: #ACACAC;
  font-family: "Faucet";
  font-size: 1em;
  margin-top: .3em;
}

.tuta-details-placeholder1 {
  font-family: "Optien";
  font-size: 1.3em;
  margin-top: -.2em;
}

.tuta-details-placeholder2 {
  font-family: "Faucet";
  font-size: 1.3em;
  margin-top: -.2em;
}

@media (min-width:600px) {
  .tuta-box {
    margin-right: 4%;
  }
}
</style>
