/* eslint-disable no-unused-vars */

const app = new Vue({
  el: '#app',

  data: {
    tasks: [
      { description: 'Study vue', completed: false },
      { description: 'Create PT stories', completed: false },
      { description: 'Read Bible', completed: false },
      { description: 'Write Poem', completed: false },
      { description: 'Continue a novel', completed: true },
      { description: 'Watch agents of shield', completed: true },
      { description: 'Play scrabble', completed: false },
      { description: 'Go to Ikeja', completed: false },
    ],
  },

  methods: {

  },

  computed: {
    incomplete() {
      return this.tasks.filter(element => !element.completed);
    },
  },

});

