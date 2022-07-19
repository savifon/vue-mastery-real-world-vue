import axios from 'axios'

const apiClient = axios.create({
  baseURL:
    'https://my-json-server.typicode.com/savifon/vue-mastery-real-world-vue',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getEvents() {
    return apiClient.get('/events')
  },
  getEvent(id) {
    return apiClient.get('/events/' + id)
  },
  postEvent(
    event = {
      id: 111,
      category: 'Abc',
      title: 'abc',
      description: 'abc',
      location: 'abc',
      date: 'abc 123',
      time: '12:00',
      organizer: 'abc',
    }
  ) {
    return apiClient.post('/events', event)
  },
}
