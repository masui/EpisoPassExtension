# ブラウザ拡張機能でEpisoPassを呼び出す

* ChromeやFirefoxの拡張機能
* FacebookやAmazonのログイン画面でパスワード入力枠をクリックするとEpisoPass問題が表示され、回答すると計算されたパスワードが入力される

### 実装

* ```EpisoPass.com/(ID)``` からJSONデータを取得し、それをもとにしてパスワード生成する

