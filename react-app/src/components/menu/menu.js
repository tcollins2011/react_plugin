import React, { useEffect } from 'react'


function Menu(props){

  // This function will return an embeded i heart jane menu with the matching store ID
  const storeId = props.Id
  useEffect(() => {

    const script = document.createElement("script");

    script.src = `https://api.iheartjane.com/v1/stores/${storeId}/embed.js`;
    script.async = true;

    document.body.appendChild(script);

  }, []);

  return(
    <div id="jane-frame-script"></div>
  )

}
export default Menu