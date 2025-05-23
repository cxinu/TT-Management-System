import { FaCalendarAlt } from 'react-icons/fa';
import { CiLogin } from 'react-icons/ci';
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  const logoutHandler = (event) =>{
    event.preventDefault();
    navigate("/");
  } 
  return (
      <header className="h-20 w-full bg-gray-600 flex justify-between px-5 max-[345px]:px-2 max-[445px]:h-12 ">
        <div className="flex gap-2 items-center">
          <div className="text-white text-2xl max-[680px]:text-lg max-[345px]:text-sm">
            <FaCalendarAlt />
          </div>
          <h1 className="text-2xl font-bold text-white max-[680px]:text-lg max-[345px]:text-sm">
            TimeTable Management
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-white h-9 w-9 flex justify-center items-center border-2 border-white rounded-full max-[345px]:h-7 max-[345px]:w-7 max-[345px]:text-xs">
            Img
          </div>
          <div>
            <p className="text-white text-lg font-bold max-[680px]:text-sm max-[345px]:text-xs">Admin/User</p>
            <p className="text-white text-sm max-[680px]:text-xs">Role</p>
          </div>
          <button 
          type='button'
          onClick={logoutHandler}
          className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 flex items-center max-[680px]:text-xs max-[680px]:px-2">
            <CiLogin /> Logout
          </button>
        </div>
      </header>
  );
}
