import React, { useEffect } from 'react'


function Menu(props){

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