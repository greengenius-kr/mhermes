window.MH_LAND="M1380.4,-100.0L1380.4,760.0L892.8,760.0L888.3,754.7L876.9,747.9L859.8,744.6L836.9,744.6L831.2,727.7L802.7,724.3L785.5,731.1L768.4,731.1L739.8,724.3L688.4,707.4L619.9,653.4L614.2,633.1L642.7,585.8L665.6,565.6L659.9,552.1L579.9,541.9L539.9,592.6L499.9,562.2L517.1,525.0L539.9,491.3L522.8,471.0L494.2,454.1L471.4,440.6L471.4,403.5L465.6,376.4L482.8,349.4L528.5,335.9L539.9,329.2L545.6,312.3L522.8,305.5L517.1,322.4L488.5,325.8L477.1,305.5L477.1,268.4L482.8,221.1L477.1,204.2L459.9,173.8L448.5,150.2L431.4,123.2L414.2,106.3L414.2,79.3L408.5,38.7L391.4,-25.4L381.1,-100.0L585.6,-100.0L585.6,-96.4L574.2,-72.7L574.2,-25.4L619.9,15.1L682.7,42.1L722.7,45.5L694.1,11.7L602.7,-52.4L618.1,-100.0ZM328.6,126.5L317.1,126.5L305.7,123.2L288.6,106.3L277.1,99.5L271.4,99.5L265.7,106.3L260.0,113.0L174.3,116.4L145.8,102.9L111.5,59.0L162.9,45.5L174.3,38.7L185.7,15.1L185.7,5.0L174.3,1.6L168.6,-11.9L120.6,-100.0L351.3,-100.0L357.1,-86.2L362.8,-72.7L368.5,1.6L362.8,18.5L368.5,28.6L380.0,48.9L385.7,59.0L362.8,69.1L345.7,113.0L328.6,126.5ZM419.9,292.0L425.7,298.8L431.4,308.9L437.1,315.7L442.8,329.2L448.5,339.3L442.8,342.7L425.7,352.8L419.9,359.6L391.4,366.3L380.0,366.3L362.8,373.1L328.6,390.0L305.7,406.8L294.3,427.1L225.7,477.8L214.3,474.4L197.2,477.8L191.5,474.4L185.7,450.7L174.3,444.0L168.6,450.7L162.9,450.7L157.2,447.4L162.9,440.6L157.2,430.5L145.8,430.5L140.0,437.2L134.3,444.0L122.9,440.6L105.8,433.9L111.5,423.7L111.5,413.6L94.4,396.7L88.6,386.6L94.4,373.1L105.8,369.7L117.2,376.4L191.5,325.8L242.9,319.0L277.1,322.4L305.7,305.5L317.1,258.2L340.0,251.5L357.1,268.4L368.5,271.8L380.0,278.5L385.7,281.9L397.1,281.9L402.8,285.3L419.9,292.0ZM88.6,-69.3L111.5,-55.8L122.9,-38.9L128.6,-18.7L111.5,5.0L77.2,5.0L-31.3,-79.5L-14.2,-89.6L-10.7,-100.0L59.8,-100.0L65.8,-89.6L88.6,-69.3ZM251.0,760.0L254.3,758.1L277.2,760.0ZM384.5,760.0L380.0,754.7L385.7,751.3L410.2,760.0L415.7,760.0L431.4,744.6L437.1,744.6L437.1,760.0Z";
/* M·HERMES Journey — 지도 위 이동 경로 애니메이션 (외부 라이브러리 없음) */
(function(){
  var root=document.getElementById('journey'); if(!root) return;
  var svg=root.querySelector('svg'), stage=root.querySelector('.jr-stage');
  var NS='http://www.w3.org/2000/svg';
  var B={w:126.30,n:37.66},K=2000,C=Math.cos(37.5*Math.PI/180);
  function P(lon,lat){return [(lon-B.w)*K*C,(B.n-lat)*K];}
  function el(tag,attrs,parent){var e=document.createElementNS(NS,tag);for(var k in attrs)e.setAttribute(k,attrs[k]);(parent||svg).appendChild(e);return e;}
  function pathD(pts){return 'M'+pts.map(function(p){var q=P(p[0],p[1]);return q[0].toFixed(1)+','+q[1].toFixed(1);}).join('L');}

  // ---------- 지점 ----------
  var S={
    site:[126.6560,37.4632], jemulpo:[126.6568,37.4669], dohwa:[126.6683,37.4664], juan:[126.6800,37.4648],
    bupyeong:[126.7245,37.4895], songnae:[126.7660,37.4876], bucheon:[126.7830,37.4840], yeokgok:[126.8110,37.4853],
    guro:[126.8819,37.5030], sindorim:[126.8913,37.5088], yeongdeungpo:[126.9070,37.5157], noryangjin:[126.9425,37.5134],
    yongsan:[126.9648,37.5298], seoul:[126.9707,37.5547],
    daerim:[126.8956,37.4930], gurodigital:[126.9013,37.4852], sillim:[126.9296,37.4842], snu:[126.9527,37.4812],
    sadang:[126.9816,37.4766], gyodae:[127.0141,37.4934], gangnam:[127.0276,37.4979],
    icn:[126.4407,37.4602]
  };
  var L1=[S.jemulpo,S.dohwa,S.juan,[126.70,37.475],S.bupyeong,S.songnae,S.bucheon,S.yeokgok,[126.85,37.492],S.guro,S.sindorim,S.yeongdeungpo,S.noryangjin,S.yongsan,S.seoul];
  var L1G=[S.jemulpo,S.dohwa,S.juan,[126.70,37.475],S.bupyeong,S.songnae,S.bucheon,S.yeokgok,[126.85,37.492],S.guro,S.sindorim];
  var L2=[S.sindorim,S.daerim,S.gurodigital,S.sillim,S.snu,S.sadang,[126.998,37.481],S.gyodae,S.gangnam];
  var WALK=[S.site,[126.6555,37.4650],S.jemulpo];
  var CAR=[S.site,[126.660,37.452],[126.655,37.430],[126.645,37.405],[126.625,37.395],[126.590,37.402],[126.540,37.425],[126.495,37.440],[126.462,37.452],S.icn];
  var CAR_ALT1=[S.site,[126.66,37.48],[126.67,37.52],[126.62,37.545],[126.565,37.552],[126.50,37.51],S.icn]; // 영종대교 개념선
  var CAR_ALT2=[S.site,[126.66,37.48],[126.64,37.51],[126.60,37.525],[126.555,37.505],[126.49,37.485],S.icn]; // 제3연륙교 개념선
  var HAN=[[126.75,37.612],[126.80,37.598],[126.84,37.582],[126.87,37.566],[126.895,37.548],[126.915,37.535],[126.935,37.527],[126.958,37.517],[126.98,37.513],[127.0,37.512],[127.015,37.522],[127.04,37.528],[127.07,37.535],[127.13,37.535]];
  var SPOTS=[
    {n:'수봉공원',dx:12,dy:16,p:[126.6630,37.4600],t:'도보 약 15분',d:'단지 옆 언덕 공원 · 산책과 야경'},
    {n:'개항장 · 차이나타운',dx:0,dy:-16,a:'middle',p:[126.6176,37.4757],t:'1호선 3정거장',d:'인천역 앞 근대 거리 · 주말 나들이'},
    {n:'자유공원',dx:12,dy:-6,p:[126.6220,37.4738],t:'1호선 + 도보',d:'한국 최초의 서구식 공원 · 항구 전망'},
    {n:'신포국제시장',dx:12,dy:14,p:[126.6262,37.4712],t:'1호선 2정거장',d:'동인천역 인근 · 닭강정과 먹거리'},
    {n:'상상플랫폼 · 내항',dx:-4,dy:22,a:'end',p:[126.6118,37.4752],t:'1호선 + 도보',d:'옛 곡물창고를 바꾼 복합문화공간'},
    {n:'월미도',dx:-12,dy:-8,a:'end',p:[126.5975,37.4760],t:'차량 약 15분',d:'바다 산책로 · 월미바다열차'},
    {n:'송도 센트럴파크',p:[126.6395,37.3925],t:'차량 약 20분',d:'수로와 잔디광장 · 도심 속 공원'}
  ];

  // ---------- 바탕 ----------
  var defs=el('defs',{});
  defs.innerHTML='<radialGradient id="jrGlow"><stop offset="0" stop-color="#d9bf93" stop-opacity=".9"/><stop offset="1" stop-color="#d9bf93" stop-opacity="0"/></radialGradient>'+
    '<pattern id="jrGrid" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M20 0H0V20" fill="none" stroke="rgba(255,255,255,.035)" stroke-width="1"/></pattern>'+
    '<filter id="jrBlur"><feGaussianBlur stdDeviation="3"/></filter>';
  el('rect',{x:-200,y:-200,width:1800,height:1100,fill:'#07090c'});
  el('rect',{x:-200,y:-200,width:1800,height:1100,fill:'url(#jrGrid)'});
  el('path',{d:window.MH_LAND,fill:'#14171d',stroke:'rgba(217,191,147,.22)','stroke-width':1,'vector-effect':'non-scaling-stroke'});
  el('path',{d:pathD(HAN),fill:'none',stroke:'#0d1622','stroke-width':7,'stroke-linecap':'round','stroke-linejoin':'round'});
  // 노선 (흐린 바탕선)
  el('path',{d:pathD(L1),fill:'none',stroke:'rgba(70,120,210,.28)','stroke-width':2,'vector-effect':'non-scaling-stroke'});
  el('path',{d:pathD(L2),fill:'none',stroke:'rgba(60,180,90,.25)','stroke-width':2,'vector-effect':'non-scaling-stroke'});
  [CAR_ALT1,CAR_ALT2].forEach(function(a){el('path',{d:pathD(a),fill:'none',stroke:'rgba(217,191,147,.16)','stroke-width':1.5,'stroke-dasharray':'4 5','vector-effect':'non-scaling-stroke',class:'jr-alt'});});

  // 라벨 그룹
  var labels=[];
  function label(pt,txt,cls,dx,dy){var q=P(pt[0],pt[1]);var t=el('text',{x:q[0],y:q[1],class:'jr-lb '+(cls||'')});t.textContent=txt;t._dx=dx||10;t._dy=dy||4;t._q=q;labels.push(t);return t;}
  var dots=[];
  function dot(pt,cls){var q=P(pt[0],pt[1]);var c=el('circle',{cx:q[0],cy:q[1],r:3,class:'jr-dot '+(cls||'')});dots.push(c);return c;}
  [['jemulpo','제물포역'],['juan','주안'],['bupyeong','부평'],['guro','구로'],['sindorim','신도림'],['yongsan','용산'],['seoul','서울역'],['sadang','사당'],['gangnam','강남'],['icn','인천국제공항']].forEach(function(a){dot(S[a[0]],'st st-'+a[0]);label(S[a[0]],a[1],'st st-'+a[0]);});
  label([126.70,37.62],'한강','water',0,0); label([126.50,37.36],'서해','water',0,0); label([126.64,37.385],'송도','area',0,0); label([126.47,37.47],'영종도','area',0,0);
  label([126.585,37.418],'인천대교','bridge',0,0);

  // 경로 레이어
  var routeG=el('g',{});
  function mkRoute(pts,cls){var p=el('path',{d:pathD(pts),class:'jr-route '+cls},routeG);p._w=cls==='walk'?2.5:4;var L=p.getTotalLength();p._L=L;p.style.strokeDasharray=L;p.style.strokeDashoffset=L;return p;}
  var R={walk:mkRoute(WALK,'walk'),l1:mkRoute(L1,'l1'),l1g:mkRoute(L1G,'l1'),l2:mkRoute(L2,'l2'),car:mkRoute(CAR,'car')};
  // 걷기는 점선 표현
  // 스팟
  var spotG=el('g',{});
  SPOTS.forEach(function(s,i){var q=P(s.p[0],s.p[1]);var g=el('g',{class:'jr-spot',transform:'translate('+q[0]+','+q[1]+')'},spotG);
    el('circle',{r:10,class:'ring'},g);el('circle',{r:3.5,class:'core'},g);var t=el('text',{x:s.dx,y:s.dy,'text-anchor':s.a||'start',class:'jr-lb spot'},g);t.textContent=s.n;s.g=g;s.t=t;});
  // 단지
  var sq=P(S.site[0],S.site[1]);
  var halo=el('circle',{cx:sq[0],cy:sq[1],r:30,fill:'url(#jrGlow)',class:'jr-halo'});
  var siteDot=el('circle',{cx:sq[0],cy:sq[1],r:5,class:'jr-site'});
  var siteLb=el('text',{x:sq[0],y:sq[1],class:'jr-lb site'});siteLb.textContent='M·HERMES';labels.push(siteLb);siteLb._dx=-14;siteLb._dy=-14;siteLb.setAttribute('text-anchor','end');siteLb._q=sq;
  // 이동 점
  var mover=el('circle',{r:4,class:'jr-mover'}); var moverGlow=el('circle',{r:14,fill:'url(#jrGlow)',opacity:.8});

  // ---------- 카메라 ----------
  var vb=[0,0,1300,660];
  function sw(){var r=svg.getBoundingClientRect();return r.width||stage.clientWidth;}function aspect(){var r=svg.getBoundingClientRect();return (r.width||1)/Math.max(1,r.height||1);}
  function frame(ptsArr,pad){var xs=[],ys=[];ptsArr.forEach(function(p){var q=P(p[0],p[1]);xs.push(q[0]);ys.push(q[1]);});
    var x0=Math.min.apply(0,xs),x1=Math.max.apply(0,xs),y0=Math.min.apply(0,ys),y1=Math.max.apply(0,ys);
    var w=(x1-x0)*(1+pad*2)+20,h=(y1-y0)*(1+pad*2)+20,a=aspect(),f=freeFrac(),af=a*f;
    if(w/h>af)h=w/af;else w=h*af;var W=w/f;
    return [(x0+x1)/2-w/2-(W-w),(y0+y1)/2-h/2,W,h];}
  var panel=root.querySelector('.jr-panel');
  function freeFrac(){var cw=sw();if(!panel||getComputedStyle(panel).position!=='absolute')return 1;
    var r=panel.getBoundingClientRect(),sr=stage.getBoundingClientRect();var occ=r.right-sr.left+30;return Math.max(.4,1-occ/cw);}
  function setVB(v){vb=v;svg.setAttribute('viewBox',v.map(function(n){return n.toFixed(2);}).join(' '));
    var s=v[2]/sw(); // 화면 1px 당 사용자 단위
    for(var rk in R){R[rk].style.strokeWidth=(R[rk]._w*s).toFixed(3);}
    labels.forEach(function(t){t.setAttribute('font-size',(t.classList.contains('site')?15:t.classList.contains('water')||t.classList.contains('area')||t.classList.contains('bridge')?12:12.5)*s);t.setAttribute('x',t._q[0]+t._dx*s);t.setAttribute('y',t._q[1]+t._dy*s);});
    dots.forEach(function(c){c.setAttribute('r',3*s);});
    siteDot.setAttribute('r',5.5*s);halo.setAttribute('r',34*s);mover.setAttribute('r',4.5*s);moverGlow.setAttribute('r',16*s);
    SPOTS.forEach(function(sp){var q=P(sp.p[0],sp.p[1]);sp.g.setAttribute('transform','translate('+q[0]+','+q[1]+') scale('+s+')');sp.t.setAttribute('font-size',12.5);});
  }
  function lerp(a,b,t){return a+(b-a)*t;}
  function lerpVB(a,b,t){return [lerp(a[0],b[0],t),lerp(a[1],b[1],t),lerp(a[2],b[2],t),lerp(a[3],b[3],t)];}
  function ease(t){t=Math.max(0,Math.min(1,t));return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;}

  // ---------- 시나리오 ----------
  var near=function(){return frame([S.site,S.jemulpo],3.2);};
  var TABS={
    seoul:{steps:[
      {d:1500,cam:function(){return [frame([S.site,S.jemulpo,S.dohwa],1.5),frame([S.site,S.jemulpo,S.dohwa],1.5)]}},
      {d:1800,route:'walk',cam:function(){return [frame([S.site,S.jemulpo,S.dohwa],1.5),frame([S.site,S.jemulpo],2.2)]},count:[0,7,'도보','분']},
      {d:4200,route:'l1',cam:function(){return [frame([S.site,S.jemulpo],2.2),frame(L1.concat([S.site]),0.12)]},count:[7,60,'1호선 직결','분 내외']}
    ]},
    gangnam:{steps:[
      {d:1300,cam:function(){return [frame([S.site,S.jemulpo,S.dohwa],1.5),frame([S.site,S.jemulpo,S.dohwa],1.5)]}},
      {d:1600,route:'walk',cam:function(){return [frame([S.site,S.jemulpo,S.dohwa],1.5),frame([S.site,S.jemulpo],2.2)]},count:[0,7,'도보','분']},
      {d:3300,route:'l1g',cam:function(){return [frame([S.site,S.jemulpo],2.2),frame(L1G,0.15)]},count:[7,45,'1호선 급행 → 신도림','분']},
      {d:2600,route:'l2',cam:function(){return [frame(L1G,0.15),frame(L1G.concat(L2,[S.site]),0.1)]},count:[45,70,'2호선 환승 → 강남','분 내외']}
    ]},
    airport:{steps:[
      {d:1300,cam:function(){return [near(),near()]}},
      {d:4600,route:'car',cam:function(){return [near(),frame(CAR.concat(CAR_ALT1),0.1)]},count:[0,40,'차량 · 인천대교 경유','분 내외'],alt:true}
    ]},
    walk:{steps:[
      {d:3200,cam:function(){var c=SPOTS.slice(0,6).map(function(s){return s.p}).concat([S.site]);return [frame([S.site,S.jemulpo],3),frame(c,0.25)]},spots:6},
      {d:1800,cam:function(){var c=SPOTS.slice(0,6).map(function(s){return s.p}).concat([S.site]);return [frame(c,0.25),frame(c,0.25)]}},
      {d:2600,cam:function(){var c=SPOTS.slice(0,6).map(function(s){return s.p}).concat([S.site]);return [frame(c,0.25),frame(SPOTS.map(function(s){return s.p}).concat([S.site]),0.15)]},spots:7}
    ]}
  };
  var ORDER=['seoul','gangnam','airport','walk'];
  var info=root.querySelectorAll('.jr-info'), tabs=root.querySelectorAll('.jr-tab'), cnt=root.querySelector('.jr-count b'), cntU=root.querySelector('.jr-count small'), cntL=root.querySelector('.jr-count span');
  var cur=null, t0=0, raf=0, auto=true, visible=false, holdUntil=0;
  var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;

  function resetRoutes(){for(var k in R){R[k].style.strokeDashoffset=R[k]._L;R[k].classList.remove('on');}
    mover.style.opacity=0;moverGlow.style.opacity=0;svg.classList.remove('alt-on','spots-on');SPOTS.forEach(function(s){s.g.classList.remove('on');});
    svg.querySelectorAll('.st').forEach(function(e){e.classList.remove('hi');});}
  function hi(keys){keys.forEach(function(k){svg.querySelectorAll('.st-'+k).forEach(function(e){e.classList.add('hi');});});}
  function select(key,user){
    if(user){auto=false;}
    cur=key;tabs.forEach(function(b){b.classList.toggle('on',b.dataset.k===key);b.setAttribute('aria-selected',b.dataset.k===key);});
    info.forEach(function(p){p.hidden=p.dataset.k!==key;});
    resetRoutes(); root.querySelector('.jr-count').style.opacity=key==='walk'?0:1;
    hi(key==='seoul'?['jemulpo','seoul','yongsan','guro','bupyeong','juan']:key==='gangnam'?['jemulpo','sindorim','gangnam','sadang','guro']:key==='airport'?['icn']:[]);
    cnt.textContent='0';cntU.textContent='분';cntL.textContent='';
    t0=performance.now();
    if(reduce){finish();return;}
    cancelAnimationFrame(raf);raf=requestAnimationFrame(tick);
  }
  function finish(){var sc=TABS[cur],last=sc.steps[sc.steps.length-1];sc.steps.forEach(function(st){if(st.route){R[st.route].style.strokeDashoffset=0;}if(st.alt)svg.classList.add('alt-on');if(st.spots)SPOTS.slice(0,st.spots).forEach(function(s){s.g.classList.add('on');});});
    setVB(last.cam()[1]);if(last.count){cnt.textContent=(cur==='gangnam'?'65~75':last.count[1]);cntU.textContent=last.count[3];cntL.textContent=last.count[2];}}
  function tick(now){
    var sc=TABS[cur],el_=now-t0,acc=0,done=true;
    for(var i=0;i<sc.steps.length;i++){var st=sc.steps[i];
      if(el_<acc+st.d){done=false;var t=(el_-acc)/st.d,e=ease(t),cam=st.cam();setVB(lerpVB(cam[0],cam[1],e));
        if(st.route){var p=R[st.route];p.style.strokeDashoffset=p._L*(1-e);var pt=p.getPointAtLength(p._L*e);mover.setAttribute('cx',pt.x);mover.setAttribute('cy',pt.y);moverGlow.setAttribute('cx',pt.x);moverGlow.setAttribute('cy',pt.y);mover.style.opacity=1;moverGlow.style.opacity=.8;}
        if(st.count){var v=Math.round(lerp(st.count[0],st.count[1],e));cnt.textContent=(cur==='gangnam'&&i===sc.steps.length-1&&t>.98)?'65~75':v;cntU.textContent=st.count[3];cntL.textContent=st.count[2];}
        if(st.alt&&t>.6)svg.classList.add('alt-on');
        if(st.spots){var n=Math.ceil(st.spots*Math.min(1,t*1.4));SPOTS.slice(0,n).forEach(function(s){s.g.classList.add('on');});}
        break;}
      acc+=st.d; if(st.route){R[st.route].style.strokeDashoffset=0;} if(st.spots)SPOTS.slice(0,st.spots).forEach(function(s){s.g.classList.add('on');});
    }
    if(done){finish();mover.style.opacity=0;moverGlow.style.opacity=0;
      if(auto&&visible){if(!holdUntil)holdUntil=now+3800;if(now>holdUntil){holdUntil=0;select(ORDER[(ORDER.indexOf(cur)+1)%ORDER.length]);return;}}
      raf=requestAnimationFrame(tick);return;}
    raf=requestAnimationFrame(tick);
  }
  tabs.forEach(function(b){b.addEventListener('click',function(){holdUntil=0;select(b.dataset.k,true);});});
  root.querySelector('.jr-replay').addEventListener('click',function(){holdUntil=0;select(cur,true);});
  setVB(near());
  if('IntersectionObserver' in window){new IntersectionObserver(function(es){es.forEach(function(e){visible=e.isIntersecting;if(visible&&!cur)select('seoul');});},{threshold:.35}).observe(stage);}
  else select('seoul');
  var lastW=window.innerWidth;window.addEventListener('resize',function(){if(Math.abs(window.innerWidth-lastW)<40)return;lastW=window.innerWidth;if(cur){holdUntil=0;select(cur);}});
})();
