const input_array = process.argv.slice(2)
const [, username, email] = input_array
const output_json = {
    "username": username,
    "email": email
}

console.log(output_json);