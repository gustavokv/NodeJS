import promptSync from 'prompt-sync';
var prompt = promptSync();

class Vertice{
    #vertice = [];

    constructor(nx, ny){
        this.#vertice = {x: nx, y: ny};
    }
    
    get x(){
        return this.#vertice.x;
    }

    get y(){
        return this.#vertice.y;
    }

    getDistancia(v){
        return Math.sqrt((v.x - this.#vertice.x) ** 2 + (v.y - this.#vertice.y) ** 2);
    }

    move(nx, ny){
        this.#vertice = {x: nx, y: ny};
    }

    equals(v){
        if(v.x == this.#vertice.x && v.y == this.#vertice.y)
            return true;

        return false;
    }
}

class Poligono{
    #vertices = [];
    #n_vert

    constructor(n, v){
        for (const i in v) {
            this.#vertices[i] = new Vertice(v[i].x, v[i].y);
        }

        this.#n_vert = n;
    }

    addVertice(v){
        for(const i in this.#vertices){
            if(this.#vertices[i].x == v.x && this.#vertices[i].y == v.y)
                return false;
        }

        this.#vertices.push(v);
        this.#n_vert++;
    }

    get perimetro(){
        let per=0;

        for(let i=0;i<this.#n_vert-1;i++){
            per += this.#vertices[i].getDistancia(this.#vertices[i+1]);
        }

        per += this.#vertices[n-1].getDistancia(this.#vertices[0]);

        return per;
    }

    get qntVertices(){
        return this.#n_vert;
    }
}

let n, x, y, p, V = [];

n = prompt('Numero de vertices a digitar');

if(n<3)
    throw 'Possui menos de 3 vertices';

for(let i=0;i<n;i++){
    x = prompt('x' + Number(i+1) + ' ');
    y = prompt('y' + Number(i+1) + ' ');

    V[i] = new Vertice(parseInt(x), parseInt(y));
}

p = new Poligono(n, V);

console.log(p.perimetro);
console.log(p.qntVertices);