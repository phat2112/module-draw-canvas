export function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}
