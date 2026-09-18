/* fixes.js — اختبار مرئي */

(function(){
  'use strict';
  
  // انتظر تحميل التطبيق
  function waitForBody(){
    if(document.body){
      var banner = document.createElement('div');
      banner.style.cssText = 
        'position:fixed;top:70px;right:10px;z-index:99999;' +
        'background:#10b981;color:#fff;padding:12px 18px;' +
        'border-radius:12px;font-size:14px;font-weight:800;' +
        'box-shadow:0 4px 16px rgba(0,0,0,.3);' +
        'font-family:system-ui;';
      banner.textContent = '✅ fixes.js يعمل';
      document.body.appendChild(banner);
      
      // أخفِ الشارة بعد 6 ثوان
      setTimeout(function(){ banner.remove(); }, 6000);
    } else {
      setTimeout(waitForBody, 100);
    }
  }
  
  waitForBody();
  
})();