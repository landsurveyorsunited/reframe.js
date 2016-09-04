// Reframe.js
// - runs for 1 iframe (does not assume multiple iframes)
// - does not deal with src, so it will repaint
class Reframe {
  constructor(iframe) {
  this.frame = document.querySelectorAll(iframe);
  if (! this.frame ) return;
  const frameHeight = this.frame.offsetHeight;
  const frameWidth = this.frame.offsetWidth;
  const wrapper = document.createElement("div");
  let divAdded = false;
  if ( frameHeight === frameWidth ) {
    wrapper.style.paddingTop = '100%';
  } else if ( frameHeight > frameHeight ) {
    wrapper.style.paddingTop = (frameWidth / frameHeight * 100) + '%';
  } else {
    wrapper.style.paddingTop = (frameHeight / frameWidth * 100) + '%';
  }
  wrapper.className += 'js-responsive-iframe';
  this.frame.removeAttribute('height');
  this.frame.removeAttribute('width');
  this.frame.removeAttribute('style');
  if ( ! divAdded ) {
    this.frame.parentNode.insertBefore(wrapper, this.frame);
    divAdded = true;
  }
  this.frame.parentNode.removeChild(this.frame);
  wrapper.appendChild(this.frame);
  }
}

export default Reframe;