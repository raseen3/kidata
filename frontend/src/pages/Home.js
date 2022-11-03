function MainPage() {
  return (
    <div className="home">
      <div className="page-card">
        <h1>Let's to play now!</h1>
        <p>
          Welcome to Kidata, a kids-friendly introduction to data!
        </p>

      </div>
        <div className="search-bar">
            <input id="search-button" name="search_submit" type="submit" value="Search"></input>
            <input style={{textAlign: "center"}} type="text" placeholder="Search.."></input>
        </div>
    </div>
  )
}

export default MainPage;