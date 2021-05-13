const fs = require('fs');
const acorn = require('acorn');


const code = fs.readFileSync('example.js');

const ast = acorn.parse(code);

fs.writeFileSync('example_ast.json', JSON.stringify(ast));