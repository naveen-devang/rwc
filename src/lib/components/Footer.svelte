<script lang="ts">
  import rakLogo from '$lib/assets/rak-logo.png';
  import { t } from '$lib/translations.svelte';
</script>

<footer>
  <div class="footer-inner">
    <div class="footer-main">
      <div class="footer-info">
        <h2 class="footer-title">{t('footer.title')}</h2>
        <p class="footer-description">
          {t('footer.desc')}
        </p>
      </div>
      
      <div class="footer-links">
        <div class="link-column">
          <h3>{t('footer.col.company')}</h3>
          <a href="#about">{t('footer.col.company.about')}</a>
          <a href="#leadership">{t('footer.col.company.leadership')}</a>
          <a href="#sustainability">{t('footer.col.company.sustainability')}</a>
        </div>
        <div class="link-column">
          <h3>{t('footer.col.products')}</h3>
          <a href="#white-cement">{t('footer.col.products.wc')}</a>
          <a href="#lime">{t('footer.col.products.lime')}</a>
          <a href="#blocks">{t('footer.col.products.blocks')}</a>
        </div>
        <div class="link-column">
          <h3>{t('footer.col.contact')}</h3>
          <a href="mailto:info@rakwhitecement.ae">info@rakwhitecement.ae</a>
          <a href="tel:+97172034343">+971 7 203 4343</a>
          <p>{t('footer.col.contact.address')}</p>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <div class="logo">
        <img src={rakLogo} alt="RAK White Cement Logo" />
        <span class="logo-text">RAK White Cement</span>
      </div>
      <p>&copy; {new Date().getFullYear()} {t('footer.copyright')}</p>
    </div>
  </div>
</footer>

<style>
  footer {
    background-color: var(--color-bg-dark);
    color: var(--color-text-inverse);
    padding: var(--space-lg) var(--space-xl) var(--space-lg);
  }

  .footer-inner {
    max-width: 1600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: var(--space-xl);
  }

  .footer-main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-lg);
  }

  .footer-title {
    font-size: 5rem;
    line-height: 1;
    margin-bottom: var(--space-md);
  }

  .footer-description {
    font-size: 1.5rem;
    color: rgba(255, 255, 255, 0.8);
    max-width: 80%;
  }

  .footer-links {
    display: flex;
    gap: var(--space-xl);
    justify-content: flex-end;
  }

  .link-column {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
  }

  .link-column h3 {
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: var(--space-xs);
    color: rgba(255, 255, 255, 0.6);
  }

  .link-column a, .link-column p {
    color: var(--color-text-inverse);
    text-decoration: none;
    font-size: 1.125rem;
    transition: color 0.3s ease;
  }

  .link-column a:hover {
    color: rgba(255, 255, 255, 0.6);
  }

  .footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    padding-top: var(--space-lg);
  }

  .logo {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    filter: brightness(0) invert(1);
  }

  .logo img {
    height: 32px;
    width: auto;
  }

  .logo-text {
    font-family: var(--font-primary);
    font-weight: 600;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .footer-bottom p {
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.875rem;
  }

  @media (max-width: 1024px) {
    footer {
      padding: var(--space-lg) var(--space-md) var(--space-lg);
    }

    .footer-inner {
      gap: var(--space-xl);
    }

    .footer-main {
      grid-template-columns: 1fr;
      gap: var(--space-xl);
    }

    .footer-title {
      font-size: clamp(1.5rem, 8vw, 4rem);
    }

    .footer-description {
      font-size: 1.15rem;
      max-width: 100%;
    }

    .footer-links {
      flex-direction: column;
      gap: var(--space-lg);
      justify-content: flex-start;
    }

    .footer-bottom {
      flex-direction: column;
      align-items: flex-start;
      gap: var(--space-md);
    }
  }
</style>
