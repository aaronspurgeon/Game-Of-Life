const numRows = 50;
const numCols = 50;

export const wasteland = [];
for (let i = 0; i < numRows; i++) {
  wasteland.push(Array.from(Array(numCols), () => 0));
}

export const glider = [];
for (let i = 0; i < numRows; i++) {
  glider.push(Array.from(Array(numCols), () => 0));
}
glider[25][25] = glider[26][26] = glider[27][26] = glider[27][25] = glider[27][24] = 1;

export const smallExploder = [];
for (let i = 0; i < numRows; i++) {
  smallExploder.push(Array.from(Array(numCols), () => 0));
}
smallExploder[25][25] = smallExploder[24][24] = smallExploder[23][24] = smallExploder[23][25] = smallExploder[24][26] = smallExploder[23][26] = smallExploder[22][25] = 1;

export const exploder = [];
for (let i = 0; i < numRows; i++) {
  exploder.push(Array.from(Array(numCols), () => 0));
}
exploder[25][25] = exploder[21][25] = exploder[25][23] = exploder[25][27] = exploder[24][23] = exploder[22][23] = exploder[21][23] = exploder[23][23] = exploder[23][27] = exploder[22][27] = exploder[24][27] = exploder[21][27] = 1;

export const tenCell = [];
for (let i = 0; i < numRows; i++) {
  tenCell.push(Array.from(Array(numCols), () => 0));
}
tenCell[25][20] = tenCell[25][21] = tenCell[25][22] = tenCell[25][23] = tenCell[25][24] = tenCell[25][26] = tenCell[25][27] = tenCell[25][28] = tenCell[25][29] = tenCell[25][25] = 1;

export const spaceship = [];
for (let i = 0; i < numRows; i++) {
  spaceship.push(Array.from(Array(numCols), () => 0));
}
spaceship[25][22] = spaceship[23][22] = spaceship[22][23] = spaceship[22][24] = spaceship[22][25] = spaceship[22][26] = spaceship[24][26] = spaceship[23][26] = spaceship[25][25] = 1;

export const random = [];
for (let i = 0; i < numRows; i++) {
  random.push(Array.from(Array(numCols), () => (Math.random() > 0.7 ? 1 : 0)));
}

export const operations = [
  [0, 1],
  [0, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0],
];
