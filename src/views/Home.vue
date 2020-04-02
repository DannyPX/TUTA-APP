<template>
  <div class="tuta">
    <header>
      <button class="tuta-back invis"></button>
      <p class="tuta-title">TUTA</p>
      <router-link to="/settings"
        ><button class="tuta-settings"></button
      ></router-link>
    </header>
    <!-- The grid containing all the boxes for train, bus and weather cards -->
    <div class="tuta-grid-container-home">
      <!-- The card containg all the train data -->
      <div class="tuta-box">
        <img class="tuta-box-side-image" src="../assets/box_train.png" />
        <!-- Data showing names of station A (origin) and station B (destination) -->
        <p class="tuta-box-title">
          {{ trainInfo[0].legs[0].origin.name }}<br />{{
            trainInfo[0].legs[0].destination.name
          }}
        </p>
        <div class="tuta-grid-details-home">
          <p class="tuta-details-constant">Departure</p>
          <p class="tuta-details-constant">Arrival</p>
          <p class="tuta-details-constant">Traintype</p>
          <!-- Data showing the planned time a train should depart from the origin's location -->
          <p class="tuta-details-placeholder1-home">
            {{
              trainInfo[0].legs[0].origin.plannedDateTime
                .split("T")[1]
                .split(":00+")[0]
            }}
          </p>
          <!-- Data showing the planned time a train should arrive at the destination's location -->
          <p class="tuta-details-placeholder1-home">
            {{
              trainInfo[0].legs[0].destination.plannedDateTime
                .split("T")[1]
                .split(":0")[0]
            }}
          </p>
          <!-- Data showing the type of the train (Intercity or Sprinter) -->
          <p class="tuta-details-placeholder1-home">
            {{ trainInfo[0].legs[0].product.longCategoryName }}
          </p>
          <p class="tuta-details-constant">Platform</p>
          <p class="tuta-details-constant">Platform</p>
          <p class="tuta-details-constant">Length</p>
          <!-- Data showing the planned track / platform the train will depart at -->
          <p class="tuta-details-placeholder2-home">
            {{ trainInfo[0].legs[0].origin.plannedTrack }}
          </p>
          <!-- Data showing the planned track / platform the train will arrive at -->
          <p class="tuta-details-placeholder2-home">
            {{ trainInfo[0].legs[0].destination.plannedTrack }}
          </p>
          <!-- Data showing the length of the train -->
          <p class="tuta-details-placeholder2-home">{{ home_trainLength }}</p>
        </div>
      </div>
      <!-- The card containg all the bus data -->
      <div class="tuta-box">
        <img class="tuta-box-side-image" src="../assets/box_bus.png" />
        <!-- Data showing names of location A (origin) and location B (destination) -->
        <p class="tuta-box-title">
          {{
            busInfo[0].legs[busInfo[0].legs.length - 1].stops[0].location.place
              .name
          }}<br />{{
            busInfo[0].legs[busInfo[0].legs.length - 1].stops[
              busInfo[0].legs[busInfo[0].legs.length - 1].stops.length - 1
            ].location.name
          }}
        </p>
        <div class="tuta-grid-details-home">
          <p class="tuta-details-constant">Departure</p>
          <p class="tuta-details-constant">Arrival</p>
          <p class="tuta-details-constant">BusLine</p>
          <!-- Data showing the planned time a bus should depart from the origin's location -->
          <p class="tuta-details-placeholder1-home">
            {{
              busInfo[0].legs[
                busInfo[0].legs.length - 1
              ].stops[0].departure.split("T")[1]
            }}
          </p>
          <!-- Data showing the planned time a bus should arrive at the destination's location -->
          <p class="tuta-details-placeholder1-home">
            {{
              busInfo[0].legs[busInfo[0].legs.length - 1].stops[
                busInfo[0].legs[busInfo[0].legs.length - 1].stops.length - 1
              ].arrival.split("T")[1]
            }}
          </p>
          <!-- Data showing the number the bus will use -->
          <p class="tuta-details-placeholder1-home">
            {{ busInfo[0].legs[busInfo[0].legs.length - 1].service }}
          </p>
          <p class="tuta-details-constant">Platform</p>
          <p class="tuta-details-constant">Platform</p>
          <p></p>
          <!-- Data showing the planned platform the train will depart at-->
          <p class="tuta-details-placeholder2-home">
            {{ busInfo[0].legs[busInfo[0].legs.length - 1].stops[0].platform }}
          </p>
          <!-- Data showing the planned platform the train will arrive at -->
          <p class="tuta-details-placeholder2-home">
            {{
              busInfo[0].legs[busInfo[0].legs.length - 1].stops[busInfo[0].legs[busInfo[0].legs.length - 1].stops.length - 1].platform
            }}
          </p>
        </div>
      </div>
      <!-- The card containg all the weather data -->
      <div class="tuta-box">
        <img class="tuta-box-side-image" src="../assets/box_weather.png" />
        <p class="tuta-box-title">
          <!-- Data showing the location for the weather forecast -->
          <img src="../assets/icon_location.png" /> {{ home_weatherLocation }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    trainInfo () {
      return this.$store.getters.trainInfo
    },
    busInfo () {
      return this.$store.getters.busInfo
    }
  },
  mounted () {
    this.$store.dispatch('getTrainInfo')
    this.$store.dispatch('getBusInfo')
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
  background: url("../assets/icon_back.png");
  background-size: cover;
  width: 1.2em;
  height: 1.2em;
}

.tuta-settings {
  background: url("../assets/icon_settings.png");
  background-size: cover;
  width: 1.4em;
  height: 1.4em;
}

.tuta-grid-container-home {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.tuta-box {
  background: #24242e;
  border-radius: 0.8em;
  margin-bottom: 4%;
  padding: 1em 1.5em;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.6);
}

.tuta-box-side-image {
  float: right;
  max-height: 9.2em;
  margin: -1em -1.5em;
  border-radius: 0.8em;
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
  color: #acacac;
  font-family: "Faucet";
  font-size: 1em;
  margin-top: 0.3em;
}

.tuta-details-placeholder1-home {
  font-family: "Optien";
  font-size: 1.3em;
  margin-top: -0.2em;
}

.tuta-details-placeholder2-home {
  font-family: "Faucet";
  font-size: 1.4em;
  margin-top: -0.2em;
}

@media (min-width: 544px) {
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
