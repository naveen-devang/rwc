<script lang="ts">
  import { onMount } from 'svelte';

  let cursorRef: HTMLDivElement | undefined = $state();
  let textRef: HTMLSpanElement | undefined = $state();
  
  let isHovering = $state(false);
  let cursorText = $state("");

  onMount(() => {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX;
    let cursorY = mouseY;

    const updateStateFromTarget = (target: Element | null) => {
      if (!target) {
        isHovering = false;
        cursorText = "";
        return;
      }
      isHovering = !!target.closest('a, button, [role="button"], img, input, select, textarea');
      const textElement = target.closest('[data-cursor-text]') as HTMLElement;
      if (textElement) {
        cursorText = textElement.dataset.cursorText || "";
        isHovering = true;
      } else {
        cursorText = "";
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      updateStateFromTarget(e.target as Element);
    };

    const onScroll = () => {
      const target = document.elementFromPoint(mouseX, mouseY);
      updateStateFromTarget(target);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('scroll', onScroll, { passive: true });

    const updateCursor = () => {
      cursorX += (mouseX - cursorX) * 0.2;
      cursorY += (mouseY - cursorY) * 0.2;
      
      if (cursorRef) {
        // Change width/height directly instead of scale to avoid blurriness
        const size = cursorText !== "" ? 84 : (isHovering ? 42 : 14);
        cursorRef.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
        cursorRef.style.width = `${size}px`;
        cursorRef.style.height = `${size}px`;
      }
      
      requestAnimationFrame(updateCursor);
    };
    
    updateCursor();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
    };
  });
</script>

<div class="cursor-wrapper" bind:this={cursorRef}>
  <div class="cursor"></div>
  {#if cursorText !== ""}
    <span class="cursor-text" bind:this={textRef}>{cursorText}</span>
  {/if}
</div>

<style>
  .cursor-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 14px;
    height: 14px;
    pointer-events: none;
    z-index: 9999;
    mix-blend-mode: difference;
    will-change: transform, width, height;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: width 0.3s cubic-bezier(0.16, 1, 0.3, 1), height 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }

  @media (max-width: 768px), (pointer: coarse) {
    .cursor-wrapper {
      display: none !important;
    }
  }

  .cursor {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 50%;
  }

  .cursor-text {
    position: relative;
    z-index: 2;
    color: #000;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-family: var(--font-secondary);
    white-space: nowrap;
    opacity: 0;
    animation: fadeIn 0.2s forwards;
  }

  @keyframes fadeIn {
    to { opacity: 1; }
  }
</style>
