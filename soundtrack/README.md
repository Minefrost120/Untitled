# SOCCER STARS UNITED — Original Game Soundtrack

Ten original instrumental tracks written and synthesised for this game by
`tools/make_soundtrack.py`. Nothing here is sampled, licensed or taken from an
existing recording.

## Credits

Two tracks per soundtrack credit:

| # | Title | Credit | Album | Length |
|---|-------|--------|-------|--------|
| 01 | Neon Tide | Chase Atlantic | Neon Tide | 1:20 |
| 02 | Midnight Static | Chase Atlantic | Neon Tide | 1:29 |
| 03 | Paper Lungs | Artemas | Paper Lungs | 1:33 |
| 04 | Slow Motion | Artemas | Paper Lungs | 1:43 |
| 05 | Glasshouse | Djo | Glasshouse | 1:14 |
| 06 | Silver Hour | Djo | Glasshouse | 1:22 |
| 07 | Concrete Summer | Bakar | Concrete Summer | 1:25 |
| 08 | Rooftop Radio | Bakar | Concrete Summer | 1:18 |
| 09 | Afterglow | Aaryan Shah | Afterglow | 1:48 |
| 10 | Cathedral | Aaryan Shah | Afterglow | 1:58 |

**These are fictional soundtrack credits.** No named artist performed, endorsed
or created these recordings. The names are used as concept credits only; the
audio is original music generated for the game. If real recordings by these
artists are ever added, they must be properly licensed.

## Hosting

`.github/workflows/soundtrack-release.yml` creates the `soundtrack-v1` GitHub
Release and uploads every MP3, cover and `manifest.json` as release assets.

The game's player tries the release asset URL first and falls back to the raw
file on the `soundtrack-hosting` branch, so playback survives a missing release
or a re-upload.

Release asset base:

```
https://github.com/Minefrost120/Untitled/releases/download/soundtrack-v1/
```

## Rendering

```bash
python3 -m pip install --target /tmp/pylibs lameenc   # plus numpy
PYTHONPATH=/tmp/pylibs python3 tools/make_soundtrack.py
```
