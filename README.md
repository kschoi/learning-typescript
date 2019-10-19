# Typescript Guide

## /01.fetchjson

타입스크립트 컴파일러(tsc) 실행 및 json 데이터타입 정의해보기

#### install

```js
npm i -g typescript
npm i -g ts-node
```

#### run

```js
// build
tsc index.ts
// run
node index.js
// compile and run
ts-node index.ts
```

## /02.maps

왜 in
typescript 라이브러리 불러오는 방법과 타입정의파일(\*.d.ts) 이해
parcel-bundler 사용해보기
Mappable 인터페이스 구현하기

#### install

```js
npm i -g parcel-bundler
```

#### run

```js
// build and run
parcel index.html
```

## /03.sort

tsconfig.json 생성 및 수정해보기(tsc --init)
npm script: nodemon, concurrently 사용해보기
number[], string, linked list 등 다른 형식의 데이터 컬렉션을 처리하는 Sort 추상 클래스 작성하기

#### install

```js
npm i nodemon concurrently
```

#### run

```js
// build and run
npm start;
```

## /04.stats

Nodejs type definition 알아보기(@types/node)
enum과 제네릭 알아보기
date string을 Date type으로 변경해보기
Nodejs fs module을 이용하여 프리미어리그 전적 데이터 읽어서 리포트 제작해보기

#### install

```js
npm i
```

#### run

```js
// compile and run
npm start;
```

#### enum

```js
// enum - enumeration
export enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D'
}
```

#### generics

```js
// crazy
const addOne = (a: number): number => {
  return a + 1;
};
const addTwo = (a: number): number => {
  return a + 2;
};
const addThree = (a: number): number => {
  return a + 3;
};
// =>
const add = (a: number, b: number): number => {
  return a + b;
};
add(10, 1);
add(10, 2);
add(10, 3);

// Nothing to do with generics
class HoldNumber {
  data: number;
}
class HoldString {
  data: string;
}
const holdNumber = new HoldNumber();
holdNumber.data = 123;
const holdString = new HoldString();
holdString.data = 'asgdasg';
// with generic =>
class HoldAnything<TypeOfData> {
  data: TypeOfData;
}
const holdNumber2 = new HoldAnything<number>();
```