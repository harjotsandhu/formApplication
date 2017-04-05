import Ember from 'ember';

export default Ember.Component.extend({
  newUser: {email:'',firstname:'',lastname:'',phone:''},
  store: Ember.inject.service('store'),
  phoneList: [],

  didInsertElement(){
    let phoneNumbers = this.get('store').findAll('user').then( (res)=> {
      res.map( x => {
        this.get('phoneList').push(x.get('phone'));
      });
    });
  },

  email : function() {

    if (this.get('newUser.email').includes('@') && this.get('newUser.email').includes('.')) {
      return true;
    }
  }.property('newUser.email'),

  phone : function() {
    console.log('yo');
    return true;
  }.property('newUser.phone'),

  actions:{
    addUser: function() {
      let post = this.get('store').createRecord('user', this.get('newUser'));
      post.save().then((res) => {

      });
    },
  }
});
