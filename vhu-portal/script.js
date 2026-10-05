var D=[
["221A000001","Nguyễn Văn An","15/03/2004","Nam","Công nghệ thông tin","Khoa Công nghệ","K22","22DCNTT01","Chính quy","Đang học"],
["221A000002","Trần Thị Bích Ngọc","02/09/2004","Nữ","Quản trị kinh doanh","Khoa Kinh tế - Quản trị","K22","22DQTKD02","Chính quy","Đang học"],
["231A000003","Lê Hoàng Minh","21/11/2005","Nam","Tài chính - Ngân hàng","Khoa Kinh tế - Quản trị","K23","23DTCNH01","Chính quy","Đang học"],
["231A000004","Phạm Thanh Thảo","08/06/2005","Nữ","Ngôn ngữ Anh","Khoa Ngoại ngữ","K23","23DNNA03","Chính quy","Đang học"],
["241A000005","Võ Quốc Khánh","30/01/2006","Nam","Công nghệ thông tin","Khoa Công nghệ","K24","24DCNTT02","Chính quy","Đang học"],
["241A000006","Đặng Mỹ Linh","17/07/2006","Nữ","Tâm lý học","Khoa Khoa học Xã hội","K24","24DTLH01","Chính quy","Đang học"],
["251A000007","Huỳnh Gia Bảo","12/12/2007","Nam","Luật kinh tế","Khoa Luật","K25","25DLKT01","Chính quy","Đang học"],
["251A000008","Bùi Ngọc Hân","25/04/2007","Nữ","Marketing","Khoa Kinh tế - Quản trị","K25","25DMKT02","Chính quy","Đang học"],
["211A000009","Ngô Thành Đạt","05/10/2003","Nam","Kế toán","Khoa Kinh tế - Quản trị","K21","21DKT01","Chính quy","Đã tốt nghiệp"],
["211A000010","Trương Thị Mai","19/02/2003","Nữ","Du lịch","Khoa Du lịch","K21","21DDL01","Chính quy","Đã tốt nghiệp"],
["221A000011","Dương Minh Tuấn","27/08/2004","Nam","Công nghệ thông tin","Khoa Công nghệ","K22","22DCNTT03","Chính quy","Bảo lưu"],
["261A000012","Lý Thảo Vy","14/05/2008","Nữ","Việt Nam học","Khoa Khoa học Xã hội","K26","26DVNH01","Chính quy","Đang học"]];
function $(i){return document.getElementById(i)}
function uq(i){return D.map(function(r){return r[i]}).filter(function(v,k,a){return a.indexOf(v)===k}).sort()}
function na(s){return s.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D").toLowerCase()}
uq(4).forEach(function(v){$("nganh").add(new Option(v,v))});uq(6).forEach(function(v){$("khoa").add(new Option(v,v))});
function cl(s){return s==="Đang học"?"ok":s==="Bảo lưu"?"gd":""}
function el(t,c,x){var e=document.createElement(t);if(c)e.className=c;if(x!=null)e.textContent=x;return e}
function render(){var q=na($("q").value.trim()),n=$("nganh").value,k=$("khoa").value;
var L=D.filter(function(r){return(!q||na(r[0]+" "+r[1]).indexOf(q)>-1)&&(!n||r[4]===n)&&(!k||r[6]===k)});
var b=$("rows");b.innerHTML="";
L.forEach(function(r){var tr=el("tr");[r[0],r[1],r[4],r[6],r[7]].forEach(function(t){tr.appendChild(el("td",0,t))});
var td=el("td");td.appendChild(el("span","tag "+cl(r[9]),r[9]));tr.appendChild(td);tr.onclick=function(){show(r)};b.appendChild(tr)});
$("count").textContent="Tìm thấy "+L.length+" sinh viên";$("empty").hidden=L.length>0}
function fl(box,a){var g=$(box);g.innerHTML="";a.forEach(function(x){var f=el("div","f");f.appendChild(el("small",0,x[0]));f.appendChild(el("div",0,x[1]));g.appendChild(f)})}
function show(r){$("dn").textContent=r[1];$("ds").textContent="MSSV: "+r[0];
fl("g1",[["Ngày sinh",r[2]],["Giới tính",r[3]],["Trạng thái",r[9]]]);
fl("g2",[["Ngành học",r[4]],["Khoa",r[5]],["Khóa học",r[6]],["Lớp sinh viên",r[7]],["Hệ đào tạo",r[8]]]);
$("modal").classList.add("show")}
$("close").onclick=function(){$("modal").classList.remove("show")};
$("modal").onclick=function(e){if(e.target===this)this.classList.remove("show")};
$("bg").onclick=function(){$("sd").classList.toggle("open")};
["q","nganh","khoa"].forEach(function(i){$(i).addEventListener("input",render)});
$("reset").onclick=function(){$("q").value="";$("nganh").value="";$("khoa").value="";render()};
var M=[["TRANG CÁ NHÂN",[["tt","👤","Thông tin cá nhân"],["tb","🔔","Thông báo"]]],
["TRA CỨU THÔNG TIN",[["sv","🔎","Tra cứu sinh viên"],["ctdt","📋","Chương trình đào tạo"],["lh","📅","Lịch học"],["lt","📝","Lịch thi"],["qd","📄","Quyết định sinh viên"],["cc","🔁","Chuyển căn"],["rl","⭐","Kết quả rèn luyện"],["kq","🎓","Kết quả học tập"],["tc","💳","Tài chính sinh viên"],["kqdk","✅","Kết quả đăng ký học phần"],["hb","🏅","Học bổng, Chính sách, Miễn giảm, Trợ cấp"],["tđ","🔄","Học phần tương đương"]]],
["CHỨC NĂNG TRỰC TUYẾN",[["dkhp","🖊️","Đăng ký học phần"],["dktn","🎓","Đăng ký xét tốt nghiệp"],["dktl","📝","Đăng ký thi lại"],["dkhl","📚","Đăng ký học lại / cải thiện"],["pk","🔍","Đăng ký phúc khảo"],["gt","📨","Đề nghị cấp giấy tờ"],["ks","💬","Khảo sát, đánh giá giảng viên"]]]];
var V={
tt:{kv:[["Mã sinh viên","221A000001"],["Họ tên","Nguyễn Văn An"],["Ngày sinh","15/03/2004"],["Giới tính","Nam"],["Ngành học","Công nghệ thông tin"],["Khóa học","ĐH Khóa 2022 - 2026"],["Lớp sinh viên","22DCNTT01"],["Hệ đào tạo","Chính quy"],["Số điện thoại","09xx xxx xxx"],["Email trường","221a000001@student.vhu.edu.vn"],["Cố vấn học tập","ThS. Lê Minh Châu"],["Trạng thái","Đang học"]]},
tb:{h:["Ngày","Tiêu đề","Nơi gửi"],r:[["01/10/2026","Lịch đăng ký học phần HK1 năm học 2026-2027","Phòng Đào tạo"],["28/09/2026","Thông báo nộp học phí học kỳ mới","Phòng Kế hoạch - Tài chính"],["20/09/2026","Xét học bổng khuyến khích học tập","Phòng Công tác sinh viên"]]},
ctdt:{h:["Mã HP","Tên học phần","Số TC","Học kỳ"],r:[["INT101","Nhập môn lập trình","3","1"],["INT202","Cấu trúc dữ liệu và giải thuật","3","3"],["INT305","Cơ sở dữ liệu","3","4"],["INT410","Công nghệ phần mềm","3","6"],["INT499","Khóa luận tốt nghiệp","6","8"]]},
lh:{h:["Thứ","Tiết","Môn học","Phòng","Giảng viên"],r:[["Hai","1-3","Cơ sở dữ liệu","A.302","ThS. Nguyễn Văn B"],["Tư","4-6","Công nghệ phần mềm","B.205","TS. Trần Thị C"],["Sáu","7-9","Tiếng Anh chuyên ngành","A.101","ThS. Phạm Thị D"]]},
lt:{h:["Môn thi","Ngày thi","Giờ","Phòng","Hình thức"],r:[["Cơ sở dữ liệu","12/12/2026","07:30","A.401","Trắc nghiệm"],["Công nghệ phần mềm","15/12/2026","09:30","B.301","Tự luận"],["Tiếng Anh chuyên ngành","18/12/2026","13:30","A.202","Vấn đáp"]]},
qd:{h:["Số quyết định","Ngày ký","Nội dung"],r:[["125/QĐ-ĐHVH","10/09/2022","Quyết định công nhận sinh viên trúng tuyển"],["340/QĐ-ĐHVH","05/06/2025","Quyết định khen thưởng sinh viên"]]},
cc:{h:["Ngày","Nội dung","Từ","Sang","Trạng thái"],r:[["Chưa có dữ liệu chuyển căn","","","",""]]},
rl:{h:["Học kỳ","Điểm rèn luyện","Xếp loại"],r:[["HK1 2024-2025","88","Tốt"],["HK2 2024-2025","92","Xuất sắc"],["HK1 2025-2026","85","Tốt"]]},
kq:{h:["Học kỳ","TC đăng ký","TC đạt","GPA (hệ 4)","Xếp loại"],r:[["HK1 2024-2025","18","18","3.40","Giỏi"],["HK2 2024-2025","20","20","3.62","Xuất sắc"],["HK1 2025-2026","19","16","3.05","Khá"]]},
tc:{h:["Khoản thu","Phải nộp","Đã nộp","Còn lại"],r:[["Học phí HK1 2026-2027","14.500.000","14.500.000","0"],["Bảo hiểm y tế","884.000","884.000","0"],["Lệ phí thi lại","200.000","0","200.000"]]},
kqdk:{h:["Mã HP","Tên học phần","Số TC","Lớp học phần","Trạng thái"],r:[["INT305","Cơ sở dữ liệu","3","INT305.01","Thành công"],["INT410","Công nghệ phần mềm","3","INT410.02","Thành công"],["ENG301","Tiếng Anh chuyên ngành","2","ENG301.05","Chờ duyệt"]]},
hb:{h:["Loại","Học kỳ","Số tiền","Trạng thái"],r:[["Học bổng khuyến khích học tập","HK2 2024-2025","3.000.000","Đã nhận"],["Miễn giảm học phí","HK1 2025-2026","1.000.000","Đã duyệt"]]},
"tđ":{h:["Học phần cũ","Học phần tương đương","Ghi chú"],r:[["INT201 Lập trình hướng đối tượng","INT220 Lập trình OOP","Áp dụng từ K22"],["INT301 Hệ điều hành","INT330 Nguyên lý hệ điều hành","Áp dụng từ K22"]]},
dkhp:{a:"Đăng ký",h:["Mã HP","Tên học phần","Số TC","Sĩ số"],r:[["INT501","Trí tuệ nhân tạo","3","32/40"],["INT502","An toàn thông tin","3","28/40"],["INT503","Lập trình web","3","40/40"]]},
dktn:{a:"Đăng ký",h:["Đợt xét","Hạn đăng ký","Điều kiện"],r:[["Đợt 1/2027","30/12/2026","Đủ tín chỉ, GPA ≥ 2.0"],["Đợt 2/2027","30/06/2027","Đủ tín chỉ, GPA ≥ 2.0"]]},
dktl:{a:"Đăng ký",h:["Môn học","Điểm cũ","Ngày thi lại","Lệ phí"],r:[["Giải tích","3.5","20/12/2026","200.000"],["Vật lý đại cương","4.0","22/12/2026","200.000"]]},
dkhl:{a:"Đăng ký",h:["Môn học","Hình thức","Học kỳ mở","Học phí/TC"],r:[["Toán rời rạc","Học lại","HK1 2026-2027","480.000"],["Xác suất thống kê","Cải thiện","HK1 2026-2027","480.000"]]},
pk:{a:"Gửi đơn",h:["Môn học","Điểm thi","Hạn phúc khảo","Lệ phí"],r:[["Cơ sở dữ liệu","5.5","20/12/2026","100.000"]]},
gt:{a:"Gửi đề nghị",h:["Loại giấy tờ","Lệ phí","Thời gian xử lý"],r:[["Giấy xác nhận sinh viên","Miễn phí","1 ngày"],["Bảng điểm toàn khóa","30.000","3 ngày"],["Giấy giới thiệu thực tập","Miễn phí","2 ngày"]]},
ks:{a:"Làm khảo sát",h:["Học phần","Giảng viên","Hạn khảo sát"],r:[["Cơ sở dữ liệu","ThS. Nguyễn Văn B","30/11/2026"],["Công nghệ phần mềm","TS. Trần Thị C","30/11/2026"]]}};
function nav(){var n=$("nav");M.forEach(function(g){var h=el("h4",0,g[0]),d=el("div","grp");h.onclick=function(){h.classList.toggle("c");d.classList.toggle("c")};n.appendChild(h);
g[1].forEach(function(m){var a=el("a");a.href="#";a.id="m-"+m[0];a.appendChild(el("span",0,m[1]));a.appendChild(document.createTextNode(m[2]));a.onclick=function(e){e.preventDefault();go(m[0])};d.appendChild(a)});n.appendChild(d)});
var lo=el("div","lo","⎋ Đăng xuất");lo.onclick=function(){alert("Đây là bản demo – chưa kết nối đăng nhập.")};n.appendChild(lo)}
var STORE_KEY="vhuPortalDemoState";
function getState(){try{return JSON.parse(localStorage.getItem(STORE_KEY)||"{}")}catch(e){return {}}}
function saveState(s){localStorage.setItem(STORE_KEY,JSON.stringify(s))}
function openDialog(title,content,onSubmit){var overlay=el("div","flow-overlay"),box=el("div","flow-dialog"),form=el("form");
box.appendChild(el("div","flow-title",title));var body=el("div","flow-body");if(typeof content==="string")body.appendChild(el("p",0,content));else body.appendChild(content);form.appendChild(body);
var footer=el("div","flow-footer"),cancel=el("button","btn o","Hủy"),submit=el("button","btn","Xác nhận");cancel.type="button";submit.type="submit";footer.appendChild(cancel);footer.appendChild(submit);form.appendChild(footer);box.appendChild(form);overlay.appendChild(box);document.body.appendChild(overlay);
function close(){overlay.remove();document.removeEventListener("keydown",escape)}function escape(e){if(e.key==="Escape")close()}
cancel.onclick=close;overlay.onclick=function(e){if(e.target===overlay)close()};document.addEventListener("keydown",escape);form.onsubmit=function(e){e.preventDefault();if(onSubmit(form)!==false)close()};return {form:form,close:close}}
function field(label,type,required,placeholder){var wrap=el("label","flow-field");wrap.appendChild(el("span",0,label));var input=el(type==="textarea"?"textarea":"input");if(type!=="textarea")input.type=type||"text";input.required=!!required;if(placeholder)input.placeholder=placeholder;wrap.appendChild(input);return {wrap:wrap,input:input}}
function selectField(label,options){var wrap=el("label","flow-field");wrap.appendChild(el("span",0,label));var input=el("select");options.forEach(function(o){input.add(new Option(o,o))});wrap.appendChild(input);return {wrap:wrap,input:input}}
function showRecord(headers,row){var content=el("div","record-detail");headers.forEach(function(h,i){var item=el("div","record-item");item.appendChild(el("small",0,h));item.appendChild(el("b",0,row[i]||"—"));content.appendChild(item)});openDialog("CHI TIẾT THÔNG TIN",content,function(){return true})}
function actionLabel(id){return {dkhp:"Đăng ký học phần",dktn:"Gửi đăng ký xét",dktl:"Đăng ký thi lại",dkhl:"Đăng ký học lại",pk:"Gửi yêu cầu phúc khảo",gt:"Gửi đề nghị cấp giấy",ks:"Gửi khảo sát"}[id]||"Gửi yêu cầu"}
function actionFields(id){var box=el("div","flow-fields"),fields=[];function add(f){box.appendChild(f.wrap);fields.push(f)}
if(id==="dkhp")add(selectField("Nhóm học phần",["Nhóm 01","Nhóm 02"]));
if(id==="dktn")add(selectField("Đợt xét tốt nghiệp",["Đợt 1/2027","Đợt 2/2027"]));
if(id==="dktl")add(selectField("Ca thi mong muốn",["Ca sáng","Ca chiều"]));
if(id==="dkhl")add(selectField("Hình thức đăng ký",["Học lại","Học cải thiện"]));
if(id==="pk"){var reason=field("Lý do phúc khảo","textarea",true,"Nhập lý do đề nghị...");reason.input.rows=3;add(reason)}
if(id==="gt"){add(selectField("Số lượng bản",["01 bản","02 bản","03 bản"]));var purpose=field("Mục đích sử dụng","text",true,"Ví dụ: bổ sung hồ sơ thực tập");add(purpose)}
if(id==="ks"){add(selectField("Mức đánh giá",["Rất hài lòng","Hài lòng","Bình thường","Chưa hài lòng"]));var feedback=field("Ý kiến thêm","textarea",false,"Chia sẻ góp ý của bạn");feedback.input.rows=3;add(feedback)}
if(id==="dktn"){var confirm=el("label","flow-check"),check=el("input");check.type="checkbox";check.required=true;confirm.appendChild(check);confirm.appendChild(document.createTextNode(" Tôi xác nhận thông tin và điều kiện xét đã được kiểm tra."));box.appendChild(confirm)}
return {box:box,fields:fields}}
function submitAction(id,row,headers,button){var state=getState(),key=id+":"+row.join("|");if(state.actions&&state.actions[key]){showRecord(["Trạng thái","Thời gian"],[state.actions[key].status,state.actions[key].time]);return}
var f=actionFields(id);openDialog(actionLabel(id).toUpperCase(),f.box,function(){var values=f.fields.map(function(x){return x.input.value.trim()});if(f.fields.some(function(x){return x.input.required&&!x.input.value.trim()}))return false;
var actions=state.actions||{};actions[key]={status:"Đã tiếp nhận",time:new Date().toLocaleString("vi-VN"),values:values};state.actions=actions;saveState(state);button.textContent="Đã gửi ✓";button.disabled=true;button.title="Yêu cầu đã được lưu trên thiết bị này";return true})}
function addTableTools(card,table,headers,rows,id){var tools=el("div","table-tools"),search=el("input","table-search");search.type="search";search.placeholder="Lọc trong danh sách...";search.setAttribute("aria-label","Lọc trong danh sách");var exportButton=el("button","btn o tool-btn","Xuất CSV");tools.appendChild(search);tools.appendChild(exportButton);card.insertBefore(tools,card.querySelector(".tw"));
var body=table.tBodies[0];function apply(){var q=na(search.value.trim());Array.prototype.forEach.call(body.rows,function(tr){tr.hidden=q&&!na(tr.textContent).includes(q)})}search.addEventListener("input",apply);
exportButton.onclick=function(){var lines=[headers].concat(rows).map(function(row){return row.map(function(v){return '"'+String(v).replace(/"/g,'""')+'"'}).join(",")}).join("\r\n");var blob=new Blob(["\ufeff"+lines],{type:"text/csv;charset=utf-8"}),url=URL.createObjectURL(blob),link=el("a");link.href=url;link.download=(id||"du-lieu")+".csv";link.click();URL.revokeObjectURL(url)}}
function go(id){document.querySelectorAll("aside a").forEach(function(a){a.classList.toggle("on",a.id==="m-"+id)});
$("sd").classList.remove("open");var sv=id==="sv";$("v-search").hidden=!sv;$("v-page").hidden=sv;if(sv)return;
var v=V[id],t="";M.forEach(function(g){g[1].forEach(function(m){if(m[0]===id)t=m[2]})});
var p=$("v-page");p.innerHTML="";var h=el("h2","ttl");h.appendChild(el("i",0,"›"));h.appendChild(document.createTextNode(t.toUpperCase()));p.appendChild(h);
var c=el("div","card");c.appendChild(el("div","ch",t));
if(v.kv){var b=el("div","cb"),g=el("div","g3");v.kv.forEach(function(x){var f=el("div","f");f.appendChild(el("small",0,x[0]));f.appendChild(el("div",0,x[1]));g.appendChild(f)});b.appendChild(g);c.appendChild(b)}
else{var w=el("div","tw"),tb=el("table"),tr=el("tr"),th=el("thead");v.h.forEach(function(x){tr.appendChild(el("th",0,x))});if(v.a)tr.appendChild(el("th",0,"Thao tác"));th.appendChild(tr);tb.appendChild(th);
var bd=el("tbody"),state=getState(),actions=state.actions||{};v.r.forEach(function(r){var q=el("tr");r.forEach(function(x){q.appendChild(el("td",0,x))});
if(v.a){var td=el("td"),bt=el("button","btn s",v.a),key=id+":"+r.join("|");if(actions[key]){bt.textContent="Đã gửi ✓";bt.disabled=true;bt.title="Yêu cầu đã được lưu trên thiết bị này"}bt.onclick=function(e){e.stopPropagation();submitAction(id,r,v.h,bt)};td.appendChild(bt);q.appendChild(td)}
q.onclick=function(){showRecord(v.h,r)};bd.appendChild(q)});
tb.appendChild(bd);w.appendChild(tb);c.appendChild(w);addTableTools(c,tb,v.h,v.r,id);c.appendChild(el("div","note2","Dữ liệu mẫu (giả lập) để minh họa giao diện. Chọn một dòng để xem chi tiết."))}
p.appendChild(c)}
nav();go("sv");
render();
var noticeData=[
{date:"01/10/2026",title:"Lịch đăng ký học phần HK1 năm học 2026-2027",from:"Phòng Đào tạo",page:"dkhp"},
{date:"28/09/2026",title:"Thông báo nộp học phí học kỳ mới",from:"Phòng Kế hoạch - Tài chính",page:"tc"},
{date:"20/09/2026",title:"Xét học bổng khuyến khích học tập",from:"Phòng Công tác sinh viên",page:"hb"}];
function updateNoticeBadge(){var state=getState(),read=state.noticeRead||[],badge=document.querySelector(".bell i"),count=noticeData.filter(function(_,i){return !read[i]}).length;badge.textContent=count;badge.hidden=count===0}
var bell=document.querySelector(".bell");bell.setAttribute("role","button");bell.setAttribute("tabindex","0");bell.setAttribute("aria-label","Thông báo chưa đọc");
function showNotices(){var content=el("div","notice-list"),state=getState(),read=state.noticeRead||[];noticeData.forEach(function(item,index){var button=el("button","notice-item"+(read[index]?" read":""));button.type="button";button.appendChild(el("small",0,item.date+" · "+item.from));button.appendChild(el("b",0,item.title));button.onclick=function(){var current=getState();current.noticeRead=current.noticeRead||[];current.noticeRead[index]=true;saveState(current);updateNoticeBadge();dialog.close();go(item.page)};content.appendChild(button)});
var dialog=openDialog("THÔNG BÁO",content,function(){return true}),mark=el("button","btn o notice-read","Đánh dấu tất cả đã đọc");mark.type="button";mark.onclick=function(){var current=getState();current.noticeRead=noticeData.map(function(){return true});saveState(current);updateNoticeBadge();dialog.close()};dialog.form.querySelector(".flow-footer").insertBefore(mark,dialog.form.querySelector(".flow-footer").firstChild)}
bell.onclick=showNotices;bell.onkeydown=function(e){if(e.key==="Enter"||e.key===" "){e.preventDefault();showNotices()}};updateNoticeBadge();
