const humberger = document.getElementById('hamburger');
const close = document.getElementById('close');
const menuPartLargeDevice = document.getElementById('menuPartLargeDevice');
const menuPartMobileDevice = document.getElementById('menuPartMobileDevice');

document.addEventListener('scroll', function () {
  const humberger = document.getElementById('hamburger');
  const close = document.getElementById('close');
  const menuPartLargeDevice = document.getElementById('menuPartLargeDevice');
  const menuPartMobileDevice = document.getElementById('menuPartMobileDevice');

  if (window.innerWidth <= 960) {
    // Screen size up to 960px
    menuPartMobileDevice.style.display = 'none';
    humberger.style.display = 'block';
    close.style.display = 'none';
  }
});

humberger.addEventListener('click', function () {
  humberger.style.display = 'none';
  menuPartMobileDevice.style.display = 'block';
  // menuPartLargeDevice.style.display = 'block';
  // humberger.style.display = 'none';
  close.style.display = 'block';
});

close.addEventListener('click', function () {
  humberger.style.display = 'block';
  menuPartMobileDevice.style.display = 'none';
  // menuPartLargeDevice.style.display = 'none';
  close.style.display = 'none';
});
