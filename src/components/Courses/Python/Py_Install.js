import gif02 from './data/VsCode02.gif'
import gif01 from './data/VsCode01.gif'
import python01 from '../img/python01.jpg';
import NavBarPY from './NavBarPY.js'

function Py_Install() {
  return (
    <>
    <NavBarPY></NavBarPY>
      <div className="color">
      <div className="intro">
      <a href="https://www.pexels.com/it-it/foto/mani-scrivania-laptop-internet-4974912/" target="_blank" rel="noreferrer" ><img src={python01} alt="" className='img' /></a>
        <h2>Installation and Setup</h2>

        <div className="text-intro">
          Before to start, I have two question for you.

          <div className="br"></div>
          <strong>Have you ever heard language python?</strong><br />
          <strong>Have you ever seen the extension .py?</strong>
          <div className="br"></div>
          If at least one of them is "Yes, I Have", it will be easier to start with Python. <br />
          But if both are "No, I haven't", you are in the right place to learn Python. <div className="br"></div>
          So <strong> Leeet's gooo</strong>
        </div>

        <br />
        </div>

        <div className='instruction'>
          There are some computers that have python already installed. 
          <div className="br"></div>
          To check it you can search "<strong>Python</strong>" in the start bar or you have to use the Command Line to run the following:
          <div className="br"></div>
          <div className="cmd">
              C:\Users\PC Name&gt;python --version
          </div>
          <div className="br"></div>
          If python isn't installed, you can <a href="https://www.python.org/downloads/" target="_blank" rel="noreferrer" >Click Here</a> to download it. 
          <br />
          Then click on the yellow button "Download Python" and wait that it will be downloaded. <br />
          After this, you have to open the file .exe and follow the installation. <br />
          Finally, after the installation,  if you run the line "<strong>python --version</strong>", the result will be the version of Python.
          <br /> Now we can write the first code line.
          Run: 
          <div className="br"></div>
          <div className="cmd">
              C:\Users\PC Name&gt;python <br />
          </div>
          <div className="br"></div>
          It will open another line and there you can write the code line : 
          <div className="br"></div>
          <div className="cmd">
              C:\Users\PC Name&gt;python <br />
              &gt;&gt;&gt; print("Hello World")
          </div>
          <div className="br"></div>
          Then you can press "return" and the result will be :
          <div className="br"></div>
              <div className="cmd">
              C:\Users\PC Name&gt;python <br />
              &gt;&gt;&gt; print("Hello World") <br />
              Hello World
              </div>
              <div className="br"></div>
              To exit you can close the CMD or run :
          <div className="br"></div>
          <div className="cmd">
                exit()
          </div>
          <div className="br"></div>

          Use Python from CMD is too difficult, because there are no helps.
          But thanks to VS code we can write a script .py easier.
          To install it <a href="https://code.visualstudio.com/download" target="_blank" rel="noreferrer" > Click Here</a> and choose your OS.
          You have to follow the installation and then open it. 

          Before to create a file .py you have to install extension of Python:
          <div className="br"></div>
          <div className="gif">
            <img src={gif01} alt="" />
          </div>
          <div className="br"></div>
          To create a new file press Ctrl+N and will appear the follow line: <br />
          <div className="br"></div>
          <i>"<strong>Select a language</strong>, or open a different editor to get started. Start typing to dismiss or don't show this again."</i>
          
          <div className="br"></div>
          Click on "<i><strong>Select a language</strong></i>". Then you have to digit <i>"py"</i> and choose <i>"Python"</i>

          <div className="br"></div>
          <div className="gif">
            <img src={gif02} alt="VS code gif"/>
          </div>

          <div className="br"></div>
        </div>

        
      </div>
    </>

  );
}

export default Py_Install;