// Sanity integration: blog posts and case studies fetched at build time.
// Queries ported verbatim from the Next.js site's lib/sanity.ts.
import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID || 'zxqjs2qh',
  dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});

// GROQ queries for blog posts
export const blogPostsQuery = `*[_type == "post" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  "featuredImage": mainImage.asset->url,
  "category": categories[0]->title,
  publishedAt,
  "author": author->name
}`;

export const blogPostBySlugQuery = `*[_type == "post" && slug.current == $slug && !(_id in path("drafts.**"))][0] {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  "featuredImage": mainImage.asset->url,
  "category": categories[0]->title,
  publishedAt,
  "author": author->name,
  body
}`;

// GROQ queries for case studies
export const caseStudiesQuery = `*[_type == "caseStudy" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  client,
  industry,
  challenge,
  solution,
  results,
  testimonial,
  "imageUrl": mainImage.asset->url,
  stats,
  publishedAt
}`;

export const caseStudyBySlugQuery = `*[_type == "caseStudy" && slug.current == $slug && !(_id in path("drafts.**"))][0] {
  _id,
  title,
  "slug": slug.current,
  client,
  industry,
  challenge,
  solution,
  results,
  testimonial,
  "imageUrl": mainImage.asset->url,
  stats,
  publishedAt
}`;

export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  featuredImage: string | null;
  category: string;
  publishedAt: string;
  author: string;
  body?: any;
}

export interface CaseStudy {
  _id: string;
  title: string;
  slug: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string;
  testimonial?: any;
  imageUrl: string | null;
  stats?: any;
  publishedAt: string;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    return await sanityClient.fetch<BlogPost[]>(blogPostsQuery);
  } catch {
    // Sanity unreachable or misconfigured — build with an empty blog rather than failing
    return [];
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  return sanityClient.fetch<BlogPost | null>(blogPostBySlugQuery, { slug });
}

export async function getCaseStudies(): Promise<CaseStudy[]> {
  try {
    return await sanityClient.fetch<CaseStudy[]>(caseStudiesQuery);
  } catch {
    return [];
  }
}

export async function getCaseStudy(slug: string): Promise<CaseStudy | null> {
  return sanityClient.fetch<CaseStudy | null>(caseStudyBySlugQuery, { slug });
}
