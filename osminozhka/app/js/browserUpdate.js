
  const wrapper = document.querySelector('.wrapper');
  const browserUpdate = document.querySelector('#browserupdate');

  // >> Функция получения версии браузера

  const browser = navigator.browserSpecs = (function(){
    var ua = navigator.userAgent, tem, 
      M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if(/trident/i.test(M[1])){
      tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
      return {name:'IE',version:(tem[1] || '')};
    }
    if(M[1]=== 'Chrome'){
      tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
      if(tem != null) return {name:tem[1].replace('OPR', 'Opera'),version:tem[2]};
    }
    M = M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem = ua.match(/version\/(\d+)/i))!= null)
      M.splice(1, 1, tem[1]);
    return {name:M[0], version:M[1]};
  })();

  // << Функция получения версии браузера

  if(browser.name === "IE"){
    wrapper.classList.add('hidden');
    browserUpdate.classList.add('show');
  }
  if(browser.name === "Edge"){
    if(browser.version < 16){
      wrapper.classList.add('hidden');
      browserUpdate.classList.add('show');
    }
  }
  if(browser.name === "Firefox"){
    if(browser.version < 52){
      wrapper.classList.add('hidden');
      browserUpdate.classList.add('show');
    }
  }
  if(browser.name === "Chrome"){
    if(browser.version < 57){
      wrapper.classList.add('hidden');
      browserUpdate.classList.add('show');
    }
  }
  if(browser.name === "Safari"){
    if(browser.version <= 10){
      wrapper.classList.add('hidden');
      browserUpdate.classList.add('show');
    }
  }
  if(browser.name === "Opera"){
    if(browser.version < 44){
      wrapper.classList.add('hidden');
      browserUpdate.classList.add('show');
    }
  }
  if(browser.name === "Safari on iOS"){
    if(browser.version < 10.3){
      wrapper.classList.add('hidden');
      browserUpdate.classList.add('show');
    }
  }
  if(browser.name === "Opera Mini"){
    wrapper.classList.add('hidden');
    browserUpdate.classList.add('show');
  }
  if(browser.name === "Android Browser"){
    if(browser.version < 91){
      wrapper.classList.add('hidden');
      browserUpdate.classList.add('show');
    }
  }
  if(browser.name === "Opera Mobile"){
    if(browser.version < 62){
      wrapper.classList.add('hidden');
      browserUpdate.classList.add('show');
    }
  }
  if(browser.name === "Baidu Browser"){
    wrapper.classList.add('hidden');
    browserUpdate.classList.add('show');
  }
  if(browser.name === "Samsung Internet"){
    if(browser.version < 6.2){
      wrapper.classList.add('hidden');
      browserUpdate.classList.add('show');
    }
  }
