const { Chess } = require("chess.js");
var fens = [
{
    move:"",
    fen:""
}];
const chess=new Chess(); //here we will load our pgn
const chessFEN= new Chess(); //with this one we work each move in order to get the fens
const loaded = chess.load_pgn('1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 {giuoco piano} *');

console.log(loaded); // succesfully load the pgn
console.log(chess.history()); //see the moves in array format

for(var i=0 ; i < chess.history().length; i++)
{
    chessFEN.move(chess.history()[i]);
    fens.push(chess.history()[i].toString(),chessFEN.fen().toString());
}
console.log(fens);

