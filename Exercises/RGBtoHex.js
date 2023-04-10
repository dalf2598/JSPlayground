const dec = 255;

function rgb(r, g, b){
    const decimals = [r,g,b];
    const hexValues = ['A','B','C','D','E','F'];
    let result = '';

    for(let decimal of decimals){
        if(decimal <= 0){
            result += '00'
            continue;
        }
        
        if(decimal >= 255){
            result += 'FF';
            continue;
        }

        let hex = '';
        while(decimal !== 0){
            const remainder = decimal % 16;
            hex = String((remainder > 9) ? hexValues[remainder - 10] : remainder) + hex;
            decimal = Math.floor(decimal/16);        
        } 
        result += (hex.length > 1) ? hex : '0'+ hex;
    }

    return result;
}

function decimalToHex(decimal){
    const hexValues = ['A','B','C','D','E','F'];
    let hex = '';
    
    while(decimal !== 0){
        const remainder = decimal % 16;
        hex = String((remainder > 9) ? hexValues[remainder - 10] : remainder) + hex;
        decimal = Math.floor(decimal/16);        
    }
    
    return hex;
}

function rgbV2(r, g, b){
	return toHexV2(r)+toHexV2(g)+toHexV2(b);
}

function toHexV2(d) {
    if(d < 0 ) {return "00";}
    if(d > 255 ) {return "FF";}
    return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
}

console.log(decimalToHex(47));
console.log(rgb(0,255,0));