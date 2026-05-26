<script lang="ts">
  import '../app.css';
  import { onMount } from 'svelte';
  import Lenis from 'lenis';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Preloader from '$lib/components/Preloader.svelte';

  import { langState } from '$lib/translations.svelte';

  let lenis: Lenis;

  onMount(() => {
    // Force scroll to top on page load to prevent browser from restoring scroll position under the preloader
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  });
  
  let { data, children } = $props<{ data: { lang: 'en' | 'ar' }, children: any }>();
  
  // Initialize reactive language state with the server-detected value
  $effect.pre(() => {
    langState.current = data.lang;
  });
</script>

<Preloader />
<Navbar />

<main>
  {@render children()}
</main>

<Footer />
