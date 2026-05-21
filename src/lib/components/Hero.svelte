<script lang="ts">
  import { onMount } from 'svelte';
  import { animate, stagger } from 'motion';
  import { ArrowRight } from 'lucide-svelte';
  import MagneticButton from '$lib/components/MagneticButton.svelte';
  import { t, langState } from '$lib/translations.svelte';

  let lines: HTMLElement[] = $state([]);
  let bgRef: HTMLDivElement | undefined = $state();

  onMount(() => {
    // Wait for preloader (roughly 2.2s total delay: 1.5s load + 0.7s exit)
    setTimeout(() => {
      if (lines.length > 0) {
        animate(
          lines,
          { y: ['100%', '0%'] } as any,
          { duration: 1.2, delay: stagger(0.1), ease: [0.16, 1, 0.3, 1] } as any
        );
      }
    }, 2200);

    // Simple Parallax Effect
    const handleScroll = () => {
      if (bgRef) {
        const scrolled = window.scrollY;
        // Move the background down slightly as we scroll down to create parallax
        bgRef.style.transform = `translateY(${scrolled * 0.4}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<section class="hero" data-cursor-text="DRAG">
  <div class="hero-bg" bind:this={bgRef}>
    <!-- Extremely high quality architecture unsplash image -->
    <img src="https://images.unsplash.com/photo-1541888046425-d81bb19240f5?q=80&w=3000&auto=format&fit=crop" alt="Premium Concrete Architecture" />
    <div class="overlay"></div>
  </div>

  <div class="hero-content">
    <div class="announcement">
      <span class="badge">{t('hero.badge')}</span>
      <a href="#announcement" data-cursor-text="VIEW">
        {t('hero.announcement')} 
        <ArrowRight size={16} style={langState.current === 'ar' ? 'transform: scaleX(-1); margin-right: 4px;' : ''}/>
      </a>
    </div>

    <!-- Huge Typography -->
    <h1 class="hero-title">
      <div class="line-wrap"><span class="line" bind:this={lines[0]}>{t('hero.title.line1')}</span></div>
      <div class="line-wrap"><span class="line" bind:this={lines[1]}>{t('hero.title.line2')}</span></div>
      <div class="line-wrap"><span class="line" bind:this={lines[2]}>{t('hero.title.line3')}</span></div>
      <div class="line-wrap"><span class="line" bind:this={lines[3]}>{t('hero.title.line4')}</span></div>
    </h1>
    
    <div class="hero-bottom">
      <p class="hero-lead">{t('hero.lead')}</p>
      <div data-cursor-text="">
        <MagneticButton text={t('hero.discover')} dark={true} />
      </div>
    </div>
  </div>
</section>

<style>
  .hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 120px var(--space-xl) var(--space-xl);
    color: var(--color-text-inverse);
    overflow: hidden;
  }

  .hero-bg {
    position: absolute;
    top: -10%; /* Extra height to allow parallax movement without showing edge */
    left: 0;
    width: 100%;
    height: 120%; 
    z-index: -1;
    will-change: transform;
  }

  .hero-bg img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.4) 100%);
  }

  .hero-content {
    position: relative;
    z-index: 10;
    max-width: 1600px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .announcement {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    margin-bottom: var(--space-md);
  }

  .badge {
    background-color: var(--color-text-inverse);
    color: var(--color-text-primary);
    padding: 6px 16px;
    border-radius: 999px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .announcement a {
    color: var(--color-text-inverse);
    text-decoration: none;
    font-weight: 500;
    font-size: 0.875rem;
    display: flex;
    align-items: center;
    gap: 8px;
    position: relative;
    white-space: normal;
  }
  
  .announcement a::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: currentColor;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .announcement a:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }

  .hero-title {
    font-size: clamp(3rem, 7.5vw, 120px);
    text-transform: uppercase;
    margin-bottom: auto;
    line-height: 0.95;
    letter-spacing: -0.04em;
    font-weight: 600;
  }

  @media (min-width: 1600px) {
    .hero-title {
      font-size: 130px;
    }
  }

  .line-wrap {
    overflow: hidden;
  }

  .line {
    display: block;
    transform: translateY(100%); /* hidden initially */
    will-change: transform;
    white-space: nowrap;
  }

  .hero-bottom {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .hero-lead {
    font-size: 1.5rem;
    max-width: 500px;
    opacity: 0.9;
    font-weight: 400;
  }

  @media (max-width: 1024px) {
    .hero {
      min-height: 100dvh;
      padding: 130px var(--space-md) clamp(var(--space-md), 6vh, var(--space-xl));
    }

    .hero-title {
      font-size: clamp(1.3rem, 10.5vw, 4.5rem);
      line-height: 1.02;
      letter-spacing: -0.03em;
      /* Inherits margin-bottom: auto which pushes content to the bottom */
    }

    .hero-bottom {
      flex-direction: column;
      align-items: flex-start;
      gap: clamp(var(--space-md), 3.5vh, var(--space-lg));
      width: 100%;
      margin-top: var(--space-lg);
    }

    .hero-lead {
      font-size: clamp(1.15rem, 4.8vw, 1.55rem);
      max-width: 100%;
      line-height: 1.4;
    }
  }

  @media (max-height: 550px) {
    .hero {
      min-height: auto;
      padding: 80px var(--space-md) var(--space-md);
    }

    .hero-title {
      font-size: clamp(1.8rem, 5.5vw, 2.5rem);
      margin-bottom: var(--space-md);
    }

    .hero-bottom {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-end;
      width: 100%;
    }

    @media (max-width: 640px) {
      .hero-bottom {
        flex-direction: column;
        align-items: flex-start;
        gap: var(--space-sm);
      }
      .hero-lead {
        max-width: 100% !important;
      }
    }

    .hero-lead {
      font-size: 1rem;
      max-width: 60%;
      margin: 0;
    }
  }

  @media (max-width: 480px) {
    .announcement {
      flex-direction: column;
      align-items: flex-start !important;
      gap: var(--space-xs) !important;
      margin-bottom: var(--space-sm) !important;
    }

    .badge {
      padding: 4px 12px !important;
      font-size: 0.65rem !important;
    }

    .announcement a {
      font-size: 0.75rem !important;
    }
  }

  @media (max-width: 360px) {
    .hero {
      padding: 90px var(--space-sm) clamp(var(--space-xs), 4vh, var(--space-sm)) !important;
      min-height: 100dvh;
    }
  }
</style>
