import { useLocalStorage } from '../../hooks/useLocalStorage.js';
import './ShittyList.css';

function countWords(str) {
  str = str.trim();

  if (str === '') return 0;
  const wordsArray = str.split(/\s+/);

  return wordsArray.length;
}

export function ShittyList() {
  const [items] = useLocalStorage('items', []);

  return (
    <>
      <div className='grid'>
        {items.map((item, index) => (
          <div className='grid-item' style={{ gridRowEnd: `span ${countWords(item.text) + 10}` }} key={index}>
            <p style={{ fontSize: `${36 - countWords(item.text)}px` }}>{item.text}</p>
            {item.deadline && <span>📆 {item.deadline}</span>}
          </div>
        ))}
      </div>
    </>
  );
}
