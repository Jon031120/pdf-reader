# Keeping the material λ library up to date

The Material λ lookup (toolbar **Materials** button, or Ctrl+M) stays current three ways — you don't need to rebuild the app:

## 1. Live web search (always current)
Type any product. Below the results there's a **"Search the web for … λ value"** link that opens a Google search for the manufacturer datasheet. New products and revised figures are always available this way.

## 2. Add your own (saved on your device)
Click **＋ Add a material**, enter the name and λ, Save. It's stored in your browser and appears in every future search, tagged "yours". Delete with the ✕. Great for products you use often.

## 3. The shared list — `materials.json` (update once, everyone gets it)
The app loads `materials.json` from the same folder and merges it over the built-in list. To add or correct products for everyone using your hosted copy:

1. Edit `materials.json` (on GitHub: open the file → pencil icon → edit).
2. Add entries in this format (λ in W/m·K):
   ```json
   [
     { "n": "Kingspan Kooltherm K109 (2026)", "l": 0.018, "c": "Phenolic — Kingspan", "aka": ["k109"] },
     { "n": "Celotex CW4050", "l": 0.021, "c": "PIR — Celotex", "aka": ["cw4050"] }
   ]
   ```
   - `n` = display name, `l` = λ value, `c` = category (optional), `aka` = search aliases/codes (optional).
   - A name that exactly matches a built-in entry **overrides** it (use this to correct a value).
3. Commit. The app picks it up on next load (and refreshes the offline cache).

Built-in values are indicative starting points — always confirm against the current datasheet / BBA certificate for compliance work.
