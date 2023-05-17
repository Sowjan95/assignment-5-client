/*==================================================
CampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display a single campus and its students (if any).
================================================== */
import { Link, useHistory } from "react-router-dom";

// Take in props data to construct the component
const CampusView = (props) => {
  const {campus} = props;
  const {deleteCampus} = props;
  const {deleteStudent} = props;
  let history = useHistory();
  console.log(campus)


  function deleteAndRedirect() {
    deleteCampus(campus.id);
    history.push("/campuses");
  }

  function deleteStudentAndRefresh(student) {
    deleteStudent(student.id);
    window.location.reload();
  }
  
  // Render a single Campus view with list of its students
  return (
    <div>
      <h1>{campus.name}</h1>
      <p>{campus.address}</p>
      <p>{campus.description}</p>
      <div>
        <img src={campus.imageURL} alt="Campus" style={{ width: '200px', height: '150px', marginBottom: '10px' }} />
      </div>
      <button onClick={deleteAndRedirect}>Delete</button>
      <Link to={`/editcampus/${campus.id}`}>
        <button>Edit</button>
      </Link>
      {campus.students.length === 0 && <p>There are no students enrolled in this campus.</p>}
      {campus.students.map( student => {
        let name = student.firstname + " " + student.lastname;
        return (
          <div key={student.id}>
            <Link to={`/student/${student.id}`}>
              <h2>{name}</h2>
            </Link>
            <button onClick={() => deleteStudentAndRefresh(student)}>Delete Student</button>            
          </div>
        );
      })}
      {/* <Link to={`/newstudent`}>
        <button>Add New Student</button>
      </Link> */}
      <Link to={`/newstudent?campusId=${campus.id}`}>
        <button>Add New Student</button>
      </Link>
    </div>
  );
};

export default CampusView;