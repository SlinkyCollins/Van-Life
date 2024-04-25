import chart2 from "../pages/chart2.png"
import star from "../pages/star.png"

const Review = () => {
  return (
    <div className="reviews">
      <div className="reviewText" style={{ display: "flex", alignItems: "center",justifyContent: "space-between", padding: "2rem"}}>
        <h1 style={{ fontSize: "2rem", fontWeight: "700" }}>Your reviews</h1>
        <p style={{ fontSize: "16px", fontWeight: "500", color: "rgba(77, 77, 77, 1)", margin: "0.6rem 0 0" }}>last <span style={{ textDecoration: "underline", fontSize: "1rem", fontWeight: "700" }}>30 days</span></p>
      </div>

      <div style={{ width: "100%" }}>
        <img src={chart2} alt="" style={{ width: "100%", padding: "3rem 2rem 2rem", objectFit: 'cover' }} />
      </div>

      <div style={{ padding: "2rem 2rem 6rem" }}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: "700" }}>Reviews (2)</h1>

        <div style={{ padding: "2rem 0 2.5rem 0" }}>
          <span>
            <img src={star} alt="" style={{ marginBottom: "1rem" }} />
            <img src={star} alt="" style={{ marginBottom: "1rem" }} />
            <img src={star} alt="" style={{ marginBottom: "1rem" }} />
            <img src={star} alt="" style={{ marginBottom: "1rem" }} />
            <img src={star} alt="" style={{ marginBottom: "1rem" }} />
          </span>
          <p style={{ fontSize: "1rem", fontWeight: "600", paddingBottom: "1rem" }}>Elliot <span style={{ color: "rgba(77, 77, 77, 1)", opacity: "0.8" }}>December 1, 2022</span></p>
          <p style={{ fontSize: "1rem", fontWeight: "500", lineHeight: "1.375rem" }}>The beach bum is such as awesome van! Such as comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!</p>
        </div>
        <hr />
        <div style={{ padding: "2rem 0 2.5rem 0" }}>
          <span>
            <img src={star} alt="" style={{ marginBottom: "1rem" }} />
            <img src={star} alt="" style={{ marginBottom: "1rem" }} />
            <img src={star} alt="" style={{ marginBottom: "1rem" }} />
            <img src={star} alt="" style={{ marginBottom: "1rem" }} />
            <img src={star} alt="" style={{ marginBottom: "1rem" }} />
          </span>
          <p style={{ fontSize: "1rem", fontWeight: "600", paddingBottom: "1rem" }}>Sandy <span style={{ color: "rgba(77, 77, 77, 1)", opacity: "0.8" }}>November 23, 2022</span></p>
          <p style={{ fontSize: "1rem", fontWeight: "500", lineHeight: "1.375rem" }}>This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!</p>
        </div>
        <hr />
      </div>

    </div>
  )
}

export default Review