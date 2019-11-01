const atomics = ['p','q','s','t','c']
const connective = ['->','<-','&','||','~']
const connectivesNotImplies = ['&','~','||']
const connectivesImplies = ['->','<-']
const entailsSymbol = ['|=']
const formula =  ' ( ( p & s -> ( p -> q ) ) &  q |= q'
const firstPart = formula.split('(').join(' ')
const secondPart = firstPart.split(')').join(' ')
const finalPart = secondPart.split(' ')
const brackets = ['(',')']
const formulaWithoutEntails = finalPart.filter(item => !entailsSymbol.includes(item) )
const entailsElement = formulaWithoutEntails.slice(-1)
formulaWithoutEntails.pop()

const onlyAtoms = finalPart.filter(item => !connective.includes(item) && !brackets.includes(item) && item!='' && !entailsSymbol.includes(item))

const uniq = a => [... new Set(a)]
const rowAmount = 2**(uniq(onlyAtoms).length)

const columnAmount = (uniq(onlyAtoms)).length

var table = [];
var matrix = new Array(rowAmount)
for (let i =0;i<matrix.length;i++){
    matrix[i] = new Array(columnAmount)
}

for (var i = (Math.pow(2, (uniq(onlyAtoms).length)) - 1) ; i >= 0 ; i--) {
    for (var j = ((uniq(onlyAtoms).length) - 1) ; j >= 0 ; j--) {
      
      table[j] = (i & Math.pow(2,j)) ?'T':'F'
      matrix[i][j] = table[j]
      
    }

  }

console.log(matrix)

const createTruthTable = () => {}