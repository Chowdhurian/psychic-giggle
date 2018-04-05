// This is sample data for development. This will become core-items.js
const items = {
  item1: {
    name: '0.0 Introduction to Objects',
    tags: ['objects'],
    status: 'incomplete', // incomplete or complete
    link: 'http://rubymonk.com/learning/books/1-ruby-primer/chapters/6-objects/lessons/35-introduction-to-objects',
    load: 'light', // light or heavy
    length: 600, // 33:18 mins in seconds
    medium: 'interactive', // text or audio or video or interactive (which may include multiple media)
  },

  item2: {
    name: 'Loops & Iterators',
    tags: ['loops'],
    status: 'incomplete',
    link: 'https://www.codecademy.com/courses/learn-ruby/lessons/loops-iterators',
    load: 'light',
    length: 900,
    medium: 'interactive',
  },
}

export default items
