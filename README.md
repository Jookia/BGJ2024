# Blind game jam entry 2024

## Working platforms:

- Orca+Firefox
- NVDA+Edge
- NVDA+Firefox
- NVDA+Chrome

## Broken platforms:

- Orca+Chromium: `role=log` speaks wrong (tested 2024-02-07)
- Narrator+Anything: `role=log` doesn't speak (tested 2024-02-07)

## Misc Notes:

- `aria-atomic="true"` causes duplicate reads in Orca+Firefox
- `aria-live` on by default causes duplicate reads on page load
- Set `aria-busy` whenever you're changing game contents
- Set `aria-live` at least once on the first contents change
