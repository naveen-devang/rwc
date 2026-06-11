<script lang="ts">
  import { onMount } from 'svelte';

  let containerElement = $state<HTMLDivElement>();

  onMount(() => {
    if (!containerElement) return;

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js';
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = JSON.stringify({
      "lineWidth": 2,
      "lineType": 0,
      "chartType": "area",
      "fontColor": "rgb(106, 109, 120)",
      "gridLineColor": "rgba(46, 46, 46, 0.06)",
      "volumeUpColor": "rgba(34, 171, 148, 0.5)",
      "volumeDownColor": "rgba(247, 82, 95, 0.5)",
      "backgroundColor": "#ffffff",
      "widgetFontColor": "#0F0F0F",
      "upColor": "#22ab94",
      "downColor": "#f7525f",
      "borderUpColor": "#22ab94",
      "borderDownColor": "#f7525f",
      "wickUpColor": "#22ab94",
      "wickDownColor": "#f7525f",
      "colorTheme": "light",
      "isTransparent": false,
      "locale": "en",
      "chartOnly": false,
      "scalePosition": "right",
      "scaleMode": "Normal",
      "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
      "valuesTracking": "1",
      "changeMode": "price-and-percent",
      "symbols": [
        [
          "ADX:RAKWCT|1M"
        ]
      ],
      "dateRanges": [
        "1d|1",
        "1m|30",
        "3m|60",
        "12m|1D",
        "60m|1W",
        "all|1M"
      ],
      "fontSize": "10",
      "headerFontSize": "medium",
      "autosize": true,
      "width": "100%",
      "height": "100%",
      "noTimeScale": false,
      "hideDateRanges": false,
      "hideMarketStatus": false,
      "hideSymbolLogo": false
    });

    const widgetDiv = containerElement.querySelector('.tradingview-widget-container__widget');
    if (widgetDiv) {
      widgetDiv.innerHTML = '';
      widgetDiv.appendChild(script);
    }
  });
</script>

<div class="tradingview-widget-container" bind:this={containerElement}>
  <div class="tradingview-widget-container__widget"></div>
  <div class="tradingview-widget-copyright">
    <a href="https://www.tradingview.com/symbols/ADX-RAKWCT/" rel="noopener nofollow" target="_blank">
      <span class="blue-text">RAKWCT stock price</span>
    </a>
    <span class="trademark">&nbsp;by TradingView</span>
  </div>
</div>

<style>
  .tradingview-widget-container {
    width: 100%;
    max-width: 480px;
    height: 420px;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .tradingview-widget-container__widget {
    flex: 1;
    width: 100%;
    height: 100%;
  }

  .tradingview-widget-copyright {
    font-size: 11px;
    font-family: -apple-system, BlinkMacSystemFont, "Trebuchet MS", Roboto, Ubuntu, sans-serif;
    text-align: center;
    padding: 8px 0;
    color: var(--color-text-muted, #9db2bd);
  }

  .tradingview-widget-copyright a {
    text-decoration: none;
    color: #2962ff;
    font-weight: 500;
  }

  .tradingview-widget-copyright a:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    .tradingview-widget-container {
      max-width: 100%;
      height: 380px;
    }
  }
</style>
