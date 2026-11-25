import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Task() {
    const [numbers] = useState([10, 20, 30, 40, 50]);

    const [products] = useState([
        { name: "Phone", price: 500 },
        { name: "Laptop", price: 1200 },
        { name: "Tablet", price: 300 }
    ]);

    const [colors] = useState(["red", "green", "blue", "yellow"]);

    const [fruits, setFruits] = useState(["apple", "banana"]);
    const [taskList, setTaskList] = useState(["study", "eat", "sleep", "exercise"]);
    const [scores, setScores] = useState([50, 60, 70, 80]);

    const [count, setCount] = useState(0);

    const [name, setName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [quantity, setQuantity] = useState(0);

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("Guest");
    const [password, setPassword] = useState("");

    const [names, setNames] = useState(["Alice", "Bob"]);
    const [nameInput, setNameInput] = useState("");

    const [items, setItems] = useState(["milk", "bread"]);
    const [itemInput, setItemInput] = useState("");

    const [students, setStudents] = useState(["David - 20 years old", "Emma - 22 years old"]);
    const [studentName, setStudentName] = useState("");
    const [studentAge, setStudentAge] = useState("");

    const showMessage = () => {
        console.log("Hello from function!");
    };

    const handleCount = () => {
        const nextCount = count + 1;
        setCount(nextCount);
        console.log(nextCount);
    }

    const handleAddName = () => {
        if (!nameInput.trim()) return;
        setNames([...names, nameInput]);
        setNameInput("");
    };

    const handleAddItem = () => {
        if (!itemInput.trim()) return;
        setItems([...items, itemInput]);
        setItemInput("");
    };

    const handleAddStudent = () => {
        if (!studentName.trim() || !studentAge.trim()) return;
        setStudents([...students, `${studentName} - ${studentAge} years old`]);
        setStudentName("");
        setStudentAge("");
    };

    return (
       <div className="min-h-screen bg-slate-900 text-slate-100 p-6 md:p-12 font-sans antialiased">
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* Header */}
        <header className="border-b border-slate-800 pb-6 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            React Practice Dashboard
          </h1>
          <p className="text-slate-400 mt-2 text-sm md:text-base">
            All 18 practice tasks beautifully styled with Tailwind CSS.
          </p>
        </header>

        {/* Part 1 */}
        <section className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-6 shadow-xl backdrop-blur-sm">
          <h2 className="text-xl font-bold text-indigo-400 mb-6 flex items-center gap-2">
            <span className="bg-indigo-500/10 text-indigo-400 px-2.5 py-1 rounded-lg text-sm border border-indigo-500/20">Part 1</span> 
            Map in React
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/50">
              <h3 className="font-semibold text-slate-200 mb-3 text-sm uppercase tracking-wider">Task 1: Numbers</h3>
              <div className="flex flex-wrap gap-2">
                {numbers.map((n, i) => (
                  <span key={i} className="bg-slate-800 px-3 py-1.5 rounded-lg text-xs font-mono border border-slate-700 text-indigo-300">
                    Number: {n}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/50">
              <h3 className="font-semibold text-slate-200 mb-3 text-sm uppercase tracking-wider">Task 2: Products</h3>
              <div className="space-y-2">
                {products.map((p, i) => (
                  <div key={i} className="flex justify-between items-center text-xs bg-slate-800 px-3 py-2 rounded-lg border border-slate-700">
                    <span className="font-medium text-slate-300">{p.name}</span>
                    <span className="text-emerald-400 font-mono">${p.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/50">
              <h3 className="font-semibold text-slate-200 mb-3 text-sm uppercase tracking-wider">Task 3: Map with Index</h3>
              <div className="space-y-1.5">
                {colors.map((c, i) => (
                  <div key={i} className="text-xs text-slate-300 font-mono">
                    <span className="text-indigo-400 font-bold">{i + 1}.</span> {c}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Part 2 */}
        <section className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-6 shadow-xl backdrop-blur-sm">
          <h2 className="text-xl font-bold text-sky-400 mb-6 flex items-center gap-2">
            <span className="bg-sky-500/10 text-sky-400 px-2.5 py-1 rounded-lg text-sm border border-sky-500/20">Part 2</span> 
            Arrays in State
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/50 flex flex-col justify-between">
              <div>
                <h3 className="font-semibold text-slate-200 mb-2 text-sm uppercase tracking-wider">Task 4: Add Multiple</h3>
                <p className="text-xs text-slate-400 mb-4 font-mono bg-slate-800 p-2 rounded-lg truncate">{fruits.join(", ")}</p>
              </div>
              <button 
                onClick={() => setFruits([...fruits, "mango", "orange"])}
                className="w-full bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold py-2 px-3 rounded-lg transition-all shadow-lg shadow-sky-600/20 active:scale-[0.98]">
                Add Mango & Orange
              </button>
            </div>

            <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/50 flex flex-col justify-between">
              <div>
                <h3 className="font-semibold text-slate-200 mb-2 text-sm uppercase tracking-wider">Task 5: Remove Item</h3>
                <p className="text-xs text-slate-400 mb-4 font-mono bg-slate-800 p-2 rounded-lg truncate">{taskList.join(", ")}</p>
              </div>
              <button 
                onClick={() => setTaskList(taskList.slice(0, -1))}
                className="w-full bg-rose-600/80 hover:bg-rose-500 text-white text-xs font-semibold py-2 px-3 rounded-lg transition-all shadow-lg shadow-rose-600/20 active:scale-[0.98]">
                Remove Last Task
              </button>
            </div>

            <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/50 flex flex-col justify-between">
              <div>
                <h3 className="font-semibold text-slate-200 mb-2 text-sm uppercase tracking-wider">Task 6: Update Item</h3>
                <p className="text-xs text-slate-400 mb-4 font-mono bg-slate-800 p-2 rounded-lg truncate">{scores.join(", ")}</p>
              </div>
              <button 
                onClick={() => setScores(scores.map((s) => s + 10))}
                className="w-full bg-amber-600 hover:bg-amber-500 text-white text-xs font-semibold py-2 px-3 rounded-lg transition-all shadow-lg shadow-amber-600/20 active:scale-[0.98]">
                Increase Scores (+10)
              </button>
            </div>
          </div>
        </section>

        {/* Part 3 */}
        <section className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-6 shadow-xl backdrop-blur-sm">
          <h2 className="text-xl font-bold text-emerald-400 mb-6 flex items-center gap-2">
            <span className="bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded-lg text-sm border border-emerald-500/20">Part 3</span> 
            onClick Events
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/50">
              <h3 className="font-semibold text-slate-200 mb-3 text-sm uppercase tracking-wider">Task 7: Simple Alert</h3>
              <button 
                onClick={() => alert("Button clicked!")}
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold py-2.5 px-3 rounded-lg transition-all shadow-lg shadow-emerald-600/20 active:scale-[0.98]">
                Trigger Alert
              </button>
            </div>

            <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/50">
              <h3 className="font-semibold text-slate-200 mb-3 text-sm uppercase tracking-wider">Task 8: Console Log</h3>
              <button 
                onClick={showMessage}
                className="w-full bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs font-semibold py-2.5 px-3 rounded-lg border border-slate-600 transition-all active:scale-[0.98]">
                Log Message
              </button>
            </div>

            <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/50">
              <h3 className="font-semibold text-slate-200 mb-3 text-sm uppercase tracking-wider">Task 9: Multiple Actions</h3>
              <button 
                onClick={handleCount}
                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold py-2.5 px-3 rounded-lg transition-all shadow-lg shadow-indigo-600/20 active:scale-[0.98]">
                Count: {count}
              </button>
            </div>
          </div>
        </section>

        {/* Part 4 */}
        <section className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-6 shadow-xl backdrop-blur-sm">
          <h2 className="text-xl font-bold text-purple-400 mb-6 flex items-center gap-2">
            <span className="bg-purple-500/10 text-purple-400 px-2.5 py-1 rounded-lg text-sm border border-purple-500/20">Part 4</span> 
            Input onChange
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/50 space-y-3">
              <h3 className="font-semibold text-slate-200 text-sm uppercase tracking-wider">Task 10: Basic Input</h3>
              <input 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Type name..." 
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <p className="text-xs text-slate-400 font-mono">You typed: <span className="text-purple-300">{name}</span></p>
            </div>

            <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/50 space-y-3">
              <h3 className="font-semibold text-slate-200 text-sm uppercase tracking-wider">Task 11: Multiple Fields</h3>
              <div className="grid grid-cols-2 gap-2">
                <input 
                  value={firstName} 
                  onChange={(e) => setFirstName(e.target.value)} 
                  placeholder="First" 
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-2 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <input 
                  value={lastName} 
                  onChange={(e) => setLastName(e.target.value)} 
                  placeholder="Last" 
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-2 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <p className="text-xs text-slate-400 font-mono truncate">Full name: <span className="text-purple-300">{firstName} {lastName}</span></p>
            </div>

            <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/50 space-y-3">
              <h3 className="font-semibold text-slate-200 text-sm uppercase tracking-wider">Task 12: Number Input</h3>
              <input 
                type="number" 
                value={quantity} 
                onChange={(e) => setQuantity(Number(e.target.value))} 
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <p className="text-xs text-slate-400 font-mono">Quantity: <span className="text-purple-300">{quantity}</span></p>
            </div>
          </div>
        </section>

        {/* Part 5 */}
        <section className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-6 shadow-xl backdrop-blur-sm">
          <h2 className="text-xl font-bold text-amber-400 mb-6 flex items-center gap-2">
            <span className="bg-amber-500/10 text-amber-400 px-2.5 py-1 rounded-lg text-sm border border-amber-500/20">Part 5</span> 
            Input Value Binding
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/50 space-y-3">
              <h3 className="font-semibold text-slate-200 text-sm uppercase tracking-wider">Task 13: Controlled Input</h3>
              <div className="flex gap-2">
                <input 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  placeholder="Email" 
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <button onClick={() => setEmail("")} className="bg-slate-800 hover:bg-slate-700 px-3 text-xs text-rose-400 rounded-lg border border-slate-700">
                  Clear
                </button>
              </div>
            </div>

            <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/50 space-y-3">
              <h3 className="font-semibold text-slate-200 text-sm uppercase tracking-wider">Task 14: Default Text</h3>
              <div className="flex gap-2">
                <input 
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)} 
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <button onClick={() => setUsername("Admin")} className="bg-slate-800 hover:bg-slate-700 px-3 text-xs text-amber-400 rounded-lg border border-slate-700">
                  Admin
                </button>
              </div>
            </div>

            <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/50 space-y-3">
              <h3 className="font-semibold text-slate-200 text-sm uppercase tracking-wider">Task 15: Value Display</h3>
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Password" 
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <p className="text-xs text-slate-400 font-mono">Length: <span className="text-amber-300">{password.length}</span> chars</p>
            </div>
          </div>
        </section>

        {/* Part 6 */}
        <section className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-6 shadow-xl backdrop-blur-sm">
          <h2 className="text-xl font-bold text-rose-400 mb-6 flex items-center gap-2">
            <span className="bg-rose-500/10 text-rose-400 px-2.5 py-1 rounded-lg text-sm border border-rose-500/20">Part 6</span> 
            Combine Everything
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Task 16 */}
            <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/50 space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <h3 className="font-semibold text-slate-200 text-sm uppercase tracking-wider">Task 16: Name List</h3>
                <div className="flex gap-2">
                  <input 
                    value={nameInput} 
                    onChange={(e) => setNameInput(e.target.value)} 
                    placeholder="Name" 
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-rose-500"
                  />
                  <button onClick={handleAddName} className="bg-rose-600 hover:bg-rose-500 px-3 py-1.5 text-xs font-semibold rounded-lg text-white transition-all">
                    Add
                  </button>
                </div>
                <div className="space-y-1">
                  {names.map((n, i) => (
                    <div key={i} className="text-xs bg-slate-800 px-2.5 py-1.5 rounded border border-slate-700 text-slate-300">
                      {n}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Task 17 */}
            <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/50 space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <h3 className="font-semibold text-slate-200 text-sm uppercase tracking-wider">Task 17: Shopping List</h3>
                <div className="flex gap-2">
                  <input 
                    value={itemInput} 
                    onChange={(e) => setItemInput(e.target.value)} 
                    placeholder="Item" 
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-rose-500"
                  />
                  <button onClick={handleAddItem} className="bg-rose-600 hover:bg-rose-500 px-3 py-1.5 text-xs font-semibold rounded-lg text-white transition-all">
                    Add
                  </button>
                </div>
                <button onClick={() => setItems(items.slice(0, -1))} className="w-full bg-slate-800 hover:bg-slate-700 text-rose-400 text-xs py-1 rounded border border-slate-700">
                  Remove Last
                </button>
                <div className="space-y-1">
                  {items.map((item, i) => (
                    <div key={i} className="text-xs bg-slate-800 px-2.5 py-1.5 rounded border border-slate-700 text-slate-300">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Task 18 */}
            <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/50 space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <h3 className="font-semibold text-slate-200 text-sm uppercase tracking-wider">Task 18: Mini App</h3>
                <div className="space-y-2">
                  <input 
                    value={studentName} 
                    onChange={(e) => setStudentName(e.target.value)} 
                    placeholder="Student Name" 
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-rose-500"
                  />
                  <input 
                    value={studentAge} 
                    onChange={(e) => setStudentAge(e.target.value)} 
                    placeholder="Age" 
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-rose-500"
                  />
                </div>
                <div className="flex gap-2">
                  <button onClick={handleAddStudent} className="flex-1 bg-rose-600 hover:bg-rose-500 py-1.5 text-xs font-semibold rounded-lg text-white transition-all">
                    Add Student
                  </button>
                  <button onClick={() => setStudents([])} className="bg-slate-800 hover:bg-slate-700 px-3 text-xs text-slate-400 rounded-lg border border-slate-700">
                    Clear
                  </button>
                </div>
                <p className="text-xs text-slate-400 font-mono">Total: <span className="text-rose-400 font-bold">{students.length}</span></p>
                <div className="space-y-1">
                  {students.map((s, i) => (
                    <div key={i} className="text-xs bg-slate-800 px-2.5 py-1.5 rounded border border-slate-700 text-slate-300">
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
              <Link to="/page1"><button className="border-slate-800 hover:bg-green-600 relative left-240  shadow-md border border-[2px] bg-fuchsia-500 rounded-[7px] py-2 px-5 mt-2">Go to Page 1</button></Link>

      </div>
    </div>
    );
}