# Aryan Chandra — Robotics Engineering Portfolio

A complete, responsive, multi-page portfolio website for robot learning / controls / sim-to-real roles. Built from original project documentation and media (October 2026).

## What's included

- `index.html` — the complete homepage: real Microtaur hardware photograph, selected work, 3 Microtaur YouTube demos, experience, skills, contact, résumé.
- `projects/microtaur.html` — hardware deployment, learning/control pipeline, 3 embedded video demos.
- `projects/spotmicro-tail.html` — SpotMicro segmented-tail project; original report CAD & result figures, clearly credited team contributions and Aryan's individual work, direct supplementary video links.
- `projects/spine-locomotion.html` — controlled rigid vs passive roll-spine locomotion study, normalized 11% landing-force comparison.
- `projects/motion-retargeting.html` — motion retargeting to four robot morphologies and IK validation.
- `projects/spotmicro-waypoints.html` — PPO + deterministic trot for SpotMicro waypoint tracking with original simulation screenshots.
- `projects/vlm-robot-car.html` — language-conditioned robot control architecture.
- `assets/` — local CSS, JavaScript, optimized images, résumé PDF, final SpotMicro report PDF.
- `GOOGLE_SITES_AND_PUBLISHING.md` — publishing and Google Sites instructions.

## Use locally

1. Extract the ZIP keeping the directory structure.
2. Open `index.html` in any modern browser (Chrome, Edge, Firefox, Safari).
3. Follow links to the six dedicated project pages. External video embeds need internet; the direct YouTube links work separately.

No npm installation, external UI framework, fonts, or build steps are needed. All still images and page content are local.

## Publish to GitHub Pages

1. Create a new repository, e.g. `robotics-portfolio`.
2. Upload all **contents** of this directory to the repository root. `index.html` must be at the root, not hidden within an extra top-level folder.
3. In GitHub, select **Settings → Pages → Build and deployment → Deploy from a branch**. Select `main` and `/ (root)`; save.
4. Once published, GitHub displays the new Pages URL (typically `https://aryan-chandra-cmu.github.io/robotics-portfolio/`). Confirm all project links and videos work before adding the link to job applications.
5. Optionally link this site from your existing Google Sites portfolio, or make this the primary portfolio URL.

The GitHub Pages URL above is an *example*, not an already-published link.

## Content to review before making public

- The attached résumé is the October 2026 `Aryan_Chandra_Resume_Humanoid_Learning.pdf`; swap `assets/Aryan_Chandra_Resume.pdf` if you want a different resume for each job family.
- The SpotMicro-tail GitHub README currently calls the segmented-tail implementation **upcoming**, whereas the submitted final report documents completed hardware and experiments. Update that README for consistency before recruiters compare both.
- The supporting Google Drive video files referenced by the SpotMicro report may require sharing permission. Set those to an appropriate viewable level if you want external recruiters to see them.
- Team work is clearly attributed: SpotMicro tail mechanism and PD/P control were implemented by teammates; Aryan's documented contributions are gait simulation, IK, torque feasibility checks, perturbation test rig, and IMU processing.
- Videos/documentation show policy execution and MuJoCo simulation, but no unsupported claim of robust terrain-generalized hardware walking is made.
- Do not claim that the reported 11% landing-force improvement was measured on physical hardware; it was a simulation morphology comparison.

## Editing content

- Color variables and styling: top of `assets/site.css`.
- Responsive navigation and video player code: `assets/site.js`.
- Each project page is a standalone HTML file; replace text or images directly.
- Image filenames and alt text are human-readable. Images are `.webp` for quick loads.

## Sources and image provenance

- **Real Microtaur hardware photo:** `IMG_6509.jpeg`, supplied directly by Aryan in the conversation. The homepage and Microtaur project use this actual photograph.
- **Microtaur simulator:** previously supplied user simulation screenshot, not a hardware photo; always labelled as such.
- **SpotMicro simulator:** actual SpotMicro model screenshots shared in prior project conversations, not a generic/random quadruped. They appear on the waypoint-tracking page.
- **SpotMicro-tail figures:** actual report Figures 2, 5, 6, 9, 10, extracted from *Improving Quadruped Stabilization with a Tendon-Driven Segmented Tail* by Kausik Kolluri, Atharva Ramdas, Aryan Chandra, Raymond Cao, Jash Lapsiwala (full PDF included under `assets/`).
- **No AI-generated or stock quadruped photographs** were added.
- The YouTube demos are embedded from Aryan's supplied URLs rather than downloaded/rehosted.
- SpotMicro-tail repository: https://github.com/aryan-chandra-cmu/SpotMicro_tail
- SpotMicro waypoint repository: https://github.com/aryan-chandra-cmu/SpotMicro_RL

## Troubleshooting

- A `file:///` browser may restrict the external YouTube player; use **Open on YouTube** under each demo, or publish to GitHub Pages.
- Keep all paths and filenames unchanged when uploading the directory.
- Editing Google Sites cannot import this ZIP as a native Google Sites theme. See the Google Sites guide for options.


## October 2026 case-study upgrade

- Corrected Dimey research image to the actual green-bodied Dimey simulation from the supplied PowerPoint. Included two extracted Dimey experiment demo videos (MP4), speed/torque/power graphs, and matched PPO pipeline figures.
- Expanded each case study with architecture, methods, evaluation, contributions and limitations.
- Separated the 33× Microtaur teacher/student simulation result from the later Arduino UNO Q hardware deployment; no ESP32-S3 student deployment is claimed.
- Motion retargeting is described as kinematic reference generation and verified MJLab playback, not completed imitation-policy PPO.
- SpotMicro CPG+PPO descriptions checked against the supplied SpotMicro_RL public GitHub README.
- VLM project includes Qwen2.5-VL 7B local inference and an ESP32-S3 bounded action architecture based on prior project discussions; no unverified fully autonomous navigation success rate is claimed.
- The two Google Drive links are included as user-provided research archive links. Their folder contents could not be opened in this session; material in those folders was **not** invented or summarized.

To update an existing GitHub Pages repository, copy the **contents** of this extracted folder over the repository root. Commit and push the changed `index.html`, `projects/`, and `assets/` files while preserving the folder structure.
