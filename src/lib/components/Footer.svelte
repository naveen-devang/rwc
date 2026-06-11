<script lang="ts">
  import { t, langState } from '$lib/translations.svelte';
  import rwcLogo from '$lib/assets/rwc-logo.png';
</script>

<footer>
  <div class="footer-inner">
    <div class="footer-main">
      <div class="footer-info">
        <h2 class="footer-title">
          {#if langState.current === 'en'}
            Building For<br/> <span class="em">Tomorrow.</span>
          {:else}
            نبني<br/> <span class="em">للغد.</span>
          {/if}
        </h2>
        <p class="footer-description">
          {t('footer.desc')}
        </p>
      </div>
      
      <div class="footer-links">
        <div class="link-column">
          <h3>{t('footer.col.company')}</h3>
          <a href="#why-choose-us">{t('footer.col.company.about')}</a>
          <a href="#sister-companies">{t('footer.col.company.leadership')}</a>
          <a href="#global-reach">{t('footer.col.company.sustainability')}</a>
        </div>
        
        <div class="link-column">
          <h3>{t('footer.col.products')}</h3>
          <a href="#products">{t('footer.col.products.wc')}</a>
          <a href="#products">{t('footer.col.products.lime')}</a>
          <a href="#products">{t('footer.col.products.blocks')}</a>
        </div>
        
        <div class="link-column">
          <h3>{t('footer.col.contact')}</h3>
          <a href="mailto:info@rakwhitecement.ae">info@rakwhitecement.ae</a>
          <a href="tel:+97172034343">{t('nav.phone')}</a>
          <p>{t('footer.col.contact.address')}</p>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <div class="logo">
        <enhanced:img src={rwcLogo} alt="RAK White Cement Logo" style="height: 40px; width: auto; object-fit: contain;" />
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
    font-size: clamp(2rem, 6vw, 4.5rem);
    line-height: 1.0;
    text-transform: uppercase;
    margin-bottom: var(--space-md);
  }

  .footer-title .em {
    color: rgba(255, 255, 255, 0.7);
    font-weight: 400;
  }

  .footer-description {
    font-family: var(--font-secondary);
    font-size: 1.25rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.7);
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
    font-family: var(--font-secondary);
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: var(--space-xs);
    color: rgba(255, 255, 255, 0.5);
  }

  .link-column a, .link-column p {
    font-family: var(--font-secondary);
    color: var(--color-text-inverse);
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.3s ease;
  }

  .link-column a:hover {
    color: rgba(255, 255, 255, 0.6);
  }

  .footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid rgba(255, 255, 255, 0.15);
    padding-top: var(--space-lg);
  }

  .logo {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
  }

  .logo :global(img) {
    height: 36px;
    width: auto;
  }

  .footer-bottom p {
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.875rem;
  }

  @media (max-width: 1024px) {
    footer {
      padding: var(--space-lg) var(--space-md) var(--space-lg);
    }

    .footer-main {
      grid-template-columns: 1fr;
      gap: var(--space-xl);
    }

    .footer-description {
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
