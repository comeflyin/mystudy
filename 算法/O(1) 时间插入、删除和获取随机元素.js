
var RandomizedSet = function() {
    this.nums = []
    this.map = new Map()
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(this.map.has(val)){
        return false
    }else{
        this.nums.push(val)
        this.map.set(val,this.nums.length - 1)
    }
    return true
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(this.map.has(val)){
        [this.nums[this.map.get(val)],this.nums[this.nums.length - 1]] = [this.nums[this.nums.length - 1],this.nums[this.map.get(val)]]
        this.map.set(this.nums[this.map.get(val)],this.map.get(val))
        this.nums.pop()
        this.map.delete(val)
        return true
    }else return false
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    return this.nums[Math.floor(Math.random() * this.nums.length)]
};