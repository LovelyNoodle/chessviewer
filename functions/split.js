const Split = (pgn) => {
  const parts = pgn.split('(').map((item) =>
  {
  return item.split(')');
  })

  return([].concat.apply([], parts)); // transforms a multidimensional array to 1D array;

}

module.exports= Split;

