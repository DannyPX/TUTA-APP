<template>
  <div class="tuta">
    <header>
      <router-link to="/"><button class="tuta-back"></button></router-link>
      <p class="tuta-title">SETTINGS</p>
      <button class="tuta-settings invis"></button>
    </header>
    <div class="tuta-grid-container">
      <div class="tuta-box">
        <p class="tuta-box-title">
          {{ trainStationA }}
          <br />
          {{ trainStationB }}
        </p>
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
    </div>
  </div>
</template>

<script>
export default {
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

.tuta-grid-container {
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

.tuta-grid-details {
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
