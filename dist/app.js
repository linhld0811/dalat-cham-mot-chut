'use strict';
const days = {
  arrival: {number:'↗',title:'Chạm ngõ thành phố sương',subtitle:'21.11 · Tối đến nơi, nhận phòng và nghỉ ngơi',items:[
    ['16:00','Có mặt tại sân bay Nội Bài','Gợi ý đến trước giờ bay 2 tiếng. Hoàn tất thủ tục, kiểm tra giấy tờ và hành lý.','Sân bay Nội Bài','Giờ có mặt gợi ý'],
    ['17:40','Hà Nội → Đà Lạt','Cất cánh từ HAN đến DLI theo giờ bạn cung cấp. Kiểm tra lại lịch bay trên vé trước ngày đi.','','Chưa có thông tin giờ hạ cánh'],
    ['Khi đến','Xe sân bay → Be Youth The Villa','Đặt xe đón tại Liên Khương. Dự trù 60–75 phút từ lúc lên xe về villa, điều chỉnh theo giao thông.','Be Youth Villa 66 Bach Dang Da Lat','Báo villa nhận phòng muộn',['lado','villa']],
    ['Buổi tối','Ăn nhẹ, rồi ngủ thật ngon','Chọn món nóng gần chỗ ở. Chốt xe đi Cầu Đất và giờ đón khách của điểm săn mây; soạn áo ấm, sạc điện thoại và đặt báo thức 03:45.','','Nghỉ sớm để sáng mai săn mây']
  ]},
  one:{number:'01',title:'Săn mây & một vòng phố',subtitle:'22.11 · Bình minh ở đồi chè Cầu Đất, chiều dạo phố bên hồ',items:[
    ['03:45','Dậy sớm, chuẩn bị đi săn mây','Mặc áo khoác ấm, mang khăn, giày có độ bám, nước uống và điện thoại đủ pin. Ăn nhẹ trước khi lên xe.','','Chốt xe và giờ mở cửa từ tối trước'],
    ['04:15','Be Youth The Villa → Cầu Đất','Giờ khởi hành gợi ý. Dự trù 60–75 phút di chuyển; xác nhận giờ đón với tài xế theo tuyến đường và thời tiết thực tế.','Doi che Cau Dat Da Lat','Ưu tiên xe có tài xế cho chuyến đi sớm'],
    ['05:30','Săn mây đồi chè Cầu Đất','Ngắm bình minh và chụp ảnh tại điểm săn mây đã xác nhận đón khách sớm. Dành khoảng một giờ; nếu không có mây, tận hưởng nắng sớm và cảnh đồi chè.','Doi che Cau Dat Da Lat','Mây phụ thuộc thời tiết · xác nhận giờ mở cửa và phí'],
    ['07:00','Dạo đồi chè, ăn sáng & cà phê','Chụp hình giữa những luống chè tại khu vực được phép. Ăn sáng, uống đồ nóng ở quán đã mở cửa quanh Cầu Đất hoặc trên đường về.','Doi che Cau Dat Da Lat','Hỏi giá trước khi gọi món'],
    ['08:30','Trở về villa, nghỉ ngơi một chút','Rời Cầu Đất về Be Youth The Villa. Dành phần còn lại của buổi sáng nghỉ bù sau chuyến săn mây; không xếp thêm điểm xa.','Be Youth Villa 66 Bach Dang Da Lat','Giờ về linh hoạt theo thời gian thực tế',['villa']],
    ['11:30','Bữa trưa & một giấc nghỉ nhỏ','Chọn cơm hoặc món nước ở trung tâm. Về villa nghỉ trước khi ra ngoài buổi chiều.','','Nghỉ khoảng 1–2 tiếng'],
    ['14:30','Dạo quanh Hồ Xuân Hương','Đi bộ một đoạn ven hồ, chụp hình, ngồi uống nước. Ghé khu vực Quảng trường Lâm Viên nếu còn thời gian.','Ho Xuan Huong Da Lat','Đi bộ nhẹ nhàng'],
    ['18:00','Một tối ngon lành ở phố núi','Ăn tối với lẩu gà hoặc món bạn thích. Sau đó dạo Chợ Đà Lạt, thử bánh tráng nướng và sữa đậu nành nóng.','Cho Da Lat','Hỏi giá trước khi gọi món'],
    ['21:00','Về villa, gom lại những tấm ảnh','Chuẩn bị đồ cho buổi đi hồ ngày mai. Nếu mệt, bỏ bớt điểm và về nghỉ sớm.','','Ngủ sớm một chút']
  ]},
  two:{number:'02',title:'Hẹn với rừng thông',subtitle:'23.11 · Tuyền Lâm — Trúc Lâm, dành thời gian cho thiên nhiên',items:[
    ['07:00','Bánh căn & một buổi sáng không vội','Ăn sáng, mang theo nước uống, áo khoác và ô gấp. Đặt xe theo tuyến Hồ Tuyền Lâm – Trúc Lâm.','','Chuẩn bị giày dễ đi'],
    ['08:30','Thiền viện Trúc Lâm','Tham quan nhẹ nhàng, giữ yên tĩnh và ăn mặc lịch sự. Ưu tiên khu vực mở cửa cho khách.','Thien vien Truc Lam Da Lat','Kiểm tra giờ đón khách'],
    ['10:00','Hồ Tuyền Lâm, một khoảng xanh','Ngắm mặt hồ, đi dạo ở khu vực được phép và dừng uống cà phê. Không cần thêm hoạt động để có một buổi sáng đẹp.','Ho Tuyen Lam Da Lat','Lịch cơ bản không gồm SUP hay cáp treo'],
    ['12:00','Ăn trưa, trở về nghỉ','Ăn trưa trên đường về trung tâm. Dành đầu giờ chiều nghỉ tại villa.','','Tránh xếp lịch quá dày'],
    ['15:00','Cà phê & chọn chút quà mang về','Chọn quán gần trung tâm, mua cà phê, trà atisô hoặc mứt. Để trống thời gian cho điều bạn muốn làm thêm.','Cho Da Lat','Hỏi giá và kiểm tra đóng gói'],
    ['18:00','Bữa tối cuối, hẹn lần sau','Ăn gần villa, về soạn hành lý và xác nhận xe sân bay. Chốt trả phòng sớm với lễ tân từ tối nay.','','Đặt xe đón khoảng 05:00 ngày mai',['lado','villa']]
  ]},
  home:{number:'↗',title:'Tạm biệt, hẹn gặp lại',subtitle:'24.11 · Về sớm, mang theo một vali kỷ niệm',items:[
    ['05:30','Dậy sớm & kiểm tra đồ lần cuối','Kiểm tra giấy tờ, điện thoại, sạc và đồ cá nhân. Hoàn tất trả phòng theo thỏa thuận với villa.','','Đặt báo thức từ tối trước',['villa']],
    ['06:30','Rời villa đi Liên Khương','Giờ xe đón gợi ý. Dự trù 60–75 phút di chuyển; xác nhận với tài xế theo tuyến đường và thời tiết.','San bay Lien Khuong','Đặt xe trước, tránh gọi xe sát giờ',['lado']],
    ['07:45','Có mặt tại sân bay DLI','Mục tiêu đến trước giờ cất cánh 2 tiếng. Làm thủ tục, gửi hành lý và vào cửa an ninh.','','Kiểm tra lại giờ bay trên vé'],
    ['08:20','Đà Lạt → Hà Nội','Giờ cất cánh theo thông tin bạn cung cấp. Điểm đến HAN được hiểu theo hành trình khứ hồi; đối chiếu lại vé.','','Hẹn Đà Lạt vào một ngày gần nhất']
  ]}
};
const panel = document.getElementById('day-panel');
const tabs = [...document.querySelectorAll('[role="tab"]')];
const tripContacts = {
  lado: {name:'Lado Taxi sân bay', number:'19001111', display:'1900 1111'},
  villa: {name:'Be Youth The Villa', number:'0868096138', display:'0868 096 138'}
};
function contactLink(key){const c=tripContacts[key];return `<a class="contact-call" href="tel:${c.number}" aria-label="Gọi ${c.name}: ${c.display}"><span class="call-symbol" aria-hidden="true">☎</span><span><span class="call-label">${c.name}</span><strong class="call-number">${c.display}</strong></span></a>`;}
function dayHTML(day){return `<div class="day-intro"><span class="day-number">${day.number}</span><div><h3>${day.title}</h3><p>${day.subtitle}</p></div></div><div class="timeline">${day.items.map(([time,title,desc,map,tag,contacts=[]])=>`<article class="timeline-item"><time class="timeline-time">${time}</time><div class="timeline-content"><h4>${title}${map?`<a class="map-link" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(map)}" target="_blank" rel="noopener noreferrer" aria-label="Mở bản đồ: ${map}">Bản đồ ↗</a>`:''}</h4><p>${desc}</p>${tag?`<span class="timeline-tag">${tag}</span>`:''}${contacts.length?`<div class="timeline-contacts">${contacts.map(contactLink).join('')}</div>`:''}</div></article>`).join('')}</div>`;}
let currentDay = 'one';
function selectDay(key, focus = false){currentDay=key;panel.innerHTML=dayHTML(days[key]);panel.setAttribute('aria-labelledby',`tab-${key}`);tabs.forEach(t=>{const active=t.dataset.day===key;t.setAttribute('aria-selected',String(active));t.tabIndex=active?0:-1;if(active&&focus)t.focus();});}
tabs.forEach((tab,index)=>{tab.addEventListener('click',()=>selectDay(tab.dataset.day));tab.addEventListener('keydown',event=>{let next;if(event.key==='ArrowRight')next=(index+1)%tabs.length;if(event.key==='ArrowLeft')next=(index-1+tabs.length)%tabs.length;if(event.key==='Home')next=0;if(event.key==='End')next=tabs.length-1;if(next!==undefined){event.preventDefault();selectDay(tabs[next].dataset.day,true);}});});
selectDay(currentDay);
const groups=[
  {title:'Giấy tờ & đồ thiết yếu',note:'Những món nhớ kiểm tra đầu tiên.',items:[['id','CCCD / giấy tờ đi máy bay hợp lệ'],['tickets','Vé bay, mã đặt chỗ & đặt phòng'],['wallet','Ví, thẻ ngân hàng & ít tiền mặt'],['phone','Điện thoại & số liên hệ cần thiết'],['license','Giấy phép lái xe nếu dự định thuê xe'],['daybag','Túi nhỏ đeo chéo / balo đi chơi'],['bottle','Bình nước cá nhân'],['bag','Vali / túi hành lý đúng hạn mức']]},
  {title:'Trang phục & cá nhân',note:'Một chút ấm áp cho phố núi.',items:[['jacket','Áo khoác ấm / áo len'],['clothes','2–3 bộ quần áo dễ phối'],['sleep','Đồ ngủ & đồ lót cho 3 đêm'],['scarf','Khăn mỏng & tất ấm'],['shoes','Giày đi bộ có độ bám tốt'],['rain','Ô gấp / áo mưa gọn nhẹ'],['toiletries','Bàn chải, kem đánh răng, đồ cá nhân'],['skincare','Kem chống nắng & dưỡng môi']]},
  {title:'Công nghệ & tiện ích',note:'Nhỏ thôi, nhưng rất cần đấy.',items:[['charger','Củ sạc & cáp điện thoại'],['powerbank','Pin dự phòng theo quy định hãng bay'],['camera','Máy ảnh / thẻ nhớ nếu có'],['headphones','Tai nghe cho chuyến bay'],['meds','Thuốc cá nhân thường dùng'],['tissues','Khăn giấy / khăn ướt'],['zipbag','Túi chống nước cho đồ điện tử'],['offline','Tải bản đồ & vé bay xem ngoại tuyến']]}
];
const storageKey='mot-chut-dalat-packing-2026-v1';
let checked={};let storageOK=true;
try{const saved=JSON.parse(localStorage.getItem(storageKey)||'{}');if(saved&&typeof saved==='object'&&!Array.isArray(saved))checked=saved;}catch{storageOK=false;}
const packing=document.getElementById('packing-list');
packing.innerHTML=groups.map((g,i)=>`<article class="pack-group"><h3>${g.title}<span>0${i+1}</span></h3><p>${g.note}</p>${g.items.map(([id,label])=>`<label class="check-row" for="pack-${id}"><input id="pack-${id}" type="checkbox" data-item="${id}" ${checked[id]===true?'checked':''}><span>${label}</span></label>`).join('')}</article>`).join('');
const inputs=[...packing.querySelectorAll('input')];
function progress(){const count=inputs.filter(x=>x.checked).length;const percent=Math.round(count/inputs.length*100);document.getElementById('pack-count').textContent=`${count} / ${inputs.length} món`;document.getElementById('pack-percent').textContent=`${percent}%`;document.getElementById('pack-bar').style.width=`${percent}%`;document.querySelector('[role="progressbar"]').setAttribute('aria-valuenow',percent);document.getElementById('strip-progress').textContent=`${count} món đã sẵn sàng`;document.getElementById('pack-message').textContent=count===inputs.length?'Xong rồi! Vali sẵn sàng, mình đi thôi.':'Từng chút một, mình sắp sẵn sàng rồi.';if(!storageOK)document.getElementById('storage-note').textContent='Trình duyệt chưa cho phép lưu. Giữ trang mở để dùng checklist.';}
function persist(){try{localStorage.setItem(storageKey,JSON.stringify(Object.fromEntries(inputs.map(x=>[x.dataset.item,x.checked]))));storageOK=true;document.getElementById('storage-note').textContent='✓ Tự động lưu trên thiết bị này';}catch{storageOK=false;}progress();}
inputs.forEach(input=>input.addEventListener('change',persist));progress();
const dialog=document.getElementById('reset-dialog');
document.getElementById('reset-pack').addEventListener('click',()=>dialog.showModal());
document.getElementById('cancel-reset').addEventListener('click',()=>dialog.close());
document.getElementById('confirm-reset').addEventListener('click',()=>{inputs.forEach(x=>x.checked=false);persist();dialog.close();showToast('Đã bỏ tick. Cùng soạn lại vali nhé.');});
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
let toastTimer;function showToast(message){const el=document.getElementById('toast');el.textContent=message;el.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('show'),3000);}
document.getElementById('print-plan').addEventListener('click',()=>window.print());
window.addEventListener('beforeprint',()=>{panel.innerHTML=Object.values(days).map(day=>`<section class="print-day">${dayHTML(day)}</section>`).join('');});
window.addEventListener('afterprint',()=>selectDay(currentDay));
