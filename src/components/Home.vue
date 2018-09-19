<template>
    <div>
      <H1>대전 IT 대학생 Meet up</H1>
      <meetup-content></meetup-content>
      <comments></comments>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import Comments from './Comments'
import MeetupContent from './MeetupContent'

export default {
  name: 'Home',
  computed: {
    ...mapGetters({
      randomNumber: 'getRandomNumber'
    })
  },
  methods: {
    ...mapMutations({
      getRandomNumber: 'getRandomFromBackend'
    })
  },
  components: {
    Comments,
    MeetupContent
  }
}
</script>

<style scoped>

</style>
