<script lang="ts">
  import HoverText from './HoverText.svelte';
  import { t } from '$lib/translations.svelte';

  let testimonials = $derived([
    {
      quote: t('test.quote1'),
      author: t('test.author1')
    },
    {
      quote: t('test.quote2'),
      author: t('test.author2')
    },
    {
      quote: t('test.quote3'),
      author: t('test.author3')
    }
  ]);
</script>

<section class="testimonials">
  <div class="inner">
    <div class="section-header">
      <h2 class="hover-roll">
        <HoverText text={t('test.title')} direction="up" />
      </h2>
    </div>
    
    <div class="grid">
      {#each testimonials as item}
        <div class="card">
          <p class="quote hover-slide-right">
            <HoverText text={`"${item.quote}"`} direction="right" splitBy="word" />
          </p>
          <div class="author-block">
            <span class="line"></span>
            <p class="author hover-slide-right">
              <HoverText text={item.author} direction="right" />
            </p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .testimonials {
    padding: var(--space-lg) var(--space-xl) var(--space-xl);
    background-color: var(--color-bg-dark);
    color: var(--color-text-inverse);
  }

  .inner {
    max-width: 1600px;
    margin: 0 auto;
  }

  .section-header {
    margin-bottom: var(--space-xl);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding-bottom: var(--space-md);
  }

  .section-header h2 {
    font-size: 5rem;
    line-height: 1;
    margin: 0;
    cursor: default;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-xl);
  }

  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: default;
  }

  .quote {
    font-size: 2rem;
    font-family: var(--font-primary);
    line-height: 1.3;
    margin-bottom: var(--space-xl);
    font-weight: 400;
  }

  .author-block {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
  }

  .line {
    width: 40px;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.6);
    transition: background-color 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .card:hover .line {
    background-color: var(--color-brand);
  }

  .author {
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.6);
  }

  /* --- Text Animation Triggers --- */

  .hover-roll:hover :global(.original),
  .hover-roll:hover :global(.duplicate) {
    transform: translateY(-100%);
  }

  .card:hover .hover-slide-right :global(.original),
  .card:hover .hover-slide-right :global(.duplicate) {
    transform: translateX(100%);
  }

  @media (max-width: 1024px) {
    .grid {
      grid-template-columns: 1fr;
      gap: var(--space-xl);
    }
  }

  @media (max-width: 768px) {
    .testimonials {
      padding: var(--space-lg) var(--space-md) var(--space-lg);
    }

    .section-header h2 {
      font-size: clamp(1.3rem, 8vw, 2.5rem);
    }

    .grid {
      gap: var(--space-lg);
    }

    .quote {
      font-size: clamp(1.05rem, 5vw, 1.35rem);
      margin-bottom: var(--space-md);
    }
  }
</style>
