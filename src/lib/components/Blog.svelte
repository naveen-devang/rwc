<script lang="ts">
  import { onMount } from 'svelte';
  import { t } from '$lib/translations.svelte';
  import StockWidget from '$lib/components/StockWidget.svelte';

  let activeIndex = $state<number | null>(null);

  interface Disclosure {
    date: string;
    title: string;
    desc: string;
    link: string;
  }

  let disclosures = $state<Disclosure[]>([
    {
      date: t('blog.1.date'),
      title: t('blog.1.title'),
      desc: t('blog.1.desc'),
      link: 'https://www.adx.ae/en/main-market/company-profile/disclosures?symbols=RAKWCT&secCode=RAKWCT'
    },
    {
      date: t('blog.2.date'),
      title: t('blog.2.title'),
      desc: t('blog.2.desc'),
      link: 'https://www.adx.ae/en/main-market/company-profile/disclosures?symbols=RAKWCT&secCode=RAKWCT'
    },
    {
      date: t('blog.3.date'),
      title: t('blog.3.title'),
      desc: t('blog.3.desc'),
      link: 'https://www.adx.ae/en/main-market/company-profile/disclosures?symbols=RAKWCT&secCode=RAKWCT'
    }
  ]);

  onMount(async () => {
    try {
      const response = await fetch('/api/disclosures');
      if (response.ok) {
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
          disclosures = data;
        }
      }
    } catch (error) {
      console.error('Failed to load real-time disclosures:', error);
    }
  });
</script>

<section id="blog" class="latest-posts_root__W0OHF">
  <div class="container_container__v5gtR">
    <!-- Header & Stock Widget Grid -->
    <div class="blog_header-grid">
      <div class="blog_header">
        <h2>{t('blog.title')}</h2>
        <p class="blog_lead">{t('blog.lead')}</p>
      </div>

      <!-- Bespoke ADX Live Stock Widget -->
      <StockWidget />
    </div>

    <!-- Blog Posts Text Grid (Asymmetric layout with dimming effects) -->
    <div class="blog_list">
      {#each disclosures as post, idx}
        <a 
          href={post.link} 
          target="_blank"
          rel="noopener noreferrer"
          class="blog_post-row" 
          class:is-dimmed={activeIndex !== null && activeIndex !== idx}
          onmouseenter={() => activeIndex = idx}
          onmouseleave={() => activeIndex = null}
        >
          <div class="blog_post-meta">
            <span class="blog_post-date">{post.date}</span>
          </div>
          
          <div class="blog_post-content">
            <h3>{post.title}</h3>
            <p>{post.desc}</p>
          </div>
          
          <div class="blog_post-action">
            <div class="blog_post-btn">
              <span>{t('blog.btn')}</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                <path fill="currentColor" d="M3.315 10.996h16.623l-.884.707-8.084-8.135h2.526l8.261 8.337-8.286 8.337h-2.526l8.11-8.135.883.708H3.315z"></path>
              </svg>
            </div>
          </div>
        </a>
      {/each}
    </div>

    <!-- More Disclosures Button -->
    <div class="blog_more-btn-container">
      <a 
        href="https://www.adx.ae/en/main-market/company-profile/disclosures?symbols=RAKWCT&secCode=RAKWCT" 
        target="_blank" 
        rel="noopener noreferrer" 
        class="button_button-round__TFjlU button_color-primary__JJ7Hh"
      >
        <div class="button_content__6Zh3n">
          <div class="button_button-round-text__IEwW5">
            <span data-text={t('blog.more_btn')}>{t('blog.more_btn')}</span>
          </div>
        </div>
      </a>
    </div>
  </div>
</section>

<style>
  .latest-posts_root__W0OHF {
    padding: var(--space-xl) 0;
    background-color: var(--color-bg-primary);
    overflow: hidden;
  }

  .blog_header {
    max-width: 800px;
    margin-bottom: var(--space-lg);
  }

  .blog_header h2 {
    font-size: clamp(2rem, 5.5vw, 4.5rem);
    text-transform: uppercase;
    font-weight: 500;
    margin-bottom: var(--space-md);
  }

  .blog_lead {
    font-family: var(--font-secondary);
    font-size: 1.25rem;
    line-height: 1.6;
    color: var(--color-text-muted);
  }

  .blog_list {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .blog_post-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: var(--space-lg) 0;
    border-bottom: 1px solid var(--color-border);
    text-decoration: none;
    color: var(--color-text-primary);
    transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    gap: var(--space-lg);
  }

  .blog_post-row:first-child {
    border-top: 1px solid var(--color-border);
  }

  .blog_post-row.is-dimmed {
    opacity: 0.25;
  }

  .blog_post-row:hover {
    transform: scale(1.01) translateX(8px);
  }

  :global([dir="rtl"]) .blog_post-row:hover {
    transform: scale(1.01) translateX(-8px);
  }

  .blog_post-meta {
    flex: 0.5;
  }

  .blog_post-date {
    font-family: var(--font-secondary);
    font-size: 1rem;
    font-weight: 600;
    color: var(--color-text-muted);
  }

  .blog_post-content {
    flex: 2;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .blog_post-content h3 {
    font-family: var(--font-primary);
    font-size: clamp(1.4rem, 3.2vw, 2.2rem);
    font-weight: 500;
    line-height: 1.2;
  }

  .blog_post-content p {
    font-family: var(--font-secondary);
    font-size: 1.05rem;
    line-height: 1.6;
    color: var(--color-text-muted);
    max-width: 650px;
  }

  .blog_post-action {
    flex: 0.5;
    display: flex;
    justify-content: flex-end;
    align-self: center;
  }

  .blog_post-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: var(--font-secondary);
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border-bottom: 2px solid transparent;
    padding-bottom: 4px;
    transition: all 0.3s ease;
  }

  .blog_post-row:hover .blog_post-btn {
    border-color: var(--color-text-primary);
  }

  @media (max-width: 1024px) {
    .blog_post-row {
      flex-direction: column;
      align-items: flex-start;
      gap: var(--space-xs);
    }
    
    .blog_post-row:hover {
      transform: none;
    }

    .blog_post-action {
      align-self: flex-start;
      margin-top: var(--space-xs);
    }
  }
  .blog_header-grid {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: var(--space-lg);
    gap: var(--space-xl);
    width: 100%;
  }

  .blog_header {
    max-width: 700px;
    margin-bottom: 0;
  }





  @media (max-width: 768px) {
    .blog_header-grid {
      flex-direction: column;
      align-items: stretch;
      gap: var(--space-md);
    }
  }

  .blog_more-btn-container {
    display: flex;
    justify-content: center;
    margin-top: var(--space-xl);
    width: 100%;
  }
</style>
