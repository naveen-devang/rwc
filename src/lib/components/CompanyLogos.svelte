<script lang="ts">
  import nooraLogo from '$lib/assets/noora-logo.png';
  import mbfLogo from '$lib/assets/mbf-logo.png';
  import { onMount } from 'svelte';
  import { t, langState } from '$lib/translations.svelte';
  
  let sectionRef: HTMLElement | undefined = $state();

  onMount(() => {
    // A simple reveal effect when scrolled into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.2 });

    if (sectionRef) observer.observe(sectionRef);

    return () => observer.disconnect();
  });
</script>

<section class="sister-companies" bind:this={sectionRef}>
  <div class="inner">
    <div class="text-content">
      <h2 class="reveal-text">{@html t('sister.title').replace('\n', '<br/>')}</h2>
      <p class="fade-in">{t('sister.desc')}</p>
    </div>
    
    <div class="logos-wrapper">
      <div class="logo-card" data-cursor-text={langState.current === 'ar' ? 'زيارة' : 'VISIT'}>
        <div class="card-bg">
          <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop" alt="Lime production" class="bg-img" width="1200" height="900" />
          <div class="card-overlay"></div>
        </div>
        <div class="card-content">
          <enhanced:img src={nooraLogo} alt="Ras Al Khaimah Lime Co. NOORA Logo" class="official-logo" />
          <span class="card-title">{t('sister.noora')}</span>
        </div>
      </div>
      
      <div class="logo-card" data-cursor-text={langState.current === 'ar' ? 'زيارة' : 'VISIT'}>
        <div class="card-bg">
          <img src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1200&auto=format&fit=crop" alt="Block production" class="bg-img" width="1200" height="900" />
          <div class="card-overlay"></div>
        </div>
        <div class="card-content">
          <enhanced:img src={mbfLogo} alt="Modern Block Factory MBF Logo" class="official-logo" />
          <span class="card-title">{t('sister.mbf')}</span>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .sister-companies {
    background-color: var(--color-bg-primary);
    padding: var(--space-lg) var(--space-xl) var(--space-xl);
  }

  .inner {
    max-width: 1600px;
    margin: 0 auto;
  }

  .text-content {
    margin-bottom: var(--space-xxl);
  }

  h2 {
    font-size: 6rem;
    line-height: 0.9;
    margin-bottom: var(--space-md);
    text-transform: uppercase;
    letter-spacing: -0.03em;
  }

  .reveal-text {
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  }

  :global(.in-view) .reveal-text {
    opacity: 1;
    transform: translateY(0);
  }

  p {
    font-size: 1.5rem;
    color: var(--color-text-muted);
    max-width: 600px;
  }

  .fade-in {
    opacity: 0;
    transition: opacity 1s ease 0.3s;
  }

  :global(.in-view) .fade-in {
    opacity: 1;
  }

  .logos-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-xl);
  }

  .logo-card {
    position: relative;
    height: 500px;
    background-color: var(--color-bg-secondary);
    overflow: hidden;
    transform: translateY(60px);
    opacity: 0;
    transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  }

  :global(.in-view) .logo-card {
    opacity: 1;
    transform: translateY(0);
  }

  /* Stagger the second card */
  :global(.in-view) .logo-card:nth-child(2) {
    transition-delay: 0.2s;
  }

  .card-bg {
    position: absolute;
    inset: 0;
    will-change: transform;
    transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .bg-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%);
    transition: filter 0.8s ease, transform 0.8s ease;
    transform: scale(1.05);
  }

  .card-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 100%);
  }

  .logo-card:hover .card-bg {
    transform: scale(1.05);
  }

  .logo-card:hover .bg-img {
    filter: grayscale(0%);
    transform: scale(1);
  }

  .card-content {
    position: relative;
    z-index: 10;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: var(--space-xl);
    color: var(--color-text-inverse);
  }

  .official-logo {
    height: 80px;
    width: auto;
    object-fit: contain;
    margin-bottom: auto;
    /* filter: brightness(0) invert(1); */
  }

  .card-title {
    font-size: 2rem;
    font-weight: 500;
    font-family: var(--font-primary);
  }

  @media (max-width: 1024px) {
    .sister-companies {
      padding: var(--space-lg) var(--space-md) var(--space-lg);
    }

    .text-content {
      margin-bottom: var(--space-xl);
    }

    h2 {
      font-size: clamp(1.3rem, 8vw, 4rem);
      line-height: 1;
      margin-bottom: var(--space-sm);
    }

    p {
      font-size: 1.125rem;
      max-width: 100%;
    }

    .logos-wrapper {
      grid-template-columns: 1fr;
      gap: var(--space-md);
    }

    .logo-card {
      height: 380px;
    }

    .card-content {
      padding: var(--space-md);
    }

    .official-logo {
      height: 60px;
    }

    .card-title {
      font-size: clamp(1.1rem, 5vw, 1.35rem);
    }
  }
</style>
