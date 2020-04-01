<template>
  <div class="tuta">
  <header>
    <button class="tuta-back invis"></button>
    <p class="tuta-title">TUTA</p>
    <router-link to="/settings"><button class="tuta-settings"></button></router-link>
  </header>
  <div class="tuta-grid-container-home">
      <div class="tuta-box">
        <img class="tuta-box-side-image" src="../assets/box_train.png">
        <p class="tuta-box-title">{{ home_trainStationA }}<br>{{ home_trainStationB }}</p>
        <div class="tuta-grid-details-home">
          <p class="tuta-details-constant">Departure</p>
          <p class="tuta-details-constant">Arrival</p>
          <p class="tuta-details-constant">Traintype</p>
          <p class="tuta-details-placeholder1">{{ home_trainDeparture }}</p>
          <p class="tuta-details-placeholder1">{{ home_trainArrival }}</p>
          <p class="tuta-details-placeholder1">{{ home_trainType }}</p>
          <p class="tuta-details-constant">Platform</p>
          <p class="tuta-details-constant">Platform</p>
          <p class="tuta-details-constant">Length</p>
          <p class="tuta-details-placeholder2">{{ home_trainPlatformA }}</p>
          <p class="tuta-details-placeholder2">{{ home_trainPlatformB }}</p>
          <p class="tuta-details-placeholder2">{{ home_trainLength }}</p>
        </div>
      </div>
      <div class="tuta-box">
        <img class="tuta-box-side-image" src="../assets/box_bus.png">
        <p class="tuta-box-title">{{ home_busStationA }}<br>{{ home_busStationB }}</p>
        <div class="tuta-grid-details-home">
          <p class="tuta-details-constant">Departure</p>
          <p class="tuta-details-constant">Arrival</p>
          <p class="tuta-details-constant">Traintype</p>
          <p class="tuta-details-placeholder1">{{ home_busDeparture }}</p>
          <p class="tuta-details-placeholder1">{{ home_busArrival }}</p>
          <p class="tuta-details-placeholder1">{{ home_busLine }}</p>
          <p class="tuta-details-constant">Platform</p>
          <p class="tuta-details-constant">Platform</p>
          <p></p>
          <p class="tuta-details-placeholder2">{{ home_busPlatformA }}</p>
          <p class="tuta-details-placeholder2">{{ home_busPlatformB }}</p>
        </div>
      </div>
      <div class="tuta-box">
        <img class="tuta-box-side-image" src="../assets/box_weather.png">
        <p class="tuta-box-title"><img src="../assets/icon_location.png"> {{ home_weatherLocation }}</p>
      </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      home_trainStationA: 'Weert',
      home_trainStationB: 'Eindhoven',
      home_trainDeparture: '08:20',
      home_trainArrival: '08:42',
      home_trainType: 'Sprinter',
      home_trainPlatformA: '1B',
      home_trainPlatformB: '5',
      home_busStationA: 'Eindhoven',
      home_busStationB: 'Rachelsmolen 1',
      home_busDeparture: '08:44',
      home_busArrival: '08:47',
      home_busLine: '304',
      home_busPlatformA: 'E',
      home_busPlatformB: '-',
      home_weatherLocation: 'Weert'
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
  width: 1.2em;
  height: 1.2em;
}

.tuta-settings {
  background: url('../assets/icon_settings.png');
  background-size: cover;
  width: 1.4em;
  height: 1.4em;
}

.tuta-grid-container-home {
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

.tuta-box-side-image {
  float: right;
  max-height: 9.2em;
  margin: -1em -1.5em;
  border-radius: .8em;
  z-index: -10;
}

.tuta-box-title {
  font-family: "Faucet";
  font-size: 1.5em;
  margin-right: 0.7em;
}

.tuta-box-title img {
  width: 5%;
  height: auto;
}

.tuta-grid-details-home {
  display: grid;
  grid-template-columns: auto auto auto;
  margin-right: 1em;
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
