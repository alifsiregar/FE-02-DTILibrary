function getCookie(name) {
  if (document.cookie.length > 0) {
    let cStart = document.cookie.indexOf(`${name}=`);
    if (cStart !== -1) {
      cStart = cStart + name.length + 1;
      let cEnd = document.cookie.indexOf(';', cStart);
      if (cEnd === -1) {
        cEnd = document.cookie.length;
      }
      return unescape(document.cookie.substring(cStart, cEnd));
    }
  }
  return '';
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  const expires = `expires=${d.toUTCString()}`;
  const domain = process.env.REACT_APP_DOMAIN ?? 'localhost';
  document.cookie = `${cname}=${cvalue};${expires};domain=${domain};path=/`;
}

const isUserAuthenticated = () => {
  if (getCookie('token')) return true;
  return false;
};

function deleteCookie(name) {
  // eslint-disable-next-line prefer-template
  document.cookie = name + '=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

export { isUserAuthenticated, getCookie, setCookie, deleteCookie };
