<script lang="ts">
  let { text = '', direction = 'up', splitBy = 'char' } = $props<{ text: string, direction?: 'up' | 'right', splitBy?: 'char' | 'word' }>();
  
  let isArabic = $derived(/[\u0600-\u06FF]/.test(text));
  let effectiveSplit = $derived(isArabic ? 'word' : splitBy);

  let processedItems = $derived(() => {
    let index = 0;
    if (effectiveSplit === 'word') {
      return text.split(' ').map((word: string) => {
        return [{ text: word, index: index++ }];
      });
    } else {
      return text.split(' ').map((word: string) => {
        let chars = word.split('').map((char: string) => {
          return { text: char, index: index++ };
        });
        index++; // for the space
        return chars;
      });
    }
  });
</script>

<span class="hover-text-container dir-{direction}">
  {#each processedItems() as itemGroup, groupIndex}
    <span class="group">
      {#each itemGroup as { text: content, index }}
        <span class="anim-wrapper" style="--index: {index}">
          <span class="original">{content}</span>
          <span class="duplicate">{content}</span>
        </span>
      {/each}
    </span>
    {#if groupIndex < processedItems().length - 1}
      <span class="space">&nbsp;</span>
    {/if}
  {/each}
</span>

<style>
  .hover-text-container {
    display: inline;
  }
  .group {
    display: inline-block;
    white-space: nowrap;
  }
  .space {
    display: inline-block;
    white-space: pre;
  }
  .anim-wrapper {
    position: relative;
    display: inline-block;
    overflow: hidden;
    vertical-align: top;
  }
  .original, .duplicate {
    display: inline-block;
    transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    transition-delay: calc(var(--index) * 0.015s);
  }
  .duplicate {
    position: absolute;
    color: var(--color-brand);
  }

  .dir-up .duplicate {
    top: 100%;
    left: 0;
  }
  .dir-right .duplicate {
    top: 0;
    left: -100%;
  }
</style>
