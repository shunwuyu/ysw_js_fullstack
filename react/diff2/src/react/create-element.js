function createElement(tag, attrs, ...children) {
  attrs = attrs || {};

  // console.log(tag, attrs, children);
  return {
    tag, 
    attrs,
    children,
    key: attrs.key || null
  }
}

export default createElement;