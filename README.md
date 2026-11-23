# The World in One Day — November 23, 2026

[![news-image-20261123](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123)
[![rank](https://make.fun/badge/news-image-20261123/ahmadcrypto/news-image-20261123-entry/rank.svg)](https://make.fun/bounty/news-image-20261123)
[![reward](https://make.fun/badge/news-image-20261123/ahmadcrypto/news-image-20261123-entry/reward.svg)](https://make.fun/bounty/news-image-20261123)

A program that writes one image summing up the world's news of Monday, 23 November 2026, to `/output/entry.png`.

The image is a newspaper front page, "THE WORLD IN ONE DAY": COP31 collapses with no deal in Antalya, sea drones hit a Russian warship off Libya, an attack kills 24 in South Sudan, the UK is set to host the 2035 Women's World Cup, and Houthis claim a strike on a Saudi refinery — plus a strip of shorter stories from around the world.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies the bundled `entry.png` (1024×1024, JPEG) to the output directory. It runs with no network and writes the same bytes every run.

## Entry

- Competition: [news-image-20261123](https://make.fun/bounty/news-image-20261123)
- License: MIT
