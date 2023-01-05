export const toolbar = {
    toolbar: [
        ['Source'],
        ['Styles', 'Format', 'Font', 'FontSize'],
        ['Bold', 'Italic'],
        ['Undo', 'Redo'],
        ['EasyImageUpload'],
        ['About']
    ],
    extraPlugins: 'easyimage',
    removePlugins: 'image',
    cloudServices_uploadUrl: 'https://33333.cke-cs.com/easyimage/upload/',
    cloudServices_tokenUrl:
        'https://33333.cke-cs.com/token/dev/ijrDsqFix838Gh3wGO3F77FSW94BwcLXprJ4APSp3XQ26xsUHTi0jcb1hoBt'
}

// import { CKEditor } from '@ckeditor/ckeditor5-react'
// import React, { useState } from 'react'
// import { text } from './Indexcom'

// import { CKEditor } from 'ckeditor4-react';
// // import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// export const ToolBar = () => {
//     const [addData, setVal] = useState<any>(text)
//     const [addedData, showData] = useState<number | any>(0)
//     function handlechange(e: any, editor: any) {
//         const data = editor.getData();
//         setVal(data);
//     }
//     return (
//         <div>ToolBar
//             <h2>
//                 <u>CKEditors5 with React.js</u>
//             </h2>
//             <div style={{ width: '700px', display: 'inline-block', textAlign: 'left' }}>
//                 <div style={{ width: '700px', display: 'inline-block', textAlign: 'left', marginBottom: '5px' }}>
//                     <button style={{ backgroundColor: 'black', color: 'white' }} onClick={() => showData(!addedData)}>{addedData ? 'Hide Data' : 'show data'}</button>
//                 </div>
//                 <CKEditor editor={ClassicEditor} initData={addData} />
//                 <div>
//                     {addedData ? addData : ''}
//                 </div>
//             </div>
//         </div>
//     )
// }