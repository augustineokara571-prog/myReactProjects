import { Link } from 'react-router-dom';
import { useColor } from '../color/Context';

export default function TaskPage2() {
  const { color, setColor } = useColor();

  return (
    <div>
      <h1>Page 2</h1>
      <p>Current Color: {color}</p>
      <Link to="/taskpage1"><button className="border-slate-800 hover:bg-green-600 relative left-270 bottom-12 shadow-md border border-[2px] bg-fuchsia-500 rounded-[7px] py-2 px-5 mt-2">Back to task Page 1</button></Link>
      <Link to="/dmsignup"><button className="border-slate-800 hover:bg-green-600 relative left-228 top-5 shadow-md border border-[2px] bg-fuchsia-500 rounded-[7px] py-2 px-5 mt-2">Go to Dmsignup</button></Link>
    </div>
  );
}