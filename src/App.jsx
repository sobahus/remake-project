import CardDashboard from "./components/Card";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main className="min-h-screen bg-gray-100">
      <nav className="flex flex-col =">
        <Navbar />
      </nav>

    <section>
      <CardDashboard/>
    </section>

    </main>
  );
};

export default App;
