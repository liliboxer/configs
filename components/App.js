import Component from './Component.js';
import Footer from './Footer.js';

class App extends Component {
    render() {
        const dom = this.renderDOM();
        const footer = new Footer();
        const footerDOM = footer.render();
        dom.appendChild(footerDOM);
        return dom;
    }

    renderTemplate() {
        return /*html*/ `
            <div>
                <main>
                </main>
            </div>
        `;
    }

}

export default App;