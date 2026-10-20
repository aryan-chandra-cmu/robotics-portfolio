# GitHub Pages — Full replacement guide (20 Oct 2026)

This archive contains an entire standalone website. It is **NOT** a patch.

## Upload to the correct location

1. Extract the ZIP on your computer. Open the extracted folder.
2. Confirm `index.html`, `assets/`, and `projects/` are directly inside it.
3. Open **github.com/aryan-chandra-cmu/robotics-portfolio** and choose its **Code** tab on branch `main`.
4. Choose **Add file → Upload files**. Drag the **contents of the extracted folder** (not the outer folder or ZIP) onto the upload screen. Preserve the `assets/` and `projects/` directories.
5. GitHub should recognize changed filenames as replacements. Commit to `main`.
6. Under **Settings → Pages**, ensure: **Deploy from a branch**, `main`, `/(root)`.
7. Check **Actions → pages build and deployment** for a successful run.
8. Test `https://aryan-chandra-cmu.github.io/robotics-portfolio/` in an incognito tab or with Ctrl+Shift+R.

## How to verify you're seeing the new version

- The homepage has a visible **“Research deep dives · Updated October 2026”** panel above the main project cards.
- `.../projects/motion-retargeting.html` includes **3D canine → planar X–Z Microtaur** mapping and actual retargeted motion plots.
- `.../projects/spine-locomotion.html` includes **Dimey** and its landing-force/torque/power/CoT results.
- Visit `/site-version.txt`. It should say `2026-10-20-v4`.

## If you still don't see the changes

- Confirm `index.html` is in the **root of the repository** (`robotics-portfolio/index.html`) and not nested inside `Aryan_Portfolio_GitHub_Pages_FIXED/`.
- Confirm changed project files are under the existing `projects/` folder, not a second nested folder.
- In GitHub, click the latest commit and check `index.html` actually changed.
- If the GitHub file changed but the website did not, inspect **Actions** for a failed deployment or wait a few minutes.
- A hard refresh clears most cached HTML. CSS and JS have a version tag to reduce stale asset caching.

**Source research folders on Google Drive have not been modified.**
