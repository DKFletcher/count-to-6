console.log(html `<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

const escapeKeyPairs = [
    ["\'", "&apos;"],
    ["\"", "&quot;"],
    ["<", "&lt;"],
    [">", "&gt;"],
    ["&amp;", "&amp;"]
]



function html(...unsafeHTML) {
    // function html(stringArray,name, text) {
    const stringArray = unsafeHTML.shift();
    unsafeHTML.map(x => {
        escapeKeyPairs.forEach(x)
    })
}