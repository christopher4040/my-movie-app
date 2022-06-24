function Navbar () {
    return (
        <header className="py-3 mb-3">
            <div className="container-fluid d-grid gap-3 align-items-center" style={{gridTemplateComlumn: "1fr 2fr"}}>
                <div className="d-flex align-items-center">
                    <form className="w-25 me-3">
                        <input type="search" className="form-control" placeholder="Search" aria-label="Search"/>
                    </form>
                    <br/>
                    <div className="flex-shrink-0 ms-auto">
                        <a href="#" className="d-block link-dark text-decoration-none" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle"/>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}