// const should = require('chai').should();
import {should} from 'chai';
should();

describe('Our first test', () => {
    it('should pass', () => {
       true.should.equal(true);
    });

    it('should definitely fail', () => {
        "something0".should.equal("something0");
    });
});