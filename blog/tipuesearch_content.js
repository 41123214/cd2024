var tipuesearch = {"pages":[{"title":"About","text":"cmsimde 內容管理系統 倉儲: https://github.com/mdecycu/cmsimde_site 網站: https://mde.tw/cmsimde_site/ 簡報: https://mde.tw/cmsimde_site/reveal 網誌: https://mde.tw/cmsimde_site/blog","tags":"misc","url":"./pages/about/"},{"title":"2024/05/16 41123214","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 零件組合 檔案","tags":"w13 41123214","url":"./w13 41123214.html"},{"title":"2024/05/09 41123214","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. w12 NX零件2 心得 : 雖然nx相較inventer較難畫，但錄影功能還蠻特別的，可以只針對動作做紀錄，還可以轉成python檔。","tags":"w12 41123214","url":"./w12 41123214.html"},{"title":"2024/04/28 41123214","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 協同資料處理 程式碼 from browser import window, ajax def fetch_csv_data(): url = \"https://mdecd2024.github.io/2bstud-2bsite/downloads/2b.txt\" def on_complete ( req ): if req . status == 200 or req . status == 0 : content = req . text lines = content . split ( '\\n' ) for line in lines : if line . strip () == \"\" : continue items = line . split ( ',' ) if len ( items ) >= 3 : github_username_1 = items [ 1 ]. strip () # 第三個逗號後到第四個逗號前的數據 team = items [ 2 ]. strip () # 第四個逗號後的數據 team2 = items [ 2 ]. strip () github_url_1 = f \"個人倉儲:https://github.com/{github_username_1}/cd2024\" team = f \"分組倉儲:https://github.com/mdecd2024/2b-midbg{team}\" team2 = f \"分組網頁:https://mdecd2024.github.io/2b-midbg{team2}\" csv_data = items [ 1 ]. strip () # 取得 CSV 中第三個逗號後的資料 github_io_url = f \"個人網頁:https://{csv_data}.github.io/cd2024/\" # 新的 GitHub IO URL line_with_urls = f \"{line.strip()},{github_url_1},{github_io_url},{team},{team2}\" # 以逗號分隔的資料串 print ( line_with_urls ) else : print ( \"Error:\" , req . text ) req = ajax . ajax () req . bind ( ' complete ' , on_complete ) req . open ( ' GET ' , url , True ) req . set_header ( ' content - type ' , ' application / x - www - form - urlencoded ' ) req . send () fetch_csv_data() ## 連結 : https://41123214.github.io/cd2024/content/%E5%8D%94%E5%90%8C%E8%B3%87%E6%96%99%E8%99%95%E7%90%86.html","tags":"w10 41123214","url":"./w10 41123214.html"},{"title":"2024/04/18 41123214","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 期中統整影片 影片","tags":"w9 41123214","url":"./w9 41123214.html"},{"title":"2024/03/28 41123214","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 第六週網誌 協同產品設計實習的第六週, 說明協同 NX 零組件繪圖以及 CoppeliaSim 場景模擬相關檔案格式. Github Actions 帶有子模組的 main.yml 設定 加入取子模組內容的 main.yml 設定 1on: push: branches: [pdf] pull_request: branches: [pdf] workflow_dispatch: on: push: branches: [pdf] pull_request: branches: [pdf] workflow_dispatch: jobs: build: runs-on: ubuntu-latest steps: - uses: actions/checkout@v4.1.1 - name: Install texlive and related fonts run: | sudo apt install -y texlive texlive-xetex texlive-lang-chinese gsfonts fonts-moe-standard-kai ttf-mscorefonts-installer librsvg2-bin texlive-fonts-extra - name: Initialize submodules run: git submodule update --init --recursive - name: Test LaTeX working-directory: ./latex run: | xelatex cd_report.tex xelatex cd_report.tex xelatex cd_report.tex - name: Bump version and push tag id: tag_version uses: mathieudutour/github-tag-action@v6.1 with: github_token: ${{ secrets.GITHUB_TOKEN }} - name: Create Release id: create_release uses: comnoco/create-release-action@v2.0.5 env: GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }} with: tag_name: ${{ steps.tag_version.outputs.new_tag }} release_name: Release ${{ steps.tag_version.outputs.new_tag }} draft: false prerelease: false - name: Upload Release Asset id: upload-release-asset uses: shogo82148/actions-upload-release-asset@v1.7.3 env: GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }} with: upload_url: ${{ steps.create_release.outputs.upload_url }} asset_path: ./latex/cd_report.pdf asset_name: cd_report.pdf asset_content_type: pdf 其中加入取子模組內容的設定為: name: Initialize submodules run: git submodule update --init --recursive 2b-midbg4 cd_report.tex 中的範例報告第一章, 取自其組員分組網站中的 latex 目錄, 且圖片檔案也是沿用分組倉儲中的設定, 取自組員 images 目錄. ODOO PLM 論文中英並列任務 由各組員在其個人的 cd2024 倉儲中, 以 LaTeX 格式分工完成下列文章的英文與中文翻譯並列資料, 最後在分組網站的 Release 或 downloads 區完成 2b-midbgx_report.pdf 的製作. 若要在近端使用可攜程式環境編譯分組 LaTeX 報告, 請下載 miktex-portable.7z (需要密碼, 下載 167MB, 解開壓縮檔案後約 1GB) 以及參考資料: latex_images_github.7z (需要密碼) 2021 ANALYSIS OF THE ODOO SOFTWARE CAPABILITIES REGARDING PRODUCT LIFECYCLE MANAGEMENT, MANUFACTURING EXECUTION SYSTEMS AND THEIR INTEGRATION.pdf or local download (password required) (Odoo 軟體在產品生命週期管理、製造執行系統及其整合上的功能分析) 英文單字查詢: 2021_odoo_reading.html 教學影片分組整理並自評 請各組自行搜尋前面已經發布的教學影片, 分別 在影片上填上字幕, 另行上傳到可以嵌入到各分組的網站上 從影片字幕中整理出逐字稿, 放在影片下方, 以 .txt 連結安排 並在各嵌入的教學影片下方, 以摘要方式說明該影片的教學重點 ODOO, NX, Sourcetree, Github and Replit 利用 ODOO PLM, Siemens NX, Sourcetree, Github 分組倉儲與 Replit 打造協同產品開發環境 下載 Siemens NX1872.7z (需要登入 @nfu.edu.tw, cd2024 採用電腦安裝的 NX1872 或隨身碟中的 NX1872) 下載 Sourcetree_portable.7z (需要密碼) 其他工具包括 CoppeliaSim, SciTE, Portablegit, Putty, Zoomit, Python, Solvespace 以及 Process Explorer 等. 配置重點: NX, Sourcetree 與 CoppeliaSim 設定檔案與管理分組倉儲的權限, 必須存至可攜系統, 並分別從可攜系統啟動後的命令列中啟動. 下載 Solvespace_model _2d_for_cd2024_w6.7z Replit 檢視靜態網站 從 w3 開始, 原先可以讓倉儲的動態網站與靜態網站共用 443 https 的方式, 也就是利用 SStatic 後查驗靜態網站的功能已經失效, 必須將靜態網站的檢視與動態編輯網站的啟動分開, 才能在將 Replit 網站與網誌改版的內容, 在推向 Github 倉儲之前進行查驗. 執行動態網站伺服器 cd2024 的動態網站, 主要用來編輯 config/content.htm 檔案內容, 並可透過 Convert 功能將所編輯的網頁內容, 透過 h1, h2 與 h3 標題分頁後, 會轉為 content 目錄中的頁面超文件檔案. 先前執行動態網站編輯的程式為 main.py: from cmsimde import flaskapp from gevent.pywsgi import WSGIServer flaskapp.app.run(host=\"0.0.0.0\", debug=True) Start dynamic server http_server = WSGIServer(('0.0.0.0', 8080), flaskapp.app) http_server.serve_forever() 執行 main.py 的方式, 可以依照 .replit 的設定, 直接利用 Run 按鍵執行. 也可以在 Shell 頁面中, 利用 python3 main.py 執行, 只是透過 Run 按鍵執行, 伺服器啟動之後會顯示在 Webview 頁面, 但是在 Shell 執行 python3 main.py 則必須自行以手動方式帶出伺服器連結. 執行靜態網站伺服器 如前所述, 靜態網站其實就是位於 content 目錄中的各個 html 檔案, 且圖片可引自 images 目錄, 而近端檔案連結則可引自 downloads 目錄. 當使用者將 config/content.htm 轉為 content 目錄中的靜態網站後, 若能在推向 Github 之前, 確認各頁面或網誌的內容無誤後, 再推向遠端. 而執行靜態網站伺服器的方法, 則是在 Shell 執行 python main2.py, 也就是在導入 static.py 之後啟動靜態網站. main2.py 程式內容: Run static server import static from gevent.pywsgi import WSGIServer http_server = WSGIServer(('0.0.0.0', 8080), static.app) http_server.serve_forever() 其中的 static.py 為: from flask import Flask, send_from_directory app = Flask( name ) Route to serve the index.html file @app.route('/') def index(): return send_from_directory('.', 'index.html') Route to serve static files from the ./cmsimde/static directory @app.route('/cmsimde/static/ ') def serve_static(filename): return send_from_directory('cmsimde/static', filename) Route to serve other HTML files from the root directory @app.route(' ') def serve_html(filename): return send_from_directory('.', filename) if name == ' main ': app.run(debug=True) 註: 利用 pre 標註引用資料時, 若內容帶有 < 與 > 時必須避免執行使用小於與大於符號, 而必須使用 HTML Character Codes, 以免額外產生不必要的標註符號. 當使用者希望執行靜態網頁伺服器時, 在 Shell 中執行 python3 main2.py, 經過上述設定, 在 Replit 的免費帳號環境中, 一個帳號只能啟用動態伺服器或靜態伺服器. 也就是動態伺服器或靜態伺服器在特定時刻中, 僅能擇一啟動. NXOpen hello_nxopen.py 導入 NXOpen import NXOpen def main(): # 取得目前開啟的工作階段 theSession = NXOpen.Session.GetSession() # 建立 ListingWindow listWin= theSession.ListingWindow # 開啟所建立的 ListingWindow listWin.Open() # 在 ListingWindow 中寫入字串 listWin.WriteLine(\"Hello, NXOpen\") if name == \" main \": main() CoppeliaSim 檔案格式 下載 copsim_midterm_cube2_xml.7z CoppeliaSim 目前提供二位元與 XML 場景格式 XML 場景支援儲存為單一檔案或多個模型與影像檔案 4.5.1 之後的版本, 其設定資料並非在套件目錄, 而是儲存在操作系統的 AppData/Roaming 目錄中 4.5.1 版儲存為多 XML 檔案格式時, 無法帶出場景中的 png 圖檔, 4.6.0 版之後才修正此一錯誤 目前能夠支援 IPv4 與 IPv6 網際場景模擬的版本僅修改至 4.5.1 版 XML 檔案應用廣泛, 協同產品設計過程可能需要利用程式方法處理零組件與模擬場景互相轉換取得的 XML 格式檔案 Sourcetree https://www.sourcetreeapp.com/ SourceTree_portable.7z (需要下載密碼) 其中必須要在啟動可攜程式時, 利用下列指令將 Sourcetree 先前設定存入操作系統: 1 Xcopy %Disk%:\\home_ipv6\\AppData\\Local\\Atlassian C:\\users\\%USERNAME%\\AppData\\Local\\Atlassian /E /H /C /I /Y Git branch Git 分支 Odoo PLM Odoo PLM 2021 ANALYSIS OF THE ODOO SOFTWARE CAPABILITIES REGARDING PRODUCT LIFECYCLE MANAGEMENT, MANUFACTURING EXECUTION SYSTEMS AND THEIR INTEGRATION.pdf or local download (password required) (Odoo 軟體在產品生命週期管理、製造執行系統及其整合上的功能分析) 英文單字查詢: 2021_odoo_reading.html 針對以上課程內容, 請利用以下留言系統進行討論:","tags":"w6 41123214","url":"./w6 41123214.html"},{"title":"2024/02/29 41123214","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 組長建立 Team 並設定分組倉儲 因其分組倉儲擁有者為 mdecd2024, 因此無法從 Replit accoount 項下進行授權, 但是可以利用 ssh-keygen 建立 .ssh 目錄下的 id_rsa 與 id_rsa.pub, 之後除了將公鑰送到 Github 之外, 還需要在 .ssh 目錄中建立 config, 且將倉儲 .git/config 中的 https 協定改為 SSH. 範例: https://github.com/mdecd2024/test-ag1","tags":"w2 41123214","url":"./w2 1123214.html"},{"title":"2024/03/14 41123214","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 第四週網誌 LaTeX \\documentclass{article} \\usepackage[utf8]{inputenc} % 定义英文到中文的映射 \\def\\englishToChinese{ {\"hello\", \"你好\"}, {\"world\", \"世界\"}, {\"programming\", \"编程\"}, {\"language\", \"语言\"}, % 添加更多映射 } % 定义翻译函数 \\newcommand{\\translateToChinese}[1]{ \\foreach \\word/\\translation in \\englishToChinese { \\ifx\\word#1 \\translation \\break \\fi } 1 } \\begin{document} % 输入英文句子 \\def\\englishSentence{hello world, programming language.} \\textbf{English sentence:} \\englishSentence % 翻译并输出结果 \\textbf{Translated sentence:} \\translateToChinese{hello} \\translateToChinese{world}, \\translateToChinese{programming} \\translateToChinese{language}. \\end{document}","tags":"w4 41123214","url":"./w4 1123214.html"},{"title":"2024/03/21 41123214","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 第五週網誌 第一教學影片 第二教學影片","tags":"w5 41123214","url":"./w5 41123214.html"},{"title":"2024/03/07 41123214","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 將組員的個人倉儲設為分組倉儲子模組 指令:git submodule add 組員的個人倉儲網址 組員的學號 如:git submodule add https://github.com/S41123216/cd2024.git 41123216 如此一來 Github 帳號為 S41123216 的組員, 其個人倉儲就會設定為分組倉儲的子模組, 而且是以其學號命名此一子模組的目錄名稱. 好處是: 各組員可以自行管理個人的課程倉儲與網站, 也就是位於其 Github 帳號下的 cd2024, 並且自行決定要整合到分組倉儲與網站的版本. 也能將自己在課程網站的資料, 直接用連結導入分組網站, 無需額外將資料搬進分組倉儲.","tags":"w3 41123214","url":"./w3 1123214.html"},{"title":"2024/02/18 41123214","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 內容管理系統 使用者可以自行利用 cmsimde_site 倉儲作為 Template, 建立自己的網站內容管理系統. 引用網站網址連結的方法: cmsimde_site - 在文章中多次引用同一個網站連結時, 可以使用此種方法. https://github.com/mdecycu/cmsimde_site - 假如想要快速將網址套用 html 網站連結, 可以使用此種方法. cmsimde_site - 也可以使用 Markdown 的標準網站連結使用格式. # 引用 Python 程式的方法 for i in range(10): print(i, \"列出字串\") 也可以直接在 .md 檔案中使用 html 標註, 或加入 Javascript 或 Brython 程式碼. 從 1 累加到 100: 1 add to 100 將 iterable 與 iterator 相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. Filename: .py Run Output 清除輸出區 清除繪圖區 Reload 從 1 累加到 100 part2: 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block Filename: .py Run Output 清除輸出區 清除繪圖區 Reload","tags":"w1","url":"./w1 41123214.html"}]};