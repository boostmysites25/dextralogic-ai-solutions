import React from "react";
import { Link } from "react-router-dom";
import PageBanner from "../components/Website/PageBanner";
import Header from "../components/Website/Header";
import Footer from "../components/Website/Footer";
import banner from "../assets/blogs-banner.webp";
import CallToAction from "../components/CallToAction";
import SEO from "../components/SEO";
import { usePublishedBlogs } from "../hooks/useBlogs";

const Blogs = () => {
  // Fetch all published blogs
  const { 
    data: blogsData, 
    isLoading: blogsLoading, 
    error: blogsError 
  } = usePublishedBlogs({
    limit: 12
  });

  const blogs = blogsData?.blogs || [];

  return (
    <div className="bg-secondary/5">
      <SEO 
        title="AI Technology Blog & Industry Insights | Dextralogic" 
        description="Discover the latest AI technology trends, voice agents, machine learning insights, and digital transformation strategies. Expert analysis on AI voice agents, customer experience, and emerging technologies."
        keywords="AI technology blog, AI voice agents, machine learning insights, digital transformation, tech trends, AI customer experience, voice technology, automation, predictive analytics, industry insights, innovation blog, tech solutions, AI implementation"
        canonicalUrl="https://dextralogic.com/blogs"
      />
      <Header />
      <PageBanner title="Blogs" banner={banner} />

      {/* Blogs Section */}
      <div className="py-[5rem] relative text-primary_text">
        <div className="flex flex-col gap-5 items-center wrapper">
          <h4
            data-aos="fade-up"
            className="heading text-center max-w-6xl mx-auto"
          >
            Exploring the Edge of Digital Transformation
          </h4>
          
          {blogsLoading ? (
            <div className="flex justify-center items-center py-12">
              <div className="text-center">
                <div className="relative w-16 h-16 mx-auto mb-4">
                  <div className="absolute inset-0 border-4 border-primary/20 rounded-full"></div>
                  <div className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                  <div className="absolute inset-2 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Loading Articles</h3>
                <p className="text-gray-500 mb-4">Fetching the latest blog posts...</p>
                <div className="flex justify-center space-x-1">
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          ) : blogsError ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-red-600 mb-4">Error Loading Blogs</h3>
              <p className="text-gray-600">Please try again later.</p>
            </div>
          ) : blogs.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-600 mb-4">No blogs found</h3>
              <p className="text-gray-500">Check back later for new content</p>
            </div>
          ) : (
            <div className="mt-[2rem] grid sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-7">
              {blogs.map((blog) => (
                <BlogItem key={blog._id} blog={blog} />
              ))}
            </div>
          )}
        </div>
      </div>
      
      <div className="mb-[5rem]">
        <CallToAction />
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;

// blog item
export const BlogItem = ({ blog }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div
      data-aos="fade-up"
      className="bg-white rounded-xl p-5 relative z-10 group border"
    >
      <Link to={`/blog/${blog.slug}`} target="_blank">
        <img
          src={blog.imageUrl}
          alt={blog.imageAlt || blog.title}
          width="600"
          height="400"
          className="bg-cover aspect-video w-full rounded-xl group-hover:opacity-85 transition-all duration-200"
        />
      </Link>
      
      <div className="flex flex-col gap-3 mt-[1.5rem]">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span>{blog.author.name}</span>
          <span>•</span>
          <span>{formatDate(blog.publishDate)}</span>
        </div>
        
        <Link
          to={`/blog/${blog.slug}`}
          target="_blank"
          className="text-xl hyphen-auto font-medium leading-tight line-clamp-2 text-ellipsis hover:text-tertiary transition-all duration-200"
        >
          {blog.title}
        </Link>
        
        <p className="description text-gray-800 line-clamp-3 text-ellipsis hyphen-auto">
          {blog.excerpt}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-2">
          {blog.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="mt-6 w-full flex justify-center">
        <Link
          to={`/blog/${blog.slug}`}
          target="_blank"
          className="w-full text-center bg-background border border-primary text-primary px-5 py-3 rounded-full hover:bg-primary hover:text-white hover:-translate-y-1 duration-300 transition-all"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};
