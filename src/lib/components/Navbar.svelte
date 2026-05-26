<script lang="ts">
    import { onMount } from "svelte";
    import rakLogo from "$lib/assets/rwc-logo.png";
    import { langState, t } from "$lib/translations.svelte";

    let scrolled = $state(false);
    let menuOpen = $state(false);

    onMount(() => {
        const handleScroll = () => {
            scrolled = window.scrollY > 50;
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    // Handle body scroll locking when mobile menu drawer is open
    $effect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
            document.documentElement.classList.add("lenis-stopped");
        } else {
            document.body.style.overflow = "";
            document.documentElement.classList.remove("lenis-stopped");
        }
        return () => {
            document.body.style.overflow = "";
            document.documentElement.classList.remove("lenis-stopped");
        };
    });
</script>

<nav class="{scrolled ? 'scrolled' : ''} {menuOpen ? 'menu-is-open' : ''}">
    <div class="nav-content">
        <div class="logo">
            <enhanced:img src={rakLogo} alt="RAK White Cement Logo" />
            <span class="logo-text">RAK White Cement</span>
        </div>

        <div class="links">
            <a href="#home">{t("nav.home")}</a>
            <a href="#about">{t("nav.info")}</a>
            <a href="#brands">{t("nav.brands")}</a>
            <a href="#products">{t("nav.products")}</a>
            <a href="#contact">{t("nav.contact")}</a>
        </div>

        <div class="actions">
            <span class="contact">{t("nav.phone")}</span>
            <button class="lang-btn" onclick={() => langState.toggle()}>
                {langState.current === "en" ? "العربية" : "English"}
            </button>
        </div>

        <!-- Interactive Mobile Hamburger Toggle -->
        <button
            class="burger-menu"
            class:open={menuOpen}
            onclick={() => (menuOpen = !menuOpen)}
            aria-label="Toggle Navigation Menu"
        >
            <span class="burger-line"></span>
            <span class="burger-line"></span>
            <span class="burger-line"></span>
        </button>
    </div>
</nav>

<!-- Full-Screen Sliding Glassmorphic Mobile Drawer Menu -->
<div class="mobile-menu-drawer" class:open={menuOpen}>
    <div class="mobile-menu-content">
        <div class="mobile-links">
            <a href="#home" onclick={() => (menuOpen = false)}
                >{t("nav.home")}</a
            >
            <a href="#about" onclick={() => (menuOpen = false)}
                >{t("nav.info")}</a
            >
            <a href="#brands" onclick={() => (menuOpen = false)}
                >{t("nav.brands")}</a
            >
            <a href="#products" onclick={() => (menuOpen = false)}
                >{t("nav.products")}</a
            >
            <a href="#contact" onclick={() => (menuOpen = false)}
                >{t("nav.contact")}</a
            >
        </div>

        <div class="mobile-actions">
            <span class="mobile-contact">{t("nav.general_enquiry")}</span>
            <button
                class="mobile-lang-btn"
                onclick={() => {
                    langState.toggle();
                    menuOpen = false;
                }}
            >
                {langState.current === "en" ? "العربية" : "English"}
            </button>
        </div>
    </div>
</div>

<style>
    nav {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 10000;
        transition:
            background-color 0.4s ease,
            backdrop-filter 0.4s ease,
            padding 0.4s ease;
        padding: var(--space-md) clamp(var(--space-md), 5vw, var(--space-xl));
    }

    nav.scrolled {
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        padding: var(--space-sm) clamp(var(--space-md), 5vw, var(--space-xl));
        border-bottom: 1px solid var(--color-border);
    }

    /* Scrolled text and button colors */
    nav.scrolled a,
    nav.scrolled .logo-text,
    nav.scrolled .contact {
        color: var(--color-text-primary);
    }

    nav.scrolled .lang-btn {
        border-color: var(--color-text-primary);
        color: var(--color-text-primary);
    }

    /* Unscrolled text and button colors */
    nav:not(.scrolled) a,
    nav:not(.scrolled) .logo-text,
    nav:not(.scrolled) .contact {
        color: var(--color-text-inverse);
    }

    nav:not(.scrolled) .lang-btn {
        border-color: var(--color-text-inverse);
        color: var(--color-text-inverse);
    }

    /* Keep text/logo/burger dark when the full screen drawer overlay is open */
    nav.menu-is-open:not(.scrolled) .logo-text,
    nav.menu-is-open:not(.scrolled) .burger-menu {
        color: var(--color-text-primary);
    }

    nav.menu-is-open:not(.scrolled) .logo :global(img) {
        filter: none; /* remove inversion on black logo */
    }

    nav.scrolled .lang-btn:hover {
        background: var(--color-text-primary);
        color: var(--color-text-inverse);
    }

    nav:not(.scrolled) .lang-btn:hover {
        background: var(--color-text-inverse);
        color: var(--color-text-primary);
    }

    .nav-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1600px;
        margin: 0 auto;
        width: 100%;
    }

    .logo {
        display: flex;
        align-items: center;
        gap: var(--space-sm);
        z-index: 1002;
        white-space: nowrap;
    }

    .logo :global(img) {
        height: 40px;
        width: auto;
        transition: filter 0.3s ease;
        flex-shrink: 0;
    }



    .logo-text {
        font-family: var(--font-primary);
        font-weight: 600;
        font-size: 1.1rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        transition: color 0.3s ease;
        white-space: nowrap;
    }

    .links {
        display: flex;
        gap: clamp(var(--space-sm), 2vw, var(--space-md));
        flex-wrap: nowrap;
    }

    .links a {
        text-decoration: none;
        font-weight: 500;
        font-size: 0.875rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        position: relative;
        white-space: nowrap;
    }

    .links a::after {
        content: "";
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

    .links a:hover::after {
        transform: scaleX(1);
        transform-origin: left;
    }

    .actions {
        display: flex;
        align-items: center;
        gap: clamp(var(--space-sm), 2vw, var(--space-md));
        flex-wrap: nowrap;
    }

    .contact {
        font-weight: 500;
        font-size: 0.875rem;
        white-space: nowrap;
    }

    .lang-btn {
        background: transparent;
        border: 1px solid currentColor;
        padding: var(--space-xs) var(--space-sm);
        border-radius: 999px;
        font-weight: 500;
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        transition: all 0.3s ease;
    }

    /* Hamburger Toggle Menu Button */
    .burger-menu {
        display: none;
        flex-direction: column;
        justify-content: space-between;
        width: 24px;
        height: 16px;
        background: transparent;
        border: none;
        padding: 0;
        cursor: pointer;
        z-index: 1002;
        color: currentColor;
        flex-shrink: 0;
    }

    .burger-line {
        width: 100%;
        height: 2px;
        background-color: currentColor;
        transition:
            transform 0.3s cubic-bezier(0.16, 1, 0.3, 1),
            opacity 0.3s ease;
    }

    .burger-menu.open .burger-line:nth-child(1) {
        transform: translateY(7px) rotate(45deg);
    }

    .burger-menu.open .burger-line:nth-child(2) {
        opacity: 0;
    }

    .burger-menu.open .burger-line:nth-child(3) {
        transform: translateY(-7px) rotate(-45deg);
    }

    /* Full Screen Mobile Drawer Overlay Styles */
    .mobile-menu-drawer {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100dvh;
        background: #ffffff;
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        z-index: 9999;
        transform: translateY(-100%);
        transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);

        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        padding: 80px var(--space-md) var(--space-md);
    }

    .mobile-menu-drawer.open {
        transform: translateY(0);
    }

    .mobile-menu-content {
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: var(--space-xl);
    }

    .mobile-links {
        display: flex;
        flex-direction: column;
        gap: var(--space-md);
    }

    .mobile-links a {
        text-decoration: none;
        font-family: var(--font-primary);
        font-size: clamp(1.8rem, 6vw, 2.5rem);
        font-weight: 600;
        text-transform: uppercase;
        color: var(--color-text-primary);
        opacity: 0;
        transform: translateY(30px);
        transition:
            transform 0.5s cubic-bezier(0.16, 1, 0.3, 1),
            opacity 0.5s ease;
    }

    @media (max-height: 550px) {
        .mobile-menu-drawer {
            padding: 60px var(--space-sm) var(--space-sm);
        }

        .mobile-menu-content {
            gap: var(--space-sm);
        }

        .mobile-links {
            gap: var(--space-xs);
        }

        .mobile-links a {
            font-size: clamp(1rem, 4.5vh, 1.4rem);
        }

        .mobile-actions {
            gap: var(--space-xs) !important;
            padding-top: var(--space-xs) !important;
        }

        .mobile-contact {
            font-size: clamp(0.8rem, 4vw, 0.95rem) !important;
            white-space: nowrap;
        }

        .mobile-lang-btn {
            padding: 6px 16px !important;
            font-size: 0.7rem !important;
        }
    }

    /* Elegant staggered reveal animations */
    .mobile-menu-drawer.open .mobile-links a {
        opacity: 1;
        transform: translateY(0);
    }

    .mobile-menu-drawer.open .mobile-links a:nth-child(1) {
        transition-delay: 0.1s;
    }
    .mobile-menu-drawer.open .mobile-links a:nth-child(2) {
        transition-delay: 0.15s;
    }
    .mobile-menu-drawer.open .mobile-links a:nth-child(3) {
        transition-delay: 0.2s;
    }
    .mobile-menu-drawer.open .mobile-links a:nth-child(4) {
        transition-delay: 0.25s;
    }
    .mobile-menu-drawer.open .mobile-links a:nth-child(5) {
        transition-delay: 0.3s;
    }

    .mobile-actions {
        display: flex;
        flex-direction: column;
        gap: var(--space-md);
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        padding-top: var(--space-lg);
        opacity: 0;
        transform: translateY(30px);
        transition:
            transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.35s,
            opacity 0.5s ease 0.35s;
    }

    .mobile-menu-drawer.open .mobile-actions {
        opacity: 1;
        transform: translateY(0);
    }

    .mobile-contact {
        font-size: 1.125rem;
        font-weight: 500;
        color: var(--color-text-muted);
    }

    .mobile-lang-btn {
        align-self: flex-start;
        background: transparent;
        border: 1px solid var(--color-text-primary);
        color: var(--color-text-primary);
        padding: var(--space-sm) var(--space-lg);
        border-radius: 999px;
        font-weight: 600;
        font-size: 0.875rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .mobile-lang-btn:hover {
        background-color: var(--color-text-primary);
        color: var(--color-text-inverse);
    }

    /* Responsive styling rules */
    @media (max-width: 1150px) {
        nav {
            padding: var(--space-sm) var(--space-md);
        }
        nav.scrolled {
            padding: var(--space-xs) var(--space-md);
        }

        .links,
        .actions {
            display: none;
        }

        .burger-menu {
            display: flex;
        }

        .logo-text {
            font-size: clamp(0.75rem, 3.5vw, 1rem);
        }
    }

    @media (max-width: 360px) {
        nav {
            padding: var(--space-xs) var(--space-sm) !important;
        }
        nav.scrolled {
            padding: var(--space-xs) var(--space-sm) !important;
        }
        .logo {
            gap: 6px !important;
        }
        .logo :global(img) {
            height: 30px !important;
        }
    }
</style>
