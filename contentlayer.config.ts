import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypePresetMinify from 'rehype-preset-minify';
import rehypePrismPlus from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

const computedFields = {
  url: {
    type: 'string',
    resolve: (doc) => {
      return `/${doc._raw.flattenedPath}`;
    },
  },
}

const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: 'blogs/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
    },
    publishedAt: {
      type: 'date',
      required: true,
    },
    updatedAt: {
      type: 'date',
    },
    isPublished: {
      type: 'boolean',
      default: false,
    },
    series: { type: 'string' },
    tags: { type: 'list', of: { type: 'string' } },
    description: { type: 'string' },
    images: { type: 'list', of: { type: 'string' } },
    canonicalUrl: { type: 'string' },
  },
  computedFields
}));

const Cheatsheet = defineDocumentType(() => ({
  name: 'Cheatsheet',
  filePathPattern: 'cheatsheets/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
    },
    category: { type: 'string' },
    description: { type: 'string' },
    tags: { type: 'list', of: { type: 'string' } },
    images: { type: 'list', of: { type: 'string' } },
    canonicalUrl: { type: 'string' },
  },
  computedFields
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Blog, Cheatsheet],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug, [rehypePrismPlus, { ignoreMissing: true }], rehypePresetMinify],
  },
});
