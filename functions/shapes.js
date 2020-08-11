module.exports = (value) => {
  const Dictionary =
  {
    Y: "yellow",
    G: "green",
    R: "red",
  };
  if(value.indexOf("%") === -1){
      return [] ;
    }
  const moves = value.split('%csl').pop().split('%cal').pop().split(']').shift().trim().split(',');
  return moves.map((item) =>
  {
    return {
      brush: Dictionary[item.substring(0,1)] || "green",
      orig: item.substring(1,3),
      dest: item.substring(3,5),
    }
  });
}
