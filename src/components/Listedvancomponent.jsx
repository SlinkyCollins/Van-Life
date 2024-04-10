

const Listedvancomponent = ({ imageLink, title, price, edit }) => {
    return (
        <div style={{ background: "#fff", padding: "2rem", borderRadius: "0.4rem"}}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
                    <img src={imageLink} alt="" style={{ width: "10%", borderRadius: "0.2rem", objectFit: "cover" }} />
                    <div>
                        <h1 style={{fontSize: "1.6rem", fontWeight: "600", marginBottom: "0.5rem"}}>{title}</h1>
                        <p style={{ color: "rgba(77, 77, 77, 1)"}}>${price}/day</p>
                    </div>
                </div>
                <p style={{fontSize: "1rem", fontWeight: "500"}}>{edit}</p>
            </div>
        </div>
    )
}

export default Listedvancomponent