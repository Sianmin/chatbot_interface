<template>
  <div>
    <basic-vue-chat title="SOCAR CHATTING" @newOwnMessage="onNewOwnMessage" :new-message="message"/>
  </div>
</template>

<script> 
import BasicVueChat from 'basic-vue-chat'
import axios from 'axios'
 
export default {
  name: 'sentence',
  components: {
    BasicVueChat,
  },
  data() {
    return {
      message: {},
      a: "",
    }
  },
  created () {
    document.title = "방안1: 문장";
  },
  methods: {
    pushAnswer() {
      this.message={
        id: 2,
        author: 'SOCAR',
        contents: "A: "+this.a,
        date: '16:30'
      }
    },
    onNewOwnMessage(message) {
      axios.post(process.env.VUE_APP_BACKEND_URL+'sentence', {
        params: {
          msg: message
        }
      })
        .then(response => {
          let q = response.data.question;
          this.a = response.data.answer;
          console.log(response.data)
          this.message={
            id: 1,
            author: 'SOCAR',
            contents: "Q: " +q,
            date: '16:30'
          }
          setTimeout(() => this.pushAnswer())

        })
        .catch(function(error) {
          console.log(error);
      });
    },
  }
}
</script>

<style>
  .window__header__container {
    background: linear-gradient(90deg, blue, skyblue) !important;
  }
  .input__button {
    background-color: skyblue !important;

  }
</style>
