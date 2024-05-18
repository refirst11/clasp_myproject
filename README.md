# clasp

Google Workspace Automation.  
SpreadSheets and App Script.

- clasp
- App Script
- SpreadSheets
- GCP OAuth
- TypeScript

Google Cloud Console で  
API とサービス」 > 「認証情報」に移動します。  
「認証情報を作成」 > 「OAuth 2.0 クライアント ID」を選択します。  
アプリケーションタイプを「デスクトップアプリ」に設定します。  
クライアント ID とクライアントシークレットを creds.json の client_id と client_secret にそれぞれ記述します。

## gitignore File

.clasp.json  
.clasprc.json  
appsscript.json  
creds.json  
package-lock.json

## command line

clasp clone <projectId>  
clasp login --creds creds.json  
clasp push  
clasp run main  
clasp deploy
