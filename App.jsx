import './App.css'
function App() {
  return (
    <div className="container">

      <div className="sidebar">
        <h2>Dashboard</h2>

        <ul>
          <li className="active">Dashboard</li>
          <li>Projects</li>
          <li>Tasks</li>
          <li>Team</li>
          <li>Reports</li>
          <li>Settings</li>
        </ul>
      </div>

      <div className="main">

        <h1>Welcome back, Shravee!</h1>
        <p>Here's what's happening in your workspace today.</p>

        <div className="cards">

          <div className="card">
            <h3>Total Projects</h3>
            <h2>24</h2>
          </div>

          <div className="card">
            <h3>Total Tasks</h3>
            <h2>1248</h2>
          </div>

          <div className="card">
            <h3>Team Members</h3>
            <h2>18</h2>
          </div>

        </div>

        <h2 className="heading">Recent Tasks</h2>

        <table>
          <tr>
            <th>Task</th>
            <th>Project</th>
            <th>Assignee</th>
            <th>Status</th>
          </tr>

          <tr>
            <td>Review UI design</td>
            <td>Project Library</td>
            <td>AK</td>
            <td>Completed</td>
          </tr>

          <tr>
            <td>Website development</td>
            <td>Speech to Text</td>
            <td>SPGH</td>
            <td>In Progress</td>
          </tr>

          <tr>
            <td>Update evaluation</td>
            <td>Medical QA</td>
            <td>ASFJ</td>
            <td>Pending</td>
          </tr>

          <tr>
            <td>Prepare QA report</td>
            <td>Data Project</td>
            <td>NK</td>
            <td>Completed</td>
          </tr>

        </table>

      </div>
    </div>
  );
}

export default App;
