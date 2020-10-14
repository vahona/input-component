import React from 'react'
import Input from './Input'
import Textarea from './Textarea'
// import Icons from './Icons'
import './style.css'



function App() {
    return(
        <section>
            <h1>Input Component</h1>
        <form>
            <div className='type'>
            {`<Input />`} 
            </div>
            <label>Label</label><br />
                <Input placeholder="placeholde"
            />
        </form>
        <form>
            <div className='type'>
            {`<Input error />`} 
            </div>
            <label>Label</label><br />
            <Input error placeholder="placeholder" />
        </form>
        <form>
            <div className='type'>
            {`<Input disabled />`}
            </div>
            <label>Label</label><br />
            <Input placeholder="placeholder" disabled />
        </form>
        <section className="interesting">
        <form>
            <div className='type'>
            {` <Input helperText="Some interesting text"/>`}
            </div>
            <label>Label</label><br />
            <Input helperText="Some interesting text" placeholder="placeholder"/>
            <div>Some interesting text</div>
        </form>
        <form>
            <div className='type'>
            {`<Input helperText="Some interesting text" error/>`} 
            </div>
            <label className="errorlabel">Label</label><br />
            <Input helperText="Some interesting text" placeholder="placeholder" error/>
            <p>Some interesting text</p>
        </form>
        </section>
        <section className="icones">
        <form>
            <div className='type'>
            {`<Input  startIcon />`}
            </div>
            <label>Label</label><br />
            <Input startIcon placeholder="placeholder"/>
        </form>
        <form>
            <div className='type'>
            {`<Input endIcon />`} 
            </div>
            <label>Label</label><br />
            <Input endIcon placeholder="placeholder"/>
        </form>
        </section>
        <form>
            <div className='type'>
            {`<Input value="text" />`} 
            </div>
            <label>Label</label><br />
            <Input placeholder="text"/>
        </form>
        <section className="inputsize">
        <form>
            <div className='type'>
            {`<Input size="sm" />`} 
            </div>
            <label>Label</label><br />
            <Input size="sm" placeholder="placeholder" />
        </form>
        <form>
            <div className='type'>
            {`<Input size="md" />`} 
            </div>
            <label>Label</label><br />
            <Input size="md" placeholder="placeholder" />
        </form>
        </section>
        <form>
            <div className='type'>
            {`<Input fullwidth value="text" />`} 
            </div>
            <label>Label</label><br />
            <Input fullwidth placeholder="text" />
        </form>
        <form>
            <div className='type'>
            {` <Input multiline row="4"/>`} 
            </div>
            <label>Label</label><br />
                <Textarea multiline ></Textarea>
        </form>
        </section>
    )
}



export default App