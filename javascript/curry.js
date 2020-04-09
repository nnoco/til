# 20200409 Scala 같은 커링 적용해보기
---
```
// Test the auto currying function
function curry(fn) {
	return (function next(fn, initLength, ...args) {
		if(initLength <= args.length) {
			return fn(...args);
		} else {
			return function(...nextArgs) {
				return next.apply(null, [fn, initLength, ...args, ...nextArgs]);
				//return next(fn, initLength, ...[...args, ...nextArgs]);
			}
		}
	})(fn, fn.length);
}

let max = curry(Math.max);
console.log(max(1)(2)); // print 2

// But there is problem.
// The length of the intermediate function is unknown because the length after the curry is erased.
console.log(max.length); // 0
console.log(max(1).length); // 0
```

만들고 보니 https://gist.github.com/neftaly/b77455b3df9a8b50bf8b에 더 깔끔하게 
