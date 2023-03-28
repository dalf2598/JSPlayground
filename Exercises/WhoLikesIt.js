const names = ['Max', 'John', 'Mark'];

function likes(names) {
    switch (names.length) {
        case 3:
            return `${names[0]}, ${names[1]} and ${names[2]} like this`;
        case 2:
            return `${names[0]} and ${names[1]} like this`;
        case 1: 
            return `${names[0]} likes this`;
        case 0:
            return `no one likes this`;
          default:
            return `${names[0]} and ${names[1]} and ${names.length - 2} others like this`;
      }
}

console.log(likes(names));
