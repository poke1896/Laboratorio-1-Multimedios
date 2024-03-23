let par = "lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Interger tincidut accumsan cursus";
let counts = {};

for(let i = 0; i < par.length; i++) {
    let character = par[i].toLowerCase();
    if(character >= 'a' && character <= 'z') { 
        counts[character] = counts[character] ? counts[character] + 1 : 1;
    }
}

console.log(counts);
