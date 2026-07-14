/* ===== Tulip landing — shared markup + behavior for all variants ===== */
(function () {
  var CHECKOUT = "https://osone.lemonsqueezy.com/checkout/buy/0c71ee6b-5775-45cd-a6ef-e9c5b8e52d09?checkout%5Bdiscount_code%5D=EARLYBIRD";
  // Stable download URL (clobbered every release; the appcast uses the versioned name).
  var DOWNLOAD = "https://github.com/obaid/tulip-releases/releases/download/downloads/Tulip.dmg";
  var VARIANT = document.body.getAttribute("data-variant") || "launch";
  var YEAR = new Date().getFullYear();

  var LOGO = '<svg viewBox="0 0 1024 1024" aria-hidden="true"><path d="M512 568C602 562 630 524 626 462C623 418 634 356 598 330C566 302 548 368 512 388C476 368 458 302 426 330C390 356 401 418 398 462C394 524 422 562 512 568Z" fill="#fff"/><rect x="424" y="600" width="44" height="144" rx="22" fill="#fff"/><rect x="488" y="582" width="48" height="196" rx="24" fill="#fff"/><rect x="556" y="620" width="44" height="106" rx="22" fill="#fff"/></svg>';

  function ico(p){return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">'+p+'</svg>';}
  var shield=ico('<path d="M12 2l7 4v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"/>'),
      bolt=ico('<path d="M13 2L3 14h7l-1 8 10-12h-7z"/>'),
      check=ico('<path d="M20 6L9 17l-5-5"/>');

  var HERO = ''
    + '<span class="badge"><span class="d"></span>On-device · macOS · one-time</span>'
    + '<h1><span class="word l0">Speak.</span><br><span class="word l1">It&nbsp;types.</span> <em class="l2">Anywhere.</em></h1>'
    + '<p class="sub">Hold a key and talk — Tulip drops your words right where your cursor is, in any app. No cloud, no latency. Nothing ever leaves your Mac.</p>'
    + '<div class="ctas"><a class="btn btn-primary" data-download href="#">Download for Mac</a>'
    + '<a class="btn btn-ghost" href="#pricing">Pricing — $29</a></div>'
    + '<div class="dl-note">Free 2-day trial · no card · macOS 14+ · Apple Silicon</div>'
    + '<div class="metas"><span>'+shield+'100% private</span><span>'+bolt+'Instant</span><span>'+check+'Every app</span></div>'
    + '<div class="stage reveal"><div class="window">'
    + '<div class="titlebar"><span class="tl r"></span><span class="tl y"></span><span class="tl g"></span><span class="tt">Messages — New message</span></div>'
    + '<div class="scene" id="scene"><div class="doc"><div class="to">To: Alex</div><div class="typed" id="typed"><span class="caret" id="caret"></span></div></div>'
    + '<div class="pill" id="pill"><div class="wave"><i></i><i></i><i></i><i></i><i></i></div><div class="proc"></div></div>'
    + '<svg class="pointer" id="pointer" viewBox="0 0 24 24"><path d="M4 2l6.5 16 2.3-6.6L19 9z" fill="#111" stroke="#fff" stroke-width="1.4" stroke-linejoin="round"/></svg>'
    + '<div class="fnkey" id="fnkey">Hold <kbd>fn</kbd> to dictate</div></div></div></div>';

  // Centerpiece hero: front-and-center mock app windows the pill dictates into.
  var HERO_CP = ''
    + '<span class="badge"><span class="d"></span>On-device · macOS · one-time</span>'
    + '<div class="cp-stage">'
    + '<div class="cp-tabs" id="cpTabs"></div>'
    + '<div class="cp-win" id="cpWin"><div class="cp-bar"><span class="tl r"></span><span class="tl y"></span><span class="tl g"></span><span class="ttl" id="cpTitle">Mail</span></div><div class="cp-body" id="cpBody"></div></div>'
    + '<div class="cp-hint" id="cpHint">Hold <kbd>fn</kbd> and speak — Tulip types into whatever app you\'re in</div>'
    + '</div>'
    + '<p class="sub">One key. Your voice lands as text in any app — private, instant, fully on your Mac.</p>'
    + '<div class="ctas"><a class="btn btn-primary" data-download href="#">Download for Mac</a>'
    + '<a class="btn btn-ghost" href="#pricing">Pricing — $29</a></div>'
    + '<div class="dl-note">Free 2-day trial · no card · macOS 14+ · Apple Silicon</div>';

  function feat(i,t,d){return '<div class="card feat reveal"><div class="ic">'+i+'</div><h3>'+t+'</h3><p>'+d+'</p></div>';}

  var REST = ''
    + '<section class="marquee-sec"><div class="cap">Types into everything you already use</div>'
    + '<div class="marquee"><div class="track" id="track"></div></div></section>'

    + '<section class="sec" id="how"><div class="wrap"><div class="head reveal"><div class="kick">How it works</div>'
    + '<h2>Three seconds from <em>thought</em> to text</h2><p>No windows to open, no buttons to find. Your cursor stays exactly where it is.</p></div>'
    + '<div class="steps">'
    + '<div class="card step reveal"><div class="n">1</div><h3>Hold <span class="kbd">fn</span></h3><p>Press and hold your dictation key from anywhere — an email, a terminal, a text field. The pill blooms right beside your cursor.</p></div>'
    + '<div class="card step reveal"><div class="n">2</div><h3>Speak naturally</h3><p>Say what you mean. A live waveform shows Tulip is listening, and it cleans up filler and punctuation as you go.</p></div>'
    + '<div class="card step reveal"><div class="n">3</div><h3>Release — it\'s typed</h3><p>Let go and your words land at the cursor, formatted and ready. Double-tap <span class="kbd">fn</span> to go fully hands-free.</p></div>'
    + '</div></div></section>'

    + '<section class="sec" id="features" style="padding-top:0"><div class="wrap"><div class="head reveal"><div class="kick">Why Tulip</div>'
    + '<h2>Dictation that respects your&nbsp;Mac</h2><p>Everything a great dictation tool should be — and nothing you didn\'t ask for.</p></div><div class="grid">'
    + feat(ico('<path d="M12 2l7 4v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"/><path d="M9 12l2 2 4-4"/>'),'Truly on-device','The speech model runs entirely on your Mac. No audio, no text, nothing is ever sent to a server.')
    + feat(bolt,'Faster than the cloud','Optimized for Apple Silicon. Release the key and your words are already there — no round-trip, no waiting.')
    + feat(ico('<path d="M3 5h18v11H3z"/><path d="M8 21h8M12 16v5"/>'),'Works in every app','Mail, Slack, VS Code, the terminal, any text field. Tulip types wherever your cursor already is.')
    + feat(ico('<circle cx="12" cy="10" r="3.2"/><path d="M12 2v2M12 16v6"/>'),'A cursor-native pill','Invisible at rest, it materializes next to your pointer and follows it while you talk — then quietly fades away.')
    + feat(ico('<path d="M12 3v10M8 7v6M16 7v6M4 10v3M20 10v3"/>'),'Hands-free mode','Double-tap the key to latch dictation on for long-form writing. Tap once to stop. No holding required.')
    + feat(ico('<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>'),'99+ languages','From English to Urdu to Japanese. Pick your language and Tulip downloads exactly the right model.')
    + '</div></div></section>'

    + '<section class="sec" style="padding-top:0"><div class="wrap"><div class="band reveal"><div class="bl x"></div><div class="bl y"></div><div class="rel">'
    + '<h2>Your voice never leaves your Mac</h2>'
    + '<p>Most dictation apps stream your microphone to the cloud. Tulip doesn\'t have a cloud. The model lives on your machine — so it works on a plane, in a café, or with the Wi-Fi off.</p>'
    + '<div class="chips"><span class="chip">'+shield+'No servers</span><span class="chip">'+ico('<path d="M5 12h14M12 5v14"/>')+'No account</span>'
    + '<span class="chip">'+ico('<path d="M18 6L6 18M6 6l12 12"/>')+'No tracking</span><span class="chip">'+check+'Works offline</span></div></div></div></div></section>'

    + '<section class="sec" id="pricing" style="padding-top:0"><div class="wrap"><div class="head reveal"><div class="kick">Pricing</div>'
    + '<h2>Buy once. Use <em>forever.</em></h2><p>No subscription. One payment, and Tulip is yours — with a full year of updates included.</p></div>'
    + '<div class="price-wrap reveal"><div class="price-card"><div class="price-inner">'
    + '<span class="p-badge">🌷 Early bird — first 100 customers</span>'
    + '<div class="p-num"><span class="was">$49</span><span class="now">$29</span></div><div class="p-sub">one-time payment · lifetime license</div>'
    + '<ul class="p-list">'
    + '<li>'+check+'Fully on-device, unlimited dictation</li>'
    + '<li>'+check+'Use on up to 3 of your Macs</li>'
    + '<li>'+check+'1 year of updates included</li>'
    + '<li>'+check+'2-day free trial, no card required</li></ul>'
    + '<a class="btn btn-primary" data-buy href="#">Get Tulip for $29</a>'
    + '<div class="p-note">Secure checkout via Lemon Squeezy · instant license key</div></div></div></div></div></section>'

    + '<section class="sec" style="padding-top:0"><div class="wrap"><div class="head reveal"><div class="kick">Questions</div><h2>Good to know</h2></div>'
    + '<div class="faq">'
    + faq('Is it really 100% on-device?','Yes. The speech recognition model runs locally on your Mac using Apple Silicon. Your audio and transcribed text never touch a network — Tulip has no backend to send them to.')
    + faq('Which Macs are supported?','Apple Silicon Macs (M1 or newer) on macOS 14 and later. The first time you pick a language, Tulip downloads the matching on-device model.')
    + faq('How does dictation actually trigger?','Hold the <b>fn</b> key to talk and release to insert. Double-tap <b>fn</b> to latch into hands-free mode for longer writing, and tap once more to stop.')
    + faq('What\'s the licensing?','A one-time purchase — no subscription. Your license activates on up to 3 Macs and includes one year of updates. There\'s a 2-day free trial with every feature unlocked.')
    + faq('Can I use it in other languages?','Absolutely. Tulip supports 99+ languages. Choose yours in Settings and it fetches the right model automatically.')
    + '</div></div></section>'

    + '<section class="final wrap reveal"><h2>Stop typing.<br>Start <em>talking.</em></h2>'
    + '<p>Try Tulip free for two days. If it earns a place in your workflow, it\'s $29 — once.</p>'
    + '<a class="btn btn-primary" data-download href="#" style="font-size:16px;padding:15px 28px">Download for Mac</a>'
    + '<div class="dl-note">Free 2-day trial · no card · then $29 to keep</div></section>';

  function faq(q,a){return '<details class="reveal"><summary>'+q+'<span class="plus"></span></summary><p>'+a+'</p></details>';}

  var NAV = '<header id="hdr"><div class="wrap nav"><a class="brand" href="#top"><span class="mk">'+LOGO+'</span>Tulip</a>'
    + '<nav class="nav-links"><a class="link" href="#how">How it works</a><a class="link" href="#features">Features</a>'
    + '<a class="link" href="#pricing">Pricing</a><a class="btn btn-primary" data-download href="#">Download</a></nav></div></header>';

  var FOOT = '<footer><div class="wrap foot"><a class="brand" href="#top"><span class="mk">'+LOGO+'</span>Tulip</a>'
    + '<div class="fl"><a href="#how">How it works</a><a href="#features">Features</a><a href="#pricing">Pricing</a><a href="privacy.html">Privacy</a><a href="terms.html">Terms</a><a data-download href="#">Download</a></div>'
    + '<div class="cr">© '+YEAR+' Tulip · On-device voice dictation for Mac</div></div></footer>';

  var SWITCH = '<div class="switch">'
    + link('centerpiece','Centerpiece')+link('spotlight','Spotlight')+link('launch','Launch')+link('aurora','Aurora')+link('silk','Silk')+'</div>';
  function link(v,label){return '<a href="'+v+'.html" class="'+(v===VARIANT?'on':'')+'">'+label+'</a>';}

  var IS_CP = VARIANT==="centerpiece";

  // assemble
  var app = document.getElementById("app");
  app.innerHTML = NAV + '<span id="top"></span><main><section class="hero" id="hero-sec"><div class="wrap">'
    + (IS_CP?HERO_CP:HERO) + '</div></section>' + REST + '</main>' + FOOT;

  // wire checkout + download
  document.querySelectorAll("[data-buy]").forEach(function(a){a.href=CHECKOUT;a.target="_blank";a.rel="noopener";});
  document.querySelectorAll("[data-download]").forEach(function(a){a.href=DOWNLOAD;a.setAttribute("download","");});

  // headline entrance
  document.getElementById("hero-sec").classList.add("anim");

  // sticky nav
  var hdr=document.getElementById("hdr");
  var onScroll=function(){hdr.classList.toggle("scrolled",window.scrollY>8);};
  onScroll();window.addEventListener("scroll",onScroll,{passive:true});

  // marquee
  var apps=["Mail","Slack","Notion","VS Code","Terminal","Figma","Linear","Google Docs","Messages","Chrome","Obsidian","Cursor"];
  var track=document.getElementById("track");
  var chips=apps.map(function(a){return '<span class="chip-app"><span class="g"></span>'+a+'</span>';}).join("");
  track.innerHTML=chips+chips;

  // reveal
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target);}});},{threshold:.14});
  document.querySelectorAll(".reveal").forEach(function(el){io.observe(el);});

  // dictation demo
  var reduce=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function sleep(ms){return new Promise(function(r){setTimeout(r,ms);});}

  if(IS_CP){
    // ----- Centerpiece: rotating mock app windows; mouse stays put, speech types in -----
    var cpTabs=document.getElementById("cpTabs"),cpWin=document.getElementById("cpWin"),
        cpTitle=document.getElementById("cpTitle"),cpBody=document.getElementById("cpBody"),cpHint=document.getElementById("cpHint");
    var MP='<span class="cp-mp" id="cpMp"><svg class="ptr" viewBox="0 0 24 24"><path d="M4 2l6.5 16 2.3-6.6L19 9z" fill="#fff" stroke="#111" stroke-width="1.4" stroke-linejoin="round"/></svg><span class="ring"></span><span class="cp-pill" id="cpPill"><i></i><i></i><i></i><i></i></span></span>';
    var FIELD='<span class="cp-typed" id="cpTyped"></span><span class="cp-tcaret"></span>'+MP;
    var SCENES=[
      {app:"Mail",cls:"mail",title:"Mail — New Message",text:"Hey Alex — we're shipping Tulip on Friday. Want to skim the launch note?",
        body:'<div class="cp-lbl">New Message</div><div class="cp-row"><span class="k">To</span><span>alex@studio.com</span></div><div class="cp-row"><span class="k">Subject</span><span>Friday launch</span></div><div class="cp-field">'+FIELD+'</div>'},
      {app:"Slack",cls:"slack",title:"Slack — #general",text:"just dictated this whole message. zero typing, zero latency.",
        body:'<div class="cp-lbl"># general</div><div class="cp-msg"><span class="av"></span>Ravi: standup in 5 👋</div><div class="cp-input"><div class="cp-field">'+FIELD+'</div></div>'},
      {app:"Terminal",cls:"terminal",title:"Terminal — zsh",text:"# it even types right here in the terminal",
        body:'<div style="opacity:.5">Last login: on-device, always.</div><div class="cp-field"><span class="prompt">➜  tulip </span>'+FIELD+'</div>'},
      {app:"Notes",cls:"notes",title:"Notes",text:"The best ideas arrive when you can just talk them out.",
        body:'<div class="cp-lbl">Ideas · Today</div><div class="cp-title">Untitled</div><div class="cp-field">'+FIELD+'</div>'}
    ];
    function tabs(active){cpTabs.innerHTML=SCENES.map(function(s,i){return '<span class="cp-tab'+(i===active?' on':'')+'"><span class="dot"></span>'+s.app+'</span>';}).join('');}
    if(reduce){var s0=SCENES[0];tabs(0);cpWin.className="cp-win "+s0.cls;cpTitle.textContent=s0.title;cpBody.innerHTML=s0.body;
      document.getElementById("cpTyped").textContent=s0.text;document.getElementById("cpMp").style.display="none";}
    else{
      (function(){
        async function scene(idx){
          var sc=SCENES[idx];
          tabs(idx); cpWin.className="cp-win "+sc.cls; cpTitle.textContent=sc.title; cpBody.innerHTML=sc.body;
          cpHint.classList.remove("pressed");
          var typed=document.getElementById("cpTyped"),mp=document.getElementById("cpMp"),pill=document.getElementById("cpPill");
          await sleep(380);
          // cursor is resting in the field → fn press → click ripple → pill blooms AT the cursor
          mp.classList.add("in"); await sleep(140);
          cpHint.classList.add("pressed"); mp.classList.add("press"); await sleep(300);
          pill.classList.add("show","listening"); await sleep(340);
          // dictate — the mouse stays put; only the field's text caret advances
          for(var i=0;i<=sc.text.length;i++){typed.textContent=sc.text.slice(0,i);await sleep(24+Math.random()*34);}
          await sleep(340);
          // release → pill fades, result stays
          cpHint.classList.remove("pressed"); pill.classList.remove("listening","show"); mp.classList.remove("press");
          await sleep(1700);
          mp.classList.remove("in"); await sleep(480);
        }
        async function loop(){var i=0;while(true){await scene(i%SCENES.length);i++;}}
        var started=false;
        var so=new IntersectionObserver(function(en){en.forEach(function(e){if(e.isIntersecting&&!started){started=true;loop();so.disconnect();}});},{threshold:.25});
        so.observe(cpWin);
      })();
    }
  } else {
    // ----- Standard: cursor + pill types into an app window -----
    var pill=document.getElementById("pill"),pointer=document.getElementById("pointer"),
        fnkey=document.getElementById("fnkey"),typed=document.getElementById("typed"),caret=document.getElementById("caret");
    var SENTENCE="Let's ship Tulip on Friday — the on-device dictation just works.";
    function setText(s){typed.innerHTML="";typed.appendChild(document.createTextNode(s));typed.appendChild(caret);}
    if(reduce){setText(SENTENCE);}
    else{
      (async function loopStart(){
        async function type(s){for(var i=0;i<=s.length;i++){setText(s.slice(0,i));await sleep(24+Math.random()*34);}}
        async function loop(){
          while(true){
            setText("");pointer.style.left="9%";pointer.style.top="66%";pill.className="pill";fnkey.className="fnkey";await sleep(900);
            pointer.style.left="11%";pointer.style.top="33%";await sleep(700);
            fnkey.classList.add("show");await sleep(500);fnkey.classList.add("pressed");await sleep(260);
            pill.style.left="13.5%";pill.style.top="27%";pill.classList.add("show","listening");await sleep(2100);
            fnkey.classList.remove("pressed");pill.classList.remove("listening");pill.classList.add("processing");await sleep(680);
            pill.classList.remove("show","processing");fnkey.classList.remove("show");await sleep(180);
            await type(SENTENCE);await sleep(2600);
          }
        }
        var started=false;
        var so=new IntersectionObserver(function(en){en.forEach(function(e){if(e.isIntersecting&&!started){started=true;loop();so.disconnect();}});},{threshold:.3});
        so.observe(document.getElementById("scene"));
      })();
    }
  }
})();
