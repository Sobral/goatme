<template>
  <div id="app">
    <calendar />
  </div>
</template>

<script>
import Calendar from './components/Calendar.vue';

export default {
  name: "App",
  components: {

    Calendar
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.btn {
  padding: 8px 16px;
  border-radius: 5px;
}

.btn--primary {
  background-color: #573d80;
  color: #fff;
}

.btn--secondary {
  background-color: #dddd;
  color: #000;
}

.overflow-hidden {
  overflow: hidden;
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
.d-flex {
  display: flex;
}
.align-items-center {
  align-items: center;
}
.justify-content-end {
  justify-content: flex-end;
}
.justify-content-start {
  justify-content: flex-start;
}

/* reset */
button {
  background: none;
  border: none;
  outline: inherit;
  cursor: pointer;
}

h1, h2, h3, h4, h5, h6 {
  margin: 0;
}

</style>
