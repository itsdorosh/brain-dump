import {useState} from "react";
import {useLocalStorage} from "../../hooks/useLocalStorage.js";
import "./Dumper.css";

const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
};

export function Dumper() {
    const [dump, setDump] = useState('');
    const [hasDeadline, setHasDeadline] = useState(false);
    const [deadline, setDeadline] = useState(formatDate(new Date()));
    const [items, setItems] = useLocalStorage('items', []);

    const handleSubmit = (formSubmitEvent) => {
        formSubmitEvent.preventDefault();

        const dumpedItem = {
            text: formSubmitEvent.target[0].value,
            hasDeadline: formSubmitEvent.target[1].checked,
            deadline: formSubmitEvent.target[2].value,
            createdAt: new Date().toISOString(),
        };

        if (!dumpedItem.text) {
            alert("so I should guess what you want to dump? 🤔");
            return;
        }

        setDeadline('2024-07-02');
        setHasDeadline(false);
        setDump('');
        setItems([...items, dumpedItem]);
    };

    return (
        <form className="dumper" onSubmit={handleSubmit}>
            <input
                type="text"
                value={dump}
                onChange={({target: {value}}) => setDump(value)}
                placeholder="dump the shit that's messing with you here..."
            />

            <div className="deadline">
                <div className="check">
                    <input
                        type="checkbox"
                        id="hasDeadline"
                        checked={hasDeadline}
                        onChange={() => setHasDeadline(!hasDeadline)}
                    />
                    <label htmlFor="hasDeadline">is this shit has deadline? 🔥</label>
                </div>

                {hasDeadline && <input
                    type="date"
                    value={deadline}
                    onChange={({target: {value}}) => setDeadline(value)}
                />}
            </div>

            <button type="submit">just dump it</button>
        </form>
    );
}