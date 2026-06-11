<script lang="ts">
    import { onMount } from "svelte";
    import { t, langState } from "$lib/translations.svelte";
    import backImg from "$lib/assets/unnamed (2).jpg";
    import cloudImg from "$lib/assets/cloud.png";
    import smokeImg from "$lib/assets/smoke.png";

    let scrollY = $state(0);
    let isMounted = $state(false);

    onMount(() => {
        isMounted = true;
        const handleScroll = () => {
            scrollY = window.scrollY;
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    });

    // Calculate parallax translations reactively
    let backY = $derived(scrollY * 0.15);
    let cloud1X = $derived(scrollY * -0.15);
    let cloud2X = $derived(scrollY * 0.15);
    let smokeY = $derived(scrollY * 0.35);
    let contentY = $derived(scrollY * 0.05);
    let contentScale = $derived(Math.max(0.9, 1 - scrollY * 0.0002));
    let contentOpacity = $derived(Math.max(0, 1 - scrollY * 0.0015));
</script>

<section class="hero_root__N0Loz" style="visibility: visible; opacity: 1;">
    <div class="hero_top__WegWw">
        <!-- Backdrop Parallax -->
        <div class="hero_bg__S_r_n">
            <div
                class="hero_back__8ReFI"
                style="transform: translateY({backY}px);"
            >
                <enhanced:img
                    src={backImg}
                    alt="Architectural backdrop"
                    loading="eager"
                />
            </div>

            <!-- Parallax Scenic View without residential overlaps -->

            <!-- Clouds Layer -->
            <div class="hero_clouds__bC7V4">
                <div
                    class="hero_cloud__TvA3o"
                    style="transform: translate3d({cloud1X}px, 0, 0);"
                >
                    <enhanced:img
                        src={cloudImg}
                        alt="Clouds background left"
                        loading="lazy"
                    />
                </div>
                <div
                    class="hero_cloud__TvA3o"
                    style="transform: translate3d({cloud2X}px, 0, 0);"
                >
                    <enhanced:img
                        src={cloudImg}
                        alt="Clouds background right"
                        loading="lazy"
                    />
                </div>
            </div>

            <!-- Logo SVG spelling RAK CO. WHITE CEMENT -->
            <div class="hero_logo__FxgRj">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 350">
                    <text
                        x="50%"
                        y="38%"
                        dominant-baseline="middle"
                        text-anchor="middle"
                        font-weight="900"
                        font-size="110"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        letter-spacing="4"
                        font-family="var(--font-primary)">RAK CO.</text
                    >
                    <text
                        x="50%"
                        y="82%"
                        dominant-baseline="middle"
                        text-anchor="middle"
                        font-weight="900"
                        font-size="90"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        letter-spacing="4"
                        font-family="var(--font-primary)">WHITE CEMENT</text
                    >
                </svg>
            </div>

            <!-- Overlay smoke elements -->
            <div
                class="hero_smoke__8za_R"
                style="transform: translate3d(0, {smokeY}px, 0);"
            >
                <enhanced:img src={smokeImg} alt="Smoke layer" loading="lazy" />
            </div>
        </div>
    </div>

    <!-- Hero Content Grid -->
    <div
        class="hero_content__DK_Ny"
        style="transform: translate3d(0, {contentY}px, 0) scale({contentScale}); opacity: {contentOpacity};"
    >
        <div class="container_container__v5gtR">
            <!-- Announcement bar -->
            {#if t("hero.announcement")}
                <div class="hero_announcement-wrap">
                    <span class="badge">{t("hero.badge")}</span>
                    <a href="#blog" class="announcement-link">
                        {t("hero.announcement")}
                        <span class="arrow-icon">→</span>
                    </a>
                </div>
            {/if}

            <div class="hero_title__JpmHS">
                <h1>
                    <!-- Staggered line reveals -->
                    <div class="word-reveal">
                        <span class="word">{t("hero.title.line1")}&nbsp;</span>
                        <span class="word">{t("hero.title.line2")}&nbsp;</span>
                        <span class="word">{t("hero.title.line3")}&nbsp;</span>
                        <span class="word">{t("hero.title.line4")}&nbsp;</span>
                    </div>
                </h1>
            </div>

            <div class="hero_text__R6LQ5">
                <p>{t("hero.lead")}</p>
            </div>

            <div class="hero_actions__RlphJ">
                <a
                    class="button_button-round__TFjlU button_color-primary__JJ7Hh"
                    href="#products"
                >
                    <div class="button_content__6Zh3n">
                        <div class="button_button-round-text__IEwW5">
                            <span data-text={t("hero.discover")}
                                >{t("hero.discover")}</span
                            >
                        </div>
                        <span class="button_icon-after__vljdM">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                width="20"
                                height="20"
                            >
                                <path
                                    fill="currentColor"
                                    d="m20.78 12.531-6.75 6.75a.75.75 0 1 1-1.06-1.061l5.47-5.47H3.75a.75.75 0 1 1 0-1.5h14.69l-5.47-5.469a.75.75 0 1 1 1.06-1.061l6.75 6.75a.75.75 0 0 1 0 1.061"
                                ></path>
                            </svg>
                        </span>
                    </div>
                </a>
            </div>
        </div>
    </div>

    <!-- Foreground Transition Overlap -->
    <div class="hero_overlap__d3EJV">
        <div class="hero_smoke__8za_R">
            <enhanced:img
                src={smokeImg}
                alt="Foreground smoke"
                loading="lazy"
            />
        </div>
        <div class="hero_overlay__7ubgG"></div>
    </div>
</section>

<style>
    .hero_root__N0Loz {
        position: relative;
        min-height: 100vh;
        width: 100%;
        background-color: var(--color-bg-primary);
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding-bottom: 80px;
    }

    .hero_top__WegWw {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
    }

    .hero_bg__S_r_n {
        position: relative;
        width: 100%;
        height: 100%;
    }

    .hero_back__8ReFI {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 110%;
        top: -5%;
        will-change: transform;
    }

    .hero_back__8ReFI :global(img) {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .hero_clouds__bC7V4 {
        position: absolute;
        top: 20%;
        width: 100%;
        height: 300px;
        z-index: 3;
        pointer-events: none;
        display: flex;
        justify-content: space-between;
    }

    .hero_cloud__TvA3o {
        width: 45%;
        max-width: 600px;
        height: auto;
        will-change: transform;
        opacity: 0.85;
    }

    .hero_cloud__TvA3o :global(img) {
        width: 100%;
        height: auto;
    }

    .hero_logo__FxgRj {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 70%;
        max-width: 900px;
        color: var(--color-text-primary);
        opacity: 0.05;
        z-index: 5;
        pointer-events: none;
    }

    .hero_logo__FxgRj svg {
        width: 100%;
        height: auto;
    }

    .hero_smoke__8za_R {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 40%;
        z-index: 6;
        pointer-events: none;
        will-change: transform;
        opacity: 0.8;
    }

    .hero_smoke__8za_R :global(img) {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    /* Content Overlay */
    .hero_content__DK_Ny {
        position: relative;
        z-index: 10;
        width: 100%;
        color: var(--color-text-primary);
        margin-top: auto;
        will-change: transform, opacity;
    }

    .hero_title__JpmHS {
        margin-bottom: 16px;
    }

    .hero_title__JpmHS h1 {
        font-size: clamp(3rem, 8vw, 6.5rem);
        font-weight: 600;
        line-height: 1;
        letter-spacing: -0.04em;
        text-transform: uppercase;
    }

    .word-reveal {
        overflow: hidden;
        display: flex;
        flex-wrap: wrap;
    }

    .hero_text__R6LQ5 {
        max-width: 600px;
        margin-bottom: var(--space-md);
    }

    .hero_text__R6LQ5 p {
        font-size: clamp(1.15rem, 3vw, 1.75rem);
        line-height: 1.4;
        font-weight: 400;
    }

    /* Transition elements at the very bottom */
    .hero_overlap__d3EJV {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 120px;
        z-index: 8;
        pointer-events: none;
    }

    .hero_overlay__7ubgG {
        position: absolute;
        inset: 0;
        background: linear-gradient(
            to bottom,
            transparent,
            var(--color-bg-primary)
        );
    }

    @media (max-width: 768px) {
        .hero_root__N0Loz {
            padding-bottom: 40px;
        }

        .hero_logo__FxgRj {
            width: 90%;
        }

        .hero_clouds__bC7V4 {
            top: 15%;
            height: 150px;
        }
    }

    .hero_announcement-wrap {
        display: inline-flex;
        align-items: center;
        gap: var(--space-sm);
        background: rgba(255, 255, 255, 0.5);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border: 1px solid rgba(0, 0, 0, 0.1);
        padding: 8px 16px;
        border-radius: 99px;
        margin-bottom: var(--space-md);
        max-width: 100%;
    }

    .hero_announcement-wrap .badge {
        background-color: var(--color-text-primary);
        color: var(--color-text-inverse);
        padding: 4px 12px;
        border-radius: 99px;
        font-size: 0.75rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        flex-shrink: 0;
    }

    .hero_announcement-wrap .announcement-link {
        color: var(--color-text-primary);
        text-decoration: none;
        font-weight: 500;
        font-size: 0.875rem;
        display: flex;
        align-items: center;
        gap: 6px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .hero_announcement-wrap .arrow-icon {
        display: inline-block;
        transition: transform 0.3s ease;
    }

    .hero_announcement-wrap:hover .arrow-icon {
        transform: translateX(4px);
    }

    :global([dir="rtl"]) .hero_announcement-wrap .arrow-icon {
        transform: scaleX(-1);
    }

    :global([dir="rtl"]) .hero_announcement-wrap:hover .arrow-icon {
        transform: scaleX(-1) translateX(-4px);
    }

    @media (max-width: 640px) {
        .hero_announcement-wrap {
            flex-direction: column;
            align-items: flex-start;
            border-radius: 12px;
            gap: 6px;
            padding: 10px var(--space-sm);
            width: 100%;
        }

        .hero_announcement-wrap .announcement-link {
            white-space: normal;
            font-size: 0.8rem;
        }
    }
</style>
