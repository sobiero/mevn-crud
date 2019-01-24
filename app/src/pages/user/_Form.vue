<template>
  <div id="app">

     <div class="col-md-12 pull-right">

        <b-nav pills style="margin:auto;" class="main-nav ">
         <b-nav-item :to="{ name: 'list'  , query: { } }" > <i class="fas fa-users"></i> View Users </b-nav-item>
        </b-nav>

    </div>

        <h5>
          <span v-if="mode == 'add'  "> Add New User</span> 
          <span v-if="mode == 'edit' "> Edit User:  {{staticUserName}}</span> 
        </h5>

    <br>
    <div class="row">
      <div class="col-sm-5" style="margin:auto;" id="user-form">
        
        <b-form @submit="onSubmit">
          <b-form-group horizontal
                        :label-cols="3"
                        label-size="sm"
                        label="First Name:"
                        label-for="input_sm">
            <b-form-input v-model='user.first_name' size="sm"></b-form-input>
          </b-form-group>
          <b-form-group horizontal
                        :label-cols="3"
                        label-size="sm"
                        label="Last Name:"
                        label-for="input_sm">
            <b-form-input v-model='user.last_name' size="sm"></b-form-input>
          </b-form-group>
          <b-form-group horizontal
                        :label-cols="3"
                        label-size="sm"
                        label="National ID:"
                        label-for="input_sm">
            <b-form-input v-model='user.national_id' size="sm"></b-form-input>
          </b-form-group>
          <b-form-group horizontal
                        :label-cols="3"
                        label-size="sm"
                        label="Date of Birth:"
                        label-for="input_sm">
            <b-form-input v-model='user.dob' size="sm"></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary">
            
            <span v-if="mode == 'add'  "> <i class="fas fa-user-plus"></i> Add </span> 
            <span v-if="mode == 'edit' "> <i class="fas fa-user-edit"></i> Update</span> 
          
          </b-button>

        </b-form>

       </div>
     </div>

  </div>
</template>

<script>
/* eslint-disable */

import axios from 'axios';

export default {
  name: 'user-form',
  data() {
    return {
      

    };
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      // alert(JSON.stringify(this.user));

      var valid = true;

      if ( valid )
			{
			 			 
				 var formData = new FormData();

				 formData.append('user', JSON.stringify(this.user));
				 //this.is_submitting = true ;

				 if ( this.mode == "edit" )
				 {
					 
           axios.put( '/api/user/' + this.user._id , formData,
           {
              headers: {
                'Content-Type': 'multipart/form-data'
                //'Content-Type': 'application/json'
              }
           }
           ).then( res => {
               
              console.log(res);
               
            
            });
           
				 
				  } else {

            axios.post( '/api/user/' , formData,
            {
              headers: {
                'Content-Type': 'multipart/form-data'
                //'Content-Type': 'application/json'
              }
            }
            ).then( res => {
               
              console.log(res);
               
            
            });
				   
           				 
          }

      }
    },
  },
  props: ['mode', 'user', 'static-user-name'],
};
</script>

<style>
#user-form label {
  text-align: left;
}
</style>
