const url = ' http://google.com';
const url2 = 'https://fohtt.com/path/to/resource.html';

function domainName(url){
    let domain = url.match(/(?<=(www\.))\S+?(?=\.)/);
    if(domain !== null) return domain[0];
    domain = url.match(/(?<=(\/\/))\S+?(?=\.)/);
    if(domain !== null) return domain[0];
    domain = url.match(/(?<=(\b))\S+?(?=\.)/);
    if(domain !== null) return domain[0];
}

function domainNameV2(url){
    url = url.replace("https://", '');
    url = url.replace("http://", '');
    url = url.replace("www.", '');
    return url.split('.')[0];
  };

console.log(domainName(url));

