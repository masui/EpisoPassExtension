# ブラウザ拡張機能でEpisoPassを使う

![EpisoPass](https://gyazo.com/9d15e1e7bbf95f12804e077cdf4e12b6.gif)

* ChromeやFirefoxの**拡張機能**を使って[EpisoPass](http://EpisoPass.com/)がログイン画面で動くようにしたもの
* FacebookやAmazonのログイン画面でメールアドレスを入力してから
パスワード入力枠をクリックすると上のようにEpisoPass問題が表示され、すべてに回答するとパスワードが計算されて入力される
* たとえばAmazonアカウントのメールアドレスとして```masui@pitecan.com```を使用する場合は[http://EpisoPass.com/Amazon_masui@pitecan.com](http://EpisoPass.com/Amazon_masui@pitecan.com)に問題を用意しておき、正答を選択したとき生成されるパスワードをAmazon.comに登録しておく
* Amazonのログイン画面上ですべての回答に正しく回答すると
登録したパスワードが生成されてログインに成功する

### 対応サービス

以下のサービスに対応しています。

* **Amazon**
    * ```Amazon_(ログインアドレス)``` という名前でEpisoPassに登録しておきます
    * e.g. <a href="http://episopass.com/Amazon_masui@pitecan.com">```http://EpisoPass.com/Amazon_masui@pitecan.com```</a>
* **Facebook**
    * ```Facebook_(ログインアドレス)```という名前でEpisoPassに登録しておきます
    * e.g. <a href="http://episopass.com/Facebook_masui@pitecan.com">```http://EpisoPass.com/Facebook_masui@pitecan.com```</a>
* **Twitter**
    * ```Twitter_(ログインアドレス)```という名前でEpisoPassに登録しておきます
    * e.g. <a href="http://episopass.com/Twitter_masui@pitecan.com">```http://EpisoPass.com/Twitter_masui@pitecan.com```</a>
* **LinkedIn**
    * ```LinkedIn_(ログインアドレス)```という名前でEpisoPassに登録しておきます
    * e.g. <a href="http://episopass.com/LinkedIn_masui@pitecan.com">```http://EpisoPass.com/LinkedIn_masui@pitecan.com```</a>
* **GitHub**
    * ```GitHub_(ログインアドレス)```という名前でEpisoPassに登録しておきます
    * e.g. <a href="http://episopass.com/GitHub_masui@pitecan.com">```http://EpisoPass.com/GitHub_masui@pitecan.com```</a>
* **Heroku**
    * ```Heroku_(ログインアドレス)```という名前でEpisoPassに登録しておきます
    * e.g. <a href="http://episopass.com/Heroku_masui@pitecan.com">```http://EpisoPass.com/Heroku_masui@pitecan.com```</a>
* **Pinterest**
    * ```Pinterest_(ログインアドレス)```という名前でEpisoPassに登録しておきます
    * e.g. <a href="http://episopass.com/Pinterest_masui@pitecan.com">```http://EpisoPass.com/Pinterest_masui@pitecan.com```</a>
* **ValueDomain**
    * ```LinkedIn_(ログイン名)```という名前でEpisoPassに登録しておきます
    * e.g. <a href="http://episopass.com/ValueDomain_tmasui">```http://EpisoPass.com/ValueDomain_tmasui```</a>

### ダウンロード / インストール

* Firefox
  * [episopassextension.xpi](https://github.com/masui/EpisoPassExtension/raw/master/episopassextension-0.0.5-fx.xpi)をインストール
  * ***何故かストアから消えてる***
* Chrome
  * [Chromeウェブストア](https://chrome.google.com/webstore/detail/episopassextension/gempcojpejfhobcccooiifdoddlmokgj)からインストール
  * ***この版はまだ登録できてません***

という状況なのでChromeに自力インストールするしか仕方ないかも 2017/10/03 17:54:55

### 実装

* ```EpisoPass.com/(ID).json``` からなぞなぞ問題のJSONデータを取得し、それをもとにして問題をユーザに提示し、回答からパスワード生成する
* 問題の編集は```EpisoPass.com/(ID)```で行なう
* e.g. [http://EpisoPass.com/Amazon_masui@pitecan.com](http://EpisoPass.com/Amazon_masui@pitecan.com)

### 注意点

* FirefoxとChromeで同じJSが使えるのだが制限が微妙に違う
* Firefoxでは[http://EpisoPass.com]()からgetJSON()できるのだがChromeではできない
* Chromeでは、[https://EpisoPass.com](https://EpisoPasscom/)から```XMLHttpRequest()```しなければ動かない
* このためにEpisoPass.comをhttps化しなければならなかった...
* EpisoPass.com側はCORS対応しておく必要があった

### 拡張機能パッケージの生成

* ```make xpi``` でFirefoxの拡張機能ファイルができる
  * ユーザIDとか秘密文字列とかを環境変数にセットが必要
* Chromeの拡張機能ファイルは```chrome://extensions/```で「**拡張機能のパッケージ化**」を指定して人力で作成する

### 公開

* [Chrome機能拡張開発センタ](https://chrome.google.com/webstore/developer/edit/gempcojpejfhobcccooiifdoddlmokgj)
* [Firefox機能拡張開発センタ](https://addons.mozilla.org/ja/developers/addon/episopassextension/)

### 問題 / 感想

* AmazonとFacebookでしか使えません
* サービスごとに異なるIDで登録が必要
* **全くパスワードを見ることも打つこともなくパスワード利用システムにログインできるのは便利**
* こういうシステムは昔はGreasemonkeyで作ってたが、拡張機能で作る方がよさげである
* スワイプ対応はできてない




