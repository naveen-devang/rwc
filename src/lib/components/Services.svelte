<script lang="ts">
  import { t, langState } from '$lib/translations.svelte';
  import buyImg from '$lib/assets/service-buy.jpg';
  import sellImg from '$lib/assets/service-sell.jpg';
  import rentImg from '$lib/assets/service-rent.jpg';

  let activeIndex = $state<number | null>(null);

  const services = $derived([
    {
      num: '01',
      title: 'White Cement',
      titleAr: 'الإسمنت الأبيض',
      desc: t('services.buy.desc'),
      img: buyImg
    },
    {
      num: '02',
      title: 'NOORA Lime',
      titleAr: 'جير نورة',
      desc: t('services.sell.desc'),
      img: sellImg
    },
    {
      num: '03',
      title: 'MBF Blocks',
      titleAr: 'طابوق MBF',
      desc: t('services.rent.desc'),
      img: rentImg
    }
  ]);

  function toggleActive(idx: number) {
    activeIndex = activeIndex === idx ? null : idx;
  }
</script>

<section id="products" class="services_root__Ch_WM">
  <!-- Header -->
  <div class="container_container__v5gtR">
    <div class="services_hgrid__9FHyx">
      <div class="services_hgrid-col__9VVDn">
        <div class="services_caption__Q_j1k">{t('nav.products')}</div>
      </div>
      <div class="services_hgrid-col__9VVDn">
        <div class="services_title__eMyhw">
          <h2>
            {t('services.title1')} <span class="em">{t('services.title2')}</span>
          </h2>
        </div>
      </div>
    </div>
  </div>

  <!-- Expanding Items List -->
  <div class="services_items__PESAO">
    {#each services as svc, idx}
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_noninteractive_element_to_interactive_role -->
      <div 
        class="services_item__D_u7g" 
        class:expanded={activeIndex === idx}
        onclick={() => toggleActive(idx)}
        role="button"
        tabindex="0"
        aria-expanded={activeIndex === idx}
        aria-label="Toggle {svc.title} panel"
      >
        <!-- Background Image layer -->
        <div class="services_item-bg___wJGg">
          <enhanced:img src={svc.img} alt="{svc.title} backdrop image" loading="lazy" />
          <div class="card-overlay"></div>
        </div>

        <div class="container_container__v5gtR services_item-content">
          <div class="card-left">
            <span class="services_item-num__QGde9">{svc.num}</span>
            <span class="card-title-text">{langState.current === 'en' ? svc.title : svc.titleAr}</span>
          </div>

          <div class="services_item-text__uKETL">
            <p>{svc.desc}</p>
          </div>

          <!-- Expanding indicator arrow -->
          <div class="services_item-more__pkhNR">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M3.315 10.996h16.623l-.884.707-8.084-8.135h2.526l8.261 8.337-8.286 8.337h-2.526l8.11-8.135.883.708H3.315z"></path>
            </svg>
          </div>
        </div>
      </div>
    {/each}
  </div>

  <!-- Services Footer briefing -->
  <div class="container_container__v5gtR services_footer-wrap">
    <div class="services_brief__OJqWD">
      <div>
        {t('services.footer.text1')} <span class="em">{t('services.footer.text2')}</span>
      </div>
    </div>
    
    <div class="services_action__21_Mi">
      <a class="button_button-round__TFjlU button_color-secondary__FZDOG" href="#contact">
        <div class="button_content__6Zh3n">
          <div class="button_button-round-text__IEwW5">
            <span data-text={t('services.footer.btn')}>{t('services.footer.btn')}</span>
          </div>
          <span class="button_icon-after__vljdM">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
              <path fill="currentColor" d="M3.315 10.996h16.623l-.884.707-8.084-8.135h2.526l8.261 8.337-8.286 8.337h-2.526l8.11-8.135.883.708H3.315z"></path>
            </svg>
          </span>
        </div>
      </a>
    </div>
  </div>
</section>

<style>
  .services_root__Ch_WM {
    padding: var(--space-xl) 0;
    background-color: var(--color-bg-primary);
  }

  .services_hgrid__9FHyx {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    border-bottom: 1px solid var(--color-border);
    padding-bottom: var(--space-md);
    margin-bottom: var(--space-lg);
    gap: var(--space-xl);
  }

  .services_caption__Q_j1k {
    font-family: var(--font-secondary);
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--color-text-muted);
  }

  .services_title__eMyhw h2 {
    font-size: clamp(2rem, 5.5vw, 4.5rem);
    text-transform: uppercase;
    font-weight: 500;
    text-align: right;
  }

  :global([dir="rtl"]) .services_title__eMyhw h2 {
    text-align: left;
  }

  .services_items__PESAO {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: var(--space-lg);
  }

  .services_item__D_u7g {
    position: relative;
    border-bottom: 1px solid var(--color-border);
    padding: var(--space-lg) 0;
    overflow: hidden;
    cursor: pointer;
    transition: padding 0.5s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.5s ease;
  }

  .services_item__D_u7g:first-child {
    border-top: 1px solid var(--color-border);
  }

  .services_item-bg___wJGg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    transform: scale(1.1);
    transition: opacity 0.5s ease, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    pointer-events: none;
  }

  .services_item-bg___wJGg :global(img) {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .card-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 100%);
  }

  /* Hover Expansion */
  .services_item__D_u7g:hover .services_item-bg___wJGg,
  .services_item__D_u7g.expanded .services_item-bg___wJGg {
    opacity: 1;
    transform: scale(1.0);
  }

  .services_item-content {
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: color 0.4s ease;
  }

  .services_item__D_u7g:hover .services_item-content,
  .services_item__D_u7g.expanded .services_item-content {
    color: var(--color-text-inverse);
  }

  .card-left {
    display: flex;
    align-items: baseline;
    gap: var(--space-md);
    flex: 1;
  }

  .services_item-num__QGde9 {
    font-family: var(--font-secondary);
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--color-text-muted);
  }

  .services_item__D_u7g:hover .services_item-num__QGde9,
  .services_item__D_u7g.expanded .services_item-num__QGde9 {
    color: rgba(255, 255, 255, 0.6);
  }

  .card-title-text {
    font-family: var(--font-primary);
    font-size: clamp(1.8rem, 4vw, 3rem);
    font-weight: 500;
    text-transform: uppercase;
  }

  .services_item-text__uKETL {
    flex: 2;
    max-width: 600px;
    opacity: 0;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease;
    padding-right: var(--space-md);
  }

  :global([dir="rtl"]) .services_item-text__uKETL {
    padding-right: 0;
    padding-left: var(--space-md);
  }

  /* Expanded panels displays descriptions */
  .services_item__D_u7g.expanded .services_item-text__uKETL {
    opacity: 1;
    max-height: 200px;
  }

  .services_item-text__uKETL p {
    font-size: 1.125rem;
    line-height: 1.6;
  }

  .services_item-more__pkhNR {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 1px solid var(--color-border);
    transition: transform 0.4s ease, border-color 0.4s ease, background-color 0.4s ease;
  }

  .services_item__D_u7g:hover .services_item-more__pkhNR,
  .services_item__D_u7g.expanded .services_item-more__pkhNR {
    border-color: var(--color-text-inverse);
    background-color: var(--color-text-inverse);
    color: var(--color-text-primary);
  }

  .services_item__D_u7g.expanded .services_item-more__pkhNR {
    transform: rotate(90deg);
  }

  .services_footer-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: var(--space-lg);
    gap: var(--space-xl);
  }

  .services_brief__OJqWD {
    max-width: 600px;
    font-size: clamp(1.1rem, 3.2vw, 1.6rem);
    line-height: 1.4;
  }

  @media (max-width: 1024px) {
    .services_hgrid__9FHyx {
      flex-direction: column;
      align-items: flex-start;
      gap: var(--space-xs);
    }
    
    .services_title__eMyhw h2 {
      text-align: left;
    }

    .services_item-content {
      flex-direction: column;
      align-items: flex-start;
      gap: var(--space-sm);
    }

    .services_item-text__uKETL {
      padding-right: 0;
      max-width: 100%;
    }

    .services_item-more__pkhNR {
      align-self: flex-end;
    }

    .services_footer-wrap {
      flex-direction: column;
      align-items: flex-start;
      gap: var(--space-md);
    }
  }
</style>
