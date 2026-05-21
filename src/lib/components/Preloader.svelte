<script lang="ts">
  import { onMount } from 'svelte';
  import { animate } from 'motion';

  let preloaderRef: HTMLDivElement | undefined = $state();
  let textRef: HTMLDivElement | undefined = $state();
  let percentage = $state(0);
  let isComplete = $state(false);

  onMount(() => {
    // Simulate loading progress
    let duration = 1500; // 1.5 seconds
    let startTime = performance.now();
    
    const updateProgress = (currentTime: number) => {
      let elapsed = currentTime - startTime;
      let progress = Math.min(elapsed / duration, 1);
      
      // Use easeOut cubic for the number counter
      let easeProgress = 1 - Math.pow(1 - progress, 3);
      percentage = Math.floor(easeProgress * 100);

      if (progress < 1) {
        requestAnimationFrame(updateProgress);
      } else {
        // Trigger exit animation
        if (textRef && preloaderRef) {
          animate(
            textRef,
            { opacity: 0, y: -20 } as any,
            { duration: 0.4, ease: "easeInOut" } as any
          ).finished.then(() => {
            if (preloaderRef) {
              animate(
                preloaderRef,
                { y: '-100%' } as any,
                { duration: 0.8, ease: [0.76, 0, 0.24, 1] } as any // Cuberto-style sharp cubic bezier
              ).finished.then(() => {
                isComplete = true;
              });
            }
          });
        } else {
          isComplete = true;
        }
      }
    };

    requestAnimationFrame(updateProgress);
  });
</script>

{#if !isComplete}
  <div class="preloader" bind:this={preloaderRef}>
    <div class="counter" bind:this={textRef}>
      {percentage}%
    </div>
  </div>
{/if}

<style>
  .preloader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: var(--color-bg-dark);
    color: var(--color-text-inverse);
    z-index: 99999;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    padding: var(--space-xl);
    pointer-events: none;
    will-change: transform;
  }

  .counter {
    font-family: var(--font-primary);
    font-size: clamp(3.5rem, 15vw, 8rem);
    font-weight: 500;
    line-height: 0.8;
    letter-spacing: -0.05em;
  }
</style>
