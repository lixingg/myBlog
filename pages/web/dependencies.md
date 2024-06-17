## 依赖专栏

### 1. 工程化安装依赖

```bash
npm 使用
npm install 依赖名称 -S // 安装到生产依赖
npm install 依赖名称 -D // 安装到开发依赖

pnpm 使用
pnpm install 依赖名称 -S // 安装到生产依赖
pnpm install 依赖名称 -D // 安装到开发依赖

yarn 使用
yarn install 依赖名称 -S // 安装到生产依赖
yarn install 依赖名称 -D // 安装到开发依赖
```

### 2.依赖包作用

#### 1.uuid

- 1.uuid 是一个生成唯一标识符（UUID）的 JavaScript 库。它使用内置的浏览器功能或 Node.js 中的 uuid
- 2.常用于生成数据库主键、文件名、会话标识符等
- 3.安装

```bash
npm install uuid -S
```

- 4.使用

```js
import {v4 as uuidv4} from 'uuid';

const uuid = uuidv4();
console.log(uuid);
```

#### 2.nanoid

- 1.nanoid 是一个生成唯一标识符（NanoID）的 JavaScript 库。它使用 A-Za-z0-9 字符集，并确保 ID 长度至少为 12 个字符。
- 2.相比uuid包较小，常用于生成短网址、唯一文件名等
- 3.安装
```bash
npm install nanoid -S
```
- 4.使用
```js
import {nanoid} from 'nanoid';

const id = nanoid();
console.log(id);
```

#### 3.dayjs

- 1.dayjs 是一个轻量级、功能强大的 JavaScript 日期处理库。它提供了一系列常用的日期操作方法，如获取当前日期、格式化日期、计算日期差等。
- 2.常用于处理日期格式、日期计算等场景
- 3.安装
```bash
npm install dayjs -S
```
- 4.使用
```js
import dayjs from 'dayjs';

// 获取当前日期
const currentDate = dayjs().format('YYYY-MM-DD');
console.log(currentDate);

// 格式化日期
const formattedDate = dayjs('2022-01-01').format('MMM D, YYYY');
console.log(formattedDate);

// 计算日期差
const dateDiff = dayjs('2022-01-01').diff(dayjs(), 'day');
console.log(dateDiff);
```

#### 4.lodash

- 1.lodash 是一个功能强大、实用性强、模块化的 JavaScript 工具库。
  它提供了一组常用的工具方法，如数组操作、对象操作、字符串操作等，可以显著简化代码。
- 2.常用于处理数组、对象、字符串等常见数据类型
- 3.安装
```bash
npm install lodash -S
```
- 4.使用
```js
import _ from 'lodash';

// 数组操作
const array = [1, 2, 3, 4, 5];
const filteredArray = _.filter(array, (num) => num % 2 === 0);
console.log(filteredArray);

// 对象操作
const object = {name: 'John', age: 30};
const value = _.get(object, 'age');
console.log(value);

// 字符串操作
const string = 'Hello World';
const upperCase = _.upperCase(string);
console.log(upperCase);
```

#### 5.axios

- 1.axios 是一个基于 Promise 的 HTTP 库，可以用在浏览器和 node.js 中。它具有多种特性，如拦截请求和响应、取消请求、自动转换
  JSON 数据等，可以显著简化网络请求的处理。
- 2.常用于发起 HTTP 请求
- 3.安装
```bash
npm install axios -S
```
- 4.使用
```js
import axios from 'axios';

axios.get('https://api.example.com/data')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error);
    });
```
