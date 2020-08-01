
const input_array = process.argv.slice(2)
const return_string = input_array.map( s => s.charAt(0))
                            .reduce((a,c) => a.concat(c))
console.log(`[${input_array}] becomes "${return_string}"`)