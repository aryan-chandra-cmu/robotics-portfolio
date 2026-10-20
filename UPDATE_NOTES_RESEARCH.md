# Portfolio research update v3 — 20 October 2026

This package updates only local website source files. **No changes were made to either Google Drive folder or to your live GitHub Pages repository.**

## Source review

- [Canine motion imitation folder](https://drive.google.com/drive/folders/1Aeq1kBSwQb9g3LBKjPWm4W8BByMyl0O_?usp=drive_link)
  - README_MAPPING.md, retargeting/playback/IK scripts, generated NPZ references, original retargeting graphs
  - src/microtaur_imitation/tasks/tracking/ imitation_env_cfg.py, imitation_rewards.py, imitation_rl_cfg.py
  - Distinguish configured PPO tracking from successful trained policy benchmarks
- [Dimey morphology study folder](https://drive.google.com/drive/folders/1ojbXbOFKAKTA5G85aT0orEs6Crl6sGrZ?usp=drive_link)
  - experiment writeup, torque vs power flip reasoning, cot_comparison_summary.csv, graphs and simulations
  - Dimey is the correct robot: NOT the orange physical Microtaur

## Files replaced in this update

- projects/motion-retargeting.html
- projects/spine-locomotion.html
- assets/site.css

## Files added

- assets/images/retarget-dog-paws.webp
- assets/images/retarget-foot-heights.webp
- assets/images/retarget-swing.webp
- assets/images/retarget-lift.webp
- assets/images/retarget-spine-reference.webp
- assets/images/dimey-cost-of-transport.webp

## Publishing

Upload the CONTENTS of the update ZIP to the ROOT of your EXISTING GitHub Pages repository, replacing files with the same relative paths. Preserve folders. Commit to main and wait for the GitHub Pages deployment. No Drive folder edits are required.

## Technical integrity

- 1,024 MJLab training environments, 20,000 max iterations and PPO runner are configurations, not completed learning results.
- The Dimey 11% force reduction and 0.6 m/s torque/power metrics are reported as simulation results.
- The energy tradeoff is made explicit. No claim of lower CoT from passive spine.
- Linked Drive folders may require viewer permission for external recruiters. Consider a curated public assets/results repository if links are inaccessible to guests.
