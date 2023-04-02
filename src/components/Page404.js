import React from 'react';

function Page404() {
  return (
    <div className="box error-box">
      <article className="message is-danger">
        <div className="message-header">
          <h1 className="error-title">Uh oh...Something went wrong!</h1>
        </div>
        <div className="message-body">
          <p className="subtitle is-4">
            <strong>Error #404</strong>
            <br />
            <em>Please check for spelling errors or network connection.</em>
          </p>
        </div>
      </article>
    </div>
  );
}

export default Page404;
