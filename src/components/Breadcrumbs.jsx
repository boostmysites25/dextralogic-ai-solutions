import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BreadcrumbStructuredData } from './StructuredData';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);
  
  // Skip rendering breadcrumbs on home page
  if (pathnames.length === 0) {
    return null;
  }
  
  // Create breadcrumb items for structured data
  const breadcrumbItems = [
    { name: 'Home', url: '/' }
  ];
  
  // Format path segments for display
  const formatPathname = (pathname) => {
    // Handle special cases
    if (pathname === 'blog-detail') return 'Blog';
    
    // Convert kebab case to title case
    return pathname
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };
  
  // Build breadcrumb trail
  let currentPath = '';
  pathnames.forEach((name, index) => {
    currentPath += `/${name}`;
    
    // Skip numeric IDs (like blog post IDs)
    if (!isNaN(name)) return;
    
    const isLast = index === pathnames.length - 1 || (!isNaN(pathnames[index + 1]));
    
    breadcrumbItems.push({
      name: formatPathname(name),
      url: currentPath
    });
  });
  
  return (
    <>
      <BreadcrumbStructuredData items={breadcrumbItems} />
      <nav className="bg-gray-50 py-3 mb-6">
        <div className="wrapper">
          <ol className="flex flex-wrap items-center text-sm text-gray-600">
            {breadcrumbItems.map((item, index) => {
              const isLast = index === breadcrumbItems.length - 1;
              
              return (
                <li key={index} className="flex items-center">
                  {index > 0 && (
                    <span className="mx-2 text-gray-400">/</span>
                  )}
                  
                  {isLast ? (
                    <span className="font-medium text-primary">{item.name}</span>
                  ) : (
                    <Link 
                      to={item.url} 
                      className="hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
    </>
  );
};

export default Breadcrumbs;