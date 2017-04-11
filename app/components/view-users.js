import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service('store'),

  actions: {
    //this action sends a delete request to the server and deletes the selected user
    delete: function(user) {
      let userCopy = user;
      user.destroyRecord().then( ()=>{
        alert("User Deleted");
      })
      .catch( (err)=> {
        alert(err.errors[0].detail.detail);
        userCopy.rollbackAttributes();
      });
    }
  }

});
