import React from 'react';
import PageTitle from './PageTitle';

function PageHeading({title,children}) {
  return (
    <div className="page-heading-container">
       < PageTitle title={title}/>
       <p className="page-heading-text">{children}</p>
      
    </div>
  );
}

export default PageHeading;
