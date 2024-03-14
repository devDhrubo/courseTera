import { useState } from "react";
import "./App.css";
import Cart from "./assets/components/Cart/Cart";
import Courses from "./assets/components/Courses/Courses";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const totalCredits = 15;

function App() {
  const [carts, setCarts] = useState([]);

  const handleCourseAdd = (course) => {
    const alreadyExist = carts.find((c) => c.id == course.id);
    const credits = carts.reduce(
      (previous, current) => previous + current.credit,
      0
    );
    if (credits + course.credit > totalCredits) {
      return (toast.error(`Only ${totalCredits} is allowed`));
    }

    if (!alreadyExist) {
      setCarts((c) => [...c, course]);
      toast.success("Course Added Successfully");
    } else {
      toast.warn("Course Already Added");
    }
  };

  return (
    <>
      <h1 className="text-4xl font-bold text-center p-4 mb-10">CourseTera</h1>
      <div className="grid grid-cols-12">
        <div className="col-span-9">
          <Courses handleCourseAdd={handleCourseAdd}></Courses>
        </div>
        <div className="col-span-3">
          <Cart carts={carts}></Cart>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
