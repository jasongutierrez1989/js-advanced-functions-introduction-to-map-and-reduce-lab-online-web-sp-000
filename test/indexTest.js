describe('my own map-like methods', function() {
 describe("mapToNegativize returns an array with all values made negative", function() {
   it("transforms correctly", function(){
      expect(mapToNegativize([1, 2, 3, -9])).to.eql([-1, -2, -3, 9])
   })

  
