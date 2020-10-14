import React from 'react'
import Input from './Input'
import './style.css'



function App() {
    return(
        <section>
            <h1>Input Component</h1>
        <form>
            {`<Input />`} <br />
            <label>Label</label><br />
            <Input value="placeholder"/>
        </form>
        <form>
            {`<Input error />`} <br />
            <label>Label</label><br />
            <Input error value="placeholder" />
        </form>
        <form>
            {`<Input disabled />`} <br />
            <label>Label</label><br />
            <Input value="placeholder" disabled />
        </form>
        <section className="interesting">
        <form>
            {` <Input helperText="Some interesting text"/>`} <br />
            <label>Label</label><br />
            <Input helperText="Some interesting text" value="placeholder"/>
            <div>Some interesting text</div>
        </form>
        <form>
            {`<Input helperText="Some interesting text" error/>`} <br />
            <label className="errorspecific">Label</label><br />
            <Input helperText="Some interesting text" value="placeholder" error/>
            <p>Some interesting text</p>
        </form>
        </section>
        <section className="icones">
        <form>
            {`<Input  startIcon />`} <br />
            <label>Label</label><br />
            <Input startIcon value="placeholder"/>
        </form>
        <form>
            {`<Input endIcon />`} <br />
            <label>Label</label><br />
            <Input endIcon value="placeholder"/>
        </form>
        </section>
        <form>
            {`<Input value="text" />`} <br />
            <label>Label</label><br />
            <Input value="text"/>
        </form>
        <section className="inputsize">
        <form>
            {`<Input size="sm" />`} <br />
            <label>Label</label><br />
            <Input size="sm" value="placeholder" />
        </form>
        <form>
            {`<Input size="md" />`} <br />
            <label>Label</label><br />
            <Input size="md" value="placeholder" />
        </form>
        </section>
        <form>
            {`<Input fullwidth value="text" />`} <br />
            <label>Label</label><br />
            <Input fullwidth value="text" />
        </form>
        <form>
            {` <Input multiline row="4"/>`} <br />
            <label>Label</label><br />
            <Input multiline row="4" value="placeholder"><textarea className="rows" rows="4"></textarea></Input>
        </form>
        </section>
    )
}



export default App