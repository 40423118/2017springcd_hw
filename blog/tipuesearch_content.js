var tipuesearch = {"pages":[{"text":"2016Fall 修課成員網誌","title":"About","url":"./pages/about/","tags":"misc"},{"text":"周作業 Date: 2017-04-20 10:08 Category:HW Tags: HW Author: 40423118 本周內容 在python上面執行加減乘除 當時在上課時構思能否用html語法進行互動 後來老師使用Brython執行成功 不過似乎不能消除前面的值 以下程式碼以Python呈現 互動程式已Brython呈現 四則運算 def add(a,b): //加法運算法則 return a+b import sys//加法運算程式 sys.path.append(\"./m1\") import add sum=add.add(a,b) print(sum) 測試加法 window.onload=function(){ // 設定 data/py 為共用程式路徑 brython({debug:1, pythonpath:['./../data/py']}); } from browser import document as doc from browser import html import math container = doc['container'] degree = math.pi/180 def button1(event): a = input(\"give me a\") b = input(\"give me b\") container <= str(float(a)+float(b)) doc[\"button1\"].bind(\"click\", button1) 按下請定義值 def minus(a,b)://減法運算法則 return a-b import sys//減法運算程式 sys.path.append(\"./m1\") import minus sum=minus.minus(a,b) 測試減法 window.onload=function(){ // 設定 data/py 為共用程式路徑 brython({debug:1, pythonpath:['./../data/py']}); } from browser import document as doc from browser import html import math container = doc['container1'] degree = math.pi/180 def button2(event): a = input(\"give me a\") b = input(\"give me b\") container <= str(float(a)-float(b)) doc[\"button2\"].bind(\"click\", button2) 按下請定義值 print(sum)def cross(a,b)://乘法運算法則 return a*b import sys//乘法運算程式 sys.path.append(\"./m1\") import cross sum=cross.cross(a,b) 測試乘法 window.onload=function(){ // 設定 data/py 為共用程式路徑 brython({debug:1, pythonpath:['./../data/py']}); } from browser import document as doc from browser import html import math container = doc['container3'] degree = math.pi/180 def button3(event): a = input(\"give me a\") b = input(\"give me b\") container <= str(float(a)*float(b)) doc[\"button3\"].bind(\"click\", button3) 按下請定義值 print(sum)def div(a,b)://除法運算法則 return a/b import sys//除法運算程式 sys.path.append(\"./m1\") import div sum=div.div(a,b) print(sum) 測試除法 window.onload=function(){ // 設定 data/py 為共用程式路徑 brython({debug:1, pythonpath:['./../data/py']}); } from browser import document as doc from browser import html import math container = doc['container4'] degree = math.pi/180 def button4(event): a = input(\"give me a\") b = input(\"give me b\") container <= str(float(a)/float(b)) doc[\"button4\"].bind(\"click\", button4) 按下請定義值 +-乘除 from 40423118 on Vimeo .","title":"協同產品設計實習 第10","url":"./xie-tong-chan-pin-she-ji-shi-xi-di-10.html","tags":"misc"},{"text":"本周內容 window.onload=function(){ // 設定 data/py 為共用程式路徑 brython({debug:1, pythonpath:['./../data/py']}); } from browser import document as doc import math # deg 為角度轉為徑度的轉換因子 deg = math.pi/180. # 定義 Spur 類別 class Spur(object): def __init__(self, ctx): self.ctx = ctx def create_line(self, x1, y1, x2, y2, width=3, fill=\"red\"): self.ctx.beginPath() self.ctx.lineWidth = width self.ctx.moveTo(x1, y1) self.ctx.lineTo(x2, y2) self.ctx.strokeStyle = fill self.ctx.stroke() # # 定義一個繪正齒輪的繪圖函式 # midx 為齒輪圓心 x 座標 # midy 為齒輪圓心 y 座標 # rp 為節圓半徑, n 為齒數 # pa 為壓力角 (deg) # rot 為旋轉角 (deg) # 已經針對 n 大於等於 52 齒時的繪圖錯誤修正, 因為 base circle 與齒根圓大小必須進行判斷 def Gear(self, midx, midy, rp, n=20, pa=20, color=\"black\"): # 齒輪漸開線分成 15 線段繪製 imax = 15 # 在輸入的畫布上繪製直線, 由圓心到節圓 y 軸頂點畫一直線 self.create_line(midx, midy, midx, midy-rp) # 畫出 rp 圓, 畫圓函式尚未定義 #create_oval(midx-rp, midy-rp, midx+rp, midy+rp, width=2) # a 為模數 (代表公制中齒的大小), 模數為節圓直徑(稱為節徑)除以齒數 # 模數也就是齒冠大小 a=2*rp/n # d 為齒根大小, 為模數的 1.157 或 1.25倍, 這裡採 1.25 倍 d=2.5*rp/n # ra 為齒輪的外圍半徑 ra=rp+a # 畫出 ra 圓, 畫圓函式尚未定義 #create_oval(midx-ra, midy-ra, midx+ra, midy+ra, width=1) # rb 則為齒輪的基圓半徑 # 基圓為漸開線長齒之基準圓 rb=rp*math.cos(pa*deg) # 畫出 rb 圓 (基圓), 畫圓函式尚未定義 #create_oval(midx-rb, midy-rb, midx+rb, midy+rb, width=1) # rd 為齒根圓半徑 rd=rp-d # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd # 畫出 rd 圓 (齒根圓), 畫圓函式尚未定義 #create_oval(midx-rd, midy-rd, midx+rd, midy+rd, width=1) # dr 則為基圓到齒頂圓半徑分成 imax 段後的每段半徑增量大小 # 將圓弧分成 imax 段來繪製漸開線 # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd if rd>rb: dr = (ra-rd)/imax else: dr=(ra-rb)/imax # tan(pa*deg)-pa*deg 為漸開線函數 sigma=math.pi/(2*n)+math.tan(pa*deg)-pa*deg for j in range(n): ang=-2.*j*math.pi/n+sigma ang2=2.*j*math.pi/n+sigma lxd=midx+rd*math.sin(ang2-2.*math.pi/n) lyd=midy-rd*math.cos(ang2-2.*math.pi/n) for i in range(imax+1): # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd if rd>rb: r=rd+i*dr else: r=rb+i*dr theta=math.sqrt((r*r)/(rb*rb)-1.) alpha=theta-math.atan(theta) xpt=r*math.sin(alpha-ang) ypt=r*math.cos(alpha-ang) xd=rd*math.sin(-ang) yd=rd*math.cos(-ang) # i=0 時, 繪線起點由齒根圓上的點, 作為起點 if(i==0): last_x = midx+xd last_y = midy-yd # 由左側齒根圓作為起點, 除第一點 (xd,yd) 齒根圓上的起點外, 其餘的 (xpt,ypt)則為漸開線上的分段點 self.create_line((midx+xpt),(midy-ypt),(last_x),(last_y),fill=color) # 最後一點, 則為齒頂圓 if(i==imax): lfx=midx+xpt lfy=midy-ypt last_x = midx+xpt last_y = midy-ypt # the line from last end of dedendum point to the recent # end of dedendum point # lxd 為齒根圓上的左側 x 座標, lyd 則為 y 座標 # 下列為齒根圓上用來近似圓弧的直線 self.create_line((lxd),(lyd),(midx+xd),(midy-yd),fill=color) for i in range(imax+1): # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd if rd>rb: r=rd+i*dr else: r=rb+i*dr theta=math.sqrt((r*r)/(rb*rb)-1.) alpha=theta-math.atan(theta) xpt=r*math.sin(ang2-alpha) ypt=r*math.cos(ang2-alpha) xd=rd*math.sin(ang2) yd=rd*math.cos(ang2) # i=0 時, 繪線起點由齒根圓上的點, 作為起點 if(i==0): last_x = midx+xd last_y = midy-yd # 由右側齒根圓作為起點, 除第一點 (xd,yd) 齒根圓上的起點外, 其餘的 (xpt,ypt)則為漸開線上的分段點 self.create_line((midx+xpt),(midy-ypt),(last_x),(last_y),fill=color) # 最後一點, 則為齒頂圓 if(i==imax): rfx=midx+xpt rfy=midy-ypt last_x = midx+xpt last_y = midy-ypt # lfx 為齒頂圓上的左側 x 座標, lfy 則為 y 座標 # 下列為齒頂圓上用來近似圓弧的直線 self.create_line(lfx,lfy,rfx,rfy,fill=color) canvas = doc['onegear'] ctx = canvas.getContext(\"2d\") x = (canvas.width)/2 y = (canvas.height)/2 r = 0.8*(canvas.height/2) # 齒數 n = 10 # 壓力角 pa = 20 Spur(ctx).Gear(x, y, r, n, pa, \"blue\") # 以下列出 W11 2B 未出席人數 data = open(\"./../data/w11/2b0503.txt\", encoding=\"utf-8\").read() count = 0 # 去掉前面兩列 student = data.split(\"\\n\")[2:] for i in range(len(student)): each = student[i].split(\"\\t\") if each[1] != \"出席\": count = count + 1 #print(count) div = doc[\"onegear_div\"] div <= \"2b: \" + str(count) + \"/\" + str(len(student)) # 將 導入的 document 設為 doc 主要原因在於與舊程式碼相容 from browser import document as doc # 由於 Python3 與 Javascript 程式碼已經不再混用, 因此來自 Javascript 的變數, 必須居中透過 window 物件轉換 from browser import window import math # 主要用來取得畫布大小 canvas = doc[\"cango_gear\"] # 此程式採用 Cango Javascript 程式庫繪圖, 因此無需 ctx ctx = canvas.getContext(\"2d\") cango = window.Cango.new # 針對變數的轉換, shapeDefs 在 Cango 中資料型別為變數, 可以透過 window 轉換 shapedefs = window.shapeDefs # 目前 Cango 結合 Animation 在 Brython 尚無法運作, 此刻只能繪製靜態圖形 # in CangoAnimation.js #interpolate1 = window.interpolate # Cobi 與 createGearTooth 都是 Cango Javascript 程式庫中的物件 #cobj = window.Cobj.new shape = window.Shape.new path = window.Path.new creategeartooth = window.createGearTooth.new tweener = window.Tweener.new # 經由 Cango 轉換成 Brython 的 cango, 指定將圖畫在 id=\"cango_gear\" 的 canvas 上 cgo = cango(\"cango_gear\") ###################################### # 畫正齒輪輪廓 ##################################### # n 為齒數 n = 17 # pa 為壓力角 pa = 25 # m 為模數, 根據畫布的寬度, 計算適合的模數大小 # Module = mm of pitch diameter per tooth m = 0.8*canvas.width/n # pr 為節圓半徑 pr = n*m/2 # gear Pitch radius # generate gear data = creategeartooth(m, n, pa) # Brython 程式中的 print 會將資料印在 Browser 的 console 區 #print(data) gearTooth = shape(data, { \"fillColor\":\"#ddd0dd\", \"border\": True, \"strokeColor\": \"#606060\" }) gearTooth.rotate(180/n) # rotate gear 1/2 tooth to mesh # 單齒的齒形資料經過旋轉後, 將資料複製到 gear 物件中 gear = gearTooth.dup() # gear 為單一齒的輪廓資料 #cgo.render(gearTooth) # 利用單齒輪廓旋轉, 產生整個正齒輪外形 for i in range(1, n): # 將 gearTooth 中的資料複製到 newTooth newTooth = gearTooth.dup() # 配合迴圈, newTooth 的齒形資料進行旋轉, 然後利用 appendPath 方法, 將資料併入 gear newTooth.rotate(360*i/n) # appendPath 為 Cango 程式庫中的方法, 第二個變數為 True, 表示要刪除最前頭的 Move to SVG Path 標註符號 gear.appendPath(newTooth, True) # trim move command = True # 建立軸孔 # add axle hole, hr 為 hole radius hr = 0.6*pr # diameter of gear shaft shaft = path(shapedefs.circle(hr)) shaft.revWinding() gear.appendPath(shaft) # retain the 'moveTo' command for shaft sub path # setup the animation # backlash (mm) bklsh = 0.04*m # centre shift to make backlash dC = bklsh/(2*math.tan(math.pi*pa/180)) # np 為小齒輪齒數 np = 13 # gear ratio gr = n/np gearConfig = {'cx':-pr, 'cy':0, 'degs':[0, 360]} # gr*0.666 rpm #pinionConfig = {'cx':pr+dC, 'cy':0, 'degs':[0, -gr*360]} # 0.666 rpm twnr = tweener(0, 90000, \"loop\") cx = canvas.width/2 cy = canvas.height/2 #gear.translate(cx, cy) # render 繪出靜態正齒輪輪廓 #cgo.render(gear) # 利用 gear 資料複製一份, 命名為 gear1 gear1 = gear.dup() from time import time from browser.timer import request_animation_frame as raf from browser.timer import set_interval deg = math.pi/180 def draw(): cgo.clearCanvas() gear.rotate(2*deg) # 在特定位置, 以特定 scale, 特定 degs 執行 render cgo.render(gear, {'x':cx-pr/2, 'y':cy, 'scl':0.5, 'degs':0}) gear1.rotate(-2*deg) cgo.render(gear1, {'x':cx+pr*2*0.5-pr/2, 'y':cy, 'scl':0.5, 'degs':0}) set_interval(draw, 2)","title":"協同產品設計實習 第十一周作業","url":"./xie-tong-chan-pin-she-ji-shi-xi-di-shi-yi-zhou-zuo-ye.html","tags":"作業"},{"text":"本周內容 800x600 為畫布大小, 在畫布正中央畫一個半徑為 250 畫素, 壓力角 20, 齒數為 36 齒, 且只有上半齒形的漸開線正齒輪輪廓. window.onload=function(){ // 設定 data/py 為共用程式路徑 brython({debug:1, pythonpath:['./../data/py']}); }","title":"協同產品設計實習 第w15周作業","url":"./xie-tong-chan-pin-she-ji-shi-xi-di-w15zhou-zuo-ye.html","tags":"作業"},{"text":"四連桿機構Trace Point查驗 Trace Point 查驗繪圖 from 40423118 on Vimeo . 40423127四連桿機構Trace Point查驗結果 Trace Point 查驗 from 40423118 on Vimeo . 利用Excel查驗 Trace Point 利用程式碼查驗 Trace Point window.onload=function(){ brython(1); } from browser import document as doc from browser import html import math # 準備繪圖畫布 canvas = doc[\"fourbar\"] container1 = doc['container1'] ctx = canvas.getContext(\"2d\") fourbar_data = open(\"./../data/w9/trackpoint.csv\").read() fourbar_list = fourbar_data.splitlines() #container1 <= fourbar_list[0] # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 0.5 # 利用 transform 將 y 座標反轉, 且 offset canvas.height # (X scale, X skew, Y skew, Y scale, X offset, Y offset) # 配合圖形位置進行座標轉換 ctx.transform(1, 0, 0, -1, canvas.width/2+250, canvas.height/2+100) # 畫出 x 與 y 座標線 # 各座標值放大 8 倍 ratio = 8 ctx.moveTo(0, 0) ctx.lineTo(-30*ratio, 0) start_point = fourbar_list[0].split(\",\") ctx.moveTo(float(start_point[0])*ratio, float(start_point[1])*ratio) count = 0 for data in fourbar_list[1:]: point = data.split(\",\") #count = count + 1 #container1 <= str(count) + \":\" + point[0] + \",\" + point[1] #container1 <= html.BR() ctx.lineTo(float(point[0])*ratio, float(point[1])*ratio) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath()","title":"40423118 四連桿機構協同 Trace Point 查驗","url":"./40423118-si-lian-gan-ji-gou-xie-tong-trace-point-cha-yan.html","tags":"HW"},{"text":"1.Fossil Server 實習查驗 2.四連桿機構協同 Trace Point 查驗 3.Fourbar Walker OnShape 零件協同繪圖與組立查驗 4.分組協同零件展示 1.Fossil Server 實習查驗 ag3期中考報告 fossil 2.四連桿機構協同 Trace Point 查驗 Trace Point 查驗 from 40423118 on Vimeo . 3.Fourbar Walker OnShape 零件協同繪圖與組立查驗 利用solvespace繪製Fourbar walker影片 Fourbar Walker OnShape 零件協同繪圖與組立查驗 from 40423118 on Vimeo . 利用Onshape繪製: w9onshape from 40423118 on Vimeo . 4.分組協同零件展示 window.onload = function(){ var madeleine = new Madeleine({ target: 'target', // target div id data: './../data/w9/Assembly 1.stl', // data path path: './../work/madeleine/src/' // path to source directory from current html file }); }; select stl file: or drop stl file","title":"協同產品設計實習 期中報告","url":"./xie-tong-chan-pin-she-ji-shi-xi-qi-zhong-bao-gao.html","tags":"HW"},{"text":"the wrong way to assemble... 如果想要畫不同尺寸的連桿,要記得先畫好連桿喔 ,如果先畫零件的話可能會... wrong way to assemble 8bar from 40423118 on Vimeo . or...you will pay for this!!! the parts 8bar-triangle from 40423118 on Vimeo . 8bar-50 20 from 40423118 on Vimeo . 8bar-桿 from 40423118 on Vimeo . 8連桿solvespace組立 === 工程浩大的V-rep組立 === 8bar from Fan chang zong on Vimeo . 心得:抱著英文字典跟他拚,不小心錄到系統聲音,暴露出宅屬性 還有不要覺得很有錢的裝很多馬達","title":"協同產品設計實習 第6周作業","url":"./xie-tong-chan-pin-she-ji-shi-xi-di-6zhou-zuo-ye.html","tags":"HW"},{"text":"file:///Y:/2016fallcadp_hw/users/40423118.leo 零件1 零件2 零件3 零件組立 4bar from 40423118 on Vimeo . 轉入V-rep 轉入v-rep.mp4 from 40423118 on Vimeo .","title":"協同產品設計實習 第2周作業","url":"./xie-tong-chan-pin-she-ji-shi-xi-di-2zhou-zuo-ye.html","tags":"HW"},{"text":"更改stunnl的ip~ stunnl.ip from 40423118 on Vimeo . 翻譯很辛苦嗚嗚嗚=== HyperWorks 14 - Novedades en armado y construcción de modelos內建字幕 from 40423118 on Vimeo .","title":"協同產品設計實習 第3周作業","url":"./xie-tong-chan-pin-she-ji-shi-xi-di-3zhou-zuo-ye.html","tags":"HW"},{"text":"建立fossil新倉儲 查詢Ipv4位置 將這一串貼進start.bat 建立一個小型的git hub來把這學期的筆記記錄在上面 fossil.init~ from 40423118 on Vimeo .","title":"協同產品設計實習 第4周作業","url":"./xie-tong-chan-pin-she-ji-shi-xi-di-4zhou-zuo-ye.html","tags":"HW"},{"text":"v-rep設定單連桿運動影片 w5 from 40423118 on Vimeo .","title":"協同產品設計實習 第5周作業","url":"./xie-tong-chan-pin-she-ji-shi-xi-di-5zhou-zuo-ye.html","tags":"HW"}]};