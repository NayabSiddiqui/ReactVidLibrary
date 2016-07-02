const should = require('chai').should();

describe('Our first test', () => {
    it('should pass', () => {
       true.should.equal(true);
    });

    it('shoould definitely fail', () => {
        "something0".should.equal("something0");
    });
});