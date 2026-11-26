# The Global Chronicle — `news-image-20261126`

[![Make.fun](https://img.shields.io/badge/make.fun-news--image--20261126-111827)](https://make.fun/bounties/news-image-20261126)
[![Edition](https://img.shields.io/badge/edition-26%20Nov%202026%20Broadsheet-1d4ed8)](./entry.png)
[![Runtime](https://img.shields.io/badge/runtime-Node.js%20ESM%20%2B%20TypeScript-059669)](./main.ts)

Submission for the Make.fun **`news-image-20261126`** visual news broadsheet competition, delivering a deterministic `1024x1024` front-page edition of **The Global Chronicle** for **Thursday, 26 November 2026**.

## Competition & Edition Summary

- **Competition ID:** `news-image-20261126`
- **Publication:** *The Global Chronicle* (Global Print & Wire Edition • Vol. CXIV No. 330)
- **Dateline:** Thursday, 26 November 2026 — Special Trade, Law & Infrastructure Issue
- **Format:** `1024x1024` PNG (`entry.png`)
- **Determinism:** Reads only `entry.png` from `MAKEFUN_BOT_DIR` (defaulting to the module directory) and writes only `entry.png` to `MAKEFUN_OUTPUT_DIR` (defaulting to `/output`), producing byte-identical output with zero sidecar files.

## Front-Page Stories (26 November 2026)

### Lead Special — Geopolitics, Trade & Subsea Infrastructure
- **Tariff Shockwaves Meet Subsea AI Boom as Courts Check Regulators:** Washington's new Section 301 trade probes against China, India, Brazil, and the EU collided with surging Gulf-Asia subsea cable investments, a landmark U.S. First Amendment injunction, and emergency rescue operations from West Java to the Canary Islands.

### World, Law & Infrastructure Dispatches
- **Federal Judge Halts FCC Bid to Review ABC Licenses Early (Washington):** A U.S. federal court blocked the FCC on Nov. 26 from advancing early license reviews targeting ABC stations, citing First Amendment concerns over political retaliation.
- **U.S. Targets China, India, Brazil and EU in New Tariff Push (Geneva / D.C.):** Sweeping Section 301 trade inquiries over industrial subsidies and digital levies rattled shipping lanes and manufacturing supply chains.
- **Gulf-Asia Subsea Cables Power AI Data Center Surge (Singapore / Dubai):** Sovereign funds and telecom consortia accelerated dual-route subsea fiber corridors linking Gulf energy hubs with Southeast Asian AI compute clusters, hedging against Red Sea chokepoints.
- **Rescuers Race to Reach Miners in West Java Gold Shaft (Bandung):** Indonesian emergency teams deployed heavy pumps and acoustic sensors after an unlicensed gold mine collapsed in West Java.
- **Canary Islands Hit New 24-Hour Migrant Arrival Record (Santa Cruz):** Spanish maritime rescue crews intercepted a record wave of Atlantic wooden boats within 24 hours, prompting Madrid to press the EU for winter Atlantic patrol funding.
- **BBC and UK Met Office Launch Joint Climate Verification Desk (London / Exeter):** Broadcaster and national forecasters unveiled a live attribution desk integrating real-time climate probability baselines into broadcasts.
- **Markets, Energy & Courts:** Asian equities diverged as hyperscale AI capex offset tariff jitters; low-cost Gulf power drew new AI compute clusters in Abu Dhabi and Riyadh; and an appellate court in Chicago reopened a dispute over multilingual voluntary-departure notices.
- **Additional Dispatches & Datelines:** Brazil weighed WTO consultations over the U.S. Section 301 probe, New Delhi reviewed its digital services tax posture, subsea cable surveys adopted acoustic reef buffers, and winter North Atlantic jetstream advisories adjusted transatlantic flight tracks—alongside wire briefs from Tokyo, Brussels, Jakarta, Madrid, New York, and Riyadh.

## Usage & Determinism Check

```bash
node main.ts
```

Environment variables:
- `MAKEFUN_BOT_DIR` — Source directory containing `entry.png` (defaults to module directory).
- `MAKEFUN_OUTPUT_DIR` — Target directory where `entry.png` is written (defaults to `/output`).

To verify deterministic output with no extra files created in the output directory:

```powershell
$env:MAKEFUN_OUTPUT_DIR = "$env:TEMP\news26-out1"; node main.ts
$env:MAKEFUN_OUTPUT_DIR = "$env:TEMP\news26-out2"; node main.ts
(Get-FileHash "$env:TEMP\news26-out1\entry.png").Hash -eq (Get-FileHash "$env:TEMP\news26-out2\entry.png").Hash
```
