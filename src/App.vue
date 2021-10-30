<template>
  <div>
    <basic-vue-chat title="SOCAR CHATTING" @newOwnMessage="onNewOwnMessage" :new-message="message"/>
  </div>
</template>

<script> 
import BasicVueChat from 'basic-vue-chat'
import axios from 'axios'
 
export default {
  name: 'App',
  components: {
    BasicVueChat,
  },
  data() {
    return {
      message: {}
    }
  },
  created () {
    console.log(this.message);
  },
  methods: {
    onNewOwnMessage(message) {
      axios.post(process.env.VUE_APP_BACKEND_URL, {
        params: {
          msg: message
        }
      })
        .then(response => {
          let msg = response.data.data;
          this.message={
            id: 1,
            author: 'SOCAR',
            contents: msg,
            date: '16:30'
          }
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
