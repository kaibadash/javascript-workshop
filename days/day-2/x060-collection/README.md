# コレクション
for 文による反復処理と、配列に用意されたコレクション用メソッドによる反復処理を比べる

## コレクション用メソッドの例
- `Array.forEach`
- `Array.map`
- `Array.filter`
- `Array.some`
- `Array.every`

## コレクション用メソッドを使う利点
1. 余分な変数を省ける (i が不要)
  配列要素の長さを知らなくて良くなる (array.length が不要)

2. 変数の繰り上げ等を省ける (i = i + 1 が不要)
  => 配列要素を処理する順番を抽象化できる
  => 配列を操作する目的が明確になる (e.g. Array.filter は特定の要素だけ集める時に使うが、for 文を使うとそのような意図を読み取れない)

3. 無限ループを防げる

## 発展
Promise, Observable
