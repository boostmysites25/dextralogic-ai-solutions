import { useQuery } from '@tanstack/react-query';
import { blogApi } from '../services/blogApi';

// Hook to get all published blogs
export const usePublishedBlogs = (params = {}) => {
  return useQuery({
    queryKey: ['blogs', 'published', params],
    queryFn: () => blogApi.getPublishedBlogs(params),
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 10 * 60 * 1000, // 10 minutes
  });
};

// Hook to get blog by slug
export const useBlogBySlug = (slug) => {
  return useQuery({
    queryKey: ['blog', 'slug', slug],
    queryFn: () => blogApi.getBlogBySlug(slug),
    enabled: !!slug, // Only run query if slug exists
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 10 * 60 * 1000, // 10 minutes
  });
};

// Hook to get featured blogs
export const useFeaturedBlogs = (limit = 3) => {
  return useQuery({
    queryKey: ['blogs', 'featured', limit],
    queryFn: () => blogApi.getFeaturedBlogs(limit),
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 10 * 60 * 1000, // 10 minutes
  });
};

// Hook to search blogs
export const useSearchBlogs = (searchQuery, category = '') => {
  return useQuery({
    queryKey: ['blogs', 'search', searchQuery, category],
    queryFn: () => blogApi.getPublishedBlogs({ 
      search: searchQuery, 
      category: category || undefined 
    }),
    enabled: !!searchQuery || !!category, // Only run if there's a search query or category
    staleTime: 2 * 60 * 1000, // 2 minutes for search results
    cacheTime: 5 * 60 * 1000, // 5 minutes
  });
};
