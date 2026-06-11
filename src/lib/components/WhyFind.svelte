<script lang="ts">
    import { onMount } from "svelte";
    import { t, langState } from "$lib/translations.svelte";

    let containerRef: HTMLElement | undefined = $state();
    let progress = $state(0);

    onMount(() => {
        if (!containerRef) return;

        const handleScroll = () => {
            if (!containerRef) return;
            const rect = containerRef.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            // Calculate scroll progress when section is in view
            if (rect.top < viewportHeight && rect.bottom > 0) {
                const total = rect.height + viewportHeight;
                const current = viewportHeight - rect.top;
                progress = Math.min(1, Math.max(0, current / total));
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); // Run once initially

        return () => window.removeEventListener("scroll", handleScroll);
    });

    // Calculate the clip-path and scale on scroll dynamically
    let clipInset = $derived(100 - progress * 100);
    let scale = $derived(0.9 + progress * 0.1);
</script>

<section id="why-choose-us" class="why-us_root__aGsFp" bind:this={containerRef}>
    <div class="container_container__v5gtR">
        <div class="why-us_grid__RSZoF">
            <div class="why-us_title__N3aCA">
                <h2>{t("why.title")}</h2>
            </div>

            <div class="why-us_text__rT1u9">
                <p>{t("why.subtitle")}</p>
            </div>
        </div>

        <!-- Revealing Video Frame -->
        <div
            class="why-us_preview__OofJt"
            style="clip-path: inset(0% {clipInset}% 0% 0%); transform: scale({scale});"
        >
            <!-- svelte-ignore a11y_media_has_caption -->
            <video src="/videos/why-us.mp4" autoplay playsinline loop muted
            ></video>
        </div>

        <!-- Excellence, Quality, Service Grid -->
        <div class="why-reasons-grid">
            <div class="reason-card">
                <div class="reason-num">{t("why.01.num")}</div>
                <h3 class="reason-title">{t("why.01.title")}</h3>
                <p class="reason-desc">{t("why.01.desc")}</p>
            </div>
            <div class="reason-card">
                <div class="reason-num">{t("why.02.num")}</div>
                <h3 class="reason-title">{t("why.02.title")}</h3>
                <p class="reason-desc">{t("why.02.desc")}</p>
            </div>
            <div class="reason-card">
                <div class="reason-num">{t("why.03.num")}</div>
                <h3 class="reason-title">{t("why.03.title")}</h3>
                <p class="reason-desc">{t("why.03.desc")}</p>
            </div>
        </div>
    </div>
</section>

<style>
    .why-us_root__aGsFp {
        padding: var(--space-xl) 0;
        background-color: var(--color-bg-primary);
        overflow: hidden;
    }

    .why-us_grid__RSZoF {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: var(--space-lg);
        gap: var(--space-xl);
    }

    .why-us_title__N3aCA {
        flex: 1;
    }

    .why-us_title__N3aCA h2 {
        font-size: clamp(2.5rem, 6vw, 5rem);
        text-transform: uppercase;
        font-weight: 500;
    }

    .why-us_text__rT1u9 {
        flex: 1;
        font-size: clamp(1.2rem, 3.2vw, 1.85rem);
        line-height: 1.35;
        font-weight: 400;
    }

    .why-us_preview__OofJt {
        width: 100%;
        aspect-ratio: 16 / 9;
        border-radius: 8px;
        overflow: hidden;
        margin-top: var(--space-lg);
        transition:
            clip-path 0.1s linear,
            transform 0.1s linear;
        will-change: clip-path, transform;
        background-color: #000;
    }

    .why-us_preview__OofJt video {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .why-reasons-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: var(--space-xl);
        margin-top: var(--space-xl);
        padding-top: var(--space-xl);
        border-top: 1px solid var(--color-border);
    }

    .reason-card {
        display: flex;
        flex-direction: column;
        gap: var(--space-sm);
    }

    .reason-num {
        font-family: var(--font-primary);
        font-size: clamp(2rem, 4vw, 3.5rem);
        font-weight: 600;
        color: var(--color-border);
    }

    .reason-title {
        font-family: var(--font-primary);
        font-size: clamp(1.1rem, 3vw, 1.5rem);
        font-weight: 500;
        text-transform: uppercase;
    }

    .reason-desc {
        font-family: var(--font-secondary);
        font-size: 1rem;
        color: var(--color-text-muted);
        line-height: 1.6;
    }

    @media (max-width: 768px) {
        .why-us_grid__RSZoF {
            flex-direction: column;
            gap: var(--space-sm);
            margin-bottom: var(--space-md);
        }

        .why-reasons-grid {
            grid-template-columns: 1fr;
            gap: var(--space-lg);
        }
    }
</style>
