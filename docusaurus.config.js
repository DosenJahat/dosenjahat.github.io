module.exports = {
  title: 'DosenHub',
  tagline: 'Learning Media System',
  url: 'https://dosenhub.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'dosenhub', // Usually your GitHub org/user name.
  projectName: 'dosenhub.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'DosenHub',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          to: 'docs/mobile/summary',
          activeBasePath: 'docs/mobile/summary',
          label: 'Mobile',
          position: 'right',
        },
        {
          to: 'docs/advanced-web/summary',
          activeBasePath: 'docs/advanced-web/summary',
          label: 'Advanced Web',
          position: 'right',
        },
        {
          href: 'https://github.com/dosenhub/dosenhub.github.io',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Daftar Perkuliahan',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
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
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/dosenhub/dosenhub.github.io',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} DosenHub. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
