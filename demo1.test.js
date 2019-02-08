const sum = require('./demo1');

test('annetaan vain yksi parametri, palautetaan luku itse', () => {
    expect(sum(4)).toBe(4);
});

test('parametrit puuttuvat, heitetään poikkeus', () => { 
    expect(() => {
      sum()}).toThrow('ei parametreja');
  });