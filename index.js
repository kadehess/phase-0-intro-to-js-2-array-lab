const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name)

}

function destructivelyPrependCat(name) {
    cats.unshift(name)
}

function destructivelyRemoveLastCat(name) {
    cats.pop(name)
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name)
}

function appendCat(name) {
    const kittyKitty = cats.slice()
    kittyKitty.push(name)
    return kittyKitty}

function prependCat(name) {
    const kittyKitty = cats.slice()
    kittyKitty.unshift(name)
    return kittyKitty
}

function removeLastCat(name) {
    const kittyKitty = cats.slice()
    kittyKitty.pop(name)
    return kittyKitty
}

function removeFirstCat(name) {
    const kittyKitty = cats.slice()
    kittyKitty.shift(name)
    return kittyKitty
} 