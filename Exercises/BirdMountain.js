var mountain = [
    "^^^^^^        ".split(''),
    " ^^^^^^^^     ".split(''),
    "  ^^^^^^^     ".split(''),
    "  ^^^^^       ".split(''),
    "  ^^^^^^^^^^^ ".split(''),
    "  ^^^^^^      ".split(''),
    "  ^^^^        ".split('')
  ];

function peakHeight(mountain) {
    let levels = [];

    for (let i = 1; i < mountain.length - 1; i++) {
        levels.push(
            mountain[i].reduce((total, current) => {
                return (current === '^') ? total + 1 : total;
            }, 0)
        );
    }

    let min = levels.sort((a,b) => a - b)[0];

    return Math.ceil(min/2);
}

console.log(peakHeight(mountain));
