const formatFullName = require('../formatFullname.js');
const expect = require('chai').expect;

describe('formatFullName', () => {

    it('should return an error if arg is not a string', () => {
        expect(formatFullName(undefined)).to.equal('Error');
        expect(formatFullName(12)).to.equal('Error');
        expect(formatFullName({})).to.equal('Error');
        expect(formatFullName([])).to.equal('Error');
        expect(formatFullName(function (){})).to.equal('Error');
    });

    it('should return an error if arg length is 0', () => {
        expect(formatFullName('')).to.equal('Error');
        expect(formatFullName(null)).to.equal('Error');
    });

    it('should return an error if format of data is not correct', () => {
        expect(formatFullName('saf fas asf')).to.equal('Error');
         expect(formatFullName('saf')).to.equal('Error');
    });

});