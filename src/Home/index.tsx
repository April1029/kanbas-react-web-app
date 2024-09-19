import { Routes, Route, Navigate } from "react-router";
import HomeNavigation from "./Navigation";

export default function Home() {
    return (
        <div id="wd-home">
            <h1>Welcome to my landing page</h1>
            <h2> Name: Jingjing Ji</h2>
            <h2> Section: CS5610.20593.202510</h2>
            <table>
                <tr>
                    <td valign="top">
                        <HomeNavigation />
                    </td>
                    
                </tr>
            </table>
        </div>
    );
}

