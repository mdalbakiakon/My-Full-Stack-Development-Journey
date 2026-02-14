import Card from "./components/Card";
import jobs from "./assets/dummy.js";

function App() {
  return (
    <>
      <div className="w-full flex-wrap max-w-7xl flex justify-center items-center gap-5 mx-auto">
        {jobs.map((elem) => (
          <Card
            key={elem.id}
            company={elem.company}
            posted={elem.posted}
            role={elem.role}
            type={elem.type}
            level={elem.level}
            salary={elem.salary}
            location={elem.location}
            logo={elem.logo}
          />
        ))}
      </div>
    </>
  );
}

export default App;
