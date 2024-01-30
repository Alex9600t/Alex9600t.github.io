let i = 0;
const arr = [];

setInterval(() => {
    i++;
    arr.push(i)

    terminal.innerHTML = `
${arr[arr.length - 1]} <br/>
${arr[arr.length - 1]}\n
`
}, 1)