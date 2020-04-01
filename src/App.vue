<template>
  <transition name="slide" mode="out-in">
    <router-view/>
  </transition>
</template>

<script>
</script>

<style>
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

.slide-enter-active {
    animation: slide-in .3s ease-in forwards;
}

.slide-leave-active {
    animation: slide-out .3s ease-in forwards;
}

@keyframes slide-in {
    from {
        transform: translateX(-3em);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes slide-out {
    from {
        transform: translateX(0);
        opacity: 1;
    }
    to {
        transform: translateX(-3em);
        opacity: 0;
    }
}
</style>
