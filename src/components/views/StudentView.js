/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
import { Link, useHistory } from "react-router-dom";

// Take in props data to construct the component
const StudentView = (props) => {
  const { student } = props;
  const { deleteStudent } = props;
  let history = useHistory();

  function deleteAndRedirect() {
    deleteStudent(student.id);
    history.push("/students");
  }

  // Render a single Student view 
  return (
    <div>
      <h1>{student.firstname + " " + student.lastname}</h1>
      <div>
        <img src={student.imageURL} alt="Campus" style={{ width: '200px', height: '150px', marginBottom: '10px' }} />
      </div>
      <Link to={`/campus/${student.campus.id}`}>
        <h3>{student.campus.name}</h3>
      </Link>
      <button onClick={deleteAndRedirect}>Delete</button>
      <Link to={`/editstudent/${student.id}`}>
        <button>Edit</button>
      </Link>
    </div>
  );

};

export default StudentView;