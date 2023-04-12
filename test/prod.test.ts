import { describe, expect, it } from 'vitest'
import { createResolver } from '@nuxt/kit'
import { $fetch, setup } from '@nuxt/test-utils'

const { resolve } = createResolver(import.meta.url)

await setup({
  rootDir: resolve('../.playground'),
  build: true,
  server: true,
  nuxtConfig: {
    sitemap: {
      autoLastmod: false,
      siteUrl: 'https://nuxt-simple-sitemap.com',
    },
  },
})
describe('prod', () => {
  it('basic', async () => {
    const sitemapIndex = (await $fetch('/sitemap_index.xml')).replace(/lastmod>(.*?)</g, 'lastmod><')

    // test that we have 2 sitemap entries using regex
    expect(sitemapIndex.match(/<sitemap>/g)!.length).toBe(2)

    expect(sitemapIndex).toMatchInlineSnapshot(`
      "<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><?xml-stylesheet type=\\"text/xsl\\" href=\\"/__sitemap__/style.xsl\\"?>
      <sitemapindex xmlns=\\"http://www.sitemaps.org/schemas/sitemap/0.9\\">
          <sitemap>
              <loc>https://nuxt-simple-sitemap.com/posts-sitemap.xml</loc>
          </sitemap>
          <sitemap>
              <loc>https://nuxt-simple-sitemap.com/pages-sitemap.xml</loc>
              <lastmod></lastmod>
          </sitemap>
      </sitemapindex>
      <!-- XML Sitemap generated by Nuxt Simple Sitemap -->"
    `)

    expect(await $fetch('/posts-sitemap.xml')).toMatchInlineSnapshot(`
      "<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><?xml-stylesheet type=\\"text/xsl\\" href=\\"/__sitemap__/style.xsl\\"?>
      <urlset xmlns:xsi=\\"http://www.w3.org/2001/XMLSchema-instance\\" xmlns:xhtml=\\"http://www.w3.org/1999/xhtml\\" xmlns:image=\\"http://www.google.com/schemas/sitemap-image/1.1\\" xsi:schemaLocation=\\"http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd http://www.google.com/schemas/sitemap-image/1.1 http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd\\" xmlns=\\"http://www.sitemaps.org/schemas/sitemap/0.9\\">
          <url>
              <loc>https://nuxt-simple-sitemap.com/blog</loc>
              <xhtml:link rel=\\"alternate\\" hreflang=\\"fr\\" href=\\"https://nuxt-simple-sitemap.com/fr/blog\\" />
          </url>
          <url>
              <loc>https://nuxt-simple-sitemap.com/blog/tags</loc>
              <xhtml:link rel=\\"alternate\\" hreflang=\\"fr\\" href=\\"https://nuxt-simple-sitemap.com/fr/blog/tags\\" />
          </url>
          <url>
              <loc>https://nuxt-simple-sitemap.com/blog/post-1</loc>
              <xhtml:link rel=\\"alternate\\" hreflang=\\"fr\\" href=\\"https://nuxt-simple-sitemap.com/fr/blog/post-1\\" />
          </url>
          <url>
              <loc>https://nuxt-simple-sitemap.com/blog/post-2</loc>
              <xhtml:link rel=\\"alternate\\" hreflang=\\"fr\\" href=\\"https://nuxt-simple-sitemap.com/fr/blog/post-2\\" />
          </url>
          <url>
              <loc>https://nuxt-simple-sitemap.com/blog/post-3</loc>
              <xhtml:link rel=\\"alternate\\" hreflang=\\"fr\\" href=\\"https://nuxt-simple-sitemap.com/fr/blog/post-3\\" />
          </url>
          <url>
              <loc>https://nuxt-simple-sitemap.com/blog/post-4</loc>
              <xhtml:link rel=\\"alternate\\" hreflang=\\"fr\\" href=\\"https://nuxt-simple-sitemap.com/fr/blog/post-4\\" />
          </url>
          <url>
              <loc>https://nuxt-simple-sitemap.com/blog/post-5</loc>
              <xhtml:link rel=\\"alternate\\" hreflang=\\"fr\\" href=\\"https://nuxt-simple-sitemap.com/fr/blog/post-5\\" />
          </url>
          <url>
              <loc>https://nuxt-simple-sitemap.com/blog/post-6</loc>
              <xhtml:link rel=\\"alternate\\" hreflang=\\"fr\\" href=\\"https://nuxt-simple-sitemap.com/fr/blog/post-6\\" />
          </url>
          <url>
              <loc>https://nuxt-simple-sitemap.com/blog/post-7</loc>
              <xhtml:link rel=\\"alternate\\" hreflang=\\"fr\\" href=\\"https://nuxt-simple-sitemap.com/fr/blog/post-7\\" />
          </url>
          <url>
              <loc>https://nuxt-simple-sitemap.com/blog/post-8</loc>
              <xhtml:link rel=\\"alternate\\" hreflang=\\"fr\\" href=\\"https://nuxt-simple-sitemap.com/fr/blog/post-8\\" />
          </url>
          <url>
              <loc>https://nuxt-simple-sitemap.com/blog/post-9</loc>
              <xhtml:link rel=\\"alternate\\" hreflang=\\"fr\\" href=\\"https://nuxt-simple-sitemap.com/fr/blog/post-9\\" />
          </url>
          <url>
              <loc>https://nuxt-simple-sitemap.com/blog/post-10</loc>
              <xhtml:link rel=\\"alternate\\" hreflang=\\"fr\\" href=\\"https://nuxt-simple-sitemap.com/fr/blog/post-10\\" />
          </url>
          <url>
              <loc>https://nuxt-simple-sitemap.com/blog/post-11</loc>
              <xhtml:link rel=\\"alternate\\" hreflang=\\"fr\\" href=\\"https://nuxt-simple-sitemap.com/fr/blog/post-11\\" />
          </url>
          <url>
              <loc>https://nuxt-simple-sitemap.com/blog/post-12</loc>
              <xhtml:link rel=\\"alternate\\" hreflang=\\"fr\\" href=\\"https://nuxt-simple-sitemap.com/fr/blog/post-12\\" />
          </url>
          <url>
              <loc>https://nuxt-simple-sitemap.com/blog/post-13</loc>
              <xhtml:link rel=\\"alternate\\" hreflang=\\"fr\\" href=\\"https://nuxt-simple-sitemap.com/fr/blog/post-13\\" />
          </url>
          <url>
              <loc>https://nuxt-simple-sitemap.com/blog/post-14</loc>
              <xhtml:link rel=\\"alternate\\" hreflang=\\"fr\\" href=\\"https://nuxt-simple-sitemap.com/fr/blog/post-14\\" />
          </url>
          <url>
              <loc>https://nuxt-simple-sitemap.com/blog/post-15</loc>
              <xhtml:link rel=\\"alternate\\" hreflang=\\"fr\\" href=\\"https://nuxt-simple-sitemap.com/fr/blog/post-15\\" />
          </url>
          <url>
              <loc>https://nuxt-simple-sitemap.com/blog/post-16</loc>
              <xhtml:link rel=\\"alternate\\" hreflang=\\"fr\\" href=\\"https://nuxt-simple-sitemap.com/fr/blog/post-16\\" />
          </url>
          <url>
              <loc>https://nuxt-simple-sitemap.com/blog/post-17</loc>
              <xhtml:link rel=\\"alternate\\" hreflang=\\"fr\\" href=\\"https://nuxt-simple-sitemap.com/fr/blog/post-17\\" />
          </url>
          <url>
              <loc>https://nuxt-simple-sitemap.com/blog/post-18</loc>
              <xhtml:link rel=\\"alternate\\" hreflang=\\"fr\\" href=\\"https://nuxt-simple-sitemap.com/fr/blog/post-18\\" />
          </url>
          <url>
              <loc>https://nuxt-simple-sitemap.com/blog/post-19</loc>
              <xhtml:link rel=\\"alternate\\" hreflang=\\"fr\\" href=\\"https://nuxt-simple-sitemap.com/fr/blog/post-19\\" />
          </url>
          <url>
              <loc>https://nuxt-simple-sitemap.com/blog/post-20</loc>
              <xhtml:link rel=\\"alternate\\" hreflang=\\"fr\\" href=\\"https://nuxt-simple-sitemap.com/fr/blog/post-20\\" />
          </url>
          <url>
              <loc>https://nuxt-simple-sitemap.com/blog/post-21</loc>
              <xhtml:link rel=\\"alternate\\" hreflang=\\"fr\\" href=\\"https://nuxt-simple-sitemap.com/fr/blog/post-21\\" />
          </url>
          <url>
              <loc>https://nuxt-simple-sitemap.com/blog/post-22</loc>
              <xhtml:link rel=\\"alternate\\" hreflang=\\"fr\\" href=\\"https://nuxt-simple-sitemap.com/fr/blog/post-22\\" />
          </url>
          <url>
              <loc>https://nuxt-simple-sitemap.com/blog/post-23</loc>
              <xhtml:link rel=\\"alternate\\" hreflang=\\"fr\\" href=\\"https://nuxt-simple-sitemap.com/fr/blog/post-23\\" />
          </url>
          <url>
              <loc>https://nuxt-simple-sitemap.com/blog/post-24</loc>
              <xhtml:link rel=\\"alternate\\" hreflang=\\"fr\\" href=\\"https://nuxt-simple-sitemap.com/fr/blog/post-24\\" />
          </url>
          <url>
              <loc>https://nuxt-simple-sitemap.com/blog/post-25</loc>
              <xhtml:link rel=\\"alternate\\" hreflang=\\"fr\\" href=\\"https://nuxt-simple-sitemap.com/fr/blog/post-25\\" />
          </url>
          <url>
              <loc>https://nuxt-simple-sitemap.com/blog/post-26</loc>
              <xhtml:link rel=\\"alternate\\" hreflang=\\"fr\\" href=\\"https://nuxt-simple-sitemap.com/fr/blog/post-26\\" />
          </url>
          <url>
              <loc>https://nuxt-simple-sitemap.com/blog/post-27</loc>
              <xhtml:link rel=\\"alternate\\" hreflang=\\"fr\\" href=\\"https://nuxt-simple-sitemap.com/fr/blog/post-27\\" />
          </url>
          <url>
              <loc>https://nuxt-simple-sitemap.com/blog/post-28</loc>
              <xhtml:link rel=\\"alternate\\" hreflang=\\"fr\\" href=\\"https://nuxt-simple-sitemap.com/fr/blog/post-28\\" />
          </url>
          <url>
              <loc>https://nuxt-simple-sitemap.com/blog/post-29</loc>
              <xhtml:link rel=\\"alternate\\" hreflang=\\"fr\\" href=\\"https://nuxt-simple-sitemap.com/fr/blog/post-29\\" />
          </url>
          <url>
              <loc>https://nuxt-simple-sitemap.com/blog/post-30</loc>
              <xhtml:link rel=\\"alternate\\" hreflang=\\"fr\\" href=\\"https://nuxt-simple-sitemap.com/fr/blog/post-30\\" />
          </url>
          <url>
              <loc>https://nuxt-simple-sitemap.com/blog/post-31</loc>
              <xhtml:link rel=\\"alternate\\" hreflang=\\"fr\\" href=\\"https://nuxt-simple-sitemap.com/fr/blog/post-31\\" />
          </url>
          <url>
              <loc>https://nuxt-simple-sitemap.com/blog/post-32</loc>
              <xhtml:link rel=\\"alternate\\" hreflang=\\"fr\\" href=\\"https://nuxt-simple-sitemap.com/fr/blog/post-32\\" />
          </url>
          <url>
              <loc>https://nuxt-simple-sitemap.com/blog/post-33</loc>
              <xhtml:link rel=\\"alternate\\" hreflang=\\"fr\\" href=\\"https://nuxt-simple-sitemap.com/fr/blog/post-33\\" />
          </url>
          <url>
              <loc>https://nuxt-simple-sitemap.com/blog/post-34</loc>
              <xhtml:link rel=\\"alternate\\" hreflang=\\"fr\\" href=\\"https://nuxt-simple-sitemap.com/fr/blog/post-34\\" />
          </url>
          <url>
              <loc>https://nuxt-simple-sitemap.com/blog/post-35</loc>
              <xhtml:link rel=\\"alternate\\" hreflang=\\"fr\\" href=\\"https://nuxt-simple-sitemap.com/fr/blog/post-35\\" />
          </url>
          <url>
              <loc>https://nuxt-simple-sitemap.com/blog/post-36</loc>
              <xhtml:link rel=\\"alternate\\" hreflang=\\"fr\\" href=\\"https://nuxt-simple-sitemap.com/fr/blog/post-36\\" />
          </url>
          <url>
              <loc>https://nuxt-simple-sitemap.com/blog/post-37</loc>
              <xhtml:link rel=\\"alternate\\" hreflang=\\"fr\\" href=\\"https://nuxt-simple-sitemap.com/fr/blog/post-37\\" />
          </url>
          <url>
              <loc>https://nuxt-simple-sitemap.com/blog/post-38</loc>
              <xhtml:link rel=\\"alternate\\" hreflang=\\"fr\\" href=\\"https://nuxt-simple-sitemap.com/fr/blog/post-38\\" />
          </url>
          <url>
              <loc>https://nuxt-simple-sitemap.com/blog/post-39</loc>
              <xhtml:link rel=\\"alternate\\" hreflang=\\"fr\\" href=\\"https://nuxt-simple-sitemap.com/fr/blog/post-39\\" />
          </url>
          <url>
              <loc>https://nuxt-simple-sitemap.com/blog/post-40</loc>
              <xhtml:link rel=\\"alternate\\" hreflang=\\"fr\\" href=\\"https://nuxt-simple-sitemap.com/fr/blog/post-40\\" />
          </url>
          <url>
              <loc>https://nuxt-simple-sitemap.com/blog/post-41</loc>
              <xhtml:link rel=\\"alternate\\" hreflang=\\"fr\\" href=\\"https://nuxt-simple-sitemap.com/fr/blog/post-41\\" />
          </url>
          <url>
              <loc>https://nuxt-simple-sitemap.com/blog/post-42</loc>
              <xhtml:link rel=\\"alternate\\" hreflang=\\"fr\\" href=\\"https://nuxt-simple-sitemap.com/fr/blog/post-42\\" />
          </url>
          <url>
              <loc>https://nuxt-simple-sitemap.com/blog/post-43</loc>
              <xhtml:link rel=\\"alternate\\" hreflang=\\"fr\\" href=\\"https://nuxt-simple-sitemap.com/fr/blog/post-43\\" />
          </url>
          <url>
              <loc>https://nuxt-simple-sitemap.com/blog/post-44</loc>
              <xhtml:link rel=\\"alternate\\" hreflang=\\"fr\\" href=\\"https://nuxt-simple-sitemap.com/fr/blog/post-44\\" />
          </url>
          <url>
              <loc>https://nuxt-simple-sitemap.com/blog/post-45</loc>
              <xhtml:link rel=\\"alternate\\" hreflang=\\"fr\\" href=\\"https://nuxt-simple-sitemap.com/fr/blog/post-45\\" />
          </url>
          <url>
              <loc>https://nuxt-simple-sitemap.com/blog/post-46</loc>
              <xhtml:link rel=\\"alternate\\" hreflang=\\"fr\\" href=\\"https://nuxt-simple-sitemap.com/fr/blog/post-46\\" />
          </url>
          <url>
              <loc>https://nuxt-simple-sitemap.com/blog/post-47</loc>
              <xhtml:link rel=\\"alternate\\" hreflang=\\"fr\\" href=\\"https://nuxt-simple-sitemap.com/fr/blog/post-47\\" />
          </url>
          <url>
              <loc>https://nuxt-simple-sitemap.com/blog/post-48</loc>
              <xhtml:link rel=\\"alternate\\" hreflang=\\"fr\\" href=\\"https://nuxt-simple-sitemap.com/fr/blog/post-48\\" />
          </url>
          <url>
              <loc>https://nuxt-simple-sitemap.com/blog/post-49</loc>
              <xhtml:link rel=\\"alternate\\" hreflang=\\"fr\\" href=\\"https://nuxt-simple-sitemap.com/fr/blog/post-49\\" />
          </url>
          <url>
              <loc>https://nuxt-simple-sitemap.com/blog/post-50</loc>
              <xhtml:link rel=\\"alternate\\" hreflang=\\"fr\\" href=\\"https://nuxt-simple-sitemap.com/fr/blog/post-50\\" />
          </url>
          <url>
              <loc>https://nuxt-simple-sitemap.com/blog/categories</loc>
              <xhtml:link rel=\\"alternate\\" hreflang=\\"fr\\" href=\\"https://nuxt-simple-sitemap.com/fr/blog/categories\\" />
          </url>
      </urlset>
      <!-- XML Sitemap generated by Nuxt Simple Sitemap -->"
    `)

    expect(await $fetch('/pages-sitemap.xml')).toContain('<?xml')
  }, 60000)
})
