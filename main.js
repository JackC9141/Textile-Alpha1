// ═══════════════════════════════════════
//   NAVIGATION
// ═══════════════════════════════════════

function goTo(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  closeMenu();
}

// ═══════════════════════════════════════
//   BURGER / DROPDOWN MENU
// ═══════════════════════════════════════

function toggleMenu() {
  document.getElementById('dropdown').classList.toggle('open');
}

function closeMenu() {
  document.getElementById('dropdown').classList.remove('open');
}

document.addEventListener('click', function(e) {
  if (!document.getElementById('burger-btn').contains(e.target)) closeMenu();
});

// ═══════════════════════════════════════
//   PROFILE TABS
// ═══════════════════════════════════════

function switchProfileTab(el, sectionId) {
  document.querySelectorAll('.profile-tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  ['posts-grid-section', 'forums-tab-section', 'servers-tab-section'].forEach(id => {
    document.getElementById(id).style.display = id === sectionId ? '' : 'none';
  });
}
