import  { useState, useEffect } from 'react';

const Card = ({ imageUrl, title, price, type }) => {
  const [buttonStyles, setButtonStyles] = useState({
    background: "rgba(225, 118, 84, 1)",
    color: "#fff",
  });

  useEffect(() => {
    let newButtonStyles = { ...buttonStyles };

    if (type === "Simple") {
      newButtonStyles.color = "#ffead0";
      newButtonStyles.background = "#e17654";
    } else if (type === "Luxury") {
      newButtonStyles.color = "#ffead0";
      newButtonStyles.background = "#161616";
    } else if (type === "Rugged") {
      newButtonStyles.color = "#ffead0";
      newButtonStyles.background = "#115e59";
    }

    setButtonStyles(newButtonStyles);
  }, [type]);

  return (
    <div className='card-container' title="Click to view details" style={{ overflow: "hidden", margin: "30px 0px", maxWidth: "100%" }}>
      <div className='image-wrapper' style={{}}>
        <img src={imageUrl} style={{width: "100%", height: "350px", objectFit: "cover", borderRadius: "10px" }} />
      </div>
      <div className='card-text-wrapper' style={{ display: "flex", margin: "10px 0px 0px", justifyContent: "space-between" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "800" }}>{title}</h1>
        <div className='VanPriceCard' style={{ display: "flex", flexDirection: "column", margin: "0px 15px 0px 0px" }}>
          <div className='amount' style={{ fontSize: "20px", fontWeight: "600" }}>{price}</div>
          <div className='perDay' style={{ fontSize: "14px", fontWeight: "500", marginLeft: "8px" }}>/day</div>
        </div>
      </div>
      <button className='card-button'
        style={{
          ...buttonStyles,
          outline: "none",
          border: "none",
          padding: "10px 25px",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "18px",
          fontWeight: "600",
          textAlign: "center"
        }}
      >
        {type}
      </button>
    </div>
  )
}

export default Card;
