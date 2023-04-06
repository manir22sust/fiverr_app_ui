import React from "react";
import { Link } from "react-router-dom";
import "./Messages.scss";

export const Messages = () => {
  const message =
    " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit reprehenderit fugit praesentium velit aspernatur accusantium veritatis provident debitis voluptatem nulla voluptas eveniet odio nisi, quis officiis cum sapiente. Et, ullam.";
  return (
    <div className="messages">
      <div className="container">
        <div className="title">
          <h1>Messages </h1>
        </div>

        <table>
          <tr>
            <th>Buyer</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr className="active">
            <td>John Doe</td>
            <td>
              {" "}
              <Link to="/message/123" className="link">
                {" "}
                {message.substring(0, 100)}...
              </Link>
            </td>
            <td> 1 day ago </td>
            <td>
              <button>Mark as Read </button>
            </td>
          </tr>
          <tr className="active">
            <td>John Doe</td>
            <td>
              {" "}
              <Link to="/message/123" className="link">
                {message.substring(0, 100)}...{" "}
              </Link>
            </td>
            <td> 1 day ago </td>
            <td>
              <button>Mark as Read </button>
            </td>
          </tr>{" "}
          <tr>
            <td>John Doe</td>
            <td>
              {" "}
              <Link to="/message/123" className="link">
                {" "}
                {message.substring(0, 100)}...{" "}
              </Link>
            </td>
            <td> 1 day ago </td>
          </tr>{" "}
          <tr>
            <td>John Doe</td>
            <td>
              {" "}
              <Link to="/message/123" className="link">
                {" "}
                {message.substring(0, 100)}...
              </Link>
            </td>
            <td> 1 day ago </td>
          </tr>{" "}
          <tr>
            <td>John Doe</td>
            <td>
              {" "}
              <Link to="/message/123" className="link">
                {" "}
                {message.substring(0, 100)}...
              </Link>
            </td>
            <td> 1 day ago </td>
            <td></td>
          </tr>{" "}
          <tr>
            <td>John Doe</td>
            <td>
              {" "}
              <Link to="/message/123" className="link">
                {" "}
                {message.substring(0, 100)}...
              </Link>
            </td>
            <td> 1 day ago </td>
          </tr>{" "}
        </table>
      </div>
    </div>
  );
};
