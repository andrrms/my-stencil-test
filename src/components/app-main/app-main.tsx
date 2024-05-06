import { Component, Event, EventEmitter, Host, Listen, h } from '@stencil/core';

type Theme = 'light' | 'dark' | 'system';

@Component({
  tag: 'app-main',
  styleUrl: 'app-main.scss',
  shadow: true,
})
export class AppMain {
  render() {
    return (
      <Host>
        <div>
          <main>
            <aside>
              <h1>My messenger</h1>
            </aside>
            <section>
              <h1>Hello, stencil</h1>
            </section>
          </main>
        </div>
      </Host>
    );
  }

  static readonly THEME_CHANGED_EVENT = 'themeChanged';
  @Listen(AppMain.THEME_CHANGED_EVENT)
  updateTheme(event: CustomEvent<{ theme: 'light' | 'dark' | 'system' }>) {
    console.log(event);
    const theme = event.detail.theme;
    const system = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

    if (theme === 'system') {
      document.documentElement.setAttribute('theme', system);
    } else {
      document.documentElement.setAttribute('theme', theme);
    }

  }

  @Event() themeChanged: EventEmitter<{ theme: 'light' | 'dark' | 'system' }>;
  connectedCallback() {
    customElements.whenDefined('app-main').then(() => {
      const theme = localStorage.getItem('theme') as Theme;
      this.themeChanged.emit({ theme });
    });

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      const theme = localStorage.getItem('theme');
      const system = e.matches ? 'dark' : 'light';

      if (theme === 'system') {
        document.documentElement.setAttribute('theme', system);
      }
    });
  }
}
