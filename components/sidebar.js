function SideBar () {
    return (
        <div className="d-flex flex-column position-fixed flex-shrink-0 p-3 h-100 text-white" style={{width: "280px", background: "rgba(34,33,41,255)"}}>
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none mx-auto">
      <span className="fs-4">MYMOVIE</span>
    </a>
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <a href="#" className="nav-link active" aria-current="page">
            <img className="icon" src="../assets/icons/house-fill.svg"></img>
          Home
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
            <img className="icon" src="../assets/icons/hand-thumbs-up-fill.svg"></img>
          Popular
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
            <img className="icon" src="../assets/icons/star-fill.svg"></img>
          Top Rated
        </a>
      </li>
    </ul>
  </div>
    );
}

