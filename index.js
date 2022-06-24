function App() {
    const [data, setData] = React.useState(null);
    const [loaded, setLoaded] = React.useState(false);
  
    React.useEffect(() => {
      async function getData() {
        const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=d61d531a2a87381c4b9d5d4080167c9c&language=en-US');
        const json = await response.json();
        setData(json);
        setLoaded(true);
      }
      getData();
    }, []);
    console.log('loaded:', loaded, 'data:', data);
  
    return (
      <>
        <div className="container-fluid p-0">
            <div className="row flex-nowrap m-0 h-100 w-100">
                <div className="col-auto col-md-3 col-xl-2 px-0" style={{width: "280px"}}>
                    <SideBar />
                </div>
                <div className="text-center col h-100" style={{background: "rgba(24,23,29,255)"}}>
                    <Navbar />
                    <div className="col-sm h-100">
                        {/* {loaded &&
                        data.results.map((movie, i) => (<Movie key={i} data={movie} />
                        ))} */}
                        {loaded ?
                        data.results.map((movie, i) => (<Movie key={i} data={movie} />)) :
                        <div className="modal-dialog modal-xs modal-dialog-centered">
                            <div className="modal-content bg-transparent">
                                <div className="modal-body">
                                    <div className="spinner-border" style={{width: "4rem", height: "4rem", color: "white"}} role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        }
                    </div>
                </div>
            </div>
        </div>
        
      </>
    );
  }
  
  ReactDOM.render(<App />, document.getElementById('root'));
  