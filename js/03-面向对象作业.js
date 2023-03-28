class Utils {
    static getMaxNumber(array, k, m) {
        //数组去重
        const newArray = [... new Set(array)]
        //从大到小排序
        newArray.sort( (a, b) => b - a)

        //找到第k大和第m大的数
        const K = newArray[k - 1];
        const M = newArray[m - 1];

        //找到数据个数
        const kNum = array.filter(item => item === K).length
        const mNum = array.filter(item => item === M).length

        console.log(`${array}中第${k}大的是${K},出现了${kNum}次，第${m}大的是${M},出现了${mNum}次`)
    }
}

Utils.getMaxNumber([10, 18, 12, 13, 18, 19, 18, 13, 7, 9], 3, 2)

class Calculator {
    constructor(value) {
        this.value = value;
    }
    add(num) {
        this.value += num;
        return this;
    }
    reduce(num) {
        this.value -= num;
        return this;
    }
}

const ca = new Calculator(100);
ca.add(1).reduce(100).add(10).reduce(8).add(1);
console.log(ca.value)