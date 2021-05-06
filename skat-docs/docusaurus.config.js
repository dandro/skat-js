/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'SKAT CLI',
  tagline: 'Code generation and templating for your project, your way!',
  url: 'https://dandro.github.io/skat-js/',
  baseUrl: '/skat-js/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'dnlmrtnz',
  projectName: 'skat-js',
  themeConfig: {
    navbar: {
      title: 'SKAT cli',
      logo: {
        alt: 'SKAT cli',
        src: 'img/skat-cli-logo.png',
      },
      items: [
        { type: 'docsVersionDropdown' },
        {
          type: 'doc',
          docId: 'quick-start',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/dandro/skat-js',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Quick Start',
              to: '/docs/quick-start',
            },
            {
              label: 'References',
              to: '/docs/references/overview',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SKAT CLI.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/dandro/skat-js',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
