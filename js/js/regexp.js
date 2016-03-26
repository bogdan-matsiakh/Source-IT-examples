var url = 'http://asdf?page={page}&sol={sol}&camera={camera}&{page}';

console.log(url.replace(/{page}/g, 1));
console.log(url.replace(/{page}/g, 123).replace(/{sol}/g, 1000).replace(/{camera}/, 6));