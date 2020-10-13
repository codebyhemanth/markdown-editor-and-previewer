marked.setOptions({
  breaks: true });

const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}` + '</a>';
};
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      md: placeholder };





  }
  updatePreview(e) {
    this.setState({
      md: e.target.value });}



  render() {
    return (
      React.createElement("div", null, "  ", React.createElement("h1", null, "hemanth markdown "),

      React.createElement("div", { className: "container" },
      React.createElement("div", null, "  ", React.createElement("h2", null, "EDITOR"), React.createElement("textarea", { id: "editor", type: "text", className: "editor", value: this.state.md, onChange: this.updatePreview.bind(this) })),
      React.createElement("div", null, React.createElement("h2", null, "PREVIEW"),
      React.createElement(MarkdownPreview, { className: "preview", markdown: this.state.md })))));






  }}

class MarkdownPreview extends React.Component {

  createMarkup() {
    return { __html: marked(this.props.markdown) };
  }

  render() {
    return (
      React.createElement("div", { id: "preview", className: "preview", dangerouslySetInnerHTML: this.createMarkup() }));


  }}


placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
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


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;
ReactDOM.render(React.createElement(App, null), document.getElementById('app'));