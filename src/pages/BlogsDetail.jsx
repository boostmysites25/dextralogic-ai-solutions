import React from "react";
import Header from "../components/Website/Header";
import Footer from "../components/Website/Footer";
import PageBanner from "../components/Website/PageBanner";
import { blogs } from "../data/blogs";
import { Navigate, useParams } from "react-router-dom";
import GetInTouch from "../components/GetInTouch";
import CallToAction from "../components/CallToAction";
import SEO from "../components/SEO";
import { ArticleStructuredData } from "../components/StructuredData";

const BlogsDetail = () => {
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === Number(id));

  if (!blog) {
    return <Navigate to="/blogs" />;
  }
  
  // Extract a short excerpt from the blog content for meta description
  const getMetaDescription = () => {
    // Try to extract text content from HTML
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = blog.contentHtml.slice(0, 500);
    const textContent = tempDiv.textContent || tempDiv.innerText || '';
    return textContent.slice(0, 160) + '...';
  };
  
  // Format date for SEO purposes
  const formatDate = (dateString) => {
    if (!dateString) return new Date().toISOString();
    const date = new Date(dateString);
    return date.toISOString();
  };
  
  // Get meta description
  const metaDescription = blog.excerpt || getMetaDescription();
  
  return (
    <>
      <SEO 
        title={blog.title} 
        description={metaDescription}
        keywords={`${blog.title}, ${blog.category}, technology blog, AI insights, digital transformation, ${blog.tags ? blog.tags.join(', ') : ''}`}
        canonicalUrl={`https://dextralogic.com/blog-detail/${blog.id}`}
        ogImage={blog.image}
        ogType="article"
        author={blog.author || "Dextralogic Team"}
        publishedDate={formatDate(blog.date)}
        modifiedDate={formatDate(blog.lastUpdated || blog.date)}
      />
      
      {/* Add structured data for the article */}
      <ArticleStructuredData 
        title={blog.title}
        description={metaDescription}
        url={`https://dextralogic.com/blog-detail/${blog.id}`}
        image={blog.image}
        datePublished={formatDate(blog.date)}
        dateModified={formatDate(blog.lastUpdated || blog.date)}
        authorName={blog.author || "Dextralogic Team"}
        category={blog.category}
      />
      <Header />
      <div
        className="h-fit min-h-[55vh] w-full page-banner text-white pt-[15rem] pb-[10rem] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${blog.image})` }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>
        {/* <div
          className={`wrapper relative z-10 w-full flex flex-col gap-3 px-3 sm:px-8`}
        >
          <h1 data-aos="fade-up" className="heading text-start max-w-3xl">
            {blog.title}
          </h1>
        </div> */}
      </div>
      <div className="py-[5rem] wrapper">
        <div dangerouslySetInnerHTML={{ __html: blog.contentHtml }}></div>
      </div>
      <CallToAction />
      <GetInTouch />
      <Footer />
    </>
  );
};

export default BlogsDetail;
