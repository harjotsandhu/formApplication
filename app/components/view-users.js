import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service('store'),

  actions: {
    delete: function(user) {
      let userCopy = user;
      user.destroyRecord().then( ()=>{

      })
      .catch( (err)=> {
        userCopy.rollbackAttributes();
      });
    }
  }

});
