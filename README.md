# Talk: OpenTelemetry - Retrofit a custom, legacy C middleware

The Cloud Native Computing Foundation (CNCF) graduated OpenTelemetry open source framework enables software to generate
and transmit telemetry data in order to gain valuable insights.

The telemetry data includes classic log messages, metrics and traces.

This talk provides an overview of what OpenTelemetry is, with a focus on traces. The second part covers a real-world
example in which a legacy, custom (proprietary), mission-critical C middleware is to be retrofitted for OpenTelemetry
traces. A proof-of-concept implementation validates the idea through a live demo at the end of the presentation.

![Sketch](README.md.d/otel-gateway-sketch.excalidraw.png)

> [!IMPORTANT]
> This project uses a git submodule for supplementary source code. Clone this project with
> ```bash
> git clone --recurse-submodules <git-url>
> ```
> or
> ```bash
> git clone <git-url>
> git submodule update --init --recursive
> ```

## Slides

Slides are build with [Vite](https://vitejs.dev/) and [reveal.js](https://revealjs.com/).

```bash
$ npm install
$ npm run dev
```

Open [http://localhost:5173/](http://localhost:5173/) in a browser.

## Create PDFs

> [!IMPORTANT]
> [AppArmor User Namespace Restrictions vs. Chromium Developer Builds](https://chromium.googlesource.com/chromium/src/+/main/docs/security/apparmor-userns-restrictions.md)

```shell
# echo 0 | sudo tee /proc/sys/kernel/apparmor_restrict_unprivileged_userns
npm install
npm run build
nohup npm run preview &
npm run pdf -- "$(jq -r .name < package.json).pdf" 4173 false
npm run pdf -- "$(jq -r .name < package.json).printable.pdf" 4173 true
pkill --signal TERM --exact "npm run preview"
```
