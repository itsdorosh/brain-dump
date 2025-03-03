import {useState} from "react";
import {Dumper} from "../Dumper/Dumper.jsx";
import {ShittyList} from "../ShittyList/ShittyList.jsx";
import brainDumpLogo from '/brain-dump.svg';
import './App.css'

function App() {

    const [showShittyList, setShowShittyList] = useState(false);

    const hero = <div className="hero">
        <img src={brainDumpLogo} className="logo" alt="brain dump Logo"/>
        <h1>brain dump_</h1>
    </div>;

    return (<>
        <header>
            <button id="reveal" onClick={() => setShowShittyList(!showShittyList)}>Reveal ✨</button>
            {showShittyList && hero}
        </header>
        <main>
            {!showShittyList && hero}
            {showShittyList ? <ShittyList/> : <Dumper/>}
        </main>
        <p>© itsdorosh | 2024</p>
    </>);
}

export default App;
