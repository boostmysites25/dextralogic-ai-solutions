const API_BASE_URL = 'https://blogplatform-backend-cloudinary-one.vercel.app';

// API service functions for blog endpoints
export const blogApi = {
  // Get all published blogs
  getPublishedBlogs: async (params = {}) => {
    const queryParams = new URLSearchParams();
    
    if (params.search) queryParams.append('search', params.search);
    if (params.category) queryParams.append('category', params.category);
    if (params.limit) queryParams.append('limit', params.limit);
    if (params.page) queryParams.append('page', params.page);
    
    const url = `${API_BASE_URL}/api/blogs/published${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
    
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch blogs: ${response.statusText}`);
    }
    
    return response.json();
  },

  // Get blog by slug
  getBlogBySlug: async (slug) => {
    const url = `${API_BASE_URL}/api/blogs/slug/${slug}`;
    
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch blog: ${response.statusText}`);
    }
    
    return response.json();
  },

  // Get featured blogs (you can extend this based on your API)
  getFeaturedBlogs: async (limit = 3) => {
    const url = `${API_BASE_URL}/api/blogs/published?featured=true&limit=${limit}`;
    
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch featured blogs: ${response.statusText}`);
    }
    
    return response.json();
  }
};

export default blogApi;
