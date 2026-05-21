<script lang="ts">
  import Hero from '$lib/components/Hero.svelte';
  import CompanyLogos from '$lib/components/CompanyLogos.svelte';
  import Testimonials from '$lib/components/Testimonials.svelte';
  import ContactForm from '$lib/components/ContactForm.svelte';
  import ProductsGallery from '$lib/components/ProductsGallery.svelte';
  import { slide } from 'svelte/transition';
  import { t } from '$lib/translations.svelte';

  let features = $derived([
    {
      num: t('why.01.num'),
      title: t('why.01.title'),
      desc: t('why.01.desc')
    },
    {
      num: t('why.02.num'),
      title: t('why.02.title'),
      desc: t('why.02.desc')
    },
    {
      num: t('why.03.num'),
      title: t('why.03.title'),
      desc: t('why.03.desc')
    }
  ]);

  let hoveredIndex = $state<number | null>(null);
</script>

<svelte:head>
  <title>RAK White Cement</title>
</svelte:head>

<Hero />

<section id="about" class="about-section">
  <div class="inner">
    <div class="section-header">
      <h2>{t('why.title')}</h2>
      <p>{t('why.subtitle')}</p>
    </div>

    <div class="interactive-list">
      {#each features as feature, i}
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <!-- svelte-ignore a11y_mouse_events_have_key_events -->
        <div 
          class="list-item" 
          class:is-dimmed={hoveredIndex !== null && hoveredIndex !== i}
          onmouseenter={() => hoveredIndex = i}
          onmouseleave={() => hoveredIndex = null}
        >
          <div class="item-content">
            <span class="num">{feature.num}</span>
            <h3 class="title">{feature.title}</h3>
          </div>
          {#if hoveredIndex === i}
            <div class="item-desc-wrapper" transition:slide={{ duration: 350 }}>
              <div class="item-desc">
                <p>{feature.desc}</p>
              </div>
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</section>

<ProductsGallery />
<CompanyLogos />
<Testimonials />
<ContactForm />

<style>
  .about-section {
    padding: var(--space-xl) var(--space-xl) 0;
    background-color: var(--color-bg-primary);
    position: relative;
    overflow: hidden;
  }

  .inner {
    max-width: 1600px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
  }

  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 0;
    border-bottom: 1px solid var(--color-border);
    padding-bottom: var(--space-md);
  }

  .section-header h2 {
    font-size: 5rem;
    line-height: 1;
    margin: 0;
  }

  .section-header p {
    font-size: 1.5rem;
    color: var(--color-text-muted);
    max-width: 300px;
    text-align: end;
  }

  .interactive-list {
    display: flex;
    flex-direction: column;
  }

  .list-item {
    border-bottom: 1px solid var(--color-border);
    padding: var(--space-xl) 0;
    transition: opacity 0.4s ease;
    cursor: default;
  }

  .list-item.is-dimmed {
    opacity: 0.3;
  }

  .item-content {
    display: flex;
    align-items: baseline;
    gap: var(--space-xl);
  }

  .num {
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--color-text-muted);
    min-width: 60px;
  }

  .title {
    font-size: 4.5rem;
    line-height: 1;
    margin: 0;
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), color 0.4s ease;
  }
  
  .list-item:hover .title {
    transform: translateX(20px);
    color: var(--color-text-primary);
  }

  :global([dir="rtl"]) .list-item:hover .title {
    transform: translateX(-20px);
  }

  .item-desc {
    margin-inline-start: calc(60px + var(--space-xl));
    padding-bottom: var(--space-md);
  }

  .item-desc p {
    font-size: 1.5rem;
    color: var(--color-text-muted);
    max-width: 600px;
    padding-top: var(--space-md);
    margin: 0;
  }

  @media (max-width: 1024px) {
    .about-section {
      padding: var(--space-lg) var(--space-md) 0;
    }

    .section-header {
      flex-direction: column;
      align-items: flex-start;
      gap: var(--space-sm);
      margin-bottom: 0;
    }

    .section-header h2 {
      font-size: clamp(1.3rem, 8vw, 4rem);
    }

    .section-header p {
      font-size: 1.15rem;
      text-align: start;
      max-width: 100%;
    }

    .list-item {
      padding: var(--space-md) 0;
    }

    .item-content {
      gap: var(--space-sm);
    }

    .num {
      font-size: 1.1rem;
      min-width: clamp(20px, 6vw, 30px);
    }

    .title {
      font-size: clamp(1.1rem, 6.5vw, 2.5rem);
    }

    .list-item:hover .title {
      transform: none;
    }

    .item-desc {
      margin-inline-start: calc(30px + var(--space-sm));
      padding-bottom: var(--space-xs);
    }

    .item-desc p {
      font-size: 1.1rem;
      max-width: 100%;
    }
  }
</style>
