var tipuesearch = {"pages":[{"tags":"misc","title":"About","text":"2016Fall 修課成員網誌","url":"./pages/about/"},{"tags":"HW","title":"40423118 四連桿機構協同 Trace Point 查驗","text":"四連桿機構Trace Point查驗 Trace Point 查驗繪圖 from 40423118 on Vimeo . 40423127四連桿機構Trace Point查驗結果 Trace Point 查驗 from 40423118 on Vimeo . 利用Excel查驗 Trace Point 利用程式碼查驗 Trace Point window.onload=function(){ brython(1); } from browser import document as doc from browser import html import math # 準備繪圖畫布 canvas = doc[\"fourbar\"] container1 = doc['container1'] ctx = canvas.getContext(\"2d\") fourbar_data = open(\"./../data/w9/trackpoint.csv\").read() fourbar_list = fourbar_data.splitlines() #container1 <= fourbar_list[0] # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 0.5 # 利用 transform 將 y 座標反轉, 且 offset canvas.height # (X scale, X skew, Y skew, Y scale, X offset, Y offset) # 配合圖形位置進行座標轉換 ctx.transform(1, 0, 0, -1, canvas.width/2+250, canvas.height/2+100) # 畫出 x 與 y 座標線 # 各座標值放大 8 倍 ratio = 8 ctx.moveTo(0, 0) ctx.lineTo(-30*ratio, 0) start_point = fourbar_list[0].split(\",\") ctx.moveTo(float(start_point[0])*ratio, float(start_point[1])*ratio) count = 0 for data in fourbar_list[1:]: point = data.split(\",\") #count = count + 1 #container1 <= str(count) + \":\" + point[0] + \",\" + point[1] #container1 <= html.BR() ctx.lineTo(float(point[0])*ratio, float(point[1])*ratio) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath()","url":"./40423118-si-lian-gan-ji-gou-xie-tong-trace-point-cha-yan.html"},{"tags":"HW","title":"協同產品設計實習 期中報告","text":"1.Fossil Server 實習查驗 2.四連桿機構協同 Trace Point 查驗 3.Fourbar Walker OnShape 零件協同繪圖與組立查驗 4.分組協同零件展示 1.Fossil Server 實習查驗 ag3期中考報告 fossil 2.四連桿機構協同 Trace Point 查驗 Trace Point 查驗 from 40423118 on Vimeo . 3.Fourbar Walker OnShape 零件協同繪圖與組立查驗 利用solvespace繪製Fourbar walker影片 Fourbar Walker OnShape 零件協同繪圖與組立查驗 from 40423118 on Vimeo . 利用Onshape繪製: w9onshape from 40423118 on Vimeo . 4.分組協同零件展示 window.onload = function(){ var madeleine = new Madeleine({ target: 'target', // target div id data: './../data/w9/Assembly 1.stl', // data path path: './../work/madeleine/src/' // path to source directory from current html file }); }; select stl file: or drop stl file","url":"./xie-tong-chan-pin-she-ji-shi-xi-qi-zhong-bao-gao.html"},{"tags":"HW","title":"協同產品設計實習 第6周作業","text":"the wrong way to assemble... 如果想要畫不同尺寸的連桿,要記得先畫好連桿喔 ,如果先畫零件的話可能會... wrong way to assemble 8bar from 40423118 on Vimeo . or...you will pay for this!!! the parts 8bar-triangle from 40423118 on Vimeo . 8bar-50 20 from 40423118 on Vimeo . 8bar-桿 from 40423118 on Vimeo . 8連桿solvespace組立 === 工程浩大的V-rep組立 === 8bar from Fan chang zong on Vimeo . 心得:抱著英文字典跟他拚,不小心錄到系統聲音,暴露出宅屬性 還有不要覺得很有錢的裝很多馬達","url":"./xie-tong-chan-pin-she-ji-shi-xi-di-6zhou-zuo-ye.html"},{"tags":"HW","title":"協同產品設計實習 第2周作業","text":"file:///Y:/2016fallcadp_hw/users/40423118.leo 零件1 零件2 零件3 零件組立 4bar from 40423118 on Vimeo . 轉入V-rep 轉入v-rep.mp4 from 40423118 on Vimeo .","url":"./xie-tong-chan-pin-she-ji-shi-xi-di-2zhou-zuo-ye.html"},{"tags":"HW","title":"協同產品設計實習 第3周作業","text":"更改stunnl的ip~ stunnl.ip from 40423118 on Vimeo . 翻譯很辛苦嗚嗚嗚=== HyperWorks 14 - Novedades en armado y construcción de modelos內建字幕 from 40423118 on Vimeo .","url":"./xie-tong-chan-pin-she-ji-shi-xi-di-3zhou-zuo-ye.html"},{"tags":"HW","title":"協同產品設計實習 第4周作業","text":"建立fossil新倉儲 查詢Ipv4位置 將這一串貼進start.bat 建立一個小型的git hub來把這學期的筆記記錄在上面 fossil.init~ from 40423118 on Vimeo .","url":"./xie-tong-chan-pin-she-ji-shi-xi-di-4zhou-zuo-ye.html"},{"tags":"HW","title":"協同產品設計實習 第5周作業","text":"v-rep設定單連桿運動影片 w5 from 40423118 on Vimeo .","url":"./xie-tong-chan-pin-she-ji-shi-xi-di-5zhou-zuo-ye.html"}]};