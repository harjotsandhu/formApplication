import Ember from 'ember';

export default Ember.Controller.extend({
  store: Ember.inject.service('store'),
  userList: null,
  addUser: true,
  viewUsers: false,

  actions: {
    viewAllUsers: function() {
      this.set('viewUsers', true);
      this.get('store').findAll('user').then( (res)=> {
        this.set('userList', res);
      })
      this.set('addUser', false);
    }
  }


});
