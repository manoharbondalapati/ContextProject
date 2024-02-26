import React, { useContext, useEffect } from "react";
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { Table, Button } from "react-bootstrap";
import { TodoContext } from "./App";

const Todo = () => {
  console.log(TodoContext);
  const { addList, listItem, setaddList, setlistItem } =
    useContext(TodoContext);
  console.log(TodoContext);

  const fetchtitles = () => {
    axios
      .get("http://localhost:3001/posts")
      .then((response) => {
        setaddList(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchtitles();
  }, []);
  const handleAddTitle = (event) => {
    event.preventDefault();
    if (!listItem) {
      alert("please Enter title..!");
      return;
    }

    axios
      .post("http://localhost:3001/posts", {
        title: listItem,
        isPublished: false,
      })
      .then((response) => {
        if (response.status === 201) {
          fetchtitles();
          setlistItem("");
        }
      })
      .catch((error) => console.log(error));
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3001/posts/${id}`)
      .then((response) => {
        if (response.status === 200) {
          fetchtitles();
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container">
      <h1>ToDoLiSt</h1>
      <form onSubmit={handleAddTitle}>
        <input
          type="text"
          value={listItem}
          onChange={(e) => setlistItem(e.target.value)}
          placeholder="Enter title"
        />
        <button type="submit" id="button">
          Add Title
        </button>
      </form>
      <Table striped bordered hover className=" tableconatiner" variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>PUBLISHED?</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {addList?.map(({ id, title, isPublished }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{title}</td>
              <td>{{ isPublished } ? "Yes" : "No"}</td>
              <td id="actionsbutton">
                {" "}
                <Button variant="warning">
                  <FaUserEdit />
                </Button>
                <Button
                  variant="danger"
                  onClick={() => {
                    handleDelete(id);
                  }}
                >
                  <MdDelete size={20} />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Todo;
