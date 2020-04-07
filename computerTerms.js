const brain = require('brain.js');
const data = require('./data.json')

const network = new brain.recurrent.LSTM()

//How we can use a json file and map through it to create input/output

const trainingData = data.map(item => ({
    input: item.text,
    output: item.category
}))

//normal training is 20,000 iterations but we're gonna make it 2,000 iterations
network.train(trainingData, {
    iterations: 4000
})

//testing out with a string of words that partially exists in the training data
// const output = network.run('I fixed the power supply')
//outputs hardware

const output = network.run('The code has some bugs')
console.log(`Category: ${output}`)