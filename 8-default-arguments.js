module.exports = function midpoint(lower = 0, upper = 1) {
    return upper - ((upper - lower) / 2)
}