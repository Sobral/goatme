<template>
  <div>
  <vue-cal
    class="calendar-container"
    :selected-date="new Date()"
    :time-from="firstHour"
    :time-to="lastHour"
    :disable-views="['years', 'year']"
    :events="events"
    :on-event-click="onEventClick">
    
    >
  </vue-cal>

      <modal ref="modalCadastro">
      <template v-slot:header>
        <h3>Criação de atividades esportivas</h3>
      </template>

      <template v-slot:body>
        <registrationForm />
      </template>

      <template v-slot:footer>
        <div class="d-flex align-items-center justify-content-end">
          <button class="btn btn--primary" @click="$refs.modalName.closeModal()">Salvar</button>
        </div>
      </template>
    </modal>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import VueCal from 'vue-cal'
import RegistrationForm from './RegistrationForm.vue';
import Modal from "./Modal.vue";

import 'vue-cal/dist/vuecal.css'


export default {
  name: "Calendar",
  components: {
    VueCal,
    Modal,
    RegistrationForm,
  },
  computed: mapGetters(['events']),
  methods: {
    ...mapActions(["loadEvents"]),
    onEventClick() {
      this.$refs.modalCadastro.openModal()
    }
  },
  created() {
    this.loadEvents();
  },
  data() {
    return {
      firstHour: 6 * 60,
      lastHour: 21 * 60
    }
  }
}
</script>

<style>

.vuecal__body {
    background-color: #032211;

}
.vuecal__event.unavailable {
  background-color: #e0d887;
  border: 1px solid #f8f4c4;
  color: #fff;
}

.vuecal__event.available {
  background-color: #607b6c;;
  border: 1px solid #74e4a6;
  color: #fff;
}

.calendar-container {
  width: 75vw;
  height: 80vh;
  margin: 0 auto;
}
</style>