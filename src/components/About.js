export default function About(props) {
  return (
    <div className='container' style= {{background: props.mode === 'light' ? 'white' : '#1d1d1e', color: props.mode === 'light' ? 'black' : 'white'}}>
            <div className="accordion" id="accordionExample" style= {{background: props.mode === 'light' ? 'white' : '#1d1d1e', color: props.mode === 'light' ? 'black' : 'white'}}>
                <h1 className='my-2'>About us</h1>
                <div className="accordion-item" style= {{background: props.mode === 'light' ? 'white' : '#1d1d1e', color: props.mode === 'light' ? 'black' : 'white'}}>
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" style= {{background: props.mode === 'light' ? 'white' : '#1d1d1e', color: props.mode === 'light' ? 'black' : 'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <b>Text Manipulation</b>
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    A text utilities React app allows users to easily manipulate text in various ways. Some of the key features of this type of app include:
                    <ul>
                        <li><b>Convert text to uppercase or lowercase: </b>This feature allows users to quickly change the case of their text to uppercase or lowercase with just a click of a button. This can be particularly useful for creating headings or titles that stand out.</li>
                        <li><b>Remove whitespace: </b>The app can automatically remove extra whitespace from text, making it more readable and easier to work with. This can be particularly useful when working with large blocks of text or code.</li>
                        <li><b>Count the number of words and characters: </b>The app can also count the number of words and characters in the text, which can be useful for measuring the length of a text and determining if it meets a specific word count requirement.</li>
                        <li><b>Find and Replace: </b>This feature allows users to search for specific text and replace it with new text, this can be useful for editing large documents and making quick changes.</li>
                        <li><b>Text Encryption/Decryption: </b>App can also have the functionality of text encryption and decryption, with this user can encrypt their text with a password and decrypt it when needed. This feature can be useful for sensitive information.</li>
                    </ul>
                    Overall, these text manipulation features make it easy for users to work with text in various ways, and can help them to create high-quality written content in less time.
                    </div>
                    </div>
                </div>
                <div className="accordion-item" style= {{background: props.mode === 'light' ? 'white' : '#1d1d1e', color: props.mode === 'light' ? 'black' : 'white'}}>
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" style= {{background: props.mode === 'light' ? 'white' : '#1d1d1e', color: props.mode === 'light' ? 'black' : 'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <b>Text Formatting</b>
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    A text utilities React app also includes advanced text formatting options to make it an ideal tool for writers, bloggers, and content creators. Some of the key features of this type of app include:
                    <ul>
                        <li><b>Bold, Italic, and Underline: </b>These features allow users to quickly and easily apply different text styles to selected text, making it stand out and more noticeable. This can be useful for creating headings, emphasis, or highlighting important information.</li>
                        <li><b>Text Alignment: </b>App allows users to align their text to left, right, center or justified, this can be useful to make the text more readable.</li>
                        <li><b>Text Color and Background color: </b>Users can change the color of the text and background color of the text. This can be useful for creating visually appealing text and highlighting important information.</li>
                        <li><b>Bulleted and Numbered Lists: </b>The app can also create bulleted and numbered lists, making it easy to organize information and create clear, easy-to-read text.</li>
                        <li><b>Inserting Images and links: </b>The app can also insert images and links to text, which can be useful for creating more engaging and interactive content.</li>
                    </ul>
                    Overall, these text formatting features help users to create high-quality written content that is visually appealing and easy to read. With the ability to quickly and easily apply different text styles and formatting, users can create professional-looking documents in less time.
                    </div>
                    </div>
                </div>
                <div className="accordion-item" style= {{background: props.mode === 'light' ? 'white' : '#1d1d1e', color: props.mode === 'light' ? 'black' : 'white'}}>
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" style= {{background: props.mode === 'light' ? 'white' : '#1d1d1e', color: props.mode === 'light' ? 'black' : 'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <b>Text Editing and Sharing</b>
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    A text utilities React app includes a text editor component, which allows users to input and edit text, with options such as undo, redo, and the ability to paste and copy text. This makes it an efficient and easy-to-use tool for editing and creating written content. Some of the key features of this type of app include:
                    <ul>
                        <li><b>Text Editor: </b>The text editor component allows users to input and edit text, with options such as undo, redo, and the ability to paste and copy text. This makes it an efficient and easy-to-use tool for editing and creating written content.</li>
                        <li><b>Spell Checker: </b>App includes spell checker feature which helps users to check their text for spelling errors and suggests corrections. This can be useful for creating high-quality written content.</li>
                        <li><b>Auto-Save: </b>App can automatically save the text, so that users don't have to worry about losing their work.</li>
                        <li><b>Exporting Text in Different File Formats: </b>The app can export the text in different file formats, such as PDF, Docx, and RTF. This allows users to easily share their text with others and collaborate on written projects.</li>
                        <li><b>Cloud Syncing: </b>App can also sync the text on the cloud, so that users can access their text from any device.</li>
                    </ul>
                    Overall, the text editing and sharing features of a text utilities React app make it easy for users to create and share high-quality written content. With the ability to export text in different file formats, users can share their text with others and collaborate on written projects with ease.
                    </div>
                    </div>
                </div>
        </div>

    </div>
  )
}
