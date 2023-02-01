//DICA GERAIS:
    //no js os objetos são em letras maiusculas e os tipos em minusculas, no typescript sempre se trabalha com letras minusculas


//string, boolean, number...
let x: number = 10;
x = 12;
console.log(x);

//inferencia x annotation
let y = 12 //inferencia
let z: number = 12 //annotation

//tipos basicos
let firstName: string = "Kaio"
let age: number = 27
const isAdmin: boolean = true

//String != string
console.log(typeof firstName);
firstName = "João";
console.log(firstName);
console.log(firstName.toUpperCase());

//object
const myNumbers: number[] = [1, 2, 3];

console.log(myNumbers);
console.log(myNumbers.length);
myNumbers.push(5); //adicionar elemento ao array 

console.log(myNumbers);

//tuplas = tuple
let myTuple: [number, string, string[]]
myTuple = [5, "teste", ["a", "b"]] //certo
//myTuple = [true, false, true] //errado
console.log(myTuple);

//object liteals -> {prop: value}
const user: {name: string; age: number} = {
    name: "Pedro",
    age: 18,
};

console.log(user);
console.log(user.name);

//Para quando não souber quantos tipos de dados há, evite usar o 'any', use isso:
//union type
let id: string | number = "10"
id = 200

//type alias
type myIdType = number | string

const userId: myIdType = 10
const productId: myIdType = "00001"
const shirId: myIdType = 123

//enum = enumera uma coleção e é possível usar dados complexos de forma mais simples
    //tamanho de roupas (size: medio, size: pequeno) = jeito complexo
enum Size{
    P = "Pequeno",
    M = "Médio",
    G = "Grande",
}

const camisa = {
    name: "Camisa gola V",
    size: Size.G,
};

console.log(camisa);

//literals types = determinar um valor como tipo
let teste: "autenticado" | null
teste = "autenticado";
teste = null;

//funçoes
function sum (a: number, b: number){
    return a + b;
}

console.log(sum (12, 12));

function sayHelloTo(name: string): string{
    return `Hello ${name}`;
}
console.log(sayHelloTo("Matheus"));

function greeting(name: string, greet?: string): void{
    if(greet){
        console.log(`Óla ${greet} ${name}`);
        return;        
    }
    console.log(`Óla ${name}`);    
}

greeting("José");
greeting("Pedro", "Sir");

//interfaces
interface MathFunctionParams{
    n1: number;
    n2: number;
}
function sumNumbers(nums: MathFunctionParams){
    return nums.n1 + nums.n2
}
console.log(sumNumbers({n1: 1, n2: 2}));


function multiplyNumbers(nums: MathFunctionParams){
    return nums.n1 * nums.n2;
}

const someNumbers: MathFunctionParams = {
    n1: 5,
    n2: 10,
};

console.log(multiplyNumbers(someNumbers));


//narrowing de checagem de tipos

















