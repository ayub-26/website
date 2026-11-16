const menuToggle=document.getElementById('menuToggle');
const navLinks=document.getElementById('navLinks');

if(menuToggle&&navLinks){
  menuToggle.addEventListener('click',()=>{
    const expanded=menuToggle.getAttribute('aria-expanded')==='true';
    menuToggle.setAttribute('aria-expanded',String(!expanded));
    menuToggle.setAttribute('aria-label',expanded?'মেনু খুলুন':'মেনু বন্ধ করুন');
    navLinks.classList.toggle('active',!expanded);
  });
  navLinks.querySelectorAll('a').forEach(link=>{
    link.addEventListener('click',()=>{
      navLinks.classList.remove('active');
      menuToggle.setAttribute('aria-expanded','false');
      menuToggle.setAttribute('aria-label','মেনু খুলুন');
    });
  });
  document.addEventListener('keydown',event=>{
    if(event.key==='Escape'){
      navLinks.classList.remove('active');
      menuToggle.setAttribute('aria-expanded','false');
      menuToggle.setAttribute('aria-label','মেনু খুলুন');
    }
  });
}

document.getElementById('year').textContent=new Date().getFullYear();

const contactForm=document.getElementById('contactForm');
const formNote=document.getElementById('formNote');
if(contactForm){
  contactForm.addEventListener('submit',event=>{
    event.preventDefault();
    if(!contactForm.reportValidity()) return;
    const data=new FormData(contactForm);
    const name=String(data.get('name')||'').trim();
    const email=String(data.get('email')||'').trim();
    const message=String(data.get('message')||'').trim();
    const subject=encodeURIComponent('ওয়েবসাইট সম্পর্কে যোগাযোগ - '+name);
    const body=encodeURIComponent('নাম: '+name+'\nইমেইল: '+email+'\n\nবার্তা:\n'+message);
    formNote.textContent='আপনার ইমেইল অ্যাপ খোলার চেষ্টা করা হচ্ছে। ইমেইল পাঠানো সম্পন্ন করতে সেখানে Send চাপুন।';
    window.location.href='mailto:?subject='+subject+'&body='+body;
  });
}
