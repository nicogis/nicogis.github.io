# NicoGIS projects

Source for the [NicoGIS GitHub Pages portfolio](https://github.nicogis.it/).

The site uses Jekyll and GitHub Pages to display public, non-fork repositories from the NicoGIS GitHub account using the GitHub metadata provided by GitHub Pages.

## Structure

- `index.html` — Jekyll/Liquid portfolio template and page metadata
- `css/styles.scss` — responsive styling
- `_includes/icons.svg` — SVG symbol definitions
- `_config.yml` — Jekyll configuration
- `CNAME` — custom domain (`github.nicogis.it`)

## Maintenance

Changes should be proposed on a branch and reviewed via pull request before merging into `master`. GitHub Pages publishes the site using the repository's configured Pages source. Keep `CNAME` unchanged unless the domain is intentionally migrated.

Repository cards link to their project homepage when defined, or to their GitHub repository otherwise. The source and ZIP links always point to GitHub.
