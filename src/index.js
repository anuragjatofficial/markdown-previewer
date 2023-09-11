marked.setOptions({
  breaks: true,
  highlight: function (code) { return Prism.highlight(code, Prism.languages.javascript, "javascript") }
});

const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
};


const content = `# Welcome to my React Markdown Previewer!
---
## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`< div ></div> \`, between 2 backticks.

\`\`\`java
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
----------------------
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://anuragjatofficial.github.io/), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![Image](https://media.istockphoto.com/id/1297159365/photo/portrait-of-young-smiling-woman-face-partially-covered-with-flying-hair-in-windy-day-standing.jpg?s=612x612&w=0&k=20&c=I16c_ZzQHEeGoPUVrVP9pPusSzsmymvVKdQVgPuVdDo=)
`;


function App() {
  const [text, setText] = React.useState(content);
  return (
    <div className="d-flex justify-content-between align-items-center px-7" style={{background:'linear-gradient(180deg, #4cb8c4, #3cd3ad )', height:'100vh'}}>
      <Editor text={[text, setText]} />
      <Previewer text={[text, setText]} />
    </div>
  );
}

function Editor(props) {
  const handleChange = (event) => {
    props.text[1](event.target.value);
  };
  return (
    <div
      style={{ backgroundColor: '#FFFFFF44', backgroundBlur: '20px', resize: 'none', width: '40%', height: '90vh', marginLeft: '5%', borderRadius: '10px', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}
    >
      <div>
        <h2
          style={{ backgroundColor: 'black', color: 'white', fontSize: '24px', paddingLeft: '20px', paddingTop: '2px', paddingBottom: '2px' }}
        >
          <i
            class="fa fa-pencil-square-o"
            aria-hidden="true"
          >

          </i>
          &nbsp; Edit file
        </h2>
      </div>
      <textarea
        id="editor"
        style={{ backgroundColor: 'transparent', border: 'none', backgroundBlur: '20px', resize: 'none', padding: '20px', width: '100%', height: 'calc(100% - 42px)', borderRadius: '10px' }}
        value={props.text[0]}
        onChange={handleChange}
        placeholder='start writing your markdown ...'
      ></textarea>
    </div>
    
  );
}

function Previewer(props) {
  return (
    <div
      className=""
      style={{ backgroundColor: '#FFFFFF44', backgroundBlur: '20px', width: '40%', height: '90vh', marginRight: '5%', borderRadius: '10px', boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px' }} 
     
    >
      <div>
        <h2
          style={{ backgroundColor: 'black', color: 'white', fontSize: '24px', paddingLeft: '20px', paddingTop: '2px', paddingBottom: '2px' }}
        > 
          <i
           class="fa fa-eye" 
           aria-hidden="true"
          >

          </i>
          &nbsp; Preview 
        </h2>
      </div>
      <div
        id="preview"
        dangerouslySetInnerHTML={{
          __html: marked(props.text[0], { renderer: renderer }),
        }}
        style={{ padding: '20px', overflow: 'auto', overflowWrap: 'break-word', maxHeight:'calc(100% - 42px)' }}
      >

      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * Note: React 18 has known incompatibilities with the tests for this project (see issue)

Objective: Build an app that is functionally similar to this: https://markdown-previewer.freecodecamp.rocks/.

Fulfill the below user stories and get all of the tests to pass. Use whichever libraries or APIs you need. Give it your own personal style.

You can use any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery to complete this project. You should use a frontend framework (like React for example) because this section is about learning frontend frameworks. Additional technologies not listed above are not recommended and using them is at your own risk. We are looking at supporting other frontend frameworks like Angular and Vue, but they are not currently supported. We will accept and try to fix all issue reports that use the suggested technology stack for this project. Happy coding!


User Story #3: When I enter text into the #editor element, the #preview element is updated as I type to display the content of the textarea.

User Story #4: When I enter GitHub flavored markdown into the #editor element, the text is rendered as HTML in the #preview element as I type (HINT: You don't need to parse Markdown yourself - you can import the Marked library for this: https://cdnjs.com/libraries/marked).

User Story #5: When my markdown previewer first loads, the default text in the #editor field should contain valid markdown that represents at least one of each of the following elements: a heading element (H1 size), a sub heading element (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.

User Story #6: When my markdown previewer first loads, the default markdown in the #editor field should be rendered as HTML in the #preview element.

Optional Bonus (you do not need to make this test pass): My markdown previewer interprets carriage returns and renders them as br (line break) elements.

You can build your project by using this CodePen template and clicking Save to create your own pen. Or you can use this CDN link to run the tests in any environment you like: https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js

Once you're done, submit the URL to your working project with all its tests passing.
 * 
 * 
 * 
 * 
 */
