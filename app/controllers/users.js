import Ember from 'ember';

export default Ember.Controller.extend({
  store: Ember.inject.service('store'),//inject service store
  //initialize properties
  userList: null,
  addUser: false,
  viewUsers: false,
  instructions: true,


  actions: {
    //this action will make a request to the server to fetch all users and store them in userList and set the other properties to false
    viewAllUsers: function() {
      this.set('viewUsers', true);
      this.get('store').findAll('user').then( (res)=> {
        this.set('userList', res);
      })
      this.set('addUser', false);
      this.set('instructions', false);
    },
    //this action set addUser property to true to display form page and other 2 properties to false
    addUser: function() {
      this.set('viewUsers', false);
      this.set('addUser', true);
      this.set('instructions', false);
    },
    //this action set instructions property to true to display instructions and other 2 properties to false
    viewInstructions: function() {
      this.set('viewUsers', false);
      this.set('addUser', false);
      this.set('instructions', true);
    }
  }


});
