// const pyramid =  [[3],
// [7, 4],
// [2, 4, 6],
// [8, 5, 9, 3]];

const pyramid = [[75],
[95, 64],
[17, 47, 82],
[18, 35, 87, 10],
[20,  4, 82, 47, 65],
[19,  1, 23, 75,  3, 34],
[88,  2, 77, 73,  7, 63, 67],
[99, 65,  4, 28,  6, 16, 70, 92],
[41, 41, 26, 56, 83, 40, 80, 70, 33],
[41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
[53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
[70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
[91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
[63, 66,  4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
[ 4, 62, 98, 27, 23,  9, 70, 98, 73, 93, 38, 53, 60,  4, 23]];

function longestSlideDown(pyramid) {
    let slides = [];
    
    for (let i = 0; i < pyramid.length; i++) {
        let currentLevel = pyramid[i];
        let combinations = [];
        let currentSlides = [];

        if(i > 0){
            let previousLevel = pyramid[i - 1];
            for (let j = 0; j < previousLevel.length; j++) {
                combinations.push([previousLevel[j], currentLevel[j]]);
                combinations.push([previousLevel[j], currentLevel[j+1]]);
            }
        }else{
            slides = [currentLevel];
            continue;
        }
        
        for (let h = 0; h < slides.length; h++) {        
            let tail = slides[h][slides[h].length - 1];
            for (let k = 0; k < combinations.length; k++) {
                let head = combinations[k][0];
                if( tail === head){
                    currentSlides.push([...slides[h], ...combinations[k].slice(1)])
                }
            }
        }
        
        slides = currentSlides;
    }

    const totals = slides.map((slide) =>
        slide.reduce((accumulator, currentValue) => 
        accumulator + currentValue, 0));
    
    return Math.max(...totals);
}

function longestSlideDownV2(pyramid) {
    let slides = [];
    let totals = [];

    for (let i = 0; i < pyramid.length; i++) {
        let currentLevel = pyramid[i];
        let combinations = [];
        let currentSlides = [];
    
        if(i > 0){
            let previousLevel = pyramid[i - 1];
            for (let j = 0; j < previousLevel.length; j++) {
                combinations.push([previousLevel[j], currentLevel[j]]);
                combinations.push([previousLevel[j], currentLevel[j+1]]);
            }
        }else{
            slides = [currentLevel];
            continue;
        }
        
        for (let h = 0; h < slides.length; h++) {        
            let tail = slides[h][slides[h].length - 1];
            for (let k = 0; k < combinations.length; k++) {
                let head = combinations[k][0];
                if( tail === head){
                    let slide = [...slides[h], ...combinations[k].slice(1)];
                    currentSlides.push(slide);
                    totals.push(slide.reduce((accumulator, currentValue) => 
                    accumulator + currentValue, 0));
                }
            }
        }
        
        slides = currentSlides;
    }

    return Math.max(...totals);
}

console.log(longestSlideDownV2(pyramid));
