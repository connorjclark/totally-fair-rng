module.exports.number = function rng(min = 0, max = 1) {
    const scale = Math.random()
    return scale * (max - min) + min
}

module.exports.bool = function bool() {
    return module.exports.number() > 0.5
}
