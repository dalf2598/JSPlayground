const faces = [':D',':~)',';~D',':)'];

function countSmileys(faces) {
    if(faces.lenght === 0) return 0;
    let counter = 0;
    faces.forEach(face => {
        let flag = true;
        if(face[0] !== ':' && face[0] !== ';') flag = false;
        if(face.length < 3){
            if(face[1] !== ')' && face[1] !== 'D') flag = false;
        }else{  
            if(face[1] !== '-' && face[1] !== '~') flag = false;
            if(face[2] !== ')' && face[2] !== 'D') flag = false;
        }
        if(flag) counter++;
    });
    return counter;
}

function countSmileysV2(arr) {
    return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
}

console.log(countSmileysV2(faces));