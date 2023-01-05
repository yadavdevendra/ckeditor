import React from 'react';
import { text } from './Indexcom'
import { CKEditor } from 'ckeditor4-react';

const { useState } = React;
const Edit = () => {
    const [events, setEvents] = useState<string[]>([]);
    const logEvent = (evt: any) => {
        setEvents((events) => [evt, ...events]);
    }
    return (
        <div>
            <CKEditor
                initData={text}
                // config={toolbar}
                // onFocus={logEvent}
                // onBlur={logEvent}
                onChange={logEvent}
                onBeforeLoad={logEvent}
            // onSelectionChange={logEvent}
            />

        </div>
    );
}

export default Edit
