import Ember from 'ember';

export default Ember.Component.extend({
  newUser: {email:'',firstname:'',lastname:'',phone:null},
  store: Ember.inject.service('store'),
  phoneList: [],

  //this is a computed property that observes the firstname input field and returns true when the validations are met
  validFirst: function() {
    if (!this.get('newUser.firstname')=='') {
      return true;
    }
    else {
      return false;
    }
  }.property('newUser.firstname'),

  //this is a computed property that observes the lastname input field and returns true when the validations are met
  validLast: function() {
    if (!this.get('newUser.lastname')=='') {
      return true;
    }
    else {
      return false;
    }
  }.property('newUser.lastname'),

  //this is a computed property that observes the phone input field and returns true when the validations are met. checks for empty, phone is 10 digits and is a number
  validPhone: function() {
    if (!this.get('newUser.phone')==''&& this.get('newUser.phone').length===10 && Number.isInteger(Number(this.get('newUser.phone')))) {
      return true;
    }
    else {
      return false;
    }
  }.property('newUser.phone'),

  //this is a computed property that observes the email input field and returns true when the validations are met
  validEmail: function() {
     let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(this.get('newUser.email'));
  }.property('newUser.email'),

  //this is a computed property that observes all the input field properties and enables the button when all fields are validated
  didNotPass: function () {
    if (this.get('validFirst')&&this.get('validLast')&&this.get('validPhone')&&this.get('validEmail')) {
      return false;
    }
    else {
      return true;
    }
  }.property('validFirst','validLast','newUser.phone', 'newUser.email'),

  actions:{
    //this action sends a post request to the server and creates a new record
    addUser: function() {
      let post = this.get('store').createRecord('user', this.get('newUser'));
      post.save().then((res) => {
        this.set('newUser','');
        alert("User Added");
      }).catch((err)=> {
        alert(err.errors[0].detail.detail);
      });
    },
  }
});
