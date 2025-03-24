// SPDX-License-Identifier: Apache-2.0

import type { DefaultTheme } from "vitepress";
import { GITHUB_EXTENSION_MIN_JSON } from "../constants";
import { GITHUB_EXTENSION_MIN_JSON_ANI } from "../constants";

const nav: DefaultTheme.NavItem[] = [
  { text: 'Add Tachiyomi repo', link: `/add-repo?url=${encodeURIComponent(GITHUB_EXTENSION_MIN_JSON)}` },
  { text: 'Add Aniyomi repo', link: `/add-repo-ani?url=${encodeURIComponent(GITHUB_EXTENSION_MIN_JSON_ANI)}` },
  { text: 'Guide', link: '/docs/guides/getting-started' },
  { text: 'Tachiyomi Extensions', link: '/extensions/' },
  { text: 'Aniyomi Extensions', link: '/extensions-aniyomi/' },
  { text: 'News', link: '/news' },
]

export default nav;
