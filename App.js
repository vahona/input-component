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
            {`<Input />`} <br />
            <label>Label</label><br />
                <Input placeholder="placeholde"
            />
            {/* <Icons /> */}
        </form>
        <form>
            {`<Input error />`} <br />
            <label>Label</label><br />
            <Input error placeholder="placeholder" />
        </form>
        <form>
            {`<Input disabled />`} <br />
            <label>Label</label><br />
            <Input placeholder="placeholder" disabled />
        </form>
        <section className="interesting">
        <form>
            {` <Input helperText="Some interesting text"/>`} <br />
            <label>Label</label><br />
            <Input helperText="Some interesting text" placeholder="placeholder"/>
            <div>Some interesting text</div>
        </form>
        <form>
            {`<Input helperText="Some interesting text" error/>`} <br />
            <label className="errorlabel">Label</label><br />
            <Input helperText="Some interesting text" placeholder="placeholder" error/>
            <p>Some interesting text</p>
        </form>
        </section>
        <section className="icones">
        <form>
            {`<Input  startIcon />`} <br />
            <label>Label</label><br />
            <Input startIcon placeholder="placeholder"/>
        </form>
        <form>
            {`<Input endIcon />`} <br />
            <label>Label</label><br />
            <Input endIcon placeholder="placeholder"/>
        </form>
        </section>
        <form>
            {`<Input value="text" />`} <br />
            <label>Label</label><br />
            <Input placeholder="text"/>
        </form>
        <section className="inputsize">
        <form>
            {`<Input size="sm" />`} <br />
            <label>Label</label><br />
            <Input size="sm" placeholder="placeholder" />
        </form>
        <form>
            {`<Input size="md" />`} <br />
            <label>Label</label><br />
            <Input size="md" placeholder="placeholder" />
        </form>
        </section>
        <form>
            {`<Input fullwidth value="text" />`} <br />
            <label>Label</label><br />
            <Input fullwidth placeholder="text" />
        </form>
        <form>
            {` <Input multiline row="4"/>`} <br />
            <label>Label</label><br />
                <Textarea multiline ></Textarea>
        </form>
        </section>
    )
}



export default App