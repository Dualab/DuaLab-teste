import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ElementPin } from "./pin"; // Presumindo que esse arquivo existe

const lightColors: { [key: string]: string } = {
  red: "#ff8080",
  green: "#80ff80",
  blue: "#8080ff",
  yellow: "#ffff80",
  orange: "#ffcf80",
  white: "#ffffff",
  purple: "#ff80ff",
};

@customElement("wokwi-led")
export class LEDElement extends LitElement {
  @property({ type: Boolean }) value = false;
  @property({ type: Number }) brightness = 1.0;
  @property({ type: String }) color = "red";
  @property({ type: String }) lightColor: string | null = null;
  @property({ type: String }) label = "";
  @property({ type: Boolean }) flip = false;

  get pinInfo(): ElementPin[] {
    const anodeX = this.flip ? 15 : 25;
    const cathodeX = this.flip ? 25 : 15;

    return [
      { name: "A", x: anodeX, y: 42, signals: [], description: "Anode" },
      { name: "C", x: cathodeX, y: 42, signals: [], description: "Cathode" },
    ];
  }

  static styles = css`
    :host {
      display: inline-block;
    }

    .led-container {
      display: flex;
      flex-direction: column;
      width: 40px;
    }

    .led-label {
      font-size: 10px;
      text-align: center;
      color: gray;
      position: relative;
      line-height: 1;
      top: -8px;
    }
  `;

  update(changedProperties: Map<string | any, any>): void {
    if (changedProperties.has("flip")) {
      this.dispatchEvent(new CustomEvent("pininfo-change"));
    }
    super.update(changedProperties);
  }

  render() {
    const { color, lightColor, flip } = this;
    const lightColorActual =
      lightColor || lightColors[color?.toLowerCase()] || color;
    const opacity = this.brightness ? 0.3 + this.brightness * 0.7 : 0;
    const lightOn = this.value && this.brightness > Number.EPSILON;
    const xScale = flip ? -1 : 1;

    return html`
      <div class="led-container">
        <svg
          width="40"
          height="50"
          transform="scale(${xScale} 1)"
          version="1.2"
          viewBox="-10 -5 35.456 39.618"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id="light1" x="-0.8" y="-0.8" height="2.2" width="2.8">
            <feGaussianBlur stdDeviation="2" />
          </filter>
          <filter id="light2" x="-0.8" y="-0.8" height="2.2" width="2.8">
            <feGaussianBlur stdDeviation="4" />
          </filter>
          <rect
            x="2.5099"
            y="20.382"
            width="2.1514"
            height="9.8273"
            fill="#8c8c8c"
          />
          <path
            d="m12.977 30.269c0-1.1736-0.86844-2.5132-1.8916-3.4024-0.41616-0.3672-1.1995-1.0015-1.1995-1.4249v-5.4706h-2.1614v5.7802c0 1.0584 0.94752 1.8785 1.9462 2.7482 0.44424 0.37584 1.3486 1.2496 1.3486 1.7694"
            fill="#8c8c8c"
          />
          <path
            d="m14.173 13.001v-5.9126c0-3.9132-3.168-7.0884-7.0855-7.0884-3.9125 0-7.0877 3.1694-7.0877 7.0884v13.649c1.4738 1.651 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8594v-1.5235c-7.4e-4 -1.1426-0.47444-2.2039-1.283-3.1061z"
            opacity=".3"
          />
          <path
            d="m14.173 13.001v-5.9126c0-3.9132-3.168-7.0884-7.0855-7.0884-3.9125 0-7.0877 3.1694-7.0877 7.0884v13.649c1.4738 1.651 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8594v-1.5235c-7.4e-4 -1.1426-0.47444-2.2039-1.283-3.1061z"
            fill="#e6e6e6"
            opacity=".5"
          />
          <path
            d="m14.173 13.001v3.1054c0 2.7389-3.1658 4.9651-7.0855 4.9651-3.9125 2e-5 -7.0877-2.219-7.0877-4.9651v4.6296c1.4738 1.6517 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8586l-4e-5 -1.5235c-7e-4 -1.1419-0.4744-2.2032-1.283-3.1054z"
            fill="#d1d1d1"
            opacity=".9"
          />
          <g>
            <path
              d="m14.173 13.001v3.1054c0 2.7389-3.1658 4.9651-7.0855 4.9651-3.9125 2e-5 -7.0877-2.219-7.0877-4.9651v4.6296c1.4738 1.6517 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8586l-4e-5 -1.5235c-7e-4 -1.1419-0.4744-2.2032-1.283-3.1054z"
              opacity=".7"
            />
            <path
              d="m14.173 13.001v3.1054c0 2.7389-3.1658 4.9651-7.0855 4.9651-3.9125 2e-5 -7.0877-2.219-7.0877-4.9651v3.1054c1.4738 1.6502 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8586-7.4e-4 -1.1412-0.47444-2.2025-1.283-3.1047z"
              opacity=".25"
            />
            <ellipse
              cx="7.0877"
              cy="16.106"
              rx="7.087"
              ry="4.9608"
              opacity=".8"
            />
            <circle
              cx="7.0877"
              cy="16.106"
              r="5.1213"
              fill="${lightColorActual}"
              opacity="${lightOn ? opacity : 0}"
              filter="url(#light1)"
            />
            <circle
              cx="7.0877"
              cy="16.106"
              r="5.1213"
              fill="${lightColorActual}"
              opacity="${lightOn ? opacity : 0}"
              filter="url(#light2)"
            />
          </g>
        </svg>
        <div class="led-label">${this.label}</div>
      </div>
    `;
  }
}
