<template>
  <div id="app">
    <user-form :mode="mode" :user="user"></user-form>
  </div>
</template>

<script>
/* eslint-disable */

import UserForm from './_Form'

export default {
  data() {
    return {
      mode: 'add',
      user: {},
      staticUserName: null,
      
    };
  },
  components: {
    UserForm
  },
  methods: {

  }
};
</script>
