module.exports = (phrase, important = phrase.length) => `${phrase}${("!").repeat(important)}`