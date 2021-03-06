// Step 1 - Convert this to a React Component
function Movie({data}) {

    return(
      <div className="movie-card">
              <div className="movie-header" style={{background: `url(https://image.tmdb.org/t/p/w400/${data.poster_path})`, backgroundSize: 'cover', borderRadius: "10px"}}/>
              <div className="movie-content">
                  <div className="movie-content-header">
                      <a href="#">
                          <p className="movie-title">{data.title}</p>
                      </a>
                  </div>
                  <div className="movie-info">
                      {/* <div className="info-section">
                          <label>Date & Time</label>
                          <span>{data.showTime}</span>
                      </div>
                      <div className="info-section">
                          <label>Screen</label>
                          <span>{data.screen}</span>
                      </div>
                      <div className="info-section">
                          <label>Row</label>
                          <span>{data.row}</span>
                      </div>
                      <div className="info-section">
                          <label>Seat</label>
                          <span>{data.seat}</span>
                      </div> */}
                  </div>
              </div>
          </div>
          );
  
  }
  