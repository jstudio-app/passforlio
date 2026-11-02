# Passfolio 網站

原生 HTML、CSS、JavaScript 靜態網站，無需安裝套件或編譯。

## 頁面
- index.html：品牌首頁、核心功能與旅行足跡
- pro.html：Pro 功能與免費版比較
- terms.html / privacy.html：政策預留頁（上線前需補正式內容）
- config.js：設定 App Store 和 Google 表單網址

## 預覽
直接開啟 index.html，或在此目錄執行 `python3 -m http.server 4173` 後開啟 http://localhost:4173。

## GitHub Pages
把此資料夾內容放在 repository 的發布目錄，於 GitHub Pages 選擇該分支與目錄。所有資源使用相對路徑，支援 repository 子路徑。尚未推送 GitHub。

## 截圖
目前使用現有 App 專案的實際截圖作為備援。新上傳圖片的指定 Downloads 路徑在製作時不存在，因此未能複製原始檔。
取得下列原始圖片後，替換 assets/ 裡的對應圖片即可：
- IMG_3752.PNG → home.png：首頁畫面
- IMG_3755.PNG → editor.png：編輯畫面
- IMG_3753.PNG → pro.png：Pro 方案畫面
IMG_3751.PNG 與 IMG_3754.PNG 目前用作視覺與內容參考，未列入頁面以避免重複封面畫面。

## 上線前
設定 config.js 的正式網址，補上條款、隱私政策並移除其 noindex。正式售價以 App Store 為準，網站未寫入測試價格。
