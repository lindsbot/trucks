var request = require('superagent');
var expect = require('chai').expect;
var should = require('chai').should;

describe('trucks server', function(){
  it('returns true', function(){
    return true;
  });
});


// expect(function(done){
//     request.post('localhost:3000').end(function(res){
//       expect(res).to.exist;
//       expect(res.status).to.equal(200);
//       // TODO: add more server tests
//       //expect(res.body).to.contain();
//       done();
//     });
//   });