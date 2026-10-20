# Google Sites integration & publishing

## Important distinction

The ZIP contains a **finished, independent website**, not a direct edit to the current Google Sites pages. Google Sites cannot take an arbitrary multi-page HTML/CSS/JavaScript ZIP and automatically convert it into native, editable Google Sites blocks. The existing Google Site has **not** been modified or published by this work.

## Recommended way to get this exact design online

Host the files from this ZIP on **GitHub Pages** (instructions in README.md). This retains the layout, working navigation, embedded YouTube videos, images, résumé, and project pages. After checking the site:

1. Open the Google Sites editor of `https://sites.google.com/andrew.cmu.edu/aryan-chandra/home`.
2. Add a prominent **New robotics portfolio** button or navigation link that points to your live GitHub Pages URL.
3. Optionally embed that publicly hosted URL in a Google Sites page via **Insert → Embed → By URL**. Note that embedded full websites can have iframe height/navigation quirks; a clear button linking directly is generally the better user experience.
4. Review and publish Google Sites when you're satisfied.

You can also use a custom domain for the GitHub Pages version once published and verified.

## If you must remain entirely on Google Sites

Treat the HTML as a reference design, then recreate the main sections with Google Sites' content blocks:

- Home hero: actual Microtaur hardware photo + title + short introduction + buttons.
- Featured work: Microtaur, SpotMicro-tail, and their media.
- Remaining projects: four cards linking to dedicated project pages or GitHub repositories.
- Video demos: embed each YouTube URL below the corresponding project section.
- Experience & skills: copy the edited text from `index.html`.
- Contact: résumé PDF, email, GitHub, LinkedIn links.

Use the files and copy from this package. Some custom card/sticky-navigation treatments may not be faithfully reproducible in the Sites editor without embedding a hosted webpage.

## Publishing checklist

- Check all internal site links and that the PDF files can be viewed.
- Check YouTube visibility; set YouTube videos to **public** or **unlisted** as appropriate.
- Check supplemental Google Drive share permissions before adding those links to job applications.
- Check spelling, role positioning and the résumé version.
- Update SpotMicro_tail README's old **Upcoming Work** text to match the final report, so portfolio and code tell a consistent story.
- Verify phone and desktop display.
- Do not publish without reviewing the final text and images.
