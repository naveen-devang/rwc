<script lang="ts">
  import { t, langState } from '$lib/translations.svelte';
  import outroBg from '$lib/assets/outro-bg.jpg';
</script>

<section id="outro" class="outro_root__stMHm">
  <!-- Backdrop image -->
  <div class="outro_bg">
    <enhanced:img src={outroBg} alt="Modern concrete estate outline" loading="lazy" />
    <div class="outro_overlay"></div>
  </div>

  <!-- Content Block -->
  <div class="container_container__v5gtR outro_content">
    <div class="outro_title">
      <h2>
        {#if langState.current === 'en'}
          Building For<br/> <span class="em">Tomorrow.</span>
        {:else}
          نبني<br/> <span class="em">للغد.</span>
        {/if}
      </h2>
    </div>
    
    <div class="outro_actions">
      <a class="button_button-round__TFjlU button_color-primary__JJ7Hh button_inversed__slQcI" href="#contact">
        <div class="button_content__6Zh3n">
          <div class="button_button-round-text__IEwW5">
            <span data-text={t('outro.btn')}>{t('outro.btn')}</span>
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
  .outro_root__stMHm {
    position: relative;
    min-height: 80vh;
    width: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--space-xxl) 0;
  }

  .outro_bg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  .outro_bg :global(img) {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .outro_overlay {
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.45);
  }

  .outro_content {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: var(--space-lg);
  }

  .outro_title h2 {
    font-size: clamp(2.5rem, 6.5vw, 5.5rem);
    text-transform: uppercase;
    font-weight: 500;
    line-height: 1.1;
    color: var(--color-text-inverse);
  }

  .outro_title h2 .em {
    color: rgba(255, 255, 255, 0.7);
    font-weight: 400;
  }

  .outro_actions {
    display: flex;
    justify-content: center;
  }
</style>
