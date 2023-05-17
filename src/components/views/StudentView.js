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
      <h3>{student.campus.name}</h3>
      <button onClick={deleteAndRedirect}>Delete</button>
    </div>
  );

};

export default StudentView;