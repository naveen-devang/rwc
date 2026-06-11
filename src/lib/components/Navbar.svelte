<script lang="ts">
  import { onMount } from 'svelte';
  import { langState, t } from '$lib/translations.svelte';
  import rwcLogo from '$lib/assets/rwc-logo.png';

  let scrolled = $state(false);
  let menuOpen = $state(false);

  onMount(() => {
    const handleScroll = () => {
      scrolled = window.scrollY > 50;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  // Handle body scroll locking when mobile menu drawer is open
  $effect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.classList.add('lenis-stopped');
    } else {
      document.body.style.overflow = '';
      document.documentElement.classList.remove('lenis-stopped');
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.classList.remove('lenis-stopped');
    };
  });
</script>

<header class="header_wrapper__MJ5bn {scrolled ? 'scrolled' : ''} {menuOpen ? 'menu-is-open' : ''}">
  <div class="container_container__v5gtR">
    <div class="header_content__cVJDb">
      <!-- Logo -->
      <div class="header_logo__LO_Jk">
        <a href="/" aria-label="RAK White Cement">
          <enhanced:img src={rwcLogo} alt="RAK White Cement Logo" style="height: 44px; width: auto; object-fit: contain;" />
        </a>
      </div>

      <!-- Navigation Links -->
      <nav class="header_nav__if_jI">
        <div class="header_nav-item__Wn05d"><a href="#hero"><span data-text={t('nav.home')}>{t('nav.home')}</span></a></div>
        <div class="header_nav-item__Wn05d"><a href="#why-choose-us"><span data-text={t('nav.info')}>{t('nav.info')}</span></a></div>
        <div class="header_nav-item__Wn05d"><a href="#sister-companies"><span data-text={t('nav.brands')}>{t('nav.brands')}</span></a></div>
        <div class="header_nav-item__Wn05d"><a href="#products"><span data-text={t('nav.products')}>{t('nav.products')}</span></a></div>
        <div class="header_nav-item__Wn05d"><a href="#contact"><span data-text={t('nav.contact')}>{t('nav.contact')}</span></a></div>
      </nav>

      <!-- Actions -->
      <div class="header_actions__Sv09J">
        <button class="lang-btn" onclick={() => langState.toggle()} aria-label="Language Toggler">
          {langState.current === 'en' ? 'العربية' : 'English'}
        </button>
        <a class="button_button-round__TFjlU button_color-primary__JJ7Hh" href="tel:+97172034343">
          <div class="button_content__6Zh3n">
            <div class="button_button-round-text__IEwW5">
              <span data-text={t('nav.phone')}>{t('nav.phone')}</span>
            </div>
          </div>
        </a>
      </div>

      <!-- Hamburger Menu Button -->
      <button 
        class="burger-btn_btn__IvzqD header_burger-control__YR_x_ {menuOpen ? 'open' : ''}" 
        onclick={() => menuOpen = !menuOpen} 
        aria-label="Menu control" 
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
      </button>
    </div>
  </div>

  <!-- Mobile Drawer Menu -->
  <div class="burger-menu_wrapper__gKR7D" class:open={menuOpen} style="padding-top: 80px;" data-lenis-prevent="true">
    <button class="burger-menu_backdrop__wfXK5" onclick={() => menuOpen = false} aria-label="Close menu" type="button"></button>
    <div class="burger-menu_content__rv4kf">
      <nav class="burger-menu_nav__dAhwA">
        <div class="burger-menu_nav-item__mCA9u"><a href="#hero" onclick={() => menuOpen = false}>{t('nav.home')}</a></div>
        <div class="burger-menu_nav-item__mCA9u"><a href="#why-choose-us" onclick={() => menuOpen = false}>{t('nav.info')}</a></div>
        <div class="burger-menu_nav-item__mCA9u"><a href="#sister-companies" onclick={() => menuOpen = false}>{t('nav.brands')}</a></div>
        <div class="burger-menu_nav-item__mCA9u"><a href="#products" onclick={() => menuOpen = false}>{t('nav.products')}</a></div>
        <div class="burger-menu_nav-item__mCA9u"><a href="#contact" onclick={() => menuOpen = false}>{t('nav.contact')}</a></div>
      </nav>
      
      <div class="burger-menu_actions__In3qE">
        <button class="mobile-lang-btn" onclick={() => { langState.toggle(); menuOpen = false; }} aria-label="Language Toggler">
          {langState.current === 'en' ? 'العربية' : 'English'}
        </button>
        <a class="button_button-round__TFjlU button_color-primary__JJ7Hh" href="tel:+97172034343" onclick={() => menuOpen = false}>
          <div class="button_content__6Zh3n">
            <div class="button_button-round-text__IEwW5">
              <span data-text={t('nav.phone')}>{t('nav.phone')}</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</header>

<style>
  .header_wrapper__MJ5bn {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10000;
    padding: 24px 0;
    transition: background-color 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease;
    border-bottom: 1px solid transparent;
  }

  .header_wrapper__MJ5bn.scrolled {
    background-color: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-color: var(--color-border);
    padding: 16px 0;
  }

  /* Scrolled states */
  .header_wrapper__MJ5bn.scrolled .header_logo__LO_Jk :global(img),
  .header_wrapper__MJ5bn.scrolled .header_nav-item__Wn05d a,
  .header_wrapper__MJ5bn.scrolled .lang-btn {
    color: var(--color-text-primary);
  }

  /* Transparent/Default States */
  .header_logo__LO_Jk :global(img),
  .header_nav-item__Wn05d a,
  .lang-btn {
    color: var(--color-text-primary); /* Monochromatic black on light background */
    transition: color 0.3s ease;
  }

  .header_content__cVJDb {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .header_logo__LO_Jk a {
    display: flex;
    align-items: center;
  }

  .header_logo__LO_Jk :global(img) {
    height: 36px;
    width: auto;
  }

  .header_nav__if_jI {
    display: flex;
    align-items: center;
    gap: 32px;
  }

  .header_nav-item__Wn05d a {
    text-decoration: none;
    font-size: 0.875rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    position: relative;
  }

  .header_nav-item__Wn05d a span::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: currentColor;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    will-change: transform;
  }

  .header_nav-item__Wn05d a:hover span::after {
    transform: scaleX(1);
    transform-origin: left;
  }

  .header_actions__Sv09J {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .lang-btn {
    background: transparent;
    border: 1px solid currentColor;
    padding: 8px 16px;
    border-radius: 999px;
    font-family: var(--font-secondary);
    font-size: 0.75rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    transition: all 0.3s ease;
  }

  .lang-btn:hover {
    background: var(--color-text-primary);
    color: var(--color-text-inverse);
  }

  /* Hamburger control */
  .burger-btn_btn__IvzqD {
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    background: transparent;
    border: none;
    position: relative;
    z-index: 10020;
    cursor: pointer;
  }

  .burger-btn_btn__IvzqD span {
    display: block;
    width: 24px;
    height: 2px;
    background-color: var(--color-text-primary);
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.3s ease;
  }

  .burger-btn_btn__IvzqD span:nth-child(1) {
    margin-bottom: 6px;
  }

  .burger-btn_btn__IvzqD.open span:nth-child(1) {
    transform: translateY(4px) rotate(45deg);
    margin-bottom: 0;
  }

  .burger-btn_btn__IvzqD.open span:nth-child(2) {
    transform: translateY(-4px) rotate(-45deg);
  }

  /* Mobile Drawer styles */
  .burger-menu_wrapper__gKR7D {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 10010;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.4s ease, visibility 0.4s ease;
  }

  .burger-menu_wrapper__gKR7D.open {
    visibility: visible;
    opacity: 1;
  }

  .burger-menu_backdrop__wfXK5 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: none;
    padding: 0;
    cursor: pointer;
    display: block;
    outline: none;
  }

  .burger-menu_content__rv4kf {
    position: absolute;
    top: 0;
    right: 0;
    width: 80%;
    max-width: 400px;
    height: 100%;
    background-color: var(--color-bg-primary);
    box-shadow: -10px 0 30px rgba(0,0,0,0.05);
    padding: 100px 48px 48px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transform: translateX(100%);
    transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  }

  :global([dir="rtl"]) .burger-menu_content__rv4kf {
    right: auto;
    left: 0;
    transform: translateX(-100%);
  }

  .burger-menu_wrapper__gKR7D.open .burger-menu_content__rv4kf {
    transform: translateX(0);
  }

  .burger-menu_nav__dAhwA {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .burger-menu_nav-item__mCA9u a {
    text-decoration: none;
    font-family: var(--font-primary);
    font-size: 1.8rem;
    font-weight: 500;
    text-transform: uppercase;
    color: var(--color-text-primary);
    display: block;
    transition: transform 0.3s ease;
  }

  .burger-menu_nav-item__mCA9u a:hover {
    transform: translateX(8px);
  }

  :global([dir="rtl"]) .burger-menu_nav-item__mCA9u a:hover {
    transform: translateX(-8px);
  }

  .burger-menu_actions__In3qE {
    display: flex;
    flex-direction: column;
    gap: 16px;
    border-top: 1px solid var(--color-border);
    padding-top: 32px;
  }

  .mobile-lang-btn {
    background: transparent;
    border: 1px solid var(--color-text-primary);
    color: var(--color-text-primary);
    padding: 12px 24px;
    border-radius: 999px;
    font-family: var(--font-secondary);
    font-size: 0.875rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    transition: all 0.3s ease;
  }

  .mobile-lang-btn:hover {
    background: var(--color-text-primary);
    color: var(--color-text-inverse);
  }

  @media (max-width: 1024px) {
    .header_nav__if_jI,
    .header_actions__Sv09J {
      display: none;
    }

    .burger-btn_btn__IvzqD {
      display: flex;
    }
  }

  @media (max-width: 480px) {
    .header_logo__LO_Jk :global(img) {
      height: 28px;
    }
  }
</style>
