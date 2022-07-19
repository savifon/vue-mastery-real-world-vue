<template>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
import EventService from '@/services/EventService'
import EventCard from '@/components/EventCard.vue'

export default {
  name: 'EventList',
  components: {
    EventCard,
  },
  data() {
    return {
      events: null,
    }
  },
  created() {
    EventService.getEvents()
      .then((response) => (this.events = response.data))
      .catch((error) => console.log(error))
  },
}
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
