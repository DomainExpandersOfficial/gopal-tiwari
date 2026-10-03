/**
 * Advocate Gopal Tiwari - Legal Chambers & Court Practice
 * Civil Court, Varanasi & Chandauli, Uttar Pradesh
 * Interactive JavaScript
 */

// Practice Area Detailed Data (Advocate Gopal Tiwari Practice Domains)
const practiceDetails = {
  civil: {
    title: "Civil Litigation & Court Representation",
    category: "Civil Law",
    badge: "Civil Court, Varanasi",
    laws: "Code of Civil Procedure 1908 (CPC), Specific Relief Act 1963, Indian Contract Act 1872, Limitation Act",
    overview: "Comprehensive advocacy in civil suits and trial proceedings before the Civil Court, Varanasi. Dedicated representation in suits for specific performance of contracts, permanent and mandatory injunctions, recovery of monetary dues and commercial damages, execution of court decrees, and civil appeals.",
    services: [
      "Original Civil Suits for Specific Performance, Recovery of Dues & Damages",
      "Urgent Applications for Temporary & Interim Injunction (Order 39 Rules 1 & 2 CPC)",
      "Declaration of Rights, Title, and Possession Petitions",
      "Execution of Decrees (Order 21 CPC) & Enforcement Proceedings",
      "Civil Miscellaneous Appeals, First Appeals & Revision Petitions"
    ],
    checklist: [
      "Original or copy of contracts, agreements, receipts, or sale papers",
      "Written notices, correspondence, or replies exchanged between parties",
      "Proof of monetary transactions, bank statements, or ledger records",
      "Prior court pleadings, summons, or certified copies of impugned orders"
    ]
  },
  criminal: {
    title: "Criminal Law, Bail & Trial Defence",
    category: "Criminal Law",
    badge: "Trial Courts & Sessions",
    laws: "Bharatiya Nyaya Sanhita (BNS) 2023, Bharatiya Nagarik Suraksha Sanhita (BNSS) 2023, Bharatiya Sakshya Adhiniyam (BSA) 2023 / IPC & CrPC",
    overview: "Vigorous and strategic criminal defense at all stages of proceedings in Varanasi and Chandauli courts. Representation in regular bail, anticipatory bail, police remand hearings, trial defense, complaint cases, and criminal revision petitions.",
    services: [
      "Regular Bail & Interim Bail applications before Magistrate & Sessions Courts",
      "Anticipatory Bail (Pre-Arrest) petitions under Section 482 / 438 BNSS",
      "Trial defense in IPC / BNS offenses, assault, property offenses, and private complaints",
      "Drafting and filing Criminal Complaints before Judicial Magistrates (Sec 200/223)",
      "Criminal Appeals, Revisions, and representation in compounding of offenses"
    ],
    checklist: [
      "Copy of First Information Report (FIR) or Police Complaint",
      "Remand application, arrest memo, or charge-sheet copy (if available)",
      "Lower court rejection order (if bail was previously contested)",
      "Identity and address proofs of applicant and sureties"
    ]
  },
  property: {
    title: "Property & Land Disputes Resolution",
    category: "Real Estate & Land",
    badge: "Civil & Revenue Courts",
    laws: "Transfer of Property Act 1882, UP Revenue Code 2006, Indian Succession Act, Registration Act 1908",
    overview: "In-depth counsel and courtroom advocacy for agricultural, commercial, and residential real estate disputes across Varanasi and Chandauli. Resolving ancestral property partition, demarcation, title verification, registry issues, and revenue record disputes.",
    services: [
      "Ancestral Property Partition Suits with Preliminary & Final Decrees",
      "Land Demarcation, Boundary Disputes, and Illegal Encroachment Removal",
      "Mutation proceedings, Khasra-Khatauni correction under UP Revenue Code",
      "Title verification, due diligence, and 30-year deed registry inspection",
      "Suits for Cancellation of Fraudulent / Forged Sale Deeds and Injunctions"
    ],
    checklist: [
      "Registered Sale Deed, Conveyance, Gift Deed, or Title papers",
      "Current Khatauni (ROR), Khasra, and revenue mutation entries",
      "Family pedigree chart (Vanshavali) in ancestral property disputes",
      "Site map, boundary description, or municipal tax receipts"
    ]
  },
  family: {
    title: "Family & Matrimonial Matters",
    category: "Family Law",
    badge: "Family Courts & Civil Court",
    laws: "Hindu Marriage Act 1955, Special Marriage Act 1954, Family Courts Act 1984, DV Act 2005",
    overview: "Sensitive, patient, and strategically firm legal guidance for matrimonial and family issues. Focused on constructive resolution through mediation and amicable settlement, while fiercely protecting client rights in contested proceedings.",
    services: [
      "Mutual Consent Divorce Petitions (Section 13B HMA) with minimum statutory delay",
      "Contested Divorce Petitions on grounds of Cruelty, Desertion, or Irretrievable Breakdown",
      "Interim Maintenance and Permanent Alimony Applications (Sec 125 BNSS / Sec 24 HMA)",
      "Restitution of Conjugal Rights (RCR) and Judicial Separation",
      "Settlement agreements, family mediation, and custody arrangements"
    ],
    checklist: [
      "Marriage Certificate, wedding invitation card, or photographs",
      "Proof of residence, separation date, and identity documents",
      "Income proof, salary slips, or financial statements (if maintenance involved)",
      "List of Stridhan / personal belongings and joint liabilities"
    ]
  },
  consumer: {
    title: "Consumer Cases & Redressal",
    category: "Consumer Law",
    badge: "District Consumer Commission",
    laws: "Consumer Protection Act 2019 (CPA), Consumer Protection Rules",
    overview: "Protecting consumer rights before the District Consumer Disputes Redressal Commission in Varanasi and Chandauli against defective products, unfair trade practices, builder delays, banking discrepancies, and insurance claim rejections.",
    services: [
      "Drafting and serving Statutory Legal Notices to deficient companies / service providers",
      "Filing and contesting Consumer Complaints before District Consumer Forum",
      "Litigation against Insurance Companies for wrongful claim repudiation",
      "Claims against real estate developers for non-delivery or deficiency of amenities",
      "Execution and penalty proceedings for compliance with consumer forum orders"
    ],
    checklist: [
      "Purchase bill, invoice, warranty card, or insurance policy bond",
      "Formal complaints, emails, or service request ticket logs with the provider",
      "Written response / rejection letters received from company",
      "Photographs, inspection report, or evidence of deficiency / loss"
    ]
  },
  arbitration: {
    title: "Arbitration & Alternative Dispute Resolution (ADR)",
    category: "Dispute Resolution",
    badge: "Arbitral Forums & Civil Court",
    laws: "Arbitration and Conciliation Act 1996, Section 89 Code of Civil Procedure (CPC)",
    overview: "Facilitating swift and cost-effective resolution of commercial, partnership, and contractual disputes outside prolonged courtroom litigation through domestic arbitration, conciliation, and structured mediation.",
    services: [
      "Drafting Notice Invoking Arbitration and appointment of independent arbitrators",
      "Representation in arbitral hearings, statement of claim, and defense arguments",
      "Court applications under Section 9 for interim asset protection and stay orders",
      "Section 34 petitions for setting aside or challenging erroneous arbitral awards",
      "Court-annexed mediation and conciliation under Section 89 CPC"
    ],
    checklist: [
      "Commercial contract, agreement, or partnership deed with arbitration clause",
      "Formal invocation notice, proof of service, and reply received",
      "Detailed statement of claim, unpaid invoices, or ledger account",
      "Copy of Arbitral Award (if challenge or enforcement is sought)"
    ]
  },
  documentation: {
    title: "Legal Notices & Documentation",
    category: "Conveyancing & Drafting",
    badge: "Legal Drafting & Notice Chambers",
    laws: "Negotiable Instruments Act (Sec 138), Transfer of Property Act 1882, Indian Stamp Act, Registration Act",
    overview: "Drafting airtight legal instruments and formal statutory notices that protect client interests and prevent future litigation. Comprehensive notice drafting and agreement conveyancing tailored to Uttar Pradesh stamp and registration requirements.",
    services: [
      "Drafting of Statutory Demand Notices (Sec 138 NI Act Cheque Bounce)",
      "Legal Notices for Recovery of Dues, Breach of Contract & Eviction",
      "Drafting of Sale Agreements, Lease Deeds, Gift Deeds & Relinquishment Deeds",
      "General Power of Attorney (GPA) and Special Power of Attorney (SPA)",
      "Court Affidavits, Undertakings, Indemnity Bonds & Partnership Deeds"
    ],
    checklist: [
      "Parties' identity details (Aadhaar, PAN, residential address proofs)",
      "Transaction terms, agreed consideration amount, and payment milestones",
      "Prior title papers, possession proof, or returned cheques with bank memo",
      "Supporting documentation or communications requiring formal response"
    ]
  }
};

// App Initialization Handler
function initApp() {
  initBCIDisclaimer();
  initNavbar();
  initAboutCarousel();
  initPracticeFilter();
  initPracticeModal();
  initFAQAccordion();
  initConsultationForm();
  initBackToTop();
  initSmoothScroll();
  initLanguageSwitcher();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

/* ==========================================================================
   1. BAR COUNCIL OF INDIA DISCLAIMER MODAL
   ========================================================================== */
function closeBCIDisclaimer() {
  const modal = document.getElementById('bciDisclaimerModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.style.display = 'none';
  }
  document.documentElement.classList.add('bci-accepted');
  document.body.classList.remove('has-bci-modal');
  document.body.style.overflow = '';
  try {
    sessionStorage.setItem('bci_disclaimer_accepted', 'true');
  } catch (err) {}
}
window.closeBCIDisclaimer = closeBCIDisclaimer;

function initBCIDisclaimer() {
  const modal = document.getElementById('bciDisclaimerModal');
  const acceptBtn = document.getElementById('btnAcceptDisclaimer');
  const declineBtn = document.getElementById('btnDeclineDisclaimer');
  const closeBtn = document.getElementById('btnCloseDisclaimer');
  const showBtn = document.getElementById('btnShowDisclaimer');

  if (!modal) return;

  // Clear any permanent localStorage acceptance so it shows on every fresh session
  try {
    localStorage.removeItem('bci_disclaimer_accepted');
  } catch (err) {}

  let isAccepted = false;
  try {
    isAccepted = sessionStorage.getItem('bci_disclaimer_accepted') === 'true';
  } catch (err) {
    isAccepted = false;
  }

  if (!isAccepted) {
    modal.classList.remove('hidden');
    modal.style.display = 'flex';
    document.documentElement.classList.remove('bci-accepted');
    document.body.classList.add('has-bci-modal');
  } else {
    modal.classList.add('hidden');
    modal.style.display = 'none';
    document.documentElement.classList.add('bci-accepted');
    document.body.classList.remove('has-bci-modal');
    document.body.style.overflow = '';
  }

  // Clicking backdrop outside the box closes the modal
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeBCIDisclaimer();
    }
  });

  // Stop clicks inside modal box from bubbling to backdrop
  const modalBox = modal.querySelector('.bci-modal-box');
  if (modalBox) {
    modalBox.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  }

  // Accept button
  if (acceptBtn) {
    acceptBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      closeBCIDisclaimer();
    });
  }

  // Close 'X' button
  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      closeBCIDisclaimer();
    });
  }

  // Decline button: also closes the modal gracefully
  if (declineBtn) {
    declineBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      closeBCIDisclaimer();
    });
  }

  // Review link in footer to re-read disclaimer if needed
  if (showBtn) {
    showBtn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.remove('hidden');
      modal.style.display = 'flex';
      document.documentElement.classList.remove('bci-accepted');
      document.body.classList.add('has-bci-modal');
    });
  }
}

/* ==========================================================================
   2. NAVBAR SCROLL & MOBILE MENU
   ========================================================================== */
function toggleMobileMenu(e) {
  if (e) {
    if (e.preventDefault) e.preventDefault();
    if (e.stopPropagation) e.stopPropagation();
  }
  const navMenu = document.getElementById('navMenu');
  const mobileToggle = document.getElementById('mobileToggle');
  if (!navMenu) return;
  const isOpen = navMenu.classList.toggle('open');
  if (mobileToggle) {
    mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    if (isOpen) {
      mobileToggle.classList.add('active');
    } else {
      mobileToggle.classList.remove('active');
    }
  }
}
window.toggleMobileMenu = toggleMobileMenu;

function initNavbar() {
  const navbarWrapper = document.querySelector('.navbar-wrapper');
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Sticky Navbar Blur On Scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbarWrapper?.classList.add('scrolled');
    } else {
      navbarWrapper?.classList.remove('scrolled');
    }
  }, { passive: true });

  // Close mobile menu on nav link click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu) navMenu.classList.remove('open');
      if (mobileToggle) {
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileToggle.classList.remove('active');
      }
    });
  });

  // Close on click outside navbar
  document.addEventListener('click', (e) => {
    if (navMenu && navMenu.classList.contains('open') && navbarWrapper && !navbarWrapper.contains(e.target)) {
      navMenu.classList.remove('open');
      if (mobileToggle) {
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileToggle.classList.remove('active');
      }
    }
  });
}

/* ==========================================================================
   2B. ABOUT PHOTO AUTO-SWIPE CAROUSEL
   ========================================================================== */
function initAboutCarousel() {
  const wrapper = document.getElementById('aboutCarousel');
  if (!wrapper) return;

  const slides = wrapper.querySelectorAll('.about-carousel-slide');
  const dots = wrapper.querySelectorAll('.carousel-dot');
  const prevBtn = document.getElementById('carouselPrevBtn');
  const nextBtn = document.getElementById('carouselNextBtn');

  if (slides.length <= 1) return;

  let currentIndex = 0;
  let timer = null;
  const interval = 3500; // 3.5 seconds auto swipe

  function showSlide(index) {
    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;
    currentIndex = index;

    slides.forEach((slide, i) => {
      if (i === currentIndex) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });

    dots.forEach((dot, i) => {
      if (i === currentIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  function startAutoPlay() {
    stopAutoPlay();
    timer = setInterval(nextSlide, interval);
  }

  function stopAutoPlay() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      nextSlide();
      startAutoPlay();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      prevSlide();
      startAutoPlay();
    });
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      showSlide(i);
      startAutoPlay();
    });
  });

  // Pause on hover
  wrapper.addEventListener('mouseenter', stopAutoPlay);
  wrapper.addEventListener('mouseleave', startAutoPlay);

  // Mobile Touch Swipe Support
  let touchStartX = 0;
  let touchEndX = 0;

  wrapper.addEventListener('touchstart', (e) => {
    if (e.changedTouches && e.changedTouches[0]) {
      touchStartX = e.changedTouches[0].screenX;
    }
    stopAutoPlay();
  }, { passive: true });

  wrapper.addEventListener('touchend', (e) => {
    if (e.changedTouches && e.changedTouches[0]) {
      touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 40) {
        nextSlide();
      } else if (touchEndX - touchStartX > 40) {
        prevSlide();
      }
    }
    startAutoPlay();
  }, { passive: true });

  startAutoPlay();
}

/* ==========================================================================
   3. PRACTICE AREAS FILTER TABS
   ========================================================================== */
function initPracticeFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.practice-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      cards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 20);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

/* ==========================================================================
   4. PRACTICE AREA DEEP-DIVE MODAL
   ========================================================================== */
function initPracticeModal() {
  const modalOverlay = document.getElementById('practiceDetailModal');
  const modalClose = document.getElementById('closePracticeModal');
  const modalTitle = document.getElementById('modalPracticeTitle');
  const modalBody = document.getElementById('modalPracticeContent');
  const modalConsultBtn = document.getElementById('btnModalConsult');
  const triggerBtns = document.querySelectorAll('.btn-view-practice');

  if (!modalOverlay || !modalBody) return;

  triggerBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const practiceKey = btn.getAttribute('data-practice');
      const data = practiceDetails[practiceKey];

      if (!data) return;

      modalTitle.textContent = data.title;

      let servicesList = data.services.map(s => `<li><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> <span>${s}</span></li>`).join('');
      let checkList = data.checklist.map(c => `<li><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg> <span>${c}</span></li>`).join('');

      modalBody.innerHTML = `
        <div style="display: flex; gap: 8px; align-items: center; margin-bottom: 12px; flex-wrap: wrap;">
          <span class="section-badge" style="margin-bottom: 0;">${data.category}</span>
          <span style="font-size: 0.75rem; background: var(--accent-gold-bg); color: var(--accent-gold-dark); border: 1px solid var(--border-gold-subtle); padding: 3px 10px; border-radius: 9999px; font-weight: 600;">${data.badge}</span>
        </div>
        <p style="font-size: 0.925rem; line-height: 1.65; color: var(--text-charcoal); margin-bottom: 16px;">${data.overview}</p>
        
        <h4 class="detail-section-title">Governing Indian Statutes & Provisions</h4>
        <p style="font-size: 0.85rem; color: var(--primary-navy); background: var(--bg-ivory); padding: 10px 14px; border-radius: 4px; border-left: 3px solid var(--accent-gold); margin-bottom: 16px; line-height: 1.5;">
          ${data.laws}
        </p>

        <h4 class="detail-section-title">Key Legal Solutions & Court Representation</h4>
        <ul class="practice-key-points" style="border-top: none; padding-top: 0; margin-bottom: 18px;">
          ${servicesList}
        </ul>

        <h4 class="detail-section-title">Documents to Bring for Consultation</h4>
        <ul class="practice-key-points" style="border-top: none; padding-top: 0; margin-bottom: 8px;">
          ${checkList}
        </ul>
      `;

      if (modalConsultBtn) {
        modalConsultBtn.onclick = () => {
          modalOverlay.classList.remove('active');
          document.body.style.overflow = '';
          const selectElement = document.getElementById('consultPractice');
          if (selectElement) {
            selectElement.value = data.title;
          }
          const contactSection = document.getElementById('contact');
          contactSection?.scrollIntoView({ behavior: 'smooth' });
        };
      }

      modalOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeModal = () => {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });
}

/* ==========================================================================
   5. FAQ ACCORDION
   ========================================================================== */
function initFAQAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const header = item.querySelector('.faq-header');
    const body = item.querySelector('.faq-body');

    header?.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other items
      faqItems.forEach(other => {
        if (other !== item) {
          other.classList.remove('active');
          const otherBody = other.querySelector('.faq-body');
          if (otherBody) otherBody.style.maxHeight = null;
        }
      });

      // Toggle current item
      if (!isActive) {
        item.classList.add('active');
        if (body) body.style.maxHeight = body.scrollHeight + 'px';
      } else {
        item.classList.remove('active');
        if (body) body.style.maxHeight = null;
      }
    });
  });
}

/* ==========================================================================
   6. CONSULTATION FORM & WHATSAPP INTEGRATION
   ========================================================================== */
function initConsultationForm() {
  const form = document.getElementById('consultationForm');
  const btnWhatsApp = document.getElementById('btnSubmitWhatsApp');

  if (!form) return;

  // Handle Send via WhatsApp directly
  if (btnWhatsApp) {
    btnWhatsApp.addEventListener('click', (e) => {
      e.preventDefault();
      dispatchWhatsAppMessage();
    });
  }

  // Handle Standard Form Submit
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fullName = document.getElementById('clientName')?.value.trim();
    const phone = document.getElementById('clientPhone')?.value.trim();
    const email = document.getElementById('clientEmail')?.value.trim();
    const practice = document.getElementById('consultPractice')?.value;
    const date = document.getElementById('consultDate')?.value;
    const notes = document.getElementById('caseBrief')?.value.trim();

    if (!fullName || !phone) {
      alert('Please fill in your Full Name and Mobile Number.');
      return;
    }

    // Show nice confirmation modal or alert
    showBookingSuccess(fullName, practice, phone);
    form.reset();
  });

  function dispatchWhatsAppMessage() {
    const fullName = document.getElementById('clientName')?.value.trim() || 'Client';
    const phone = document.getElementById('clientPhone')?.value.trim() || 'Not specified';
    const email = document.getElementById('clientEmail')?.value.trim() || 'N/A';
    const practice = document.getElementById('consultPractice')?.value || 'Legal Matter';
    const mode = document.getElementById('consultMode')?.value || 'Chamber / Court Discussion';
    const date = document.getElementById('consultDate')?.value || 'Earliest available';
    const notes = document.getElementById('caseBrief')?.value.trim() || 'Consultation requested.';

    const advocatePhone = "916306792488"; // Advocate Gopal Tiwari Phone / WhatsApp

    const message = `*LEGAL CONSULTATION INQUIRY - ADVOCATE GOPAL TIWARI*\n` +
      `------------------------------------\n` +
      `*Client Name:* ${fullName}\n` +
      `*Contact:* ${phone}\n` +
      `*Email:* ${email}\n` +
      `*Matter Category:* ${practice}\n` +
      `*Consultation Mode:* ${mode}\n` +
      `*Preferred Date:* ${date}\n` +
      `*Brief Issue:* ${notes}\n` +
      `------------------------------------\n` +
      `_Civil Court, Varanasi & Chandauli (UP)_`;

    const encoded = encodeURIComponent(message);
    const waUrl = `https://wa.me/${advocatePhone}?text=${encoded}`;
    window.open(waUrl, '_blank');
  }

  function showBookingSuccess(name, matter, phone) {
    alert(`Thank you, ${name}!\n\nYour consultation request regarding "${matter}" has been registered with the office of Advocate Gopal Tiwari.\nOur office will contact you at ${phone} to confirm your appointment slot.\n\nOffice Timings: Mon-Sat, 10:00 AM – 3:00 PM\nFor immediate assistance, you can also reach us directly via WhatsApp / Call at +91 6306792488.`);
  }
}

/* ==========================================================================
   7. BACK TO TOP BUTTON
   ========================================================================== */
function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTop');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ==========================================================================
   8. SMOOTH SCROLL FOR IN-PAGE ANCHORS
   ========================================================================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '#!') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/* ==========================================================================
   9. GOOGLE TRANSLATE NAVBAR CONTROLLER & LAYOUT PROTECTION
   ========================================================================== */
function initLanguageSwitcher() {
  // Prevent Google Translate banner from displacing body down
  const preventLayoutShift = () => {
    if (document.body.style.top && document.body.style.top !== '0px') {
      document.body.style.top = '0px';
    }
    if (document.body.style.position && document.body.style.position !== 'static') {
      document.body.style.position = 'static';
    }
  };

  preventLayoutShift();

  // Watch for any Google Translate inline style modifications on body
  try {
    const observer = new MutationObserver(preventLayoutShift);
    observer.observe(document.body, { attributes: true, attributeFilter: ['style', 'class'] });
  } catch (e) {
    // fallback if MutationObserver is not supported
  }

  // Enhance Google Translate combo when it renders into the DOM
  const enhanceCombo = () => {
    const combo = document.querySelector('.goog-te-combo');
    if (!combo) return false;

    // Polish initial prompt option
    if (combo.options && combo.options.length > 0 && combo.options[0].value === '') {
      combo.options[0].textContent = '🌐 Select Language';
    }

    // Persist and handle change
    if (!combo.dataset.langInit) {
      combo.dataset.langInit = 'true';
      combo.addEventListener('change', () => {
        const val = combo.value;
        const domain = window.location.hostname;
        if (!val || val === 'en') {
          // Clear translation cookies to return to pristine original English
          document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
          if (domain) {
            document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=${domain}; path=/;`;
            document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=.${domain}; path=/;`;
          }
        } else {
          // Set cookie for persistence across pages / sessions
          document.cookie = `googtrans=/en/${val}; path=/;`;
          if (domain) {
            document.cookie = `googtrans=/en/${val}; domain=${domain}; path=/;`;
            document.cookie = `googtrans=/en/${val}; domain=.${domain}; path=/;`;
          }
        }
        preventLayoutShift();
      });
    }

    return true;
  };

  if (!enhanceCombo()) {
    let attempts = 0;
    const interval = setInterval(() => {
      attempts++;
      if (enhanceCombo() || attempts >= 40) {
        clearInterval(interval);
      }
    }, 200);
  }
}

