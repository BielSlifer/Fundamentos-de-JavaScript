const funcs = []

for (let i = 5; i < 30; i++) {
    funcs.push(function () {
        console.log(i);
    })
}

funcs[2]()
funcs[8]()
//respeita o escopo do bloco