import { Link } from "react-router-dom";
export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name"> <strong>Assignment Name</strong></label> <br />
            <br />
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description" style={{ resize: 'none', width: '70%', height: '200px' }}>
                The assignment is available online Submit a link to the landing page of your Web Application running on Netlify.
                The landing page should include the following: Your full name and section links to each of the lab assignments,
                link to the Kanbas application, links to all relevant source code repositories. The Kanbas application should include a link to navigate back to the landing page.
            </textarea>
            <br />
            <br />
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assignmentgroup">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-assignmentgroup">
                            <option value="VAL1">Value 1</option>
                            <option value="VAL2">Value 2</option>
                            <option selected value="ASSIGNMENTS">
                                ASSIGNMENTS</option>
                            <option value="VAL3">Value 3</option>
                        </select>
                    </td>
                </tr>
                < br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-displaygradeas">Display Grade As</label>
                    </td>
                    <td>
                        <select id="wd-displaygradeas">
                            <option value="VAL1">Value 1</option>
                            <option value="VAL2">Value 2</option>
                            <option selected value="Percentage">
                                Percentage</option>
                            <option value="VAL3">Value 3</option>
                        </select>
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submissiontype">Submission Type</label>
                    </td>
                    <td>
                        <select id="submissiontype">
                            <option value="VAL1">Value 1</option>
                            <option value="VAL2">Value 2</option>
                            <option selected value="Online">
                                Online</option>
                            <option value="VAL3">Value 3</option>
                        </select>
                    </td>
                </tr>
                <br />
                <tr>
                    <td>    </td>
                    <td>
                        <label id="wd-checkboxes"> Online Entry Options</label>
                    </td>
                    
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <input type="checkbox" id="wd-checkbox-text" />
                        <label htmlFor="wd-checkbox-text">Text Entry</label>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <input type="checkbox" id="wd-checkbox-website" />
                        <label htmlFor="wd-checkbox-website">Website URL</label>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <input type="checkbox" id="wd-checkbox-media" />
                        <label htmlFor="wd-checkbox-media">Media Recordings</label>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <input type="checkbox" id="wd-checkbox-annotation" />
                        <label htmlFor="wd-checkbox-annotation">Student Annotation</label>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <input type="checkbox" id="wd-checkbox-file" />
                        <label htmlFor="wd-checkbox-file">File Uploads</label>
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-text-fields-assign"> Assign</label>    
                    </td>
                    <td>
                        <label htmlFor="wd-text-fields-assignto"> Assign to</label>   
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <input type="text" id="wd-text-fields-assign" value={"Everyone"}/>
                </tr>
                <br />
                <tr>
                    <td></td>
                    <td>
                        <label htmlFor="wd-text-fields-due-date">Due</label>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <input type="date" id="wd-text-fields-due-date" value="2024-05-13" />
                    </td>
                </tr>
                <br />
                <tr>
                    <td></td>
                    <td>
                        <label htmlFor="wd-text-fields-available-from">Available from</label>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <label htmlFor="wd-text-fields-until">Until</label>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <input type="date" id="wd-text-vailable-from" value="2024-05-06" />
                        &nbsp;&nbsp;
                        <input type="date" id="wd-text-until" value="2024-05-20" />
                    </td>
                </tr>
                <tr>
                    &nbsp;
                    <td>
                        <Link to="/Kanbas/Courses/1234/Assignments">
                            <button id="wd-add-assignment-edit"> Cancel</button>
                        </Link>
                        &nbsp;
                    
                        <Link to="/Kanbas/Courses/1234/Assignments">
                            <button id="wd-save">Save</button>
                        </Link>
                    </td>
                </tr>
            </table>
        </div>
    );
}

