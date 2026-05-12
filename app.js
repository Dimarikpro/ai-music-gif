let audioCtx, oscillator, gainNode, playing=false;
function playDemo(){
  if(!audioCtx){audioCtx=new (window.AudioContext||window.webkitAudioContext)();}
  if(playing){stopDemo();return;}
  oscillator=audioCtx.createOscillator(); gainNode=audioCtx.createGain();
  oscillator.type='sine'; oscillator.frequency.value=432; gainNode.gain.value=0.025;
  oscillator.connect(gainNode); gainNode.connect(audioCtx.destination); oscillator.start(); playing=true;
  document.querySelectorAll('[data-play]').forEach(b=>b.textContent='⏸ Зупинити приклад');
  let notes=[432,486,540,648,540,486]; let i=0;
  window.demoTimer=setInterval(()=>{ if(oscillator) oscillator.frequency.setTargetAtTime(notes[i++%notes.length], audioCtx.currentTime, .08); },650);
}
function stopDemo(){ if(oscillator){oscillator.stop(); oscillator.disconnect(); oscillator=null;} clearInterval(window.demoTimer); playing=false; document.querySelectorAll('[data-play]').forEach(b=>b.textContent='▶ Послухати приклад');}
function goBack(fallback='index.html'){ if(document.referrer && !document.referrer.includes('t.me')){ history.back(); } else { location.href=fallback; } }
