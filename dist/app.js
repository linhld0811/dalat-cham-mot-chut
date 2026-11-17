'use strict';
const days = {
  arrival: {number:'↗',title:'Mình gặp Đà Lạt rồi này',subtitle:'21.11 · Tối đến nơi, cùng nhau về căn phòng nhỏ',items:[
    ['16:00','Hai đứa có mặt tại Nội Bài','Mình đến sớm 2 tiếng để thong thả làm thủ tục, kiểm tra giấy tờ và hành lý trước khi cuộc hẹn bắt đầu.','Sân bay Nội Bài','17h00'],
    ['17:40','Mình bay về phía Đà Lạt','Cất cánh từ HAN đến DLI. Nhớ kiểm tra lại vé trước ngày đi để hai đứa không lỡ cuộc hẹn nhé.','','19h35'],
    ['20:15','Cùng về căn phòng nhỏ','Xe đón hai đứa tại Liên Khương sau khi lấy hành lý. Dự trù 60–75 phút để về Be Youth The Villa.','Be Youth Villa 66 Bach Dang Da Lat','Báo villa nhận phòng muộn',['lado','villa']],
    ['Buổi tối','Ăn nhẹ, nhận xe rồi ngủ ngoan','Nhận xe tại villa; cùng kiểm tra phanh, đèn, lốp, xăng, giấy tờ và hai mũ bảo hiểm. Soạn áo ấm, sạc điện thoại, xem trước đường Cầu Đất rồi đặt báo thức 03:45.','','Ngủ sớm để mai mình cùng đón bình minh']
  ]},
  one:{number:'01',title:'Săn mây cùng người thương',subtitle:'22.11 · Đón bình minh, dạo bên hồ và ăn một bữa thật ngon',items:[
    ['03:45','Dậy thôi, mình đi đón bình minh','Mặc áo thật ấm, mang khăn, giày bám tốt, nước uống và điện thoại đủ pin. Kiểm tra xăng rồi ăn nhẹ trước khi lên xe.','','Xem trước đường đi và thời tiết từ tối trước'],
    ['04:15','Chở nhau đến Cầu Đất','Đường còn tối, có thể có sương và mặt đường ẩm nên mình cứ đi chậm. Dự trù 60–75 phút từ villa.','Doi che Cau Dat Da Lat','Bật đèn, giữ ấm và chở nhau thật cẩn thận'],
    ['05:30','Cùng nhau săn mây','Ngắm bình minh và chụp cho nhau thật nhiều ảnh. Nếu hôm ấy mây trốn mất, mình vẫn còn nắng sớm, đồi chè và người bên cạnh.','Doi che Cau Dat Da Lat','Có nhau rồi, có mây hay không cũng đẹp'],
    ['07:00','Bữa sáng giữa đồi chè','Đi giữa những luống chè, tìm một quán đã mở cửa rồi cùng ăn sáng và ôm ly đồ nóng trong tay.','Doi che Cau Dat Da Lat','Hỏi giá trước khi gọi món'],
    ['08:30','Chở nhau về villa nghỉ một chút','Rời Cầu Đất về Be Youth The Villa. Buổi sáng còn lại để hai đứa ngủ bù và thong thả bên nhau.','Be Youth Villa 66 Bach Dang Da Lat','Giờ về tùy theo niềm vui của hai đứa',['villa']],
    ['11:30','Ăn trưa rồi ôm một giấc ngủ nhỏ','Chọn cơm hoặc món nước ở trung tâm, sau đó về villa nghỉ 1–2 tiếng trước cuộc hẹn buổi chiều.','','Không cần vội, mình còn cả ngày bên nhau'],
    ['14:30','Nắm tay dạo Hồ Xuân Hương','Chạy xe ra hồ, gửi xe rồi đi bộ thật chậm bên nhau. Nếu còn thời gian, mình ghé Quảng trường Lâm Viên chụp thêm vài tấm ảnh đôi.','Ho Xuan Huong Da Lat','Gửi xe ở nơi có người trông'],
    ['18:00','Hẹn hò ở Tụt Nướng','Chở nhau đến số 4 Trần Khánh Dư, dành 1,5–2 tiếng cho một bữa tối ấm áp. Nên đặt bàn trước nếu đi vào giờ đông.','Tụt Nướng 4 Trần Khánh Dư Đà Lạt','Mình tự lái xe nên không uống rượu bia'],
    ['20:00','Đi Chợ Đà Lạt cùng nhau','Gửi xe rồi dạo chợ, chia nhau một chiếc bánh tráng nướng hay ly sữa đậu nành nóng nếu vẫn còn bụng.','Cho Da Lat','Giữ vé xe và nắm tay nhau giữa chỗ đông'],
    ['21:00','Về nhà nhỏ, xem lại ảnh của hai đứa','Chuẩn bị đồ cho ngày bên hồ mai. Nếu mệt, mình về sớm, cuộn trong chăn và kể nhau nghe điều thích nhất hôm nay.','','Ngủ ngoan để mai còn một ngày thật đẹp']
  ]},
  two:{number:'02',title:'Một ngày giữa rừng thông',subtitle:'23.11 · Bình yên bên hồ, hoàng hôn Xóm Lèo và một quán mang tên tình yêu',items:[
    ['07:00','Bánh căn cho buổi sáng dịu dàng','Cùng ăn sáng, mang nước, áo khoác và áo mưa gọn. Kiểm tra xăng trước tuyến Thiền viện Trúc Lâm – Hồ Tuyền Lâm.','','Cả ngày mình chở nhau bằng xe máy'],
    ['08:30','Một khoảng bình yên ở Trúc Lâm','Mình cùng đi thật khẽ, giữ yên tĩnh và ăn mặc lịch sự khi tham quan những khu vực mở cửa cho khách.','Thien vien Truc Lam Da Lat','Kiểm tra giờ đón khách'],
    ['10:00','Hồ Tuyền Lâm, chỉ mình và gió','Đi dạo bên mặt hồ, tìm một góc xanh rồi cùng uống cà phê. Không cần thật nhiều hoạt động, chỉ cần có nhau là buổi sáng đã đủ đẹp.','Ho Tuyen Lam Da Lat','Lịch nhẹ nhàng, không gồm SUP hay cáp treo'],
    ['12:00','Ăn trưa rồi về nghỉ cạnh nhau','Ăn trưa trên đường về trung tâm, sau đó chạy xe về villa và dành đầu giờ chiều để nghỉ.','','Mình đi chơi, đâu cần chạy đua với thời gian'],
    ['15:00','Chọn một chút Đà Lạt mang về','Mua cà phê, trà atisô hoặc mứt làm quà, rồi về villa cất đồ và lấy áo ấm cho cuộc hẹn buổi tối.','Cho Da Lat','Rời trung tâm khoảng 16:30'],
    ['16:30','Chở nhau về phía hoàng hôn','Đi theo hướng Trại Mát đến Tiệm nướng Xóm Lèo. Mình đi sớm một chút để kịp nhìn trời đổi màu trước bữa tối.','Tiệm Nướng và Chill Xóm Lèo 113 Huỳnh Tấn Phát Đà Lạt','Đường dốc, mình cứ chậm rãi khi trời tối'],
    ['17:00','Bữa tối giữa thung lũng lên đèn','Cùng ăn nướng, ngắm hoàng hôn và những ánh đèn dần sáng. Dành khoảng 2–2,5 tiếng; nên đặt trước một chiếc bàn có view.','Tiệm Nướng và Chill Xóm Lèo 113 Huỳnh Tấn Phát Đà Lạt','Mình tự lái xe nên không uống rượu bia'],
    ['19:45','Vì Yêu Mà Đến — mình cũng vậy','Từ Xóm Lèo, hai đứa ghé quán ở 678 Hùng Vương, gọi hai món mình thích rồi ngồi cạnh nhau ngắm Đà Lạt về đêm.','Vì Yêu Mà Đến Coffee 678 Hùng Vương Đà Lạt','Mang áo ấm; đường tối có thể có sương'],
    ['21:30','Về căn phòng nhỏ, cất chuyến đi vào vali','Chở nhau về villa, đổ xăng nếu cần và bàn giao xe theo thỏa thuận. Cùng soạn hành lý, xác nhận xe sân bay và chốt giờ trả phòng.','','Đặt xe sân bay đón khoảng 05:00',['lado','villa']]
  ]},
  home:{number:'↗',title:'Mang Đà Lạt về cùng nhau',subtitle:'24.11 · Về sớm, vali đầy quà và tim đầy kỷ niệm',items:[
    ['04:30','Dậy thật khẽ, kiểm tra đồ lần cuối','Cùng kiểm tra giấy tờ, điện thoại, sạc và đồ cá nhân rồi hoàn tất trả phòng với villa.','','Đặt báo thức từ tối trước',['villa']],
    ['05:00','Hai đứa rời villa đi Liên Khương','Lên ô tô đã đặt trước, dự trù 60–75 phút di chuyển. Nhớ xác nhận lại với tài xế theo đường và thời tiết thực tế.','San bay Lien Khuong','Chặng sân bay mình đi ô tô',['lado']],
    ['06:15','Cùng nhau vào sân bay DLI','Có mặt trước giờ cất cánh khoảng 2 tiếng để thong thả làm thủ tục, gửi hành lý và qua cửa an ninh.','','Kiểm tra lại giờ bay trên vé'],
    ['08:20','Đà Lạt → Hà Nội, mình vẫn cạnh nhau','Tạm biệt thành phố ngàn thông. Chuyến đi khép lại, còn câu chuyện của hai đứa thì vẫn dài thật dài.','','Hẹn Đà Lạt vào một ngày mình lại muốn trốn đi cùng nhau']
  ]}
};
const dayVisuals = {
  arrival: {
    src:'https://ak-d.tripcdn.com/images/1mc0412000j1l0j3gF1E7_R_960_660_R5_D.jpg',
    alt:'Be Youth The Villa, căn phòng nhỏ của hai đứa ở Đà Lạt',
    caption:'Đà Lạt đón mình bằng một căn phòng thật ấm.',
    position:'center'
  },
  one: {
    src:'assets/dalat-hero.jpg',
    alt:'Nắng sớm bên rừng thông và mặt hồ Đà Lạt',
    caption:'Cùng nhau thức dậy giữa nắng sớm Đà Lạt.',
    position:'center'
  },
  two: {
    src:'assets/tuyen-lam.jpg',
    alt:'Mặt hồ Tuyền Lâm giữa những đồi thông',
    caption:'Bình yên là khi mình ở cạnh nhau.',
    position:'center'
  },
  home: {
    src:'assets/couple.jpeg',
    alt:'Hai đứa mình bên cánh đồng và những chong chóng đỏ',
    caption:'Mang Đà Lạt về nhà, mang cả nhau theo cùng.',
    position:'center 55%'
  }
};
const panel = document.getElementById('day-panel');
const tabs = [...document.querySelectorAll('[role="tab"]')];
const dayPhoto = document.getElementById('day-photo');
const dayPhotoCaption = document.getElementById('day-photo-caption');
const dayPhotoWrap = document.getElementById('day-photo-wrap');
const tripContacts = {
  lado: {name:'Lado Taxi sân bay', number:'19001111', display:'1900 1111'},
  villa: {name:'Be Youth The Villa', number:'0868096138', display:'0868 096 138'}
};
function contactLink(key){const c=tripContacts[key];return `<a class="contact-call" href="tel:${c.number}" aria-label="Gọi ${c.name}: ${c.display}"><span class="call-symbol" aria-hidden="true">☎</span><span><span class="call-label">${c.name}</span><strong class="call-number">${c.display}</strong></span></a>`;}
function dayHTML(day){return `<div class="day-intro"><span class="day-number">${day.number}</span><div><h3>${day.title}</h3><p>${day.subtitle}</p></div></div><div class="timeline">${day.items.map(([time,title,desc,map,tag,contacts=[]])=>`<article class="timeline-item"><time class="timeline-time">${time}</time><div class="timeline-content"><h4>${title}${map?`<a class="map-link" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(map)}" target="_blank" rel="noopener noreferrer" aria-label="Mở bản đồ: ${map}">Dẫn đường ↗</a>`:''}</h4><p>${desc}</p>${tag?`<span class="timeline-tag">${tag}</span>`:''}${contacts.length?`<div class="timeline-contacts">${contacts.map(contactLink).join('')}</div>`:''}</div></article>`).join('')}</div>`;}
let currentDay = 'one';
function updateDayVisual(key){
  const visual=dayVisuals[key];
  dayPhoto.src=visual.src;
  dayPhoto.alt=visual.alt;
  dayPhoto.style.objectPosition=visual.position;
  dayPhotoCaption.textContent=visual.caption;
  if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    dayPhotoWrap.animate([
      {opacity:.55,transform:'scale(.985)'},
      {opacity:1,transform:'scale(1)'}
    ],{duration:320,easing:'ease-out'});
  }
}
function selectDay(key, focus = false){currentDay=key;panel.innerHTML=dayHTML(days[key]);panel.setAttribute('aria-labelledby',`tab-${key}`);updateDayVisual(key);tabs.forEach(t=>{const active=t.dataset.day===key;t.setAttribute('aria-selected',String(active));t.tabIndex=active?0:-1;if(active&&focus)t.focus();});}
tabs.forEach((tab,index)=>{tab.addEventListener('click',()=>selectDay(tab.dataset.day));tab.addEventListener('keydown',event=>{let next;if(event.key==='ArrowRight')next=(index+1)%tabs.length;if(event.key==='ArrowLeft')next=(index-1+tabs.length)%tabs.length;if(event.key==='Home')next=0;if(event.key==='End')next=tabs.length-1;if(next!==undefined){event.preventDefault();selectDay(tabs[next].dataset.day,true);}});});
Object.values(dayVisuals).forEach(({src})=>{const image=new Image();image.src=src;});
selectDay(currentDay);
const groups=[
  {title:'Những điều không thể quên',note:'Để cuộc hẹn của hai đứa bắt đầu thật êm.',items:[['id','CCCD / giấy tờ đi máy bay hợp lệ'],['tickets','Vé bay, mã đặt chỗ & đặt phòng'],['wallet','Ví, thẻ ngân hàng & ít tiền mặt'],['phone','Điện thoại & số liên hệ cần thiết'],['license','Giấy phép lái xe'],['daybag','Túi nhỏ đeo chéo / balo đi chơi'],['bottle','Bình nước cá nhân'],['bag','Vali / túi hành lý đúng hạn mức']]},
  {title:'Áo ấm cho hai đứa',note:'Đà Lạt lạnh, còn mình thì có nhau.',items:[['jacket','Áo khoác ấm / áo len'],['clothes','2–3 bộ quần áo dễ phối'],['sleep','Đồ ngủ & đồ lót cho 3 đêm'],['scarf','Khăn mỏng & tất ấm'],['shoes','Giày đi bộ có độ bám tốt'],['rain','Ô gấp / áo mưa gọn nhẹ'],['toiletries','Bàn chải, kem đánh răng, đồ cá nhân'],['skincare','Kem chống nắng & dưỡng môi']]},
  {title:'Để giữ lại kỷ niệm',note:'Những món nhỏ giúp chuyến đi đầy ắp ảnh xinh.',items:[['charger','Củ sạc & cáp điện thoại'],['powerbank','Pin dự phòng theo quy định hãng bay'],['camera','Máy ảnh / thẻ nhớ nếu có'],['headphones','Tai nghe cho chuyến bay'],['meds','Thuốc cá nhân thường dùng'],['tissues','Khăn giấy / khăn ướt'],['zipbag','Túi chống nước cho đồ điện tử'],['offline','Tải bản đồ & vé bay xem ngoại tuyến']]}
];
const storageKey='mot-chut-dalat-packing-2026-v1';
let checked={};let storageOK=true;
try{const saved=JSON.parse(localStorage.getItem(storageKey)||'{}');if(saved&&typeof saved==='object'&&!Array.isArray(saved))checked=saved;}catch{storageOK=false;}
const packing=document.getElementById('packing-list');
packing.innerHTML=groups.map((g,i)=>`<article class="pack-group"><h3>${g.title}<span>0${i+1}</span></h3><p>${g.note}</p>${g.items.map(([id,label])=>`<label class="check-row" for="pack-${id}"><input id="pack-${id}" type="checkbox" data-item="${id}" ${checked[id]===true?'checked':''}><span>${label}</span></label>`).join('')}</article>`).join('');
const inputs=[...packing.querySelectorAll('input')];
function progress(){const count=inputs.filter(x=>x.checked).length;const percent=Math.round(count/inputs.length*100);document.getElementById('pack-count').textContent=`${count} / ${inputs.length} món`;document.getElementById('pack-percent').textContent=`${percent}%`;document.getElementById('pack-bar').style.width=`${percent}%`;document.querySelector('[role="progressbar"]').setAttribute('aria-valuenow',percent);document.getElementById('strip-progress').textContent=`${count} món chờ cuộc hẹn`;document.getElementById('pack-message').textContent=count===inputs.length?'Xong rồi! Vali sẵn sàng, hai đứa mình đi thôi.':'Mỗi món đồ là một chút mong chờ.';if(!storageOK)document.getElementById('storage-note').textContent='Trình duyệt chưa cho phép lưu. Giữ trang mở để dùng checklist.';}
function persist(){try{localStorage.setItem(storageKey,JSON.stringify(Object.fromEntries(inputs.map(x=>[x.dataset.item,x.checked]))));storageOK=true;document.getElementById('storage-note').textContent='✓ Tự động lưu trên thiết bị này';}catch{storageOK=false;}progress();}
inputs.forEach(input=>input.addEventListener('change',persist));progress();
const dialog=document.getElementById('reset-dialog');
document.getElementById('reset-pack').addEventListener('click',()=>dialog.showModal());
document.getElementById('cancel-reset').addEventListener('click',()=>dialog.close());
document.getElementById('confirm-reset').addEventListener('click',()=>{inputs.forEach(x=>x.checked=false);persist();dialog.close();showToast('Vali trống rồi. Hai đứa mình cùng soạn lại nhé.');});
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
let toastTimer;function showToast(message){const el=document.getElementById('toast');el.textContent=message;el.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('show'),3000);}
document.getElementById('print-plan').addEventListener('click',()=>window.print());
window.addEventListener('beforeprint',()=>{panel.innerHTML=Object.values(days).map(day=>`<section class="print-day">${dayHTML(day)}</section>`).join('');});
window.addEventListener('afterprint',()=>selectDay(currentDay));
