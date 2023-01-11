import React from 'react';
import './ErrorPage.scss';
const ErrorPage = () => {
  return (
    <div className="ErrorPage">
      <div className="e404">Error 404 !</div>
      <div className="pagenotfound">Page not found</div>
      <a href="https://festnimbus.com"></a>
      <div className="returnHome">
        <a href="https://festnimbus.com">
          <button>Go to homepage</button>
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
