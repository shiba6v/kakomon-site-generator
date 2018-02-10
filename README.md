## About
これは，過去問サイトをGoogleDriveから自動生成するプロジェクトです．
過去問サイトにするメリットは，後輩が過去問を見つけやすくなることです．

## Usage
1. Chrome拡張で[Google Apps Script](https://chrome.google.com/webstore/detail/google-apps-script/eoieeedlomnegifmaghhjnghhmcldobl?hl=ja
)を追加．

2. GoogleDriveを開き，右クリックからGoogle Apps Scriptを作成．

3. 過去問のあるGoogleDriveのフォルダを開き，URLからフォルダIDを取得する．
`
https://drive.google.com/drive/u/0/folders/[フォルダID]
`

4. `drive_search.gs`をコピペし，`rootFolderId`を先ほど取得したフォルダIDに置き換える．

5. 実行すると，承認を要求されるので承認し，警告画面が出た場合は左下の「詳細」->「Drive Searchに移動」とクリックして許可を行う．

6. Apps Scriptと同じフォルダにresult_[フォルダID]というドキュメントに結果が出力される．

7. このプロジェクトをGit Cloneする．
```
git clone git@github.com:shiba6v/kakomon-site-generator.git
```

8. result.jsonに6で生成した結果を貼り付け，スクリプトを実行する．
```
ruby kakomon_generate.rb
```

9. `dest`以下にファイルが生成されるので，[BitBalloon](https://www.bitballoon.com/)などにアップロードする．

10. 完成！
