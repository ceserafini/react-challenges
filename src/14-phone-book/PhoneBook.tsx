import "./styles.css";
import { useState } from "react";

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneBook, setPhoneBook] = useState([]);

  const submitHandler = (event) => {
    event.preventDefault();
    phoneBook.push({
      firstName,
      lastName,
      phone
    });

    phoneBook.sort(sortArray);

    setFirstName("");
    setLastName("");
    setPhone("");
    setPhoneBook(phoneBook);
  };

  const sortArray = (a, b) => {
    if (a.lastName < b.lastName) {
      return -1;
    }
    if (a.lastName > b.lastName) {
      return 1;
    }
  };

  return (
    <>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <form onSubmit={submitHandler}>
          <label>First Name</label>
          <br />
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <br />
          <br />
          <label>Last Name</label>
          <br />
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <br />
          <br />
          <label>Phone</label>
          <br />
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <br />
          <br />
          <button type="submit">Save</button>
          <br />
        </form>
      </div>
      {phoneBook.map((contact, index) => {
        return (
          <div key={index}>
            <p>First Name = {contact.firstName}</p>
            <p>Last Name = {contact.lastName}</p>
            <p>Phone = {contact.phone}</p>
          </div>
        );
      })}
    </>
  );
}
