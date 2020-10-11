const captFirstLetter = sentence => {
    let splitSent = sentence.toLowerCase().split(" ")
    for (let i = 0; i < splitSent.length; i++) {
      splitSent[i] = splitSent[i][0].toUpperCase() + splitSent[i].slice(1)
    }
    console.log(splitSent.join(" "))
}
