import Ember from 'ember';

export default Ember.Component.extend({
  newUser: {email:''},
  store: Ember.inject.service('store'),

  email : function() {
    if (this.get('newUser.email').includes('@') && this.get('newUser.email').includes('.')) {
      return true;
    }
  }.property('newUser.email'),


  actions:{
    addUser: function() {
      console.log(this.get('newUser'));

      let post = this.get('store').createRecord('form', this.get('newUser'));
      post.save();
      },
    }
});
