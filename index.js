function findMatching(drivers,string){
    return drivers.filter((user) => user.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(drivers, string){
    return drivers.filter((user => user.startsWith(string)))
}

function matchName(drivers, string){
    return drivers.filter((user => user.name === string))
}