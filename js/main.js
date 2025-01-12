// Navigasyon menüsü için smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menü toggle
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});

// EmailJS başlatma
(function() {
    emailjs.init("6uynvv_jIRLBphozL");
})();

// Form gönderimi
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    if(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('.submit-btn');
            submitBtn.disabled = true;
            submitBtn.textContent = 'Gönderiliyor...';

            const templateParams = {
                from_name: form.querySelector('[name="from_name"]').value,
                from_email: form.querySelector('[name="from_email"]').value,
                subject: form.querySelector('[name="subject"]').value,
                message: form.querySelector('[name="message"]').value,
                to_name: 'Hasan Talha Atalay'
            };

            emailjs.send('service_4tly59b', 'template_iyu8ix3', templateParams)
                .then(function() {
                    alert('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapılacaktır.');
                    form.reset();
                })
                .catch(function(error) {
                    console.log('Error:', error);
                    alert('Üzgünüz, bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
                })
                .finally(function() {
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Gönder';
                });
        });
    }
});

// Sayfa yüklendiğinde animasyon
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Scroll olayını dinle ve header'ı güncelle
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Yetenekler animasyonu için yeni kod
document.addEventListener('DOMContentLoaded', function() {
    const skillsSection = document.querySelector('.skills');
    const progressBars = document.querySelectorAll('.progress-line');

    function showProgress() {
        progressBars.forEach(progressBar => {
            progressBar.style.transform = "scaleX(1)";
        });
    }

    // Sayfa yüklendiğinde animasyonu başlat
    showProgress();
});

// Terminal komutlarını sırasıyla çalıştıracağız
git init
git add .
git commit -m "İlk yükleme"
git branch -M main
git remote add origin https://github.com/hasantalhaatalay/hasantalhaatalay.github.io.git
git push -u origin main