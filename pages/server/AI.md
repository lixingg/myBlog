## AI人工智能
### 1.NumPy科学计算库
#### 1.什么是NumPy
```python
# NumPy（ Numerical Python） 是一个开源的Python科学计算库。提供多维数组对象，各种派生对象（如掩码数组和矩阵），
# 这种工具可用来存储和处理大型矩阵，比Python自身的嵌套列表结构更有效率。支持大量的维度数组与矩阵运算，此外也针对数组运算
# 提供大量的数学函数库，包括：数学、逻辑、形状操作、排序、选择、输入/输出、离散傅立叶变换、基本线性代数、基本统计运算、随机模拟等。
  # 几乎所有从事Python工作的数据分析师都利用NumPy的强大功能。
    # 强大的N维数组
    # 成熟的广播功能
    # 用于整合C/C++和Fortran代码的工具包
    # NumPy提供了全面的数学功能、随机数生成器和线性代数工具
  # 安装Python库
    
    # 直接安装 anaconda
```
#### 2.安装Python库
- 1.第一种安装方式：
- ```python
  # pip install jupyter -i https://pypi.tuna.tsinghua.edu.cn/simple
  # pip install numpy -i https://pypi.tuna.tsinghua.edu.cn/simple
  ```
- 2.第二种安装方式：
- 直接安装 anaconda
- 百度云盘链接: https://pan.baidu.com/s/16W9lDPCzesvhTJMC3_Evmg 提取码: xczb 
- 注意：Add Path ！！！添加一下环境变量项勾选上
- 启动终端
- ```python
  # window + r 打开命令窗
  # 输入命令：jupyter notebook
  # 在浏览器上显示对应的目录，windows默认路径是：C:\Users\用户名
  # 注意：在哪个盘下cmd 打开命令窗 目录显示哪个盘下对应的文件
  ```


#### 3.基本操作
- 1.NumPy数组创建
- ```python
  # 1.创建数组的最简单方法就是使用array函数,将python下的list转换为ndarray。
  # 例如：
    import numpy as np
    data = [1,2,3]
    np_array = np.array(data)
    print(np_array)
    np_array
    # 输出：
    [1 2 3]
    array([1, 2, 3])
  
  # 2.我们可以利用np中的一些内置函数来创建数组，比如我们创建全0的数组，也可以创建全1的数组，全是其他数字的数组，
  # 或者等差数列数组，正态分布数组、随机数。
  # 例如：
    import numpy as np
    # 1.zeros方法创建全0的数组
      arr1 = np.zeros(shape=10) # shape=可省略
      # 输出：
      array([0., 0., 0., 0., 0., 0., 0., 0., 0., 0.])
    # 2.ones方法创建全1的数组
      arr2 = np.ones(shape=10)
      # 输出：
      array([1., 1., 1., 1., 1., 1., 1., 1., 1., 1.])
    # 3.full方法创建全2的数组
      arr3 = np.full(shape=10,fill_value=2) 
      # 输出：
      array([2, 2, 2, 2, 2, 2, 2, 2, 2, 2])
    # 4.random.randint方法创建10个随机整数
      arr4 = np.random.randint(low=0,high=10,size=10)
      # 输出：
      array([5, 2, 1, 1, 4, 2, 6, 6, 6, 5])
    # 5.random.randint方法创建二维数组
      arr5 = np.random.randint(low=0,high=10,size=(3,4)) # 3 表示行 4表示列
      # 输出：
      array([[3, 7, 5, 1],
             [4, 6, 9, 0],
             [7, 5, 5, 3]])
    # 6.random.randint方法创建多维数组
      arr6 = np.random.randint(low=0,high=10,size=(3,4,2)) # 3 表示维度 4表示行 2表示列
      # 输出：
      array([[[8, 4],
        [0, 5],
        [9, 0],
        [7, 9]],

       [[5, 8],
        [2, 3],
        [3, 0],
        [7, 7]],

       [[8, 8],
        [8, 8],
        [6, 8],
        [6, 0]]])
    # 7.random.randn方法创建10个正态分布（平均值是0，标准差是1）的随机数
      arr5 = np.random.randn(10)
      # 输出：
      array([ 0.73815123,  0.42171884, -1.26525394,  0.13140223, -0.31972695,
        0.49983426, -0.60134948, -0.10189951, -0.19864889,  0.14100691])
    # 8.random.randm方法创建随机数组 
      arr6 = np.random.randm(3)  
      # 输出： 
      array([ 0.6851018 ,  0.82257894,  0.2419718 ])
    # 9.arange方法创建等差数列数组 
      arr3 = np.arange(start=0,stop=20,step=2) 
      # 输出：
      array([0, 2, 4, 6, 8, 10, 12, 14, 16, 18])
    # 10.linspace方法创建等差数列数组
      arr4 = np.linspace(start=1,stop=10,num=10) 
      # 输出：
      array([ 1.,  2.,  3.,  4.,  5.,  6.,  7.,  8.,  9., 10.])  
    # 11.logspace方法创建等比数列数组
      np.set_printoptions(suppress=True) # 设置不显示科学计数法
      arr5 = np.logspace(start=1,stop=10,base=2,num=10) 
      # 输出：
      array([ 2.,  4., 8., 16., 32., 64., 128., 256., 512., 1024.])
  ```
  
- 2.jupyter扩展插件（非必须安装插件，出现左侧展示效果）
  - ```python
      pip install jupyter_contrib_nbextensions -i https://pypi.tuna.tsinghua.edu.cn/simple
      pip install jupyter_nbextensions_configurator -i https://pypi.tuna.tsinghua.edu.cn/simple
      jupyter contrib nbextension install --user
      jupyter nbextensions_configurator enable --user
      退出，重新进入jupyter notebook 就可以了
  
    # NumPy的数组类称为ndarray,也被称为别名array.请注意，numpy.array这与标准的Python库类不同array.array，
    # 后者仅处理一维数组且功能较少，ndarray对象的重要属性是
    ```
    
- 3.数据查看
  - ```python
    # 1.数组的轴数、维度
      import numpy as np
      arr1 = np.random.random(size=(3,4,5))
      arr1.ndim
      # 输出：3
    
    # 2.数组尺寸形状 
      arr1.shape
      # 输出：(3, 4, 5) 
    
    # 3.数组的元素个数
      arr1.size
      # 输出：3*4*5 = 60
    
    # 4.数据类型
      arr1.dtype 
      # 输出：dtype('float64')
    
    # 5.数组中每个元素的大小（字节）
      arr1.itemsize
      # 输出：8 因为数据类型是float64，每个元素占8个字节 所以 64 / 8 = 8
    ```
    
- 4.文件IO操作
- ```python
  # 1.保存数组
    # save方法保存ndarray到一个npy文件，也可以使用savez将多个array保存到一个.npz文件中
      # 创建数据
        x = np.random.randn(5)
        y = np.arange(0,10,1)
      # save方法可以保存一个ndarray
        np.save('x_arr', x)
      # 如果要保存多个数组，可以使用savez方法，保存时以key-value形式保存，key任意（xarr,yarr）
        np.savez('x_y_arr.npz', xarr=x, yarr=y)
  
  # 2.读取数组
    # load方法用于读取保存的数组，如果是.npz文件，读取之后相当于形成了一个key-value类型的变量，通过
    # 保存时定义的key来访问数组
      # 读取.npy文件
        x_loaded = np.load('x_arr.npy')
        print(x_loaded)
      # 读取.npz文件
        npz_loaded = np.load('x_y_arr.npz')
        print(npz_loaded['xarr'])
        print(npz_loaded['yarr'])
  
  # 3.读写csv、txt文件
    # 创建数组
      arr1 = np.random.randint(0,10,size=(3,4))
    # 储存数组到txt文件
      np.savetxt('arr1.txt', arr1, delimiter=',') 
    # 储存数组到csv文件
      np.savetxt('arr1.csv', arr1, delimiter=',')
    # 读取txt文件，delimiter为分隔符，dtype为数据类型
      arr2 = np.loadtxt('arr1.txt', delimiter=',',dtype=np.int32)
    # 读取csv文件，delimiter为分隔符，dtype为数据类型 
      arr3 = np.loadtxt('arr1.csv', delimiter=',',dtype=np.int32) 
  ```
  
#### 4.数据类型

- 1.ndarray的数据类型：
- ```python
  # int: int8、uint8、int16、uint16、int32、uint32、int64、uint64 （uint：无符号，没有负数，没有负号）
    # int8 表示范围：-2**8 - (2**8 -1) ==  -128 - 127（包含0所以取到127） 
    # uint8 表示范围：0 - 2**8 -1 == 0 - 255（包含0所以取到255）
  # float: float16、float32、float64
  # str
  ```
  
- 2.array创建时指定数据类型：
- ```python
  # 创建一个float64类型的数组
    import numpy as np 
    arr = np.array([1,2,3],dtype=np.float64)
    # 输出：array([1., 2., 3.]) 
  ```
  
- 3.asarray转换时指定数据类型：
- ```python
    import numpy as np 
    # 创建一个列表
    arr = [1,2,3,4,5]
    # asarray将列表进行转换
    arr1 = np.asarray(arr,dtype=np.float64)
    # 输出：array([1., 2., 3., 4., 5.])
  ```
  
- 4.数据类型转换astype：
- ```python
    import numpy as np
    # 创建一个float64类型的数组
    arr = np.array([1,2,3],dtype=np.float64)
    # 转换为int32类型的数组
    arr1 = arr.astype(np.int32)
    # 输出：array([1, 2, 3])
  ```
  
#### 5.数组运算

- 1.加减乘除幂运算：  
- ```python
  import numpy as np
  # 创建两个数组
  arr = np.array([1,2,3])
  arr1 = np.array([4,5,6])
  # 加法运算
  print(arr+arr1) | print(arr + 5)
  # 减法运算
  print(arr-arr1) | print(arr - 5)
  # 乘法运算
  print(arr*arr1) | print(arr * 5)
  # 除法运算
  print(arr/arr1) | print(arr / 5)
  # 幂运算
  print(arr**arr1) | print(arr**5)
  ```
  
- 2.逻辑运算：
- ```python
  import numpy as np
  # 创建两个数组
  arr = np.array([1,2,3])
  arr1 = np.array([4,5,6])
  # 小于运算
  print(arr<arr1) | print(arr < 5)
  # 大于运算 
  print(arr>arr1) | print(arr > 5)
  # 小于等于运算
  print(arr<=arr1) | print(arr <= 5)
  # 大于等于运算
  print(arr>=arr1) | print(arr >= 5)
  # 等于运算
  print(arr==arr1) | print(arr == 5)
  # 不等于运算
  print(arr!=arr1) | print(arr != 5)
  ```
  
- 3.数组与标量计算：
- ```python
  # 数组与标量的算术运算也会将标量值传播到各个元素
    import numpy as np
    # 创建一个数组
    arr = np.array([1,2,3])
    # 标量值
    scalar = 5
    # 加法运算
    print(arr+scalar) | print(arr + 5)
    # 减法运算
    print(arr-scalar) | print(arr - 5)
    # 乘法运算
    print(arr*scalar) | print(arr * 5)
    # 除法运算
    print(arr/scalar) | print(arr / 5)
    # 幂运算
    print(arr**scalar) | print(arr**5)
  ```
  
- 4.*=、//=、%=、**=、+=、-=、<<=、>>=、&=、|=、^= 运算符：
- ```python
  import numpy as np
  # 创建两个数组
  arr = np.array([1,2,3])
  arr1 = np.array([4,5,6])
  # 加法赋值运算
  print(arr+=arr1) | print(arr += 5)
  # 减法赋值运算
  print(arr-=arr1) | print(arr -= 5)
  # 乘法赋值运算
  print(arr*=arr1) | print(arr *= 5)
  # 除法赋值运算（不支持会报错）
  print(arr/=arr1) | print(arr /= 5)
  # 幂赋值运算
  print(arr**=arr1) | print(arr **= 5)
  #
  ```
  
#### 6.复制和视图
- ```python
  # 在操作时，有时会将其数据复制到新数组中，有时不复制，
  # 对于初学者来说，通常会混乱，有以下三种情况
  ```
  
- 1.完全没有复制
- ```python
  import numpy as np
  # 创建一个数组
  arr = np.random.randint(0,100,size=(4,5))
  arr1 = arr
  arr1 is arr # 返回为True, arr1 和 arr是两个不同名字对应同一个内存对象
  arr1[0,0] = 1024 # 命运共同体
  display(arr,arr1)
  ```
  
- 2.查看或浅拷贝 
- ```python
  import numpy as np
  # 创建一个数组
  arr = np.random.randint(0,100,size=(4,5))
  arr1 = arr.view() # 浅拷贝 使用arr中的数据创建一个新数组对象
  arr1 is arr # 返回为False, arr1 和 arr是两个不同名字对应同一个内存对象
  arr1.base is arr # 返回为True, arr1的根数据和arr一样
  arr1.flags.owndata # 返回为False, arr1中的数据不是其自己的
  arr.flags.owndata # 返回为True, arr中的数据是其自己的
  arr1[0,0] = 1024 # arr1 和 arr 数据都发生变化
  display(arr,arr1)
  ```
  
- 3.深拷贝
- ```python
  import numpy as np
  # 创建一个数组
  arr = np.random.randint(0,100,size=(4,5))
  arr1 = arr.copy() # 深拷贝 使用arr中的数据创建一个新数组对象
  arr1 is arr # 返回为False, arr1 和 arr是两个不同名字对应不同内存对象 
  arr1.base is arr # 返回为False, arr1和arr没有关联
  arr1.flags.owndata # 返回为True, arr1中的数据是其自己的 
  arr.flags.owndata # 返回为True, arr中的数据是其自己的
  arr1[0,0] = 1024 # arr1  数据都发生变化 arr 数据不发生变化
  display(arr,arr1)
  
  # copy应该在不再需要原来的数组情况下，切片后调用，例如：假设a是一个巨大的中间结果，而最终结果b仅包含
  # 的一小部分a,则在b使用切片进行构造时应制作一个深拷贝
  a = np.random.rand(1000)
  b = a[10:20].copy() # 制作一个深拷贝
  del a # 不再需要a,删除占大内存的a
  b.shape # 返回(10,)
  ```
  
#### 7.索引、切片和迭代
- 1.基本索引和切片
- ```python
  # numpy中数组切片是原始数组的视图，这意味着数据不会被复制，视图上任何数据的修改都会反映到原数组上
    import numpy as np 
    arr = np.array([0,1,2,3,4,5,6,7,8,9])
    arr[5] # 索引 输出  5
    arr[5:8] # 切片 输出 array([5 6 7])
    arr[2::2] # 从索引2开始，步长为2 输出 array([2, 4, 6, 8])
    arr[::3] # 不写索引默认从索引0开始，每3个中取一个 输出 array([0, 3, 6, 9])
    arr[1:7:3] # 从索引1开始，到索引7结束，步长为3 输出 array([1, 4])
    arr[::-1] # 步长为-1，表示逆序输出 array([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])
    arr[::-2] # 步长为-2，表示逆序每2个取一个 输出 array([9, 7, 5, 3, 1])
    arr[5:8] = 100 # 切片赋值 输出 array([0, 1, 2, 3, 4, 100, 100, 100, 7, 8, 9])
    arr[5:8] = [100,200,300] # 切片赋值 输出 array([0, 1, 2, 3, 4, 100, 200, 300, 7, 8, 9])
    temp = arr[5:8] # 切片赋值 输出 array([100, 200, 300])
    temp[1] = 1024 
    display(arr) # 输出 array([0, 1, 2, 3, 4, 100, 1024, 300, 7, 8, 9])
    
  # 对于二维数组或者高维数组，我们可以按照之前的知识来索引，当然也可以传入一个以逗号隔开的索引列表来选区单个或多个元素
    
    arr = np.array([[1,2,3],[4,5,6],[7,8,9]])
    arr[0,-1] #索引 等同于 arr[0][-1] 输出 3
    arr[0,2] # 索引 等同于 arr[0][2] 输出 3
    arr[:2,-2:] # 切片 第一维和第二维都进行切片 等同于 arr[:2][:,1:] 输出 array([[2, 3], [5 6]])
    arr[:2,1:] # 切片 1 == -2 一个是正序，另一个是倒叙，对应相同位置 输出 array([[2, 3], [5 6]])
  ```
  
- 2.花式索引和索引技巧