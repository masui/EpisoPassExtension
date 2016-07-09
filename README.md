# ブラウザ拡張機能でEpisoPassを呼び出す

![EpisoPass](https://gyazo.com/02708212f9a3b9cf75b7f53c560abde2.png)

* [EpisoPass](http://EpisoPass.com/)をChromeやFirefoxの**拡張機能**で実装したもの
* FacebookやAmazonのログイン画面でID(メアドなど)を入力してからパスワード入力枠をクリックするとEpisoPass問題が表示され、すべてに回答するとパスワードが計算されて入力される
* すべての回答が正しかったときだけ正しいパスワードが生成されてログインに成功する

### ダウンロード / インストール

* [Firefox用xpi](https://github.com/masui/EpisoPassExtension/raw/master/episopass.xpi)
  * Firefoxで```about:addons``` を開いてDrag&Drop
* [Chrome用crx](https://github.com/masui/EpisoPassExtension/raw/master/episopass.crx)
  * Chromeで```chrome://extensions/``` を開いてDrag&Drop

### 実装

* ```EpisoPass.com/(ID).json``` からなぞなぞ問題のJSONデータを取得し、それをもとにして問題をユーザに提示し、回答からパスワード生成する
* 問題の編集は```EpisoPass.com/(ID)```で行なう
* e.g. [http://EpisoPass.com/masui@pitecan.com](http://EpisoPass.com/masui@pitecan.com)

### 面倒だったところ

* FirefoxとChromeで同じJSが使えるのだが制限が微妙に違う
* Firefoxでは別サイト(EpisoPass.com)からgetJSON()できるのだがChromeではできない
* Chromeでは、[https://EpisoPass.com](https://EpisoPasscom/)から```XMLHttpRequest()```しなければ動かない
* このためにEpisoPass.comをhttps化しなければならなかった...
* EpisoPass.com側はCORS対応しておく必要があった

### 拡張機能パッケージの生成

* ```make xpi``` でFirefoxの拡張機能ファイルができる
  * ユーザIDとか秘密文字列とかを環境変数にセットが必要
* Chromeの拡張機能ファイルは```chrome://extensions/```で「拡張機能のパッケージ化」を指定して作成する
  * Web上に置いてChromeからアクセスしてもインストールできない
  * ダウンロードしてからChromeにDrag&Dropすれば大丈夫

### 問題

* AmazonとFacebookでしか使えません
* シードが決め打ちになっている
  * ユーザがシードを自由に決められるようにするにはどうすればいいだろう?



