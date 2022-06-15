import React from "react";

const PageNotFound = (isEnglish) => {
  return (
    <>
      {isEnglish === true ? (
        <>
          <div>
            <h1>Page Not Found</h1>
            <p>It looks like you are lost.</p>
            <p>Do not feel sad.</p>
            <p>We are all lost in life</p>
            <p>
              Why not head back to the home page while you ponder about life
            </p>
          </div>{" "}
        </>
      ) : (
        <>
          <div>
            <h1>Fant ikke siden</h1>
            <p>Ser ut til at du har gått deg vill.</p>
            <p>Ikke føl deg trist</p>
            <p>Vi er alle fortapte i livets reise</p>
            <p>
              Hvorfor ikke gå tilbake til hjemmesiden, mens du funderer på
              livets store gåte
            </p>
          </div>
        </>
      )}{" "}
    </>
  );
};

export default PageNotFound;
