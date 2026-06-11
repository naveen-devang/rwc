<script lang="ts">
  import { onMount } from 'svelte';
  import { t, langState } from '$lib/translations.svelte';
  import agent1 from '$lib/assets/agent-split-1.jpg';
  import agent2 from '$lib/assets/agent-split-2.jpg';

  let containerRef: HTMLElement | undefined = $state();
  let progress = $state(0);

  onMount(() => {
    if (!containerRef) return;

    const handleScroll = () => {
      if (!containerRef) return;
      const rect = containerRef.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      if (rect.top < viewportHeight && rect.bottom > 0) {
        const total = rect.height + viewportHeight;
        const current = viewportHeight - rect.top;
        progress = Math.min(1, Math.max(0, current / total));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  });

  // Parallax offsets reactively
  let img1Y = $derived((progress - 0.5) * -80);
  let img2Y = $derived((progress - 0.5) * 80);
</script>

<section id="global-reach" class="for-agents_section" bind:this={containerRef}>
  <div class="for-agents_wrapper__Os8to">
    <div class="container_container__v5gtR">
      <div class="assymetric-cols_row__tAyrs">
        <!-- Left Column (Hidden on Mobile) -->
        <div class="assymetric-cols_col__yB8jY assymetric-cols_hide-left-col-on-mobile__BXT8l">
          <div class="assymetric-image-split_label__4qblS">{t('global.title')}</div>
          <div class="assymetric-image-split_small-img__199s0">
            <div class="parallax-img-wrap" style="transform: translateY({img1Y}px);">
              <enhanced:img src={agent1} alt="RAK Cement factory export logistics" loading="lazy" />
            </div>
          </div>
        </div>

        <!-- Right Column -->
        <div class="assymetric-cols_col__yB8jY">
          <div class="assymetric-image-split_right-col__HoO1A">
            <div class="for-agents_above-text__SVOzq">
              {t('global.header')}
            </div>
            
            <div class="assymetric-image-split_image___yxAD">
              <div class="parallax-img-wrap" style="transform: translateY({img2Y}px);">
                <enhanced:img src={agent2} alt="Modern concrete production and distribution" loading="lazy" />
              </div>
            </div>
            
            <div class="for-agents_below-text__DBjLv">
              {t('global.desc')}
            </div>
            
            <div class="for-agents_controls__pBRRC">
              <a class="button_button-round__TFjlU button_color-primary__JJ7Hh" href="#contact">
                <div class="button_content__6Zh3n">
                  <div class="button_button-round-text__IEwW5">
                    <span data-text={t('global.btn')}>{t('global.btn')}</span>
                  </div>
                  <span class="button_icon-after__vljdM">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="20" height="20">
                      <path fill="currentColor" d="m20.78 12.531-6.75 6.75a.75.75 0 1 1-1.06-1.061l5.47-5.47H3.75a.75.75 0 1 1 0-1.5h14.69l-5.47-5.469a.75.75 0 1 1 1.06-1.061l6.75 6.75a.75.75 0 0 1 0 1.061"></path>
                    </svg>
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .for-agents_section {
    padding: var(--space-xl) 0;
    background-color: var(--color-bg-primary);
    overflow: hidden;
  }

  .for-agents_wrapper__Os8to {
    width: 100%;
  }

  .assymetric-image-split_label__4qblS {
    font-family: var(--font-secondary);
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--color-text-muted);
    margin-bottom: var(--space-lg);
  }

  .assymetric-image-split_small-img__199s0 {
    width: 100%;
    aspect-ratio: 4 / 5;
    border-radius: 8px;
    overflow: hidden;
    position: relative;
    max-width: 440px;
  }

  .assymetric-image-split_image___yxAD {
    width: 100%;
    aspect-ratio: 16 / 9;
    border-radius: 8px;
    overflow: hidden;
    position: relative;
    margin: var(--space-md) 0 var(--space-lg);
  }

  .parallax-img-wrap {
    position: absolute;
    top: -10%;
    left: 0;
    width: 100%;
    height: 120%;
    will-change: transform;
    transition: transform 0.1s linear;
  }

  .parallax-img-wrap :global(img) {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .for-agents_above-text__SVOzq {
    font-family: var(--font-primary);
    font-size: clamp(1.8rem, 4vw, 3rem);
    line-height: 1.15;
    font-weight: 500;
    text-transform: uppercase;
  }

  .for-agents_below-text__DBjLv {
    font-family: var(--font-secondary);
    font-size: 1.125rem;
    line-height: 1.6;
    color: var(--color-text-muted);
    margin-bottom: var(--space-lg);
    max-width: 600px;
  }

  .for-agents_controls__pBRRC {
    display: flex;
    justify-content: flex-start;
  }

  @media (max-width: 768px) {
    .assymetric-cols_hide-left-col-on-mobile__BXT8l {
      display: none;
    }
  }
</style>
