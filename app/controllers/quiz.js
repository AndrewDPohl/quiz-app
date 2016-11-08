import Ember from 'ember';

export default Ember.Controller.extend({
  question: '',
  answer: '',
  alert: '',
  actions: {
    getQuestion: function(question, answer) {
      var pairs = [];
      var question = document.getElementById('question').value;
      var answer = document.getElementById('answer').value;
      pairs.push(question, answer);
      console.log(pairs);
      this.set('question', '');
      this.set('answer', '');
      this.set('alert', '');
      $('.alert-message').text('Your question and answer have been saved, set another');
    }
  }
});
