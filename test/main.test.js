var assert = require('assert');
describe('数组中是否存在某数', function () {
    it('如果值不存在请返回－1谢谢', function () {
        assert.equal(-1, [1, 2333, 3].indexOf(2));
    });
});