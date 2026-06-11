<script lang="ts">
  import { onMount } from 'svelte';
  import { t, langState } from '$lib/translations.svelte';

  let sectionRef: HTMLElement | undefined = $state();
  let inView = $state(false);

  onMount(() => {
    if (!sectionRef) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        inView = true;
        observer.disconnect();
      }
    }, { threshold: 0.15 });
    
    observer.observe(sectionRef);
    return () => observer.disconnect();
  });
</script>

<section id="sister-companies" class="rewired_section" bind:this={sectionRef}>
  <div class="rewired_wrapper__mqx1v">
    <div class="container_container__v5gtR">
      <div class="assymetric-cols_row__tAyrs">
        <!-- Left Column -->
        <div class="assymetric-cols_col__yB8jY">
          <div class="rewired_left-col__vLphn" class:animate={inView}>
            <div>
              <h2 class="rewired_title__1_3e9">
                {@html t('sister.title').replace('\n', '<br/>')}
              </h2>
            </div>
            
            <a class="button_button-round__TFjlU button_color-primary__JJ7Hh" href="#products">
              <div class="button_content__6Zh3n">
                <div class="button_button-round-text__IEwW5">
                  <span data-text={t('hero.discover')}>{t('hero.discover')}</span>
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

        <!-- Right Column -->
        <div class="assymetric-cols_col__yB8jY">
          <div class="rewired_right-col" class:animate={inView}>
            <div class="rewired_label__db93N">{t('sister.desc')}</div>
            <div class="rewired_list">
              <!-- Step 1 -->
              <div class="rewired_list-item__R5lrq" data-index="01">
                <span>{t('sister.noora')}</span>
              </div>
              
              <!-- Step 2 -->
              <div class="rewired_list-item__R5lrq" data-index="02">
                <span>{t('sister.mbf')}</span>
              </div>
              
              <!-- Step 3 -->
              <div class="rewired_list-item__R5lrq" data-index="03">
                <span>{t('footer.col.products.wc')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .rewired_section {
    padding: var(--space-xl) 0;
    background-color: var(--color-bg-primary);
    overflow: hidden;
  }

  .rewired_wrapper__mqx1v {
    width: 100%;
  }

  .rewired_left-col__vLphn {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-lg);
    opacity: 0;
    transform: translateY(40px);
    transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease;
  }

  .rewired_left-col__vLphn.animate {
    opacity: 1;
    transform: translateY(0);
  }

  .rewired_title__1_3e9 {
    font-size: clamp(2.5rem, 6vw, 5rem);
    line-height: 1.0;
    text-transform: uppercase;
    font-weight: 500;
  }

  .rewired_label__db93N {
    font-family: var(--font-secondary);
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--color-text-muted);
    margin-bottom: var(--space-md);
    opacity: 0;
    transition: opacity 0.5s ease 0.2s;
  }

  .rewired_right-col.animate .rewired_label__db93N {
    opacity: 1;
  }

  .rewired_list {
    display: flex;
    flex-direction: column;
  }

  .rewired_list-item__R5lrq {
    border-top: 1px solid var(--color-border);
    padding: var(--space-md) 0;
    display: flex;
    align-items: flex-start;
    gap: var(--space-md);
    opacity: 0;
    transform: translateY(30px);
    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease;
  }

  .rewired_list-item__R5lrq:last-child {
    border-bottom: 1px solid var(--color-border);
  }

  /* Staggered step fade reveals */
  .rewired_right-col.animate .rewired_list-item__R5lrq:nth-child(1) {
    opacity: 1;
    transform: translateY(0);
    transition-delay: 0.3s;
  }

  .rewired_right-col.animate .rewired_list-item__R5lrq:nth-child(2) {
    opacity: 1;
    transform: translateY(0);
    transition-delay: 0.4s;
  }

  .rewired_right-col.animate .rewired_list-item__R5lrq:nth-child(3) {
    opacity: 1;
    transform: translateY(0);
    transition-delay: 0.5s;
  }

  .rewired_list-item__R5lrq::before {
    content: attr(data-index);
    font-family: var(--font-secondary);
    font-size: 1rem;
    font-weight: 600;
    color: var(--color-text-muted);
    margin-top: 4px;
  }

  .rewired_list-item__R5lrq span {
    font-family: var(--font-primary);
    font-size: clamp(1.2rem, 3.2vw, 2.2rem);
    line-height: 1.2;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    .rewired_list-item__R5lrq span {
      font-size: 1.4rem;
    }
  }
</style>
