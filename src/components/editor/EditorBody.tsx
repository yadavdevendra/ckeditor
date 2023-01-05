import { text } from './Indexcom'
import { Markup } from 'interweave';
import { useState } from 'react';
export const EditorBody = () => {
    const[data,setText]=useState(text)
    function handleEdit(value:any) {
        setText(value);
    }
    return (
        <div onChange={(e:any)=>handleEdit(e.target.value)}>
            <input/>
           <Markup content={data}/>
        </div>
    )
}
