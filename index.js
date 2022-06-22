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
        <div className="container text-center">
          <div className="col-sm">
            {loaded &&
              data.results.map((movie, i) => (<Movie key={i} data={movie} />
              ))}
          </div>
        </div>
      </>
    );
  }
  
  ReactDOM.render(<App />, document.getElementById('root'));
  