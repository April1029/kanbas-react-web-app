export default function Assignments() {
    return (
      <div id="wd-assignments">
        <input id="wd-search-assignment"
               placeholder="Search for Assignments" />
               &nbsp;&nbsp;
        <button id="wd-add-assignment-group">+ Group</button>
        &nbsp;
        <button id="wd-add-assignment">+ Assignment</button>
        <h3 id="wd-assignments-title">
          ASSIGNMENTS 40% of Total <button>+</button>
        </h3>
        <ul id="wd-assignment-list">
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123">
              A1 - ENV + HTML
            </a>
            <br />
            <label htmlFor="wd-text-description"> Multiple Modules | <strong>Not available until</strong> May 6 at 12:00am |</label> <br />  
            <label htmlFor="wd-text-description"> <strong>Due</strong> May 13 at 11:59pm | 100 pts</label> <br />  
          </li>

          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123">
              A2 - CSS + BOOTSTRAP
            </a> 
            <br />
            <label htmlFor="wd-text-description"> Multiple Modules | <strong>Not available until</strong> May 13 at 12:00am |</label> <br />  
            <label htmlFor="wd-text-description"> <strong>Due</strong> May 20 at 11:59pm | 100 pts</label> <br />    
          </li>
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123">
              A3 - JAVASCRIPT + REACT
            </a>    
            <br />
            <label htmlFor="wd-text-description"> Multiple Modules | <strong>Not available until</strong> May 20 at 12:00am |</label> <br />  
            <label htmlFor="wd-text-description"> <strong>Due</strong> May 27 at 11:59pm | 100 pts</label> <br />  
          </li>
        </ul>
      </div>
  );}
  