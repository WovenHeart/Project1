fetch("http://18.185.249.19/api/commands/21112")
    .then (response => response.json())
    .then(data => {
        console.log(data.sentence)
        documnent.querySelector(this.#debug).innerText = data.sentence
    })