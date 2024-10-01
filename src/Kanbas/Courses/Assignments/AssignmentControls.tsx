import { FaPlus } from "react-icons/fa6";
import { MdSearch } from "react-icons/md";
export default function AssignmentControls() {
    return (
        <div id="wd-assignment-controls" className="d-flex align-items-center border-start border-success">
             <div className="d-flex align-items-center flex-grow-1 position-relative">
                <input
                    id="wd-search-assignment"
                    className="form-control form-control-lg me-2"
                    placeholder="Search..."
                    style={{ width: "250px", paddingLeft: "40px" }} 
                />
                <MdSearch className="position-absolute" style={{ left: "10px", top: "50%", transform: "translateY(-50%)", fontSize: "24px" }} />
            </div>
            
            <button id="wd-add-assignment-btn" className="btn btn-lg btn-danger me-1 float-end">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Assignment</button>

            <button id="wd-add-group-btn" className="btn btn-lg btn-secondary me-1 float-end">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Group</button>

        </div>
    );
}
