import React from 'react'
import Input from './Input'
import './style.css'



function App() {
    return(
        <section>
            <h1>Input Component</h1>
        <form>
            <label>Label</label><br />
            <Input value="placeholder" />
        </form>
        <form>
            <label>Label</label><br />
            <Input error value="placeholder" />
        </form>
        <form>
            <label>Label</label><br />
            <Input value="placeholder" />
        </form>
        <form>
            <label>Label</label><br />
            <Input value="placeholder" />
        </form>
        <form>
            <label>Label</label><br />
            <Input value="placeholder" />
        </form>
        <form>
            <label>Label</label><br />
            <Input value="placeholder" disabled />
        </form>
        <form>
            <label>Label</label><br />
            <Input helperText="SOme interesting text"/>
        </form>
        <form>
            <label>Label</label><br />
            <Input helperText="Some interesting text" error/>
        </form>
        <form>
            <label>Label</label><br />
            <Input startIcon />
        </form>
        <form>
            <label>Label</label><br />
            <Input endIcon />
        </form>
        <form>
            <label>Label</label><br />
            <Input value="text" />
        </form>
        <form>
            <label>Label</label><br />
            <Input size="sm" />
        </form>
        <form>
            <label>Label</label><br />
            <Input size="md" />
        </form>
        <form>
            <label>Label</label><br />
            <Input fullwidth value="text" />
        </form>
        <form>
            <label>Label</label><br />
            <Input multiline row="4" />
        </form>
        </section>
    )
}



export default App