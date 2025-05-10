import React, { useEffect } from 'react';

function BlackThambaLandingPage() {
    useEffect(() => {
        const favicon = document.querySelector("link[rel~='icon']") as HTMLLinkElement
      if (favicon) {
        let path = process.env.PUBLIC_URL;
        favicon.href = path + "/blackthamba.png";
      }
        document.title = "Black Thamba";
    }, []);

    return (
        <React.Fragment>
            <div>Black thamba MC</div>
        </React.Fragment>
    );
}

export default BlackThambaLandingPage;
