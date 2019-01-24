<template>
  <div id="app">
    <user-form :mode="mode" :user="user" :static-user-name="staticUserName"></user-form>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios';
import UserForm from './_Form'

export default {
  data() {
    return {
      mode: 'edit',
      user: {},
      staticUserName: null,
      

    };
  },
  components: {
    UserForm
  },
  methods: {

  },
  mounted() {
    axios.get('/api/user/' + this.$route.params.id , { params: {} } ).then( (res) => {
    
      this.user = res.data.data;
      this.staticUserName = this.user.first_name + ' ' + this.user.last_name ;

    });  
  },
};
</script>
