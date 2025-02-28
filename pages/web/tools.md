#### 1.createDocumentFragment 大量数据创建虚拟节点添加页面，避免卡顿
```js
 function create(lar=100000,num=20){
      // 插入次数
      let times =Math.ceil(lar / num)
    // 当前渲染次数
    let current = 0
    // 获取ul元素
    let ul = document.querySelector('ul');
    // 添加数据方法
    function addData(){
        // 创建虚拟节点
        let fragment = document.createDocumentFragment();
        for(let i=0;i<num;i++){
            let li = document.createElement('li');
            li.innerText= '第'+(i+1)+'条数据';
            fragment.appendChild(li);
        }
        ul.appendChild(fragment);
        current++;
        loop()
    }
    // 循环插入数据
    function loop(){
        if(current < times){
            window.requestAnimationFrame(addData)
        }
    }
    // 执行循环
    loop()
    }
```