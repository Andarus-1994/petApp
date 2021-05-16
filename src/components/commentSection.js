import { useEffect, useState } from "react";
import { getPosts, addPost } from "./functions/commentSection.js";

function CommentSection({ props }) {
  const [messages, setMessages] = useState({ loading: true, data: [] });
  const [empty, setEmpty] = useState("");
  const [details, setDetails] = useState({ name: "", message: "" });
  const [warning, setWarning] = useState("");

  function handleNameChange(e) {
    setDetails({ ...details, name: e.target.value });
  }
  function handleMessageChange(e) {
    setDetails({ ...details, message: e.target.value });
  }

  function addComment() {
    if (details.name && details.message) {
      addPost({
        location: props.location,
        name: details.name,
        message: details.message,
      }).then((resp) => {
        getPosts({
          location: props.location,
        }).then((res) => {
          console.log(res);
          if (res.Empty) {
            setEmpty(res.Empty);
            setMessages({ ...messages, loading: false, data: [] });
          } else {
            var result = Object.keys(res).map((key) => [key, res[key]]);
            setEmpty("");
            setMessages({ ...messages, loading: false, data: result });
          }
        });
      });
    } else {
      setWarning("Complete all the fields please!");
    }
  }

  useEffect(() => {
    console.log("Works");
    console.log(props.location);
    if (messages.loading) {
      getPosts({
        location: props.location,
      }).then((res) => {
        console.log(res);
        if (res.Empty) {
          setEmpty(res.Empty);
          setMessages({ ...messages, loading: false, data: [] });
        } else {
          var result = Object.keys(res).map((key) => [key, res[key]]);

          console.log(result);
          setMessages({ ...messages, loading: false, data: result });
        }
      });
    }
  }, []);
  return (
    <div className="commentSection">
      <div className="addComment">
        <h1>Write a comment</h1>
        <div>
          <label>Char Name</label>{" "}
          <input
            onChange={handleNameChange}
            placeholder="Your char name"
            required
          ></input>
        </div>
        <div>
          <label>Comment</label>{" "}
          <textarea
            onChange={handleMessageChange}
            placeholder="Add a public comment"
            required
          ></textarea>
        </div>
        <button onClick={addComment}>Add Comment</button>
        <div className="warning">{warning}</div>
      </div>

      <h1>{empty}</h1>
      {messages.loading ? (
        "loading"
      ) : (
        <div className="containerComments">
          {messages.data.map((message, index) => (
            <div className="containerComment" key={message[0]}>
              <div className="charName">{message[1].charName}</div>
              <div className="message">{message[1].message} </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CommentSection;
