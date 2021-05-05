/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'SKAT CLI',
  tagline: 'Code generation and templating for your project, your way!',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/skat-js/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'dnlmrtnz', // Usually your GitHub org/user name.
  projectName: 'skat-js', // Usually your repo name.
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
          href: 'https://github.com/facebook/docusaurus',
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
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
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
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
