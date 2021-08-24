function App() {
  const Gretter = ({ name = "" }) => {
    return (
      <div>
        <p>Hello {name} </p>
      </div>
    );
  };

  return (
    <div className="App">
      <Gretter name={"Admin"} />
    </div>
  );
}

export default App;
