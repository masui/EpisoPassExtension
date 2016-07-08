# ブラウザ拡張機能でEpisoPassを呼び出す

* ChromeやFirefoxの**拡張機能**
* FacebookやAmazonのログイン画面でID(メアドなど)を入力してからパスワード入力枠をクリックするとEpisoPass問題が表示され、回答するとパスワードが計算されて入力される

### 実装

* ```EpisoPass.com/(ID).json``` からなぞなぞ問題のJSONデータを取得し、それをもとにして問題をユーザに提示し、回答からパスワード生成する
* 問題の編集は```EpisoPass.com/(ID)```で行なう
* e.g. [http://EpisoPass.com/masui@pitecan.com](http://EpisoPass.com/masui@pitecan.com)

### 注意

* FirefoxとChromeで同じJSが使えるのだが制限が微妙に違う
* Firefoxでは別サイト(EpisoPass.com)からgetJSON()できるのだがChromeではできない
* Chromeでは、[https://EpisoPass.com](https://EpisoPasscom/)から```XMLHttpRequest()```しなければ動かない
* このためにEpisoPass.comをhttps化しなければならなかった...

### 拡張機能パッケージの生成

* ```make xpi``` でFirefoxの拡張機能ファイルができる
* Chromeの拡張機能ファイルは```chrome://extensions/```で「拡張機能のパッケージ化」を指定して作成する


