const ta = document.querySelector('#codeWriter');
console.log(ta);
const button2 = document.querySelector("#start")
button2.onclick = startProgramm;

function startProgramm() {
    const code = ta.value.split("\n");
    for (let i = 0; i < code.length; ++i) {
        code[i] = code[i].split(" ")

    }
    console.log(code)

    let line = 0
    while (line < code.length) {
        for (let sp = 0; sp < code[line].length; ++sp) {
            if (code[line][sp] = 'print') {
                console.log('bububu')
            }
        }
        line += 1
    }

    alert("Программа запущенна");
}