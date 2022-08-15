import React, {useEffect} from 'react';
import '../Courses.css';
import '../../Home/Home.css';
import '../../../App.css'
import Py from './Python.js'

function Py_start() {
    document.title = "Python Syntax"
    return (
      <>
      
        <div className="intro">
            <h2>Python Syntax</h2>
            Syntax is the first thing you need to learn. It is a set of rules and they are different for all programming languages.
            If we don't follow this rules, we will get an error of syntax from the code.
            <div className="br"></div>
            <div className='instruction'>
                <ol>
                    <h5><li><h3><strong>Indentation</strong></h3></li></h5>
                    In coding, it is the space before the code line:
                    <div className="br"></div>
                    <div className="code">
                        1<code> while(true):</code> <br />
                        2<code className='inden'>  print(1)</code>
                    </div>
                    <div className="br"></div>
                    <div className="code">
                        1<code> if(x {'>'} 0):</code> <br />
                        2<code className='inden'>  print("x is positive")</code>
                    </div>
                    <div className="br"></div>
                    <h5><li><h3><strong>Variables and Function</strong></h3></li></h5>
                    <div className="br"></div>
                    There are many types of data that variables can store, we discover all them in the next page. 
                    <br /> But to initialize a variable we don't need to specific the type of it. This is good, because we don't have to write very time the type of the data that the variables has to store. 
                    <div className="br"></div>
                    <div className="code">
                        1<code> x = 2</code> <br />
                        2<code> site = "3dcoding.it"</code> <br />
                        3<code> y = true</code> <br />
                        4<code> num = 6.1</code>
                    </div>
                    <div className="br"></div>
                    Instead, to initialize the functions we need to write specific "<i>def</i>":
                    <div className="br"></div>
                    <div className="code">
                        1<code> function sum(a,b): </code> <br />
                        2<code className='inden'> c = a + b</code> <br />
                        3<code className='inden'> return c</code> <br />
                    </div>
                    <div className="br"></div>
                    To use the variables and function, we have to call it :
                    <div className="br"></div>
                    <div className="code">
                        1<code> result = sum(x,num)</code> <br />
                        2<code> print("Result: ", result)</code>
                    </div>
                    <div className="br"></div>
                    Result : 
                    <div className="br"></div>
                    <div className="code">
                        <code>&gt;&gt;&gt; Result : 8.1</code>
                    </div>
                    <div className="br"></div>
                    In this case we have saved the result in a variable, but if we write:
                    <div className="br"></div>
                    <div className="code">
                        1<code> def sum(a,b): </code> <br />
                        2<code className='inden'> c = a + b</code> <br />
                        3<code className='inden'> print ("Result : ",c)</code> <br />
                        4<code> sum(x,num)</code> <br />
                    </div>
                    <div className="br"></div>
                    The result will be :
                    <div className="br"></div>
                    <div className="code">
                        <code>&gt;&gt;&gt; Result : 8.1</code>
                    </div>
                    <div className="br"></div>
                    So we have wrote the code with one line less
                    <div className="br"></div>
                    <h5><li><h3><strong>Comment</strong></h3></li></h5>
                    There are different type of comment. <br />
                    One line:
                    <div className="code">
                        <code># This is a comment</code>
                    </div>
                    More lines (First solution):
                    <div className="code">
                        <code># This is a comment</code> <br />
                        <code># so only the developer </code> <br />
                        <code># can see it </code>
                    </div>
                    More lines (Second solution):
                    <div className="code">
                        <code>"""" This is a comment</code> <br />
                        <code> so only the developer </code> <br />
                        <code> can see it """</code>
                    </div>
                </ol>
                <code></code>
            </div>
        </div>
        
       
    </>


);
}

export default Py_start;