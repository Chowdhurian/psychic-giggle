// This is sample data for development. This will become core-items.js
const items = {
  item1: {
    name: 'A friendly intro to Big O Notation',
    tags: ['big o notation'],
    status: 'incomplete', // incomplete or complete
    link: 'http://dts.podtrac.com/redirect.mp3/media.blubrry.com/basecs_podcast/content.blubrry.com/basecs_podcast/BP_EP_6.mp3',
    load: 'light', // light or heavy
    length: 1998, // 33:18 mins in seconds
    medium: 'audio', // text or audio or video or interactive (which may include multiple media)
  },

  item2: {
    name: 'Lesson 1: An Introduction, and the ABCs',
    tags: ['regular expressions'],
    status: 'incomplete', // incomplete or complete
    link: 'https://regexone.com/lesson/introduction_abcs',
    load: 'light', // light or heavy
    length: 900,
    medium: 'interactive', // (text or audio or video or interactive)
  },

  item3: {
    name: 'Problem 1: Matching a decimal numbers',
    tags: ['regular expressions'],
    status: 'incomplete', // incomplete or complete
    link: 'https://regexone.com/problem/matching_decimal_numbers',
    load: 'light', // light or heavy
    length: 900, // 33:18 mins in seconds
    medium: 'interactive', // (text or audio or video or interactive)
  },

  item4: {
    name: 'Tutorial The OR symbol',
    tags: ['regular expressions'],
    status: 'incomplete', // incomplete or complete
    link: 'https://regexcrossword.com/challenges/tutorial/puzzles/1',
    load: 'light', // light or heavy
    length: 900, // 33:18 mins in seconds
    medium: 'interactive',
  },

  item5: {
    name: 'A Little Unix CLI Game',
    tags: ['cli'],
    status: 'incomplete', // incomplete or complete
    link: 'http://una.im/little-cli-game/',
    load: 'light', // light or heavy
    length: 600, // 33:18 mins in seconds
    medium: 'interactive',
  },

  item6: {
    name: 'Level 1: Introduction',
    tags: ['source control', 'git'],
    status: 'incomplete', // incomplete or complete
    link: 'https://gitreal.codeschool.com/levels/1',
    load: 'light', // light or heavy
    length: 900, // 33:18 mins in seconds
    medium: 'interactive',
  },

  item7: {
    name: 'Git-it (Desktop App)',
    tags: ['source control', 'git'],
    status: 'incomplete', // incomplete or complete
    link: 'https://github.com/jlord/git-it-electron',
    load: 'light', // light or heavy
    length: 3600, // 33:18 mins in seconds
    medium: 'interactive', // (text or audio or video or interactive)
  },

  item8: {
    name: 'Try Git',
    tags: ['source control', 'git'],
    status: 'incomplete', // incomplete or complete
    link: 'http://www.codeschool.com/courses/try-git',
    load: 'light', // light or heavy
    length: 3600, // 33:18 mins in seconds
    medium: 'audio', // (text or audio or video or interactive)
  },

  item9: {
    name: 'git - the simple guide',
    tags: ['source control', 'git'],
    status: 'incomplete', // incomplete or complete
    link: 'https://rogerdudler.github.io/git-guide/',
    load: 'light', // light or heavy
    length: 900, // 33:18 mins in seconds
    medium: 'text', // (text or audio or video or interactive)
  },

  item10: {
    name: 'Chapter 1 Elements',
    tags: ['devtools', 'debugging'],
    status: 'incomplete', // incomplete or complete
    link: 'http://discover-devtools.codeschool.com/chapters/1',
    load: 'light', // light or heavy
    length: 900, // 33:18 mins in seconds
    medium: 'text', // (text or audio or video or interactive)
  },
}

export default items
