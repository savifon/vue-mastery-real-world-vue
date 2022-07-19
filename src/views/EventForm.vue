<template>
  <h4>New event</h4>

  <form @submit.prevent="sendForm">
    <div class="event-form">
      <fieldset>
        <legend>Name & describe your event</legend>
        <BaseInput v-model="event.title" label="Title" type="text" />
        <BaseInput
          v-model="event.description"
          label="Description"
          type="text"
        />
        <BaseInput v-model="event.category" label="Category" type="text" />
      </fieldset>

      <fieldset>
        <legend>Location & time your event</legend>
        <BaseInput v-model="event.location" label="Location" type="text" />
        <BaseInput v-model="event.date" label="Date" type="text" />
        <BaseInput v-model="event.time" label="Time" type="text" />
      </fieldset>

      <fieldset>
        <legend>Organizer your event</legend>
        <BaseInput v-model="event.organizer" label="Organizer" type="text" />
      </fieldset>

      <button type="submit">Submit</button>
    </div>
  </form>
</template>

<script>
import EventService from '@/services/EventService'
import BaseInput from '@/components/BaseInput.vue'

export default {
  name: 'EventForm',
  components: {
    BaseInput,
  },
  data() {
    return {
      event: {
        category: '',
        title: '',
        description: '',
        location: '',
        date: '',
        time: '',
        organizer: '',
      },
    }
  },
  methods: {
    sendForm() {
      EventService.postEvent(this.event)
        .then(alert('Event created successfully'))
        .catch((error) => console.log(error))
    },
  },
}
</script>

<style scoped>
.event-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 80vh;
  max-width: 320px;
  margin: 0 auto;
}

fieldset {
  border: 0;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
legend {
  font-weight: 700;
  margin-bottom: 10px;
}
</style>
