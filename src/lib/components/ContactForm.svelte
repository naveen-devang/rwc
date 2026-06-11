<script lang="ts">
  import { t, langState } from '$lib/translations.svelte';

  let activeTab = $state('sales');
  let tabs = $derived([
    { id: 'sales', label: t('contact.tab.sales') },
    { id: 'product', label: t('contact.tab.product') },
    { id: 'feedback', label: t('contact.tab.feedback') }
  ]);
</script>

<section id="contact" class="contact-section">
  <div class="inner">
    <div class="form-container">
      <div class="tabs">
        {#each tabs as tab}
          <button 
            class="tab" 
            class:active={activeTab === tab.id}
            onclick={() => activeTab = tab.id}
          >
            {tab.label}
          </button>
        {/each}
      </div>

      <form class="contact-form" onsubmit={(e) => e.preventDefault()}>
        <div class="form-header">
          <h2>{t('contact.title')}</h2>
          <span class="header-line"></span>
        </div>

        <div class="form-grid">
          <div class="input-group">
            <input type="text" placeholder={t('contact.placeholder.name')} required />
          </div>
          <div class="input-group">
            <input type="email" placeholder={t('contact.placeholder.email')} required />
          </div>
          <div class="input-group">
            <input type="tel" placeholder={t('contact.placeholder.phone')} />
          </div>
          <div class="input-group">
            <select required>
              <option value="" disabled selected>{t('contact.select.choose')}</option>
              <option value="wpc1">{t('contact.option.wpc1')}</option>
              <option value="wpc2">{t('contact.option.wpc2')}</option>
              <option value="wcc">{t('contact.option.wcc')}</option>
              <option value="ql">{t('contact.option.ql')}</option>
              <option value="hl">{t('contact.option.hl')}</option>
              <option value="dl">{t('contact.option.dl')}</option>
              <option value="blocks">{t('contact.option.blocks')}</option>
              <option value="interlocks">{t('contact.option.interlocks')}</option>
              <option value="kerbstones">{t('contact.option.kerbstones')}</option>
            </select>
          </div>
        </div>

        <div class="input-group full">
          <textarea placeholder={t('contact.placeholder.message')} rows="6" required></textarea>
        </div>

        <div class="captcha-row">
          <div class="captcha-display">
            <span class="captcha-label">{t('contact.captcha.label')}</span>
            <div class="captcha-box">
              <span class="captcha-text">q1w2e3</span>
              <svg class="refresh-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
            </div>
          </div>
          <div class="input-group captcha-input">
            <input type="text" placeholder={t('contact.captcha.placeholder')} required />
          </div>
        </div>

        <div class="submit-row">
          <button type="submit" class="submit-btn">
            {t('contact.submit')}
          </button>
        </div>
      </form>
    </div>
  </div>
</section>

<style>
  .contact-section {
    padding: var(--space-xl) 0;
    background-color: var(--color-bg-primary);
  }

  .inner {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 var(--space-md);
  }

  .form-container {
    background: #ffffff;
    border: 1px solid var(--color-border);
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.02);
  }

  .tabs {
    display: flex;
    border-bottom: 1px solid var(--color-border);
    overflow-x: auto;
  }

  .tab {
    flex: 1;
    background: transparent;
    border: none;
    border-inline-end: 1px solid var(--color-border);
    padding: var(--space-md) var(--space-sm);
    font-family: var(--font-secondary);
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--color-text-muted);
    cursor: pointer;
    transition: all 0.3s ease;
    white-space: nowrap;
  }

  .tab:last-child {
    border-inline-end: none;
  }

  .tab:hover {
    color: var(--color-text-primary);
    background: var(--color-bg-secondary);
  }

  .tab.active {
    color: var(--color-text-primary);
    background: #ffffff;
    position: relative;
  }

  .tab.active::before {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 3px;
    background-color: var(--color-text-primary);
  }

  .contact-form {
    padding: var(--space-xl);
  }

  .form-header {
    margin-bottom: var(--space-lg);
  }

  .form-header h2 {
    font-size: 2.2rem;
    text-transform: uppercase;
    margin-bottom: var(--space-xs);
    font-weight: 500;
  }

  .header-line {
    display: block;
    width: 60px;
    height: 3px;
    background-color: var(--color-text-primary);
  }

  .form-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-md);
    margin-bottom: var(--space-md);
  }

  .input-group {
    width: 100%;
  }

  .input-group.full {
    margin-bottom: var(--space-lg);
  }

  input, select, textarea {
    width: 100%;
    padding: 16px 20px;
    background-color: var(--color-bg-secondary);
    border: 1px solid transparent;
    font-family: var(--font-secondary);
    font-size: 1rem;
    color: var(--color-text-primary);
    transition: border-color 0.3s ease, background-color 0.3s ease;
    outline: none;
    border-radius: 4px;
    -webkit-appearance: none;
    appearance: none;
  }

  textarea {
    resize: vertical;
    min-height: 150px;
  }

  input:focus, select:focus, textarea:focus {
    border-color: var(--color-text-primary);
    background-color: #ffffff;
  }

  input::placeholder, textarea::placeholder {
    color: var(--color-text-muted);
  }

  select {
    color: var(--color-text-primary);
    cursor: pointer;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 1rem center;
    background-size: 1em;
  }

  :global([dir="rtl"]) select {
    background-position: left 1rem center;
  }

  .captcha-row {
    display: flex;
    align-items: center;
    gap: var(--space-md);
    margin-bottom: var(--space-lg);
  }

  .captcha-display {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
  }

  .captcha-label {
    font-size: 0.875rem;
    color: var(--color-text-muted);
  }

  .captcha-box {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .captcha-text {
    font-family: monospace;
    font-size: 1.3rem;
    letter-spacing: 0.15em;
    padding: 8px 16px;
    border: 1px solid var(--color-border);
    color: var(--color-text-primary);
    background-color: var(--color-bg-secondary);
    user-select: none;
    border-radius: 4px;
  }

  .refresh-icon {
    cursor: pointer;
    color: var(--color-text-muted);
    transition: color 0.3s ease, transform 0.3s ease;
  }

  .refresh-icon:hover {
    color: var(--color-text-primary);
    transform: rotate(90deg);
  }

  .captcha-input {
    max-width: 200px;
  }

  .submit-btn {
    background-color: var(--color-text-primary);
    color: var(--color-text-inverse);
    border: 1px solid var(--color-text-primary);
    padding: 16px 48px;
    font-family: var(--font-secondary);
    font-size: 0.875rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    border-radius: 999px;
  }

  .submit-btn:hover {
    background-color: transparent;
    color: var(--color-text-primary);
  }

  @media (max-width: 768px) {
    .contact-form {
      padding: var(--space-md);
    }

    .form-grid {
      grid-template-columns: 1fr;
      gap: var(--space-sm);
    }

    .captcha-row {
      flex-direction: column;
      align-items: flex-start;
      gap: var(--space-sm);
    }

    .captcha-input {
      max-width: 100%;
    }

    .submit-btn {
      width: 100%;
    }
  }
</style>
