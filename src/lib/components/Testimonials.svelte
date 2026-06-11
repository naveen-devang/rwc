<script lang="ts">
  import { t, langState } from '$lib/translations.svelte';
  import HoverText from '$lib/components/HoverText.svelte';

  const reviews = $derived([
    {
      quote: {
        en: `"NOORA Lime Co. is a long-term supplier for us and we are really happy to be associated with them."`,
        ar: `"تعد شركة نورة لصناعة الجير شريكاً ومورداً استراتيجياً لنا على المدى الطويل، ونحن سعداء جداً بهذا التعاون المثمر."`
      },
      author: langState.current === 'en' ? 'Sembcorp Gulf O&M Limited' : 'سيمبكورب الخليج لتشغيل وصيانة الفنادق المحدودة'
    },
    {
      quote: {
        en: `"Having a White Cement Supplier like RAK White Cement is what makes us successful."`,
        ar: `"إن وجود مورد للإسمنت الأبيض بمستوى جودة وموثوقية إسمنت رأس الخيمة الأبيض هو سر نجاحنا."`
      },
      author: langState.current === 'en' ? 'Light Stone Factory' : 'مصنع لايت ستون للرخام والجرانيت'
    },
    {
      quote: {
        en: `"Our association with NOORA Lime Company is highly valued by us."`,
        ar: `"إن شراكتنا الطويلة والقوية مع شركة نورة لصناعة الجير هي شراكة نعتز بها ونقدرها للغاية."`
      },
      author: langState.current === 'en' ? 'Cochin Minerals and Rutile Limited' : 'كوشين للمعادن والروتيل المحدودة'
    }
  ]);
</script>

<section id="testimonials" class="testimonials_root__PiYLZ">
  <div class="container_container__v5gtR">
    <!-- Section Title with Hover Text Roll -->
    <div class="testimonials_title__V_61W">
      <h2 class="hover-trigger">
        <HoverText text={t('test.title')} />
      </h2>
    </div>

    <!-- Main Divider -->
    <div class="testimonials_divider__j4fVS"></div>

    <!-- 3-Column Testimonials Layout -->
    <div class="testimonials_grid__S3Kng">
      {#each reviews as review}
        <div class="testimonial_column">
          <p class="testimonial_quote hover-trigger">
            <HoverText text={review.quote[langState.current]} direction="right" />
          </p>
          <div class="testimonial_meta_line"></div>
          <span class="testimonial_author">{review.author}</span>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .testimonials_root__PiYLZ {
    padding: var(--space-xxl) 0;
    background-color: #0A0A0A; /* Premium stark dark background as in reference */
    color: #FFFFFF;
    overflow: hidden;
  }

  .testimonials_title__V_61W {
    margin-bottom: var(--space-md);
  }

  .testimonials_title__V_61W h2 {
    font-size: clamp(2.2rem, 5.5vw, 4.5rem);
    text-transform: uppercase;
    font-weight: 500;
    color: #FFFFFF;
    display: inline-block;
    cursor: default;
  }

  .testimonials_divider__j4fVS {
    width: 100%;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.1);
    margin-bottom: var(--space-xl);
  }

  .testimonials_grid__S3Kng {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 48px;
    width: 100%;
  }

  .testimonial_column {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 24px;
    height: 100%;
  }

  .testimonial_quote {
    font-family: var(--font-secondary);
    font-size: clamp(1.1rem, 2.5vw, 1.45rem);
    line-height: 1.55;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.9);
  }

  .testimonial_meta_line {
    width: 40px;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.2);
    margin-top: auto;
  }

  .testimonial_author {
    font-family: var(--font-secondary);
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: rgba(255, 255, 255, 0.5);
  }

  @media (max-width: 900px) {
    .testimonials_grid__S3Kng {
      grid-template-columns: 1fr;
      gap: var(--space-lg);
    }
    
    .testimonial_column {
      gap: 16px;
    }
  }
</style>
