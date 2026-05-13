let audioCtx, oscillator, gainNode, playing=false;
function playDemo(){
  if(!audioCtx){audioCtx=new (window.AudioContext||window.webkitAudioContext)();}
  if(playing){stopDemo();return;}
  oscillator=audioCtx.createOscillator(); gainNode=audioCtx.createGain();
  oscillator.type='sine'; oscillator.frequency.value=432; gainNode.gain.value=0.025;
  oscillator.connect(gainNode); gainNode.connect(audioCtx.destination); oscillator.start(); playing=true;
  document.querySelectorAll('[data-sound]').forEach(b=>{b.textContent='🔊'; b.setAttribute('aria-label','Вимкнути звук');});
  let notes=[432,486,540,648,540,486]; let i=0;
  window.demoTimer=setInterval(()=>{ if(oscillator) oscillator.frequency.setTargetAtTime(notes[i++%notes.length], audioCtx.currentTime, .08); },650);
}
function stopDemo(){
  if(oscillator){oscillator.stop(); oscillator.disconnect(); oscillator=null;}
  clearInterval(window.demoTimer); playing=false;
  document.querySelectorAll('[data-sound]').forEach(b=>{b.textContent='🔇'; b.setAttribute('aria-label','Увімкнути звук');});
}
function goBack(fallback='index.html'){
  if(document.referrer && !document.referrer.includes('t.me')){ history.back(); } else { location.href=fallback; }
}
(function initHeroCarousel(){
  const slides=[...document.querySelectorAll('.hero-slide')];
  const dots=[...document.querySelectorAll('.hero-dot')];
  if(!slides.length) return;
  let active=0;
  function show(i){
    active=(i+slides.length)%slides.length;
    slides.forEach((s,idx)=>s.classList.toggle('active', idx===active));
    dots.forEach((d,idx)=>d.classList.toggle('active', idx===active));
  }
  dots.forEach((d,idx)=>d.addEventListener('click',()=>show(idx)));
  setInterval(()=>show(active+1), 4200);
})();
