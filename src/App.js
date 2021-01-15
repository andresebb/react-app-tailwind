import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <h1 className="bg-yellow-500 text-white p-12 text-center text-2xl font-bold font-serif font-bonita">
        Hola Tailwind
      </h1>
      <p className="font-bold text-center mt-6">
        Configuracion inicial de tailwind con create-react-app
      </p>

      <div className="flex text-center justify-between mt-24 bg-yellow-500 p-12 ">
        <div className="caja w-72  bg-blue-500">Box 1</div>
        <div className="caja w-72 bg-blue-500">Box 2</div>
        <div className="caja w-72 bg-blue-500">Box 2</div>
      </div>
      <button className="boton hover:nuevoboton">Soy un botton</button>
      <button disabled class="boton disabled:opacity-25 bg-blue-500">
        Submit
      </button>
    </div>
  );
}

export default App;
