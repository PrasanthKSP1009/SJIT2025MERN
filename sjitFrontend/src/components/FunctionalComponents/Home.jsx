function Home(properties) {
  var styling = {
    textAlign:"center",
    backgroundColor:"blue",
    color:"white"
  }
  return (
    <div>
      <h1 style={styling}>Home Page</h1>
      <h2>Below tag is for props</h2>
      <h3>Props: {properties.properties}, {properties.sjit}</h3>
    </div>
  );
}
export default Home;
