import { Component, Host, Prop, State, Watch, h } from '@stencil/core';

@Component({
  tag: 'app-main',
  styleUrl: 'app-main.scss',
  shadow: true,
})
export class AppMain {
  @Prop() theme: "light" | "dark" | "system" = "system";
  @State() realTheme: "light" | "dark" = "light";

  @Watch("theme")
  parseTheme(theme: "light" | "dark" | "system") {
    if (theme === "system") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }

    this.realTheme = theme;
    return theme;
  }

  render() {
    return (
      <Host theme={this.theme}>
        <div>
          <main>
            <h1>Hello, stencil</h1>
          </main>
        </div>
      </Host>
    );
  }

  connectedCallback() {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        this.realTheme = e.matches ? "dark" : "light";
      });
  }

  disconnectedCallback() {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .removeEventListener("change", (e) => {
        this.realTheme = e.matches ? "dark" : "light";
      });
  }
}
