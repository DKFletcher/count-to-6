module.exports = function average(...args) {
    let mean = 0
    args.forEach(arg => mean += arg)
    return mean / args.length
}