(function(){
const base = location.pathname.includes('/play/') ? '../' : '';
const games=[
 {name:'Skate 3',file:'skate-3.html',img:'https://media.contentapi.ea.com/content/dam/gin/images/2017/01/skate-3-key-art.jpg.adapt.crop191x100.628p.jpg'},
 {name:'Gamble With Your Friends',file:'gamble-with-your-friends.html',img:'https://sm.ign.com/ign_za/news/g/gamble-wit/gamble-with-your-friends-dev-celebrates-1-million-sales-says_keek.jpg'},
 {name:'BuildNow GG',file:'buildnow-gg.html',img:'https://imgs.crazygames.com/buildnow-gg_16x9/20251229084241/buildnow-gg_16x9-cover?metadata=none&quality=60&height=7226'},
 {name:'Russian Counter Strike',file:'russian-counter-strike.html',img:'https://images.steamusercontent.com/ugc/1653347126887101751/B4E5D88FEEB55C93C37F812B731FF49CF1AAECE0/?imw=1024&imh=768&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true'},
 {name:'Granny',file:'granny.html',img:'https://tr.rbxcdn.com/180DAY-3216b6e023856a9b6e35a0d5a0021888/768/432/Image/Webp/noFilter'},
 {name:'Subway Surfers',file:'subway-surfers.html',img:'https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=314,height=314,fit=cover,f=auto/1c920b9279c2bedec567c1b58129ae8f/subway-surfers-logo.png'},
 {name:'Table Tennis World Tour',file:'table-tennis-world-tour.html',img:'https://imgs.crazygames.com/table-tennis-world-tour_16x9/20230908041108/table-tennis-world-tour_16x9-cover?metadata=none&quality=100&width=1200&height=630&fit=crop'},
 {name:'Rooftop Snipers',file:'rooftop-snipers.html',img:'https://imgs.crazygames.com/rooftop-snipers_16x9/20250108040440/rooftop-snipers_16x9-cover?metadata=none&quality=100&width=1200&height=630&fit=crop'},
 {name:'Deathrun 3D',file:'deathrun-3d.html',img:'https://play-lh.googleusercontent.com/h2uFBJ2Tw8vjcOoHti8diG9OA_ujp36VlXloC1ijOEecT1r5a0s46TizyAb0RwsvYqRSCEk1jTbyjystXSkHNYQ'},
 {name:'Escape Road',file:'escape-road.html',img:'https://imgs.crazygames.com/escape-road-asm_16x9/20250724105031/escape-road-asm_16x9-cover?metadata=none&quality=100&width=1200&height=630&fit=crop'},
 {name:'Crossy Road',file:'crossy-road.html',img:'https://crossy-road.io/data/image/how-to-play-crossy-road.jpg'},
 {name:'Basket Random',file:'basket-random.html',img:'https://imgs.crazygames.com/basket-random_16x9/20240617090207/basket-random_16x9-cover?metadata=none&quality=100&width=1200&height=630&fit=crop'},
 {name:'Cuphead',file:'cuphead.html',img:'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/268910/library_600x900_2x.jpg'},
 {name:'PEAK',file:'peak.html',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTPuIHHvpYh16dNzL7rD_vS_7d_awpcPIGIaHDWZ-EPg&s=10'},
 {name:'Slope',file:'slope.html',img:'https://play-lh.googleusercontent.com/sHCNSM6n19mLLnKBaEQSyLACvjwT5iZ5jOxYZB3gaYOI57Uo408NBztLMnzYUBlSmWpjPO9EaomRjWH3BQIg=w526-h296-rw'},
 {name:'Drift Hunters',file:'drift-hunters.html',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_3YHsmGlP6KxbDIwHfc-yz-7AkSo8_fitm_sGadCrMbCSFtt1hINmIbT4&s=10'},
 {name:'Clustertruck',file:'clustertruck.html',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnUExN3PmZZu64dCwAgRhJFtHfYpU4naHUaxvlsnD5xQ&s'},
 {name:'How to Fish',file:'how-to-fish.html',img:'https://gaming-cdn.com/images/products/23683/616x353/how-to-fish-pc-steam-cover.jpg?v=1787297248'},
 {name:'Minecraft 1.20.6 (Eaglercraft)',file:'minecraft-1-20-6.html',img:'https://store-images.s-microsoft.com/image/apps.608.13510798885735219.cf55aeca-e690-41e0-a88b-41b0e517a3be.c94e1bfa-1b68-4cf5-9954-f967168480b4?q=90&w=480&h=270'},
 {name:'Geometry Dash',file:'geometry-dash.html',img:'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/322170/header.jpg?t=1703006148'},
 {name:'Hollow Knight: Silksong',file:'hollow-knight-silksong.html',img:'https://static0.dualshockersimages.com/wordpress/wp-content/uploads/2025/09/img_8686.jpeg?w=1600&h=900&fit=crop'},
 {name:'Terraria',file:'terraria.html',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOq0C6sb8sq1ek9SdOKnhN5FxaBAcBGyifKQa-omKXyz5aMy16H5jsA5w&s=10'},
 {name:'DELTARUNE',file:'deltarune.html',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3VzTaYSNTqmwTOhsmRO05nl1z6dhc3hfJQSOBrwXrvE8K-zd4PQ467fI&s=10'},
 {name:'La Madriguera',file:'la-madriguera.html',img:'https://img.itch.zone/aW1nLzY5MDY1NTUuanBn/original/5%2FDOxn.jpg'},
 {name:'Kickabout',file:'kickabout.html',img:'https://images.icon-icons.com/3315/PNG/512/sports_game_sport_ball_soccer_football_icon_209369.png'},
 {name:'Plague Inc.',file:'plague-inc.html',img:'https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_PlagueIncEvolved_image1600w.jpg'},
 {name:'Doodle Jump',file:'doodle-jump.html',img:'https://upload.wikimedia.org/wikipedia/commons/e/e7/Doodle_Jump.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original'},
 {name:'Among Us',file:'among-us.html',img:'https://cdn.mos.cms.futurecdn.net/93GAa4wm3z4HbenzLbxWeQ.jpg'},
 {name:"Five Nights at Freddy’s 1",file:'fnaf-1.html',img:'https://noahstutoring.academy/images/164.jpg'},
 {name:"Five Nights at Freddy’s 2",file:'fnaf-2.html',img:'https://fnaf-2.io/data/image/options/fnaf-2-banner-fnaf2io.jpg'},
 {name:"Five Nights at Freddy’s 3",file:'fnaf-3.html',img:'https://static.wikia.nocookie.net/freddy-fazbears-pizza/images/f/fd/FNaF_3_Switch.jpg/revision/latest?cb=20210405111619'},
 {name:"Five Nights at Freddy’s 4",file:'fnaf-4.html',img:'https://external-preview.redd.it/made-a-desktop-bg-for-fnaf-4-first-time-making-something-v0-kb0uCdHothu4e7TrBO-PJUL2bnAhDNG51njHsIwVPjI.jpg?auto=webp&s=b6fb5a7a483dd7c72d183285523c02fb8eab5bc3'},
 {name:'Five Nights at Freddy’s: Sister Location',file:'fnaf-sister-location.html',img:'https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/store/software/switch/70010000026223/afb4fd16215e81ad263af66ffa6c3e384092bef0d3742b2f227b35bc60fa189b'},
 {name:'Freddy Fazbear’s Pizzeria Simulator',file:'fnaf-pizzeria-simulator.html',img:'https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/store/software/switch/70010000021207/88dfc4877546db18eeff30dfa891bf7ba1bbfd4544f4304341fbeafbb51c9330'},
 {name:'Ultimate Custom Night',file:'ultimate-custom-night.html',img:'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/871720/header.jpg?t=1568143255'},
 {name:'Tomb of the Mask',file:'tomb-of-the-mask.html',img:'https://noahstutoring.academy/images/182.jpg'},
 {name:'Crazy Cattle 3D',file:'crazy-cattle-3d.html',img:'https://noahstutoring.academy/images/91.jpg'},
 {name:'Wheelie Bike',file:'wheelie-bike.html',img:'https://noahstutoring.academy/images/111.jpg'},
 {name:'Moto X3M',file:'moto-x3m.html',img:'https://www.coolmathgames.com/sites/default/files/MotoX3M_OG-logo.jpg'},
 {name:'Happy Wheels',file:'happy-wheels.html',img:'https://serafimgaming.com/wp-content/themes/yootheme/cache/d3/Happy-Wheels-d3edff8f.png'},
 {name:'Tunnel Rush',file:'tunnel-rush.html',img:'https://play-lh.googleusercontent.com/FokWq1FwEEzo2fI7T4r0kY9pOU1Wjyq0HuCeMZ5GJlQ11cADDml-JE46R8jULudqIBZtP9eNuba4eo54sQBh=w526-h296-rw'},
 {name:'Getaway Shootout',file:'getaway-shootout.html',img:'https://imgs.crazygames.com/getaway-shootout_16x9/20241230044730/getaway-shootout_16x9-cover?metadata=none&quality=100&width=1200&height=630&fit=crop'},
 {name:'Celeste',file:'celeste.html',img:'https://img.itch.zone/aW1nLzEwMjQyNTgucG5n/original/kDcm5O.png'},
 {name:'Pikuniku',file:'pikuniku.html',img:'https://store-images.s-microsoft.com/image/apps.7703.14041044108785223.82419c4d-359a-436a-b07d-12cf7137d8fc.2cb971f9-2b51-4824-b789-52e49f050b4d'},
 {name:'Trees Hate You',file:'trees-hate-you.html',img:'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4171850/e91e9662ad67f01a965b1ea764629bd63cba7c32/capsule_616x353.jpg?t=1787891955'},
 {name:'The Binding of Isaac: Wrath of the Lamb',file:'binding-of-isaac.html',img:'https://fnaffree.io/data/image/game/the-binding-of-isaac-wrath-of-the-lamb/the-binding-of-isaac-wrath-of-the-lamb.png'},
 {name:'8 Ball Pool',file:'8-ball-pool.html',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoHWRRIwQP2Rsa9A0S2rk946Qc4krjt0ul5LaZ3poYyXDpJcH-eRxBLvk&s=10'},
 {name:'60 Seconds',file:'60-seconds.html',img:'https://upload.wikimedia.org/wikipedia/commons/6/6b/60_Seconds%21.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original'},
 {name:'Trombone Champ',file:'trombone-champ.html',img:'https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_switch_download_software_1/2x1_NSwitchDS_TromboneChamp.jpg'},
 {name:'NoomiClone',file:'noomi-clone.html',img:'https://play-lh.googleusercontent.com/VtZsSr-cpNpy5wQRxFSv5B7zQgx4MutD-vCEEZSshZh3glxRK3kpf1VHuGNkl1E0bEQ=w3840-h2160-rw'},
 {name:'Crashout Crew',file:'crashout-crew.html',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP599APaJX8VzVHdE0hVgYVd-umyrUtLjDYWxGEwcenjAAWBr3Bb-xrug&s=10'},
 {name:'People Playground',file:'people-playground.html',img:'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1118200/capsule_616x353.jpg?t=1776802758'},
];
window.BW_GAMES=games;

const THEMES=['pink','purple','blue','green','orange','mono'];
function applyTheme(theme){
  const selected=THEMES.includes(theme)?theme:'pink';
  document.documentElement.dataset.theme=selected;
  localStorage.setItem('bw_theme',selected);
  document.querySelectorAll('[data-theme-choice]').forEach(btn=>btn.classList.toggle('selected',btn.dataset.themeChoice===selected));
}
function setupThemes(){
  const saved=localStorage.getItem('bw_theme')||'pink';
  applyTheme(saved);
  document.querySelectorAll('[data-theme-choice]').forEach(btn=>btn.addEventListener('click',()=>applyTheme(btn.dataset.themeChoice)));
}
function fallingBalls(){
  if(document.querySelector('.falling-balls')) return;
  const layer=document.createElement('div'); layer.className='falling-balls'; layer.setAttribute('aria-hidden','true');
  const count=window.innerWidth<760?17:28;
  for(let i=0;i<count;i++){
    const ball=document.createElement('span'); ball.className='falling-ball';
    const size=7+Math.random()*22, x=Math.random()*100, duration=12+Math.random()*13, delay=-(Math.random()*duration), opacity=.18+Math.random()*.45, blur=Math.random()<.3?1.2:0;
    const driftA=(Math.random()*90-45).toFixed(1)+'px', driftB=(Math.random()*120-60).toFixed(1)+'px', driftC=(Math.random()*90-45).toFixed(1)+'px', driftD=(Math.random()*140-70).toFixed(1)+'px';
    ball.style.cssText=`--size:${size.toFixed(1)};--x:${x.toFixed(2)};--duration:${duration.toFixed(2)}s;--delay:${delay.toFixed(2)}s;--opacity:${opacity.toFixed(2)};--blur:${blur};--drift-a:${driftA};--drift-b:${driftB};--drift-c:${driftC};--drift-d:${driftD};`;
    layer.appendChild(ball);
  }
  document.body.prepend(layer);
}
function esc(s){return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]))}
function gameUrl(file){return 'play/'+file.replace(/\.html?$/,'')+'.html'}
function randomGame(){return games[Math.floor(Math.random()*games.length)]}
function navigateGame(file){location.href=gameUrl(file)}
let bwGlobalStats = null;
let bwGlobalStatsConnected = false;
let bwPopularFile = null;
let bwCurrentGamesList = games;
function slugToFile(slug){return String(slug||'').toLowerCase().replace(/[^a-z0-9-]/g,'')+'.html'}
function getPopularGameToday(){
  if(bwPopularFile){const found=games.find(g=>g.file===bwPopularFile);if(found)return found;}
  return games.find(g=>g.file==='skate-3.html')||games[0];
}
function updateGlobalStats(payload){
  if(!payload||typeof payload!=='object')return;
  const wasConnected=bwGlobalStatsConnected;
  const oldPopularFile=bwPopularFile;
  bwGlobalStats=payload;bwGlobalStatsConnected=true;
  if(Object.prototype.hasOwnProperty.call(payload,'popularSlug')){
    const remoteSlug=payload.popularSlug?slugToFile(payload.popularSlug):null;
    bwPopularFile=remoteSlug&&games.some(g=>g.file===remoteSlug)?remoteSlug:null;
  }
  const active=document.getElementById('bwCurrentUsers');
  const peak=document.getElementById('bwPeakUsers');
  const total=document.getElementById('bwDailyVisitors');
  const status=document.getElementById('bwStatsStatus');
  const day=document.getElementById('bwStatsDate');
  if(active)active.textContent=String(Number(payload.currentUsers)||0);
  if(peak)peak.textContent=String(Number(payload.peakToday)||0);
  if(total)total.textContent=String(Number(payload.totalToday)||0);
  if(status)status.textContent='LIVE GLOBAL STATS';
  if(day){
    const m=String(payload.day||'').match(/^(\d{4})-(\d{2})-(\d{2})$/);
    const formatted=m?new Date(Number(m[1]),Number(m[2])-1,Number(m[3])).toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'}):'Today';
    day.textContent=`Same UK day · ${formatted} · resets at midnight`;
  }
  const grid=document.getElementById('gameGrid');
  if(grid&&(!wasConnected||oldPopularFile!==bwPopularFile))renderGames(bwCurrentGamesList,grid);
}
function renderGames(list,target){
  if(!target)return;
  const randomCard={name:'Random',random:true,img:base+'assets/brainworks-logo.png'};
  const popularGame=getPopularGameToday();
  const popularCard={...popularGame,popular:true};
  const shown=[randomCard,popularCard,...list.filter(g=>g.file!==popularCard.file)];
  target.innerHTML=shown.map((g,i)=>{
    const initials=g.name.split(/\s+/).map(x=>x[0]).join('').slice(0,3).toUpperCase();
    const href=g.random?'#random':gameUrl(g.file);
    const cardClass=[g.random?'random-card':'',g.popular?'popular-card':''].filter(Boolean).join(' ');
    const popularLabel=(bwGlobalStatsConnected&&bwPopularFile)?'Popular':(bwGlobalStatsConnected?'Waiting for plays':'Popular loading');
    const marker=g.random?'<div class="random-mark">R</div>':g.popular?`<div class="popular-mark"><span aria-hidden="true">🔥</span> ${popularLabel}</div>`:'';
    const playLabel=g.random?'Random':g.popular?(bwGlobalStatsConnected&&bwPopularFile?'Play Popular':'Featured'):'Play';
    const ariaLabel=g.random?'Choose a random game':g.popular?((bwGlobalStatsConnected&&bwPopularFile)?'Play today’s globally most played game: ':'Featured game while global stats load: ')+esc(g.name):'Play '+esc(g.name);
    return `<article class="game-card ${cardClass}" style="animation-delay:${i*35}ms" data-random="${g.random?'1':'0'}"><a href="${href}" class="game-thumb-link" aria-label="${ariaLabel}"><div class="game-thumb">${g.img?`<img class="game-thumb-img" src="${esc(g.img)}" alt="" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='grid'"><div class="thumb-fallback">${esc(initials)}</div>`:`<div class="thumb-initials">${esc(initials)}</div>`}${marker}<div class="thumb-shine"></div></div></a><div class="game-body"><div class="game-name">${esc(g.name)}</div><a class="play-btn" href="${href}">${playLabel}</a></div></article>`;
  }).join('');
  bindCardEffects(target);
  // Rebind the Random card whenever global Popular updates rerender the grid.
  target.querySelectorAll('.random-card a').forEach(a=>{
    if(a.dataset.randomBound==='1')return;
    a.dataset.randomBound='1';
    a.addEventListener('click',e=>{e.preventDefault();const g=randomGame();navigateGame(g.file);});
  });
}
function bindCardEffects(target){
  target.querySelectorAll('.game-card').forEach(card=>{
    const thumb=card.querySelector('.game-thumb');
    const img=card.querySelector('.game-thumb-img');
    const reset=()=>{
      card.style.setProperty('--card-rx','0deg'); card.style.setProperty('--card-ry','0deg');
      if(img){img.style.setProperty('--tilt-x','0deg');img.style.setProperty('--tilt-y','0deg');}
      if(thumb){thumb.style.setProperty('--mx','50%');thumb.style.setProperty('--my','50%');}
    };
    if(thumb){
      thumb.addEventListener('pointermove',e=>{
        const r=thumb.getBoundingClientRect(), nx=(e.clientX-r.left)/r.width, ny=(e.clientY-r.top)/r.height;
        const x=Math.max(-1,Math.min(1,(nx-.5)*2)), y=Math.max(-1,Math.min(1,(ny-.5)*2));
        card.style.setProperty('--card-rx',(x*1.2).toFixed(2)+'deg');
        card.style.setProperty('--card-ry',(-y*1.0).toFixed(2)+'deg');
        thumb.style.setProperty('--mx',(nx*100).toFixed(1)+'%'); thumb.style.setProperty('--my',(ny*100).toFixed(1)+'%');
        if(img){img.style.setProperty('--tilt-x',(x*7).toFixed(2)+'deg');img.style.setProperty('--tilt-y',(-y*5).toFixed(2)+'deg');}
      });
      thumb.addEventListener('pointerleave',reset);
    }
  });
}
function setupGames(){
  const grid=document.getElementById('gameGrid'),empty=document.getElementById('emptyState'),input=document.getElementById('searchInput');
  if(!grid)return;
  bwCurrentGamesList=games;
  renderGames(games,grid);
  const bindRandom=()=>grid.querySelectorAll('.random-card a').forEach(a=>{if(a.dataset.randomBound==='1')return;a.dataset.randomBound='1';a.addEventListener('click',e=>{e.preventDefault();const g=randomGame();navigateGame(g.file);});});
  bindRandom();
  if(input)input.addEventListener('input',()=>{const q=input.value.trim().toLowerCase();const filtered=games.filter(g=>g.name.toLowerCase().includes(q));if(!q){location.reload();return;}bwCurrentGamesList=filtered;renderGames(filtered,grid);bindRandom();if(empty)empty.hidden=filtered.length>0});
}
function setupHome(){
  const form=document.getElementById('homeSearch'),input=document.getElementById('homeInput'),results=document.getElementById('searchResults');
  const tag=document.getElementById('homeTagline');
  if(tag){const msgs=['hi teach','hey its me','working your brain'];tag.textContent=msgs[Math.floor(Math.random()*msgs.length)];}
  if(!form||!input)return;
  const update=()=>{const q=input.value.trim().toLowerCase();if(!q){results.hidden=true;results.innerHTML='';return}const m=games.filter(g=>g.name.toLowerCase().includes(q)).slice(0,7);results.innerHTML=m.length?m.map(g=>`<a class="quick-result" href="${gameUrl(g.file)}"><span>${esc(g.name)}</span><small>PLAY →</small></a>`).join(''):`<div class="quick-result"><span>No g@m3s found</span><small>Try another search</small></div>`;results.hidden=false};
  input.addEventListener('input',update); form.addEventListener('submit',e=>{e.preventDefault();const q=input.value.trim().toLowerCase();const m=games.find(g=>g.name.toLowerCase().includes(q));if(m)navigateGame(m.file)});
}
function ensureFaviconLink(){
  let link=document.getElementById('siteFavicon')||document.querySelector('link[rel~="icon"]');
  if(!link){link=document.createElement('link');link.id='siteFavicon';link.rel='icon';document.head.appendChild(link);} else link.id='siteFavicon';
  return link;
}
function applySettings(){
  const title=localStorage.getItem('bw_title'); let icon=localStorage.getItem('bw_icon');
  const legacyYT='https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png';
  if(icon===legacyYT){icon='assets/youtube-favicon.svg';localStorage.setItem('bw_icon',icon);}
  if(title)document.title=title;
  const link=ensureFaviconLink();
  let href=icon||'assets/brainworks-logo.png';
  if(!/^(https?:|data:|blob:)/i.test(href)){href=base+href.replace(/^\.\//,'');}
  link.href=href; link.type=href.endsWith('.svg')?'image/svg+xml':'image/png';
}
function selectPreset(url,name,status){localStorage.setItem('bw_icon',url);applySettings();document.querySelectorAll('[data-tab-icon]').forEach(btn=>btn.classList.toggle('selected',btn.dataset.tabIcon===url));if(status)status.textContent=`${name} icon selected.`;}
function setupSettings(){
  const title=document.getElementById('tabTitle'),icon=document.getElementById('tabIcon'),save=document.getElementById('saveSettings'),reset=document.getElementById('resetSettings'),status=document.getElementById('settingsStatus'); if(!save)return;
  title.value=localStorage.getItem('bw_title')||'BrainWorks';
  document.querySelectorAll('[data-tab-icon]').forEach(btn=>{btn.classList.toggle('selected',btn.dataset.tabIcon===localStorage.getItem('bw_icon'));btn.addEventListener('click',()=>selectPreset(btn.dataset.tabIcon,btn.dataset.tabName,status));});
  save.addEventListener('click',()=>{localStorage.setItem('bw_title',title.value.trim()||'BrainWorks');const file=icon&&icon.files&&icon.files[0];if(file){const r=new FileReader();r.onload=()=>{localStorage.setItem('bw_icon',r.result);applySettings();status.textContent='Saved.'};r.readAsDataURL(file);}else{applySettings();status.textContent='Saved.';}});
  if(reset)reset.addEventListener('click',()=>{localStorage.removeItem('bw_title');localStorage.removeItem('bw_icon');title.value='BrainWorks';if(icon)icon.value='';applySettings();document.querySelectorAll('[data-tab-icon]').forEach(btn=>btn.classList.remove('selected'));status.textContent='Reset.';});
}

function randomId(){try{if(crypto&&crypto.randomUUID)return crypto.randomUUID()}catch{}return 'bw-'+Date.now().toString(36)+'-'+Math.random().toString(36).slice(2)+'-'+Math.random().toString(36).slice(2)}
function getTrackIds(){
  let visitorId,sessionId;
  try{visitorId=localStorage.getItem('bwx-global-visitor-id');if(!visitorId){visitorId=randomId();localStorage.setItem('bwx-global-visitor-id',visitorId)}}catch{visitorId=randomId()}
  try{sessionId=sessionStorage.getItem('bwx-global-session-id');if(!sessionId){sessionId=randomId();sessionStorage.setItem('bwx-global-session-id',sessionId)}}catch{sessionId=randomId()}
  return {visitorId,sessionId};
}
const BW_COUNTER_NAMESPACE='brainworxgames.github.io';
const BW_COUNTER_API='https://counterapi.com/api';
let bwPopularRequestAt=0;
let bwPopularPromise=null;
function ukDayKey(){
  const parts=new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/London',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date());
  const part=Object.fromEntries(parts.filter(p=>p.type!=='literal').map(p=>[p.type,p.value]));
  return `${part.year}-${part.month}-${part.day}`;
}
function bwCounterURL(action,key,params={},readOnly=false){
  const url=new URL(`${BW_COUNTER_API}/${encodeURIComponent(BW_COUNTER_NAMESPACE)}/${encodeURIComponent(action)}/${encodeURIComponent(key)}`);
  if(readOnly)url.searchParams.set('readOnly','true');
  for(const [k,v] of Object.entries(params||{}))if(v!==undefined&&v!==null)url.searchParams.set(k,String(v));
  // Bust intermediary caches; CounterAPI ignores unrelated query fields.
  url.searchParams.set('_',`${Date.now()}-${Math.random().toString(36).slice(2,7)}`);
  return url.toString();
}
async function bwCounterHit(action,key,params={}){
  const response=await fetch(bwCounterURL(action,key,params,false),{method:'GET',cache:'no-store',mode:'cors',keepalive:true});
  if(!response.ok)throw new Error(`CounterAPI write failed (${response.status})`);
  return response.json().catch(()=>({value:0}));
}
async function bwCounterRead(action,key,params={}){
  const response=await fetch(bwCounterURL(action,key,params,true),{method:'GET',cache:'no-store',mode:'cors'});
  // An unread counter has no traffic yet; treat it as zero for ranking.
  if(response.status===404)return 0;
  if(!response.ok)throw new Error(`CounterAPI read failed (${response.status})`);
  const body=await response.json();
  const value=Number(body&&body.value);
  return Number.isFinite(value)?value:0;
}
function bwGetIds(){
  if(typeof getTrackIds==='function')return getTrackIds();
  return {visitorId:randomId(),sessionId:randomId()};
}
async function bwVisitOnceToday(day,visitorId){
  const key=`bwx-counterapi-visit-${day}`;
  try{if(localStorage.getItem(key)===visitorId)return;}catch{}
  await bwCounterHit('view',`day-${day}`,{userId:visitorId});
  try{localStorage.setItem(key,visitorId);}catch{}
}
async function bwRaisePeak(day,active,visitorId){
  const key=`day-${day}`;
  let peak=await bwCounterRead('peak',key);
  if(active<=peak)return peak;
  // Recheck after a short jitter so concurrent browsers are less likely to
  // raise the same maximum simultaneously. CounterAPI is public and doesn't
  // provide an atomic max operation, so this is a best-effort peak tracker.
  await new Promise(resolve=>setTimeout(resolve,250+Math.random()*650));
  peak=await bwCounterRead('peak',key);
  if(active<=peak)return peak;
  const difference=Math.min(250,Math.max(0,Math.ceil(active-peak)));
  if(difference){
    await Promise.all(Array.from({length:difference},()=>bwCounterHit('peak',key,{userId:visitorId})));
    peak=await bwCounterRead('peak',key);
  }
  return peak;
}
async function bwFindPopular(day){
  let cachedAt=0,cached=null;
  try{cachedAt=Number(sessionStorage.getItem(`bwx-popular-time-${day}`)||0);cached=sessionStorage.getItem(`bwx-popular-slug-${day}`);}catch{}
  if(cachedAt&&Date.now()-cachedAt<60000)return cached||null;
  if(bwPopularPromise)return bwPopularPromise;
  bwPopularPromise=(async()=>{
    let best=null,bestCount=0;
    // Small batches avoid firing dozens of requests at once on the games page.
    for(let i=0;i<games.length;i+=8){
      const batch=games.slice(i,i+8);
      const values=await Promise.all(batch.map(async game=>{
        const slug=game.file.replace(/\.html?$/i,'');
        try{return {slug,count:await bwCounterRead('play',`${day}-${slug}`)};}catch{return {slug,count:0};}
      }));
      for(const item of values){if(item.count>bestCount){bestCount=item.count;best=item.slug;}}
    }
    try{sessionStorage.setItem(`bwx-popular-time-${day}`,String(Date.now()));sessionStorage.setItem(`bwx-popular-slug-${day}`,best||'');}catch{}
    return best;
  })().finally(()=>{bwPopularPromise=null;});
  return bwPopularPromise;
}
function bwSetPopular(slug){
  const remoteSlug=slug?slugToFile(slug):null;
  const next=remoteSlug&&games.some(g=>g.file===remoteSlug)?remoteSlug:null;
  if(bwPopularFile===next&&bwGlobalStatsConnected)return;
  bwPopularFile=next;
  bwGlobalStatsConnected=true;
  const grid=document.getElementById('gameGrid');
  if(grid)renderGames(bwCurrentGamesList,grid);
}
function setupLiveStats(){
  const activeEl=document.getElementById('bwCurrentUsers');
  const peakEl=document.getElementById('bwPeakUsers');
  const totalEl=document.getElementById('bwDailyVisitors');
  const statusEl=document.getElementById('bwStatsStatus');
  const dateEl=document.getElementById('bwStatsDate');
  const ids=bwGetIds();
  const gameMatch=location.pathname.match(/\/play\/([^/]+\.html?)$/i);
  const currentGame=gameMatch?decodeURIComponent(gameMatch[1]).replace(/\.html?$/i,'').toLowerCase():null;
  let pageWasTracked=false;
  let lastDay='';
  let inFlight=false;
  let firstSuccess=false,failures=0;
  let lastTotalRefresh=0,lastPeakRefresh=0,lastObservedActive=-1;
  let totalCache=0,peakCache=0;
  const setStatus=text=>{if(statusEl)statusEl.textContent=text;};
  async function sync(){
    if(inFlight)return;
    inFlight=true;
    try{
      const day=ukDayKey();
      const newDay=day!==lastDay;
      if(newDay){
        await bwVisitOnceToday(day,ids.visitorId);
        lastDay=day;
        lastTotalRefresh=0;lastPeakRefresh=0;lastObservedActive=-1;totalCache=0;peakCache=0;
        bwPopularRequestAt=0;
      }
      if(currentGame&&!pageWasTracked){
        await bwCounterHit('play',`${day}-${currentGame}`,{userId:ids.visitorId});
        pageWasTracked=true;
      }
      await bwCounterHit('presence','all',{userId:ids.visitorId});
      const active=await bwCounterRead('presence','all',{timeline:'2m',unique:'true'});
      const now=Date.now();
      // The live count is polled on each heartbeat; the daily total and peak
      // are read less often to keep the no-signup public API well within limits.
      const tasks=[];
      if(!lastTotalRefresh||now-lastTotalRefresh>60000){
        tasks.push(bwCounterRead('view',`day-${day}`,{unique:'true'}).then(value=>{totalCache=value;lastTotalRefresh=Date.now();}));
      }
      if(newDay||!lastPeakRefresh||now-lastPeakRefresh>90000||active>lastObservedActive){
        tasks.push(bwRaisePeak(day,active,ids.visitorId).then(value=>{peakCache=value;lastPeakRefresh=Date.now();}));
      }
      await Promise.all(tasks);
      lastObservedActive=active;
      updateGlobalStats({currentUsers:active,peakToday:peakCache,totalToday:totalCache,day});
      firstSuccess=true;failures=0;
      setStatus('LIVE GLOBAL STATS');
      if(dateEl){
        const [year,month,date]=day.split('-').map(Number);
        dateEl.textContent=`Same UK day · ${new Date(year,month-1,date).toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'})} · resets at midnight`;
      }
      const grid=document.getElementById('gameGrid');
      if(grid&&(Date.now()-bwPopularRequestAt>60000||!bwPopularRequestAt)){
        bwPopularRequestAt=Date.now();
        const popular=await bwFindPopular(day);
        bwSetPopular(popular);
      }
    }catch(error){
      console.warn('BrainWorx global counter unavailable:',error);
      failures++;
      if(failures>=2){setStatus('COUNTER SERVICE OFFLINE');if(dateEl)dateEl.textContent='The shared counter service did not respond. It will retry automatically.';}
      else if(!firstSuccess){setStatus('CONNECTING');if(dateEl)dateEl.textContent='Connecting to the shared global counter…';}
      else setStatus('RECONNECTING');
    }finally{inFlight=false;}
  }
  // Refresh presence every 30 seconds; inactive visitors age out after two minutes.
  sync();
  const heartbeat=setInterval(sync,30000);
  addEventListener('pageshow',()=>sync());
  addEventListener('pagehide',()=>clearInterval(heartbeat),{once:true});
}

function setupBrowserNav(){
  let nav=document.querySelector('.browser-nav-wrap');
  const isPlay=location.pathname.includes('/play/');
  const prefix=isPlay?'../':'';
  if(!nav){
    const current=location.pathname.endsWith('/settings.html')?'settings':location.pathname.endsWith('/classes.html')?'games':'home';
    nav=document.createElement('div'); nav.className='browser-nav-wrap'; nav.innerHTML=`<div class="browser-nav"><div class="browser-window-dots" aria-hidden="true"><i></i><i></i><i></i></div><nav class="browser-tabs" aria-label="Site tabs"><a class="browser-tab ${current==='home'?'active':''}" data-nav-tab="home" href="${prefix}index.html"><span class="tab-favicon"><img src="${prefix}assets/brainworks-logo.png" alt=""></span><span>BrainWorks</span></a><a class="browser-tab ${current==='games'?'active':''}" data-nav-tab="games" href="${prefix}classes.html"><span class="tab-favicon"><span class="mini-play">▶</span></span><span>g@m3s</span></a><a class="browser-tab ${current==='settings'?'active':''}" data-nav-tab="settings" href="${prefix}settings.html"><span class="tab-favicon">⚙</span><span>Settings</span></a></nav><div class="browser-address"><span class="address-lock">⌁</span><span class="address-text">brainworks</span><span class="address-dot">•</span></div></div>`;
    document.body.prepend(nav);
  }
  let transition=document.querySelector('.tab-transition');
  if(!transition){
    transition=document.createElement('div'); transition.className='tab-transition'; transition.innerHTML=`<div class="transition-orb"></div><img src="${prefix}assets/brainworks-logo.png" alt="BrainWorks"><div class="transition-name">BrainWorks</div>`; document.body.appendChild(transition);
  }
  nav.querySelectorAll('.browser-tab').forEach(tab=>{
    if(tab.dataset.bound==='1')return; tab.dataset.bound='1';
    tab.addEventListener('click',e=>{
      if(e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;
      const target=new URL(tab.href,location.href); if(target.href===location.href)return;
      e.preventDefault(); transition.classList.add('show'); setTimeout(()=>location.href=target.href,430);
    });
  });
}

function cursor(){if(matchMedia('(pointer:fine)').matches){document.body.classList.add('no-cursor');const dot=document.createElement('div'),ring=document.createElement('div');dot.className='cursor-dot';ring.className='cursor-ring';document.body.append(dot,ring);let x=-100,y=-100,rx=-100,ry=-100;addEventListener('mousemove',e=>{x=e.clientX;y=e.clientY;dot.style.left=x+'px';dot.style.top=y+'px'});function loop(){rx+=(x-rx)*.18;ry+=(y-ry)*.18;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(loop)}loop();addEventListener('mousedown',()=>{ring.classList.remove('click');void ring.offsetWidth;ring.classList.add('click')});}}
applyTheme(localStorage.getItem('bw_theme')||'pink');applySettings();fallingBalls();setupThemes();setupBrowserNav();setupGames();setupHome();setupSettings();setupLiveStats();cursor();
})();
