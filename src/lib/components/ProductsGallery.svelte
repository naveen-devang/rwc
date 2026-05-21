<script lang="ts">
  import { t } from '$lib/translations.svelte';

  let activeTab = $state('all');
  
  let tabs = $derived([
    { id: 'all', label: t('prod.tab.all') },
    { id: 'white-cement', label: t('prod.tab.white_cement') },
    { id: 'concrete-block', label: t('prod.tab.concrete_block') },
    { id: 'interlock', label: t('prod.tab.interlock') },
    { id: 'lime', label: t('prod.tab.lime') }
  ]);

  // Using high-quality architecture and materials from Unsplash
  const allImages = [
    { id: 1, category: 'white-cement', src: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800' },
    { id: 2, category: 'concrete-block', src: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800' },
    { id: 3, category: 'interlock', src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800' },
    { id: 4, category: 'lime', src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800' },
    { id: 5, category: 'white-cement', src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800' },
    { id: 6, category: 'concrete-block', src: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&q=80&w=800' },
    { id: 7, category: 'interlock', src: 'https://images.unsplash.com/photo-1584467735815-f778f274e296?auto=format&fit=crop&q=80&w=800' },
    { id: 8, category: 'lime', src: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800' },
    { id: 9, category: 'white-cement', src: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=800' },
    { id: 10, category: 'concrete-block', src: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&q=80&w=800' },
    { id: 11, category: 'interlock', src: 'https://images.unsplash.com/photo-1584467735867-4297ae2ebcee?auto=format&fit=crop&q=80&w=800' },
    { id: 12, category: 'lime', src: 'https://images.unsplash.com/photo-1523634921620-22ba9842a201?auto=format&fit=crop&q=80&w=800' }
  ];

  let filteredImages = $derived(
    activeTab === 'all' 
      ? allImages 
      : allImages.filter(img => img.category === activeTab)
  );
</script>

<section class="products-gallery">
  <div class="inner">
    <div class="header">
      <h2>{t('prod.title')}</h2>
      
      <div class="tabs-container">
        <div class="tabs">
          {#each tabs as tab}
            <button 
              class="tab" 
              class:active={activeTab === tab.id}
              onclick={() => activeTab = tab.id}
            >
              {tab.label}
            </button>
          {/each}
        </div>
      </div>
    </div>

    <div class="grid-wrapper">
      <div class="grid">
        {#each filteredImages as img (img.id)}
          <div class="image-wrapper">
            <img src={img.src} alt="Product application" loading="lazy" />
            <div class="overlay">
              <span class="overlay-text">{t('prod.view_details')}</span>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  .products-gallery {
    padding: var(--space-lg) var(--space-xl) var(--space-xl);
    background-color: var(--color-bg-primary);
  }

  .inner {
    max-width: 1600px;
    margin: 0 auto;
  }

  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: var(--space-xl);
    text-align: center;
  }

  .header h2 {
    font-size: 3.5rem;
    text-transform: uppercase;
    letter-spacing: -0.02em;
    margin-bottom: var(--space-lg);
  }

  .tabs-container {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .tabs {
    display: flex;
    gap: var(--space-lg);
    overflow-x: auto;
    scrollbar-width: none; /* Firefox */
  }

  .tabs::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }

  .tab {
    background: none;
    border: none;
    padding: var(--space-sm) 0;
    font-family: var(--font-primary);
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--color-text-muted);
    cursor: pointer;
    position: relative;
    white-space: nowrap;
    transition: color 0.3s ease;
  }

  .tab:hover {
    color: var(--color-text-primary);
  }

  .tab.active {
    color: var(--color-text-primary);
  }

  .tab::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--color-text-primary);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  .tab.active::after {
    transform: scaleX(1);
  }

  .grid-wrapper {
    width: 100%;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
  }

  .image-wrapper {
    position: relative;
    aspect-ratio: 4/3;
    overflow: hidden;
    background-color: var(--color-bg-secondary);
    cursor: pointer;
  }

  .image-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .overlay {
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  .overlay-text {
    color: var(--color-text-inverse);
    font-family: var(--font-primary);
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    transform: translateY(20px);
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .image-wrapper:hover img {
    transform: scale(1.05);
  }

  .image-wrapper:hover .overlay {
    opacity: 1;
  }

  .image-wrapper:hover .overlay-text {
    transform: translateY(0);
  }

  @media (max-width: 1024px) {
    .header h2 {
      font-size: clamp(1.4rem, 7.5vw, 2.5rem);
    }
  }

  @media (max-width: 1200px) {
    .grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 900px) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 600px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }
</style>
