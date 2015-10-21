# 用途

为你文件内的所有函数（无论函数声明还是函数表达式）都包上一个try catch

``` javascript
  //before
  function test1(){
    console.log("dont be like bob");
  }
  //after
  function test1() {
  	try {
  		console.log("dont be like bob");
  	} catch (e) {
  		console.log('error')
  	}
  }
```
