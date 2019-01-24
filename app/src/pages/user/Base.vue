<template>
<div>
  <h5>User List </h5>
  
  <div class="col-md-12">

    <div class="row" style="margin-bottom:20px;">
      
      <div class="col-md-3">

        <input type="text" class="form-control" v-model="user.filter" placeholder="Filter" >

      </div>

      <div class="col-md-9 text-right">
         <b-link :to="{ name: 'add-user' , }" alt="Add user" class="text-success">
           <i class="fas fa-user-plus"></i>
         </b-link>
      </div>

    </div>
    
    <div id="table" class="col-xs-12 table-responsive">
    
        <datatable :columns="user.columns" :data="getUsers" :filter-by="user.filter">

          <template slot-scope="{ row }">
						<tr>

							<td>{{row.first_name}}</td>
              <td>{{row.last_name}}</td>
              <td>{{row.national_id}}</td>
              <td>{{row.dob}}</td>
              <td>{{row.activated}}</td>
              <td>
                 
                 <b-link :to="{ name: 'edit-user' , params: { id: row._id } }" alt="Edit user" class="text-info">
                   <i class="fas fa-user-edit" ></i>
                 </b-link>
                 
                  &nbsp;
                 <b-link href="#" class="text-danger">
                   <i class="fas fa-user-minus"></i>
                 </b-link>
              
              </td>
             
            </tr>
          </template>
        
        </datatable>
    
    </div>
  </div>

  <div class="row">
    <div class="col-xs-12 form-inline" style="margin:auto;">
        <datatable-pager v-model="user.page" type="abbreviated" :per-page="user.perPage"></datatable-pager>
    </div>
  </div>

</div>
</template>

<script>
/* eslint-disable */

import axios from 'axios';

export default {
  data() {
    return {
      user: {
        columns: [
          { label: 'First Name', field: 'user.first_name', sortable: true },
          { label: 'Last Name', field: 'user.last_name', sortable: true },
          { label: 'National ID', field: 'user.national_id', sortable: true },
          { label: 'Date of Birth', field: 'user.dob', sortable: true },
          { label: 'Activated', field: 'user.activated', sortable: true },
          { label: 'Actions', field: 'user.actions', sortable: false },
        ],
        rows: [],
        page: 1,
        perPage: 5,
        filter: '',
      },
    };
  },
  methods: {
    getUsers: (params, setRowData) => {
      axios.get('/api/user', { params: params } ).then( function(res) {
        
        setRowData(
          res.data.data,
          res.data.count,
        );
      }.bind(this));
    }
  }
};
</script>

<style scoped>

#table tbody td {
  text-align:left;
}

</style>
