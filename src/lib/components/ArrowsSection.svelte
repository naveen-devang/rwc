<script lang="ts">
    import { onMount } from "svelte";
    import { t } from "$lib/translations.svelte";
    import step1Img from "$lib/assets/rak_quarry_limestone.png";
    import step2Img from "$lib/assets/unnamed.jpg";
    import step3Img from "$lib/assets/modern_block_production.png";
    import step4Img from "$lib/assets/rak_iconic_structure.png";

    let containerRef: HTMLElement | undefined = $state();
    let progress = $state(0);
    let isMobile = $state(false);

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

        const handleResize = () => {
            isMobile = window.innerWidth <= 1024;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleResize);

        handleScroll();
        handleResize();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    });

    // Calculate staggered vertical offsets reactively (disabled on mobile)
    let yOffset1 = $derived(isMobile ? 0 : (progress - 0.5) * -50);
    let yOffset2 = $derived(isMobile ? 0 : (progress - 0.5) * 50);
    let yOffset3 = $derived(isMobile ? 0 : (progress - 0.5) * -90);
    let yOffset4 = $derived(isMobile ? 0 : (progress - 0.5) * 90);
</script>

<section id="arrows" class="pipeline_root" bind:this={containerRef}>
    <div class="container_container__v5gtR">
        <!-- Header -->
        <div class="pipeline_header">
            <span class="pipeline_subtitle">{t("arrows.pipeline.title")}</span>
            <h2>{t("arrows.title")}</h2>
            <p class="pipeline_lead">{t("arrows.pipeline.lead")}</p>
        </div>

        <!-- Parallax Pipeline Cards Grid -->
        <div class="pipeline_grid">
            <!-- Card 1 -->
            <div
                class="pipeline_card card1"
                style="transform: translate3d(0, {yOffset1}px, 0);"
            >
                <div class="card_content">
                    <span class="card_number">01</span>
                    <h3 class="card_title">{t("arrows.step1.title")}</h3>
                    <p class="card_desc">{t("arrows.step1.desc")}</p>
                </div>
                <div class="card_image-wrapper">
                    <enhanced:img
                        src={step1Img}
                        alt={t("arrows.step1.title")}
                        loading="lazy"
                    />
                </div>
            </div>

            <!-- Card 2 -->
            <div
                class="pipeline_card card2"
                style="transform: translate3d(0, {yOffset2}px, 0);"
            >
                <div class="card_content">
                    <span class="card_number">02</span>
                    <h3 class="card_title">{t("arrows.step2.title")}</h3>
                    <p class="card_desc">{t("arrows.step2.desc")}</p>
                </div>
                <div class="card_image-wrapper">
                    <enhanced:img
                        src={step2Img}
                        alt={t("arrows.step2.title")}
                        loading="lazy"
                    />
                </div>
            </div>

            <!-- Card 3 -->
            <div
                class="pipeline_card card3"
                style="transform: translate3d(0, {yOffset3}px, 0);"
            >
                <div class="card_content">
                    <span class="card_number">03</span>
                    <h3 class="card_title">{t("arrows.step3.title")}</h3>
                    <p class="card_desc">{t("arrows.step3.desc")}</p>
                </div>
                <div class="card_image-wrapper">
                    <enhanced:img
                        src={step3Img}
                        alt={t("arrows.step3.title")}
                        loading="lazy"
                    />
                </div>
            </div>

            <!-- Card 4 -->
            <div
                class="pipeline_card card4"
                style="transform: translate3d(0, {yOffset4}px, 0);"
            >
                <div class="card_content">
                    <span class="card_number">04</span>
                    <h3 class="card_title">{t("arrows.step4.title")}</h3>
                    <p class="card_desc">{t("arrows.step4.desc")}</p>
                </div>
                <div class="card_image-wrapper">
                    <enhanced:img
                        src={step4Img}
                        alt={t("arrows.step4.title")}
                        loading="lazy"
                    />
                </div>
            </div>
        </div>

        <!-- Outro Description -->
        <div class="pipeline_outro">
            <p>{t("arrows.lead")}</p>
        </div>
    </div>
</section>

<style>
    .pipeline_root {
        padding: var(--space-xxl) 0;
        background-color: var(--color-bg-primary);
        overflow: hidden;
        position: relative;
    }

    .pipeline_header {
        text-align: center;
        max-width: 900px;
        margin: 0 auto var(--space-xl);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--space-xs);
    }

    .pipeline_subtitle {
        text-transform: uppercase;
        font-size: 0.85rem;
        font-weight: 700;
        letter-spacing: 0.12em;
        color: #b1ebff;
    }

    .pipeline_header h2 {
        font-size: clamp(2.2rem, 5.5vw, 4rem);
        text-transform: uppercase;
        font-weight: 600;
        line-height: 1.1;
        letter-spacing: -0.02em;
    }

    .pipeline_lead {
        font-family: var(--font-secondary);
        font-size: clamp(1.1rem, 2.2vw, 1.35rem);
        line-height: 1.5;
        color: var(--color-text-muted);
        max-width: 750px;
        margin-top: 8px;
    }

    .pipeline_grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 24px;
        margin: var(--space-xl) auto;
        max-width: 1300px;
        width: 100%;
        align-items: stretch;
    }

    .pipeline_card {
        background-color: var(--color-bg-secondary);
        border: 1px solid var(--color-border);
        border-radius: 16px;
        padding: var(--space-md);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 24px;
        transition:
            box-shadow 0.4s ease,
            border-color 0.4s ease,
            transform 0.1s linear;
        will-change: transform;
        height: 100%;
    }

    .pipeline_card:hover {
        border-color: #b1ebff;
        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.04);
    }

    .card_content {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .card_number {
        font-size: 1.75rem;
        font-weight: 300;
        font-family: var(--font-primary);
        color: #b1ebff;
        line-height: 1;
    }

    .card_title {
        font-family: var(--font-primary);
        font-size: 1.25rem;
        font-weight: 600;
        text-transform: uppercase;
        color: var(--color-text-primary);
        letter-spacing: -0.01em;
    }

    .card_desc {
        font-family: var(--font-secondary);
        font-size: 0.95rem;
        color: var(--color-text-muted);
        line-height: 1.55;
    }

    .card_image-wrapper {
        aspect-ratio: 0.95;
        overflow: hidden;
        border-radius: 12px;
        position: relative;
        width: 100%;
    }

    .card_image-wrapper :global(img) {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .pipeline_card:hover .card_image-wrapper :global(img) {
        transform: scale(1.06);
    }

    .pipeline_outro {
        text-align: center;
        max-width: 850px;
        margin: var(--space-xl) auto 0;
    }

    .pipeline_outro p {
        font-family: var(--font-secondary);
        font-size: clamp(1.2rem, 3.2vw, 1.8rem);
        line-height: 1.4;
        font-weight: 400;
        color: var(--color-text-primary);
    }

    @media (max-width: 1024px) {
        .pipeline_root {
            padding: var(--space-xl) 0;
        }

        .pipeline_grid {
            grid-template-columns: 1fr;
            gap: 32px;
            margin: var(--space-lg) auto;
        }

        .pipeline_card {
            height: auto;
            gap: 16px;
            padding: 24px;
        }

        .card_image-wrapper {
            aspect-ratio: 1.6;
        }
    }
</style>
