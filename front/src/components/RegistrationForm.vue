<template>
  <div>
  <label class="d-flex" >Evento</label>
  <input type="text"/>
  <label class="d-flex" >Descrição</label>
  <textarea type="text"/>
    <br><br>
 
  <label for="">Inicio:</label>
  <input type="datetime-local" > 
  <br><br>
  <label for="">Fim:</label>
  <input type="datetime-local" step=""> 
  <br><br>
  <label>Intervalo de semanas: {{repeat_week}}</label>
  <input type="range"  min="1" max="4" v-model="repeat_week">
  </div>
</template>

<script>
export default {
  name: 'RegistrationForm',
  data() {
    return {
      repeat_week: 1
    }
  }
}
</script>

<style>

</style>