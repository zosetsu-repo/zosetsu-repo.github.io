// SPDX-License-Identifier: Apache-2.0

import type { DefaultTheme } from "vitepress";

const nav: DefaultTheme.NavItem[] = [
  { text: 'Add Manga repo', link: `/add-repo` },
  { text: 'Add Anime repo', link: `/add-repo-ani` },
  { text: 'Guide', link: '/docs/guides/getting-started' },
  { text: 'Manga Extensions', link: '/extensions/' },
  { text: 'Anime Extensions', link: '/extensions-aniyomi/' },
]

export default nav;
