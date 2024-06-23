import React, { useEffect, useState } from "react";
import "./stylee.css";
import useDebounce from '../components/useDebounce';

const TestMe = () => {
  const [status, setStatus] = useState("open");
  const [activeStatus, setActiveStatus] = useState("open");
  const [ticketData, setTicketData] = useState([]);
  const [ticketId, setTicketId] = useState(2);
  const url = "http://127.0.0.1:3000";

  const debouncedStatus = useDebounce(status, 300); // Adjust the delay as needed

  const fetchTickets = async (appendUrl) => {
    const response = await fetch(`${url + (appendUrl ? appendUrl : "/tickets")}`);
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    console.log("ticketId", ticketId);
    if (ticketId) {
      fetchTickets(`/ticket?id=${ticketId}`).then((data) => {
        setTicketData(data);
        if (data.length > 0) {
          const newStatus = data[0]?.status;
          setStatus(newStatus);
          setActiveStatus(newStatus);
        }
      });
    }
  }, [ticketId]);

  useEffect(() => {
    console.log("STATUS", debouncedStatus);
    if (debouncedStatus) {
      fetchTickets(`/status?status=${debouncedStatus}`).then((data) => {
        setTicketData(data);
      });
    }
  }, [debouncedStatus]);

  const handleTabClick = (newStatus) => {
    setStatus(newStatus);
    setActiveStatus(newStatus);
  };

  return (
    <div>
      <input
        type="number"
        value={ticketId}
        onChange={(e) => setTicketId(e.target.value)}
      />
      <div className="filter-menu">
        <ul className="filter-list">
          <li
            onClick={() => handleTabClick("open")}
            className={`${activeStatus === "open" ? "active" : ""} item`}
          >
            <a href="javascript:;" className="item-link">
              New Ticket
            </a>
          </li>
          <li
            onClick={() => handleTabClick("inprogress")}
            className={`${activeStatus === "inprogress" ? "active" : ""} item`}
          >
            <a href="javascript:;" className="item-link">
              Inprogress Ticket
            </a>
          </li>
          <li
            onClick={() => handleTabClick("close")}
            className={`${activeStatus === "close" ? "active" : ""} item`}
          >
            <a href="javascript:;" className="item-link">
              Closed Ticket
            </a>
          </li>
          <li
            onClick={() => handleTabClick("empty")}
            className={`${activeStatus === "empty" ? "active" : ""} item`}
          >
            <a href="javascript:;" className="item-link">
              Empty Ticket
            </a>
          </li>
        </ul>
      </div>
      <div className="ticket-list">
        {ticketData &&
          ticketData.length > 0 &&
          ticketData.map((ticket) => {
            return (
              <div
                key={ticket.id}
                className="ticket-item"
                style={{
                  border: "2px solid black",
                  padding: "1vh",
                  margin: "1vh",
                  borderRadius: "5px",
                }}
              >
                <h3>{ticket.content}</h3>
                <p>{ticket.status}</p>
              </div>
            );
          })}
        {ticketData && ticketData.length === 0 && <h1>No ticket found</h1>}
      </div>
    </div>
  );
};

export default TestMe;
