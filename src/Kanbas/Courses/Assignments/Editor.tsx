import { Link } from "react-router-dom";

export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor" className="container">
            <div className="row mb-3">
                <div className="col-12">
                    <label htmlFor="wd-name" className="form-label"><strong>Assignment Name</strong></label>
                    <input id="wd-name" className="form-control" value="A1" />
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-12">
                    <div className="form-control" style={{ resize: 'none', height: 'auto', padding: '10px' }}>
                        <p>
                            The assignment is <span className="text-danger">available online.</span> </p>
                        <p>Submit a link to the landing page of your Web Application running on Netlify.
                        </p>
                        <p>The landing page should include the following:</p>
                        <ul>
                            <li>Your full name and section</li>
                            <li>Links to each of the lab assignments</li>
                            <li>Link to the Kanbas application</li>
                            <li>Links to all relevant source code repositories</li>
                        </ul>
                        <p>The Kanbas application should include a link to navigate back to the landing page.</p>
                    </div>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-12">
                    <div className="d-flex align-items-center mb-2">
                        <label htmlFor="wd-points" className="form-label me-3 mb-0 text-end" style={{ minWidth: '150px' }}>Points</label>
                        <input id="wd-points" className="form-control flex-grow-1" value={100} />
                    </div>

                    <div className="d-flex align-items-center mb-2">
                        <label htmlFor="wd-assignmentgroup" className="form-label me-3 mb-0 text-end" style={{ minWidth: '150px' }}>Assignment Group</label>
                        <select id="wd-assignmentgroup" className="form-select flex-grow-1">
                            <option value="VAL1">Value 1</option>
                            <option value="VAL2">Value 2</option>
                            <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
                            <option value="VAL3">Value 3</option>
                        </select>
                    </div>

                    <div className="d-flex align-items-center mb-2">
                        <label htmlFor="wd-displaygradeas" className="form-label me-3 mb-0 text-end" style={{ minWidth: '150px' }}>Display Grade As</label>
                        <select id="wd-displaygradeas" className="form-select">
                            <option value="VAL1">Value 1</option>
                            <option value="VAL2">Value 2</option>
                            <option selected value="Percentage">Percentage</option>
                            <option value="VAL3">Value 3</option>
                        </select>
                    </div>

                    <div className="d-flex align-items-center mb-2">
                        <label htmlFor="wd-submissiontype" className="form-label me-3 mb-0 text-end" style={{ minWidth: '150px' }}>Submission Type</label>
                        <select id="wd-submissiontype" className="form-select">
                            <option value="VAL1">Value 1</option>
                            <option value="VAL2">Value 2</option>
                            <option selected value="Percentage">Online</option>
                            <option value="VAL3">Value 3</option>
                        </select>
                    </div>

                    <div className="mb-3" style={{ marginLeft: '170px' }}>
                        <h6 className="card-title"><strong>Online Entry Options </strong></h6>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="wd-checkbox-text" />
                            <label htmlFor="wd-checkbox-text" className="form-check-label">Text Entry</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="wd-checkbox-website" defaultChecked />
                            <label htmlFor="wd-checkbox-website" className="form-check-label">Website URL</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="wd-checkbox-media" />
                            <label htmlFor="wd-checkbox-media" className="form-check-label">Media Recordings</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="wd-checkbox-annotation" />
                            <label htmlFor="wd-checkbox-annotation" className="form-check-label">Student Annotation</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="wd-checkbox-file" />
                            <label htmlFor="wd-checkbox-file" className="form-check-label">File Uploads</label>
                        </div>
                    </div>

                    <div className="d-flex align-items-center mb-2">
                        <label htmlFor="wd-assign" className="form-label me-3 mb-0 text-end" style={{ minWidth: '150px' }}>Assign</label>
                        <label htmlFor="wd-assign" className="form-label me-3 mb-0 text-end">Assign to</label>
                    </div>

                    <div className="d-flex align-items-center mb-2" style={{ marginLeft: '165px' }}>
                        <div className="position-relative flex-grow-1">
                            <input type="text" id="wd-text-fields-assign" className="form-control" />
                            <span className="badge bg-secondary position-absolute" style={{ left: '10px', top: '50%', transform: 'translateY(-50%)' }}>
                                Everyone
                            </span>
                        </div>
                    </div>

                    <div className="d-flex align-items-center mb-2">
                        <div style={{ marginLeft: '170px' }}>
                            <label htmlFor="wd-due-date" className="form-label me-3 mb-0 text-end">Due</label>
                        </div>
                    </div>
                    <div className=" d-flex align-items-center mb-2 form-check" style={{ marginLeft: '140px' }}>
                        <input type="datetime-local" id="wd-text-fields-due-date" className="form-control" value="2024-05-13T12:30" />
                    </div>

                    <div className="d-flex align-items-center mb-2">
                        <div className="col-12 col-md-2" style={{ marginLeft: '165px' }}>
                            <label htmlFor="wd-available-from" className="form-label">Available From</label>
                            <input type="datetime-local" id="wd-available-from" className="form-control" value="2024-05-06T12:30" />
                        </div>
                        <div className="col-12 col-md-1"></div>
                        <div className="col-12 col-md-2">
                            <label htmlFor="wd-until" className="form-label mr-2">Until</label>
                            <input type="datetime-local" id="wd-until" className="form-control" value="2024-05-20T12:30" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 text-end">
                            <Link to="/Kanbas/Courses/1234/Assignments">
                                <button className="btn btn-secondary">Cancel</button>
                            </Link>
                            &nbsp;
                            <Link to="/Kanbas/Courses/1234/Assignments">
                                <button className="btn btn-danger">Save</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
