<script lang="ts">
  import { t, langState } from '$lib/translations.svelte';
  import mortgageImg from '$lib/assets/feature-mortgage.jpg';
  import managementImg from '$lib/assets/feature-management.jpg';
  import developmentImg from '$lib/assets/feature-development.jpg';

  const cards = $derived([
    {
      title: t('features.1.title'),
      desc: t('features.1.desc'),
      img: mortgageImg
    },
    {
      title: t('features.2.title'),
      desc: t('features.2.desc'),
      img: managementImg
    },
    {
      title: t('features.3.title'),
      desc: t('features.3.desc'),
      img: developmentImg
    }
  ]);
</script>

<section id="features" class="features_root__CCic6">
  <div class="container_container__v5gtR">
    <!-- Header -->
    <div class="features_header">
      <h2>{t('features.title')}</h2>
      <p class="features_lead">{t('features.lead')}</p>
    </div>

    <!-- Cards Grid -->
    <div class="features_grid">
      {#each cards as card}
        <div class="features_card">
          <!-- Image Box with Hover Scale -->
          <div class="features_card-img-box">
            <enhanced:img src={card.img} alt={card.title} loading="lazy" />
          </div>
          
          <div class="features_card-content">
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
            
            <a class="button_button-round__TFjlU button_color-secondary__FZDOG features_card-btn" href="#contact">
              <div class="button_content__6Zh3n">
                <div class="button_button-round-text__IEwW5">
                  <span data-text={t('features.btn')}>{t('features.btn')}</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .features_root__CCic6 {
    padding: var(--space-xl) 0;
    background-color: var(--color-bg-secondary);
  }

  .features_header {
    max-width: 800px;
    margin-bottom: var(--space-lg);
  }

  .features_header h2 {
    font-size: clamp(2rem, 5.5vw, 4.5rem);
    text-transform: uppercase;
    font-weight: 500;
    margin-bottom: var(--space-md);
  }

  .features_lead {
    font-family: var(--font-secondary);
    font-size: 1.25rem;
    line-height: 1.6;
    color: var(--color-text-muted);
  }

  .features_grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-md);
    width: 100%;
  }

  .features_card {
    background-color: var(--color-bg-primary);
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
    display: flex;
    flex-direction: column;
    height: 100%;
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .features_card:hover {
    transform: translateY(-8px);
  }

  .features_card-img-box {
    width: 100%;
    aspect-ratio: 4 / 3;
    overflow: hidden;
    position: relative;
  }

  .features_card-img-box :global(img) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .features_card:hover .features_card-img-box :global(img) {
    transform: scale(1.08);
  }

  .features_card-content {
    padding: var(--space-md);
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: space-between;
    gap: var(--space-md);
  }

  .features_card-content h3 {
    font-family: var(--font-primary);
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.2;
    color: var(--color-text-primary);
  }

  .features_card-content p {
    font-family: var(--font-secondary);
    font-size: 1.05rem;
    line-height: 1.5;
    color: var(--color-text-muted);
    flex: 1;
  }

  .features_card-btn {
    align-self: flex-start;
    padding: 10px 24px;
    font-size: 0.75rem;
  }

  @media (max-width: 1024px) {
    .features_grid {
      grid-template-columns: 1fr;
      gap: var(--space-lg);
    }
  }
</style>
