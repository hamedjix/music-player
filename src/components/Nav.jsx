const Nav = ({ libraryStatus, setLibraryStatus }) => {
  return (
    <div className='nav'>
      <h1>JIX's Music PLayer</h1>
      <button onClick={() => setLibraryStatus(!libraryStatus)}>Library</button>
    </div>
  );
};

export default Nav;
