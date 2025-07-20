// Hamburger Menu Toggle
const hamburgerBtn = document.getElementById('hamburgerBtn')
const navLinks = document.querySelector('.nav-links')

hamburgerBtn.addEventListener('click', () => {
   hamburgerBtn.classList.toggle('active')
   navLinks.classList.toggle('show')
})

// Navbar scroll effect
window.addEventListener('scroll', function () {
   const navbar = document.getElementById('navbar')
   if (window.scrollY > 100) {
      navbar.classList.add('scrolled')
   } else {
      navbar.classList.remove('scrolled')
   }
})

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
   anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute('href'))
      if (target) {
         target.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
         })
      }
   })
})

// FAQ Toggle functionality
function toggleFAQ(element) {
   const answer = element.nextElementSibling
   const toggle = element.querySelector('.faq-toggle')

   // Close all other FAQs
   document.querySelectorAll('.faq-answer').forEach((faq) => {
      if (faq !== answer) {
         faq.classList.remove('active')
      }
   })
   document.querySelectorAll('.faq-toggle').forEach((toggle_elem) => {
      if (toggle_elem !== toggle) {
         toggle_elem.classList.remove('active')
         toggle_elem.textContent = '+'
      }
   })

   // Toggle current FAQ
   answer.classList.toggle('active')
   toggle.classList.toggle('active')
   toggle.textContent = answer.classList.contains('active') ? '×' : '+'
}

// Scroll animations
const observerOptions = {
   threshold: 0.1,
   rootMargin: '0px 0px -50px 0px',
}

const observer = new IntersectionObserver(function (entries) {
   entries.forEach((entry) => {
      if (entry.isIntersecting) {
         entry.target.classList.add('visible')
      }
   })
}, observerOptions)

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach((el) => {
   observer.observe(el)
})

// Animate service cards on scroll
const serviceCards = document.querySelectorAll('.service-card')
const serviceObserver = new IntersectionObserver(
   function (entries) {
      entries.forEach((entry, index) => {
         if (entry.isIntersecting) {
            setTimeout(() => {
               entry.target.style.opacity = '1'
               entry.target.style.transform = 'translateY(0)'
            }, index * 100)
         }
      })
   },
   { threshold: 0.1 }
)

serviceCards.forEach((card) => {
   card.style.opacity = '0'
   card.style.transform = 'translateY(30px)'
   card.style.transition = 'all 0.6s ease'
   serviceObserver.observe(card)
})

// Animate pricing cards
const pricingCards = document.querySelectorAll('.pricing-card')
const pricingObserver = new IntersectionObserver(
   function (entries) {
      entries.forEach((entry, index) => {
         if (entry.isIntersecting) {
            setTimeout(() => {
               entry.target.style.opacity = '1'
               entry.target.style.transform = entry.target.classList.contains('featured') ? 'translateY(0) scale(1.05)' : 'translateY(0)'
            }, index * 150)
         }
      })
   },
   { threshold: 0.1 }
)

pricingCards.forEach((card) => {
   card.style.opacity = '0'
   card.style.transform = 'translateY(50px)'
   card.style.transition = 'all 0.8s ease'
   pricingObserver.observe(card)
})

// Interactive demo simulation
const demoPreview = document.querySelector('.demo-preview')
if (demoPreview) {
   let demoStep = 0
   const demoSteps = ['Live Demo Preview - Pilih Layanan', 'Live Demo Preview - Pilih Jadwal', 'Live Demo Preview - Konfirmasi Booking', 'Live Demo Preview - Booking Berhasil']

   setInterval(() => {
      demoPreview.innerHTML = `<div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 1.2rem; color: #333; font-weight: bold; text-align: center; padding: 2rem;">
                    <div style="font-size: 1.5rem; margin-bottom: 1rem;">${demoSteps[demoStep]}</div>
                    <div style="width: 60px; height: 4px; background: linear-gradient(45deg, #007bff, #0056b3); margin: 1rem auto; border-radius: 2px; animation: pulse 1s ease-in-out infinite;"></div>
                    <div style="font-size: 1rem; opacity: 0.7;">Simulasi Interaksi Pengguna</div>
                </div>`
      demoStep = (demoStep + 1) % demoSteps.length
   }, 3000)
}

// Add floating animation to CTA buttons
const ctaButtons = document.querySelectorAll('.cta-button')
ctaButtons.forEach((button) => {
   button.addEventListener('mouseenter', function () {
      this.style.animation = 'pulse 0.6s ease-in-out'
   })
   button.addEventListener('mouseleave', function () {
      this.style.animation = 'none'
   })
})

// WhatsApp button interaction
const whatsappButton = document.querySelector('.whatsapp-button')
if (whatsappButton) {
   whatsappButton.addEventListener('click', function (e) {
      // Add click animation
      this.style.transform = 'scale(0.95)'
      setTimeout(() => {
         this.style.transform = 'scale(1.05)'
      }, 100)
      setTimeout(() => {
         this.style.transform = 'scale(1)'
      }, 200)
   })
}

// Add pulse animation keyframes
const style = document.createElement('style')
style.textContent = `
            @keyframes pulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.05); }
                100% { transform: scale(1); }
            }
        `
document.head.appendChild(style)

// Parallax effect for hero section
window.addEventListener('scroll', function () {
   const scrolled = window.pageYOffset
   const heroContent = document.querySelector('.hero-content')
   if (heroContent) {
      heroContent.style.transform = `translateY(${scrolled * 0.5}px)`
   }
})

// Add loading animation
window.addEventListener('load', function () {
   document.body.style.opacity = '0'
   document.body.style.transition = 'opacity 0.5s ease'
   setTimeout(() => {
      document.body.style.opacity = '1'
   }, 100)
})

// Interactive hover effects for feature items
const featureItems = document.querySelectorAll('.feature-item')
featureItems.forEach((item) => {
   item.addEventListener('mouseenter', function () {
      this.style.boxShadow = '0 10px 25px rgba(0,123,255,0.2)'
      this.querySelector('.feature-icon').style.transform = 'rotate(10deg) scale(1.1)'
   })
   item.addEventListener('mouseleave', function () {
      this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)'
      this.querySelector('.feature-icon').style.transform = 'rotate(0deg) scale(1)'
   })
})

// Add dynamic typing effect for hero subtitle
const heroSubtitle = document.querySelector('.hero .subtitle')
if (heroSubtitle) {
   const originalText = heroSubtitle.textContent
   heroSubtitle.textContent = ''
   let i = 0

   setTimeout(() => {
      const typeInterval = setInterval(() => {
         heroSubtitle.textContent = originalText.slice(0, i)
         i++
         if (i > originalText.length) {
            clearInterval(typeInterval)
         }
      }, 30)
   }, 1000)
}

// Service card counter animation
const serviceNumbers = document.querySelectorAll('.service-icon')
const serviceTexts = ['01', '02', '03', '04', '05', '06']
serviceNumbers.forEach((icon, index) => {
   const originalContent = icon.innerHTML
   icon.addEventListener('mouseenter', function () {
      this.innerHTML = serviceTexts[index]
      this.style.fontSize = '1.5rem'
      this.style.fontWeight = 'bold'
   })
   icon.addEventListener('mouseleave', function () {
      this.innerHTML = originalContent
      this.style.fontSize = '2rem'
   })
})

// Add mobile menu toggle (for responsive design)
const mobileMenuToggle = document.createElement('div')
mobileMenuToggle.innerHTML = '☰'
mobileMenuToggle.style.cssText = `
            display: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: inherit;
            @media (max-width: 768px) {
                display: block;
            }
        `

const navContainer = document.querySelector('.nav-container')
if (navContainer && window.innerWidth <= 768) {
   navContainer.appendChild(mobileMenuToggle)

   mobileMenuToggle.addEventListener('click', function () {
      const navLinks = document.querySelector('.nav-links')
      if (navLinks.style.display === 'flex') {
         navLinks.style.display = 'none'
      } else {
         navLinks.style.display = 'flex'
         navLinks.style.flexDirection = 'column'
         navLinks.style.position = 'absolute'
         navLinks.style.top = '100%'
         navLinks.style.left = '0'
         navLinks.style.width = '100%'
         navLinks.style.background = 'rgba(255,255,255,0.95)'
         navLinks.style.padding = '1rem'
         navLinks.style.backdropFilter = 'blur(10px)'
      }
   })
}
