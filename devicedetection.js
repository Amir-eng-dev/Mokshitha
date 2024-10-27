
function loadScript() {
     const isMobile = /Mobi|Android/i.test(navigator.userAgent);
     
     const script = document.createElement('script');
     
     if (isMobile) {
         script.src = 'mobile.js'; // Load mobile.js for mobile devices
     } else {
         script.src = 'script.js'; // Load script.js for desktop
     }
     
     document.head.appendChild(script);
 }
 
 
 loadScript();
 