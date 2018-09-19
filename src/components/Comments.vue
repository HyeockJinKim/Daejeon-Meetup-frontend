<template>
    <div class="comments">
      <div class="comment" v-for="(item, index) in comments" v-bind:key="index">
        <p></p>
      </div>
      <div v-if="this.idToken !== null" class="comment">
        <label>
          <textarea type="text" v-model="comment"></textarea>
        </label>
      </div>
      <div v-else>
        <gmail-login></gmail-login>
      </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import GmailLogin from './GmailLogin'

export default {
  name: 'Comments',
  data () {
    return {
      comment: ''
    }
  },
  computed: {
    ...mapGetters({
      comments: 'getComments',
      idToken: 'getIdToken'
    })
  },
  methods: {
    ...mapMutations({
      deleteMenu: 'deleteOneMenu',
      addPos: 'addOnePos',
      minusPos: 'minusOneItem'
    }),
    uploadComment () {
      this.$store.commit('uploadComment', this.comment)
    }
  },
  components: {
    GmailLogin
  }
}
</script>

<style scoped>
.comments {
  width: 100%;
}

.comment {
  display: inline-block;
  width: 80%;
  text-align: center;
  background-color: rgba(178, 189, 195, 0.38);
  line-height: 50px;
  border-radius: 5px;
}

.comment textarea {
  border-style: none;
  font-size: 0.9rem;
}
</style>
