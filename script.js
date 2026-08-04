// Mobile nav toggle
const navToggle = document.querySelector('.nav__toggle');
const navLinks = document.querySelector('.nav__links');
if(navToggle){
  navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
}

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
if('IntersectionObserver' in window && revealEls.length){
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting){
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('in'));
}

// Skill bar fill on view
const skillFills = document.querySelectorAll('.skill__fill');
if('IntersectionObserver' in window && skillFills.length){
  const io2 = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting){
        const target = e.target.getAttribute('data-fill');
        e.target.style.width = target + '%';
        io2.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  skillFills.forEach(el => io2.observe(el));
}

// Terminal typing effect on homepage
const termBody = document.getElementById('term-body');
if(termBody){
  const lines = [
    { html: '<span class="g">$</span> whoami', pause: 300 },
    { html: 'E_Satya_Vinayak <span class="m">·</span> Cloud Engineer', pause: 500 },
    { html: '', pause: 150 },
    { html: '<span class="g">$</span> terraform plan -target=module.satya', pause: 300 },
    { html: '<span class="y">Plan:</span> 3 to add, 0 to change, 0 to destroy.', pause: 400 },
    { html: '  <span class="c">+</span> module.satya.experience &nbsp;<span class="m"></span>', pause: 200 },
    { html: '  <span class="c">+</span> module.satya.stack &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="m"></span>', pause: 200 },
    { html: '  <span class="c">+</span> module.satya.certs &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="m"></span>', pause: 400 },
    { html: '', pause: 150 },
    { html: '<span class="g">$</span> terraform apply -auto-approve', pause: 300 },
    { html: '<span class="g">Apply complete!</span> Resources: 3 added, 0 changed.', pause: 500 },
    { html: '', pause: 150 },
    { html: '<span class="g">$</span> curl satya.dev/status', pause: 300 },
    { html: 'status: <span class="g">available for new opportunities</span>', pause: 0 },
  ];

  let li = 0;
  function typeLine(){
    if(li >= lines.length){
      termBody.insertAdjacentHTML('beforeend', '<span class="cursor"></span>');
      return;
    }
    const row = document.createElement('div');
    row.style.minHeight = '1.6em';
    termBody.appendChild(row);
    const { html, pause } = lines[li];
    row.innerHTML = html;
    li++;
    setTimeout(typeLine, pause + 120);
  }
  typeLine();
}
