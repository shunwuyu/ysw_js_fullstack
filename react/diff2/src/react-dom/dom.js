export function setAttribute(dom, name, value) {
  // console.log(name, value);
  if (name === 'className') name = 'class';
  // console.log(name, dom);
  if (/on\w+/.test(name)) {
    console.log(name, value);
    name = name.toLowerCase();
    dom[name] = value;
  } else if ( name === 'style' ) {
    console.log(typeof value)
    if (!value || typeof value === 'string') {
      dom.style.cssText = value || '';
    } else if (value && typeof value === 'object') {
      console.log(name, value);
      for (let name in value) {
        dom.style[name] = typeof value[name] === 'number'? value[name] + 'px': value[name];
      }
    }
  } else {
    if (name in dom) {
      dom[name] = value || ''
    }
    if (value) {
      dom.setAttribute(name, value);
    } else {
      dom.removeAttribute(name, value);
    }
  }
}