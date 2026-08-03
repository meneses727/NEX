// Muestra el ícono de perfil en el nav si el usuario tiene sesión activa,
// o deja el botón de "Iniciar sesión" si no la tiene.
(function () {
  function initNavAuth() {
    const slot = document.getElementById('navAuthSlot');
    if (!slot || !window.supabase) return;

    const client = getSupabaseClient();
    client.auth.getSession().then(({ data }) => {
      const session = data && data.session;
      if (session) {
        slot.innerHTML =
          '<a href="profile.html" title="Mi perfil" aria-label="Mi perfil" ' +
          'style="display:inline-flex;align-items:center;justify-content:center;width:38px;height:38px;' +
          'border-radius:50%;background:var(--ink);color:var(--warm-white);text-decoration:none;">' +
          '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" ' +
          'stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' +
          '<circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.5-7 8-7s8 3 8 7"/></svg>' +
          '</a>';
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavAuth);
  } else {
    initNavAuth();
  }
})();
