const chessviewer = require('./main');
const expect = require('chai').expect;

describe.only('basic examples', () => {
  it('basic PGN with one move', () => {
    // Arrange
    const pgn = '1. e4';

    // Act
    const moments = chessviewer(pgn);

    // Assert
    expect(moments.length).to.equal(1);
    expect(moments[0].move).to.equal('e4');
    expect(moments[0].fen).to.equal(
      'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1'
    );
  });

  it('basic PGN with two moves', () => {
    // Arrange
    const pgn = '1. e4 e5';

    // Act
    const moments = chessviewer(pgn);

    // Assert
    expect(moments.length).to.equal(2);
    expect(moments[1].move).to.equal('e5');
    expect(moments[1].fen).to.equal(
      'rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq e6 0 2'
    );
  });
});

describe('invalid PGN', () => {
  it('first move is invalid in the PGN', () => {
    // Arrange
    const pgn = '1. e5';

    // Act
    const moments = chessviewer(pgn);

    // Assert
    expect(moments.length).to.equal(0);
  });
});

describe('with comments', () => {
  it('comment after the first move', () => {
    // Arrange
    const pgn = '1. e4 {one of the most popular openings for white}';

    // Act
    const moments = chessviewer(pgn);

    // Assert
    expect(moments[0].move).to.equal('e4');
    expect(moments[0].comment).to.equal(
      'one of the most popular openings for white'
    );
  });

  it('comment before the first move', () => {
    // TODO: the first moment should be the starting position
    // and eventually a comment
  });
});

describe('with special symbols, also called NAGs', () => {
  it('"good move" NAG after the first move', () => {
    // Arrange
    const pgn = '1. e4 $1';

    // Act
    const moments = chessviewer(pgn);

    // Assert
    expect(moments[0].move).to.equal('e4');
    expect(moments[0].nag).to.equal('!');
  });

  it('unknown NAG after the first move', () => {
    // Arrange
    const pgn = '1. e4 $111';

    // Act
    const moments = chessviewer(pgn);

    // Assert
    expect(moments[0].move).to.equal('e4');
    expect(moments[0].nag).to.equal('');
  });
});

describe('with shapes', () => {
  it('e4 field with green highlight', () => {
    // Arrange
    const pgn = '1. e4 {[%csl Ge4]}';

    // Act
    const moments = chessviewer(pgn);

    // Assert
    const e4 = { brush: 'G', orig: 'e4' };
    expect(moments[0].shapes).to.equal([e4]);
  });

  it('d5 & f5 fields with yellow highlight', () => {
    // Arrange
    const pgn = '1. e4 {[%csl Yd5,Yf5]}';

    // Act
    const moments = chessviewer(pgn);

    // Assert
    const d5 = { brush: 'Y', orig: 'd5' };
    const f5 = { brush: 'Y', orig: 'f5' };
    expect(moments[0].shapes).to.equal([d5, f5]);
  });

  it('d1-h5 diagonal with red highlight', () => {
    // Arrange
    const pgn = '1. e4 {[%cal Rd1h5]}';

    // Act
    const moments = chessviewer(pgn);

    // Assert
    const d1h5 = { brush: 'R', orig: 'd5', dest: 'h5' };
    expect(moments[0].shapes).to.equal([d1h5]);
  });
});

describe('with variations', () => {
  // test only basic functionality + variations
});

describe('everything put together', () => {
  // test everything
});
