import React from "react";
import Header from "../components/Website/Header";
import Footer from "../components/Website/Footer";
import { Navigate, useParams } from "react-router-dom";
import GetInTouch from "../components/GetInTouch";
import CallToAction from "../components/CallToAction";
import SEO from "../components/SEO";
import { ArticleStructuredData } from "../components/StructuredData";
import { useBlogBySlug } from "../hooks/useBlogs";

const BlogsDetail = () => {
  const { slug } = useParams();
  
  // Fetch blog data using the slug
  const { 
    data: blogData, 
    isLoading, 
    error 
  } = useBlogBySlug(slug);

  if (error || (!isLoading && !blogData?.blog)) {
    return <Navigate to="/blogs" />;
  }

  const blog = blogData?.blog;
  
  // Format date for SEO purposes
  const formatDate = (dateString) => {
    if (!dateString) return new Date().toISOString();
    const date = new Date(dateString);
    return date.toISOString();
  };
  
  // Get meta description
  const metaDescription = blog?.metaDescription || blog?.excerpt;
  
  return (
    <>
      {blog && (
        <>
          <SEO 
            title={blog.title} 
            description={metaDescription}
            keywords={`${blog.title}, ${blog.categoryId?.name}, technology blog, AI insights, digital transformation, ${blog.metaKeywords ? blog.metaKeywords.join(', ') : blog.tags.join(', ')}`}
            canonicalUrl={`https://dextralogic.com/blog/${blog.slug}`}
            ogImage={blog.imageUrl}
            ogType="article"
            author={blog.author?.name || "Dextralogic Team"}
            publishedDate={formatDate(blog.publishDate)}
            modifiedDate={formatDate(blog.updatedAt)}
          />
          
          {/* Add structured data for the article */}
          <ArticleStructuredData 
            title={blog.title}
            description={metaDescription}
            url={`https://dextralogic.com/blog/${blog.slug}`}
            image={blog.imageUrl}
            datePublished={formatDate(blog.publishDate)}
            dateModified={formatDate(blog.updatedAt)}
            authorName={blog.author?.name || "Dextralogic Team"}
            category={blog.categoryId?.name}
          />
        </>
      )}
      <Header />
      
      {isLoading ? (
        <div className="h-fit min-h-[55vh] w-full page-banner text-white pt-[15rem] pb-[10rem] bg-gray-200 flex items-center justify-center">
          <div className="text-center">
            <div className="relative w-16 h-16 mx-auto mb-4">
              <div className="absolute inset-0 border-4 border-white/20 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
              <div className="absolute inset-2 bg-white/10 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Loading Article</h3>
            <p className="text-white/80 mb-4">Fetching blog content...</p>
            <div className="flex justify-center space-x-1">
              <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
        </div>
      ) : blog ? (
        <>
          <div
            className="h-fit min-h-[55vh] w-full page-banner text-white pt-[15rem] pb-[10rem] bg-cover bg-center relative"
            style={{ backgroundImage: `url(${blog.imageUrl})` }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>
            <div className="wrapper relative z-10 w-full flex flex-col gap-3 px-3 sm:px-8">
              <h1 data-aos="fade-up" className="heading text-start max-w-3xl">
                {blog.title}
              </h1>
              <div className="flex items-center gap-4 text-sm text-gray-300 mt-4">
                <span>By {blog.author?.name}</span>
                <span>•</span>
                <span>{new Date(blog.publishDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
                {blog.categoryId && (
                  <>
                    <span>•</span>
                    <span className="bg-primary/20 px-2 py-1 rounded-full text-xs">
                      {blog.categoryId.name}
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="py-[5rem] wrapper">
            <div dangerouslySetInnerHTML={{ __html: blog.content }} className="reset-html"></div>
          </div>
        </>
      ) : null}
      
      <CallToAction />
      <GetInTouch />
      <Footer />
    </>
  );
};

export default BlogsDetail;
