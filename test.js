var assert = require('assert')

function testFn(val){
    if(val == 1){
        // console.log(true)
        return true
    }
    // console.log(false)
    return false
}

describe('acc', function() {
    describe('testFn()', function() {
        it('描述', function() {
            assert.equal(true, testFn(1))
            console.log(testFn(1))
        })
    })
})