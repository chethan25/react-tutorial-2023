import './App.css';

function App() {
  return (
    <div className="App">
      <Job salary={90000} position="Senior SDE" company="Amazon" />
      <Job salary={230000} position="Junior SDE" company="Google" />
      <Job salary={120000} position="Project Manager" company="Netflix" />
    </div>
  );
}

const Job = ({ salary, position, company }) => {
  return (
    <ul>
      <li>Company: {company}</li>
      <li>Position: {position}</li>
      <li>Salary: {salary}</li>
    </ul>
  );
};

export default App;
