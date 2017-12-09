/* eslint-disable no-unused-vars */
import Vue from 'vue';

const app = new Vue({
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

  computed: {
    incomplete() {
      return this.tasks.filter(element => !element.completed);
    },
  },

});

export default app;

