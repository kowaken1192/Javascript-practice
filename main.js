'use strict';

// ひとつが文字列になると連結される
console.log(50 + '20');

// promptメソッドを使うとユーザーからのの入力を受けとる
// 加えて必ず文字列を返す仕様になる
// 変更するには必ずNumberを使う
const n = prompt('Any number?');
console.log(Number(n) + 10);
