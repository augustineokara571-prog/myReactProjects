import { Link } from 'react-router-dom';
import { useColor } from '../color/Context';

export default function TaskPage1() {
  const {color, setColor} = useColor();


  return (
    <div>
      <h1>Page 1</h1>
      <p>Current Color: {color}</p>
      <button onClick={() => setColor('red')}>
        Change Color to Red
      </button>
      <br/>
      <Link to="/taskpage2"><button className="border-slate-800 hover:bg-green-600 relative left-270 bottom-15 shadow-md border border-[2px] bg-fuchsia-500 rounded-[7px] py-2 px-5 mt-2">Go to task Page 2</button></Link>
    </div>
  );
}