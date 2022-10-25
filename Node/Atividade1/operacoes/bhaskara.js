module.exports.bhaskara = (a, b, c) => {
    let delta = (b * b) - (4 * a * c);

    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);

    return "X1 = " + x1 + "\nX2 = " + x2;
}