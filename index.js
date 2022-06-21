// "2022-fa-08 09:aa:00"  ==== "2022年06月08 09时00分00秒"

//  2022年06月08 09时00分00秒


//  fa --> 06
//  aa --> 00
//  - ['年', '月']
//  : ['时', '分']

var dic = {
    f: '0',
    a: '6',
    aa: '00',
    '-': ['年', '月'],
    ':': ['时', '分']
}

var str = "2022-fa-08 09:aa:00";
var result = "";
// sourceArr: [
//     '2', '0', '2', '2', '-',
//     'f', 'a', '-', '0', '8',
//     ' ', '0', '9', ':', 'a',
//     'a', ':', '0', '0'
// ] 
var sourceArr = str.split("");

// 当我们 element = a, 并且它的前一个元素不是a, 我们有理由相信这个a前面链接的是f;
// 当我们 element = a, 并且它的前一个元素是a, 我们有理由相信我们遍历到了aa;

var i = 0;
var j = 0;

for (let index = 0; index < sourceArr.length; index++) {
    const element = sourceArr[index];
    // 此处处理不在字典中的数据
    if (dic[element] === undefined) {
        result += element;
    } else {
        // element 肯定在 dic 中存在值
        // 当字典中存在我们定义的属性
        if (element === '-') {
            // dic[element] ===> ['年', '月']
            // i 对应数组的位序
            result += dic[element][i];
            i++;
            continue;
        }
        if (element === ':') {
            // dic[element] ===> ['时', '分']
            // i 对应数组的位序
            result += dic[element][j];
            j++;
            continue;
        }
        // 处理 a 与 aa 之前的关系
        // 当我们 element = a, 并且它的前一个元素不是a, 我们有理由相信这个a前面链接的是f;
        // 当我们 element = a, 并且它的前一个元素是a, 我们有理由相信我们遍历到了aa;
        if (element === 'a' && sourceArr[index - 1] === 'f') {
            result += dic[element];
            continue;
        }
        if (element === 'a' && (sourceArr[index - 1] === 'a' || sourceArr[index + 1] === 'a')){
            result += '0';
            continue;
        }
        // 最后的情况
        result += dic[element];
    }
}

console.log("打印结果：", result + '秒');


