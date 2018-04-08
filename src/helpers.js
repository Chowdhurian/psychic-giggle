function formatLength(length) {
  return `${Math.floor(length / 60)}:${length % 60} mins`
}

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function getFunName() {
  const adjectives = [
    'boundless',
    'dizzy',
    'fallacious',
    'giant',
    'languid',
    'mammoth',
    'spotty',
    'thoughtful',
  ]

  const nouns = [
    'curve',
    'flesh',
    'grape',
    'hammer',
    'join',
    'key',
    'ocean',
    'representative',
    'tray',
    'writer',
  ]

  const verbs = [
    'invent',
    'launch',
    'preserve',
    'scare',
    'turn',
    'whisper',
  ]

  return `${getRandomItem(adjectives)}-${getRandomItem(verbs)}-${getRandomItem(nouns)}`
}

export {
  formatLength,
  getFunName,
  getRandomItem,
}
