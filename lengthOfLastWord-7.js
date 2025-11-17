const s = "   fly                            "
const newS = s.split(' ')


for(let i = newS.length - 1; i >= 0; i--){
    if (newS[i] != "") {
        // return newS[i].length
        console.log(newS[i].length);
        break
    }
}
