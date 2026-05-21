<script lang="ts">
  import { onMount } from 'svelte';
  import { animate, spring } from 'motion';

  let btnRef: HTMLButtonElement;
  let textRef: HTMLSpanElement;

  let { text = "Click Me", dark = false } = $props();

  onMount(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!btnRef) return;
      const rect = btnRef.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      // Move button container
      animate(btnRef, { x: x * 0.3, y: y * 0.3 } as any, { ease: "easeOut", duration: 0.3 } as any);
      // Move text slightly more for parallax
      animate(textRef, { x: x * 0.15, y: y * 0.15 } as any, { ease: "easeOut", duration: 0.3 } as any);
    };

    const handleMouseLeave = () => {
      if (!btnRef) return;
      animate(btnRef, { x: 0, y: 0 } as any, { ease: "easeOut", duration: 0.5 } as any);
      animate(textRef, { x: 0, y: 0 } as any, { ease: "easeOut", duration: 0.5 } as any);
    };

    btnRef.addEventListener('mousemove', handleMouseMove);
    btnRef.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if(btnRef) {
        btnRef.removeEventListener('mousemove', handleMouseMove);
        btnRef.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  });
</script>

<button class="magnetic-btn" class:dark bind:this={btnRef}>
  <span bind:this={textRef}>{text}</span>
</button>

<style>
  .magnetic-btn {
    position: relative;
    padding: 20px 40px;
    border-radius: 999px;
    border: 1px solid var(--color-border);
    background: transparent;
    color: var(--color-text-primary);
    font-family: var(--font-secondary);
    font-weight: 500;
    font-size: 1rem;
    overflow: hidden;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    will-change: transform;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  .magnetic-btn.dark {
    background: var(--color-text-primary);
    color: var(--color-bg-primary);
    border-color: var(--color-text-primary);
  }

  .magnetic-btn::before {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--color-text-primary);
    border-radius: 50% 50% 0 0;
    transition: transform 0.4s cubic-bezier(0.76, 0, 0.24, 1);
    z-index: 0;
  }

  .magnetic-btn.dark::before {
    background-color: var(--color-bg-primary);
  }

  .magnetic-btn:hover::before {
    transform: translateY(-100%);
    border-radius: 0;
  }

  .magnetic-btn:hover {
    color: var(--color-bg-primary);
  }

  .magnetic-btn.dark:hover {
    color: var(--color-text-primary);
  }

  span {
    position: relative;
    z-index: 1;
    pointer-events: none;
    will-change: transform;
    display: block;
    white-space: nowrap;
  }

  @media (max-width: 360px) {
    .magnetic-btn {
      padding: 12px 24px !important;
      font-size: 0.85rem !important;
    }
  }
</style>
