import './App.css';

function App() {
  return (
    <div className='box'>
      <span className='borderLine'></span>
      <form>
        <h2>Sign in</h2>
        <div className='inputBox'>
          <input type={'text'} required='required'></input>
          <span>Username</span>
          <i></i>
        </div>
        <div className='inputBox'>
          <input type={'password'} required='required'></input>
          <span>Password</span>
          <i></i>
        </div>
        <div className='links'>
          <a href='#'>Forgot Password</a>
          <a href='#'>Sign up</a>
        </div>
        <input type={'submit'} value="login"></input>

      </form><form>
        <h2>Sign in</h2>
        <div className='inputBox'>
          <input type={'text'} required='required'></input>
          <span>Username</span>
          <i></i>
        </div>
        <div className='inputBox'>
          <input type={'password'} required='required'></input>
          <span>Password</span>
          <i></i>
        </div>
        <div className='links'>
          <a href='#'>Forgot Password</a>
          <a href='#'>Sign up</a>
        </div>
        <input type={'submit'} value="login"></input>

      </form>
      

    </div>
  );
}

export default App;
