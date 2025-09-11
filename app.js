// ===== app.js =====
// Sections selection (all pages have class "page")
const pages = {
    home: document.getElementById('home'),
    skills: document.getElementById('skills'),
    projects: document.getElementById('projects'),
    trainings: document.getElementById('trainings'),
    contact: document.getElementById('contact')
};

let currentPage = null;

// helper: set active nav link
function setActiveNav(id) {
    document.querySelectorAll('.nav-link').forEach(a => {
        if (a.dataset.target === id) a.classList.add('active');
        else a.classList.remove('active');
    });
}

// show/transition logic
function showPage(targetId) {
    const target = pages[targetId];
    if (!target) return;
    if (currentPage === target) return;

    const outgoing = currentPage;

    // exit outgoing to right
    if (outgoing) {
        outgoing.classList.add('exit-right');
        outgoing.classList.remove('active');
        // remove exit-right after transition ends
        const onEnd = (e) => {
            if (e.propertyName !== 'transform') return;
            outgoing.classList.remove('exit-right');
            outgoing.removeEventListener('transitionend', onEnd);
        };
        outgoing.addEventListener('transitionend', onEnd);
    }

    // ensure target is ready to enter (remove any exit class)
    target.classList.remove('exit-right');

    // small delay to let browser layout before adding active (so animation works)
    requestAnimationFrame(() => {
        target.classList.add('active');
    });

    currentPage = target;
    setActiveNav(targetId);
    // update URL hash without scrolling
    history.replaceState(null, '', `#${targetId}`);
}

// attach nav listeners
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const tgt = link.dataset.target;
        showPage(tgt);
    });
});

// get-in-touch button
document.getElementById('btn-contact').addEventListener('click', (e) => {
    showPage('contact');
});

// view projects button on home
const viewProjects = document.getElementById('view-projects');
if (viewProjects) viewProjects.addEventListener('click', () => showPage('projects'));

// initial show: check hash or show home
window.addEventListener('load', () => {
    const hash = (location.hash || '#home').replace('#', '');
    const initial = pages[hash] ? hash : 'home';
    // ensure all pages are not active initially
    Object.values(pages).forEach(p => p.classList.remove('active', 'exit-right'));
    // show initial
    // slight delay to allow rendering/layout
    setTimeout(() => showPage(initial), 50);
});

// optional: keyboard shortcuts (H,S,P,T,C)
window.addEventListener('keydown', (e) => {
    if (e.key === 'h') showPage('home');
    if (e.key === 's') showPage('skills');
    if (e.key === 'p') showPage('projects');
    if (e.key === 't') showPage('trainings');
    if (e.key === 'c') showPage('contact');
});


// === CV Download buttons ===
const cvLink = "https://drive.google.com/file/d/1xFcEMw-3qYbMzvJTF1kdKdGI75WCw32x/view?usp=drive_link";

document.getElementById('btn-two').addEventListener('click', () => {
    window.open(cvLink, '_blank');
});

document.getElementById('btn-nav').addEventListener('click', () => {
    window.open(cvLink, '_blank');
});

// Burger menu toggle
const burger = document.getElementById('burger');
const navList = document.getElementById('nav-list');

burger.addEventListener('click', () => {
    navList.classList.toggle('show');
});
