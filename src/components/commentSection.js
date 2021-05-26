import { useEffect, useState } from "react";
import { getPosts, addPost } from "./functions/commentSection.js";
import IconProfile1 from "../assets/CommentsProfile/boy.png";
import IconProfile2 from "../assets/CommentsProfile/girl.png";
import IconProfile3 from "../assets/CommentsProfile/girlcat.png";
import Moment from "react-moment";
import moment from "moment";
import "moment-timezone";
function CommentSection({ props }) {
  const [messages, setMessages] = useState({ loading: true, data: [] });
  const [empty, setEmpty] = useState("");
  const [details, setDetails] = useState({ name: "", message: "" });
  const [warning, setWarning] = useState("");
  const [iconProfile, setIconProfile] = useState("profileIcon1");
  const [showIcons, setShowIcons] = useState(false);
  const [showReply, setShowReply] = useState({ id: null, show: false });
  const [warningReply, setWarningReply] = useState("");
  const [addLoading, setAddLoading] = useState(false);
  moment.tz.setDefault("Europe/Berlin");
  function handleNameChange(e) {
    setDetails({ ...details, name: e.target.value });
  }
  function handleMessageChange(e) {
    setDetails({ ...details, message: e.target.value });
  }

  async function addComment() {
    if (details.name && details.message) {
      setWarning("");
      setDetails({ name: "", message: "" });
      setAddLoading(true);

      await addPost({
        location: props.location,
        name: details.name,
        message: details.message,
        icon: iconProfile,
      }).then((resp) => {
        getPosts({
          location: props.location,
        }).then((res) => {
          console.log(res);
          if (res.Empty) {
            setEmpty(res.Empty);
            setMessages({ ...messages, loading: false, data: [] });
          } else {
            setAddLoading(false);
            var result = Object.keys(res).map((key) => [key, res[key]]);
            const Moment = require("moment");

            const sortedArray = result.sort(
              (a, b) =>
                new Moment(b[1].time_stamp) - new Moment(a[1].time_stamp)
            );
            setEmpty("");
            setMessages({ ...messages, loading: false, data: sortedArray });
          }
        });
      });
    } else {
      setWarning("Complete all the fields please!");
    }
  }

  function addReplyComment(id_comment) {
    if (details.name && details.message) {
      setShowReply(null);
      setWarningReply("");
      setDetails({ name: "", message: "" });

      addPost({
        location: props.location,
        name: details.name,
        message: details.message,
        icon: iconProfile,
        id_reply: id_comment,
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
            const Moment = require("moment");

            const sortedArray = result.sort(
              (a, b) =>
                new Moment(b[1].time_stamp) - new Moment(a[1].time_stamp)
            );
            setEmpty("");
            setMessages({ ...messages, loading: false, data: sortedArray });
          }
        });
      });
    } else {
      setWarningReply("Complete all the fields please!");
    }
  }

  function SortArray() {
    // messages.data[1].sort((a, b) => b.time_stamp - a.time_stamp);
    const Moment = require("moment");
    console.log(messages.data);
    const sortedArray = messages.data.sort(
      (a, b) => new Moment(b[1].time_stamp) - new Moment(a[1].time_stamp)
    );
  }

  useEffect(() => {
    console.log("Works");
    console.log(props.location);
    if (messages.data.length > 0) {
      // SortArray();
      console.log("Sorted");
    }
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
          const Moment = require("moment");

          const sortedArray = result.sort(
            (a, b) => new Moment(b[1].time_stamp) - new Moment(a[1].time_stamp)
          );

          console.log(result);
          setMessages({ ...messages, loading: false, data: sortedArray });
        }
      });
    }
  }, [messages.data, getPosts]);
  return (
    <div className="commentSection">
      <h2>Comments ({messages.data.length})</h2>
      <div className="containerAddComment">
        <div>
          {showIcons && (
            <div className="iconsChoice">
              <img
                src={IconProfile1}
                alt="icon"
                onClick={() => {
                  setIconProfile("profileIcon1");
                }}
              ></img>{" "}
              <img
                src={IconProfile2}
                alt="icon"
                onClick={() => {
                  setIconProfile("profileIcon2");
                }}
              ></img>{" "}
              <img
                src={IconProfile3}
                alt="icon"
                onClick={() => {
                  setIconProfile("profileIcon3");
                }}
              ></img>{" "}
            </div>
          )}
          <img
            src={
              (iconProfile === "profileIcon1" && IconProfile1) ||
              (iconProfile === "profileIcon2" && IconProfile2) ||
              (iconProfile === "profileIcon3" && IconProfile3)
            }
            alt="icon"
            onClick={() => {
              setShowIcons(!showIcons);
            }}
          ></img>{" "}
          <p>Choose Icon</p>
        </div>
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
      </div>
      {addLoading && <div className="spinnerProfile-1"></div>}
      <h1 className="empty">{empty}</h1>
      {messages.loading ? (
        <div className="spinnerProfile-1"></div>
      ) : (
        <div className="containerComments">
          {messages.data.map(
            (message, index) =>
              !message[1].id_reply && (
                <div key={message[0]}>
                  <div className="containerComment">
                    <img
                      src={
                        (message[1].icon === "profileIcon1" && IconProfile1) ||
                        (message[1].icon === "profileIcon2" && IconProfile2) ||
                        (message[1].icon === "profileIcon3" && IconProfile3)
                      }
                    ></img>

                    <div className="actualComment">
                      <div
                        className="reply"
                        onClick={() => {
                          if (showReply != message[0]) setShowReply(message[0]);
                          if (showReply === message[0]) setShowReply(null);
                        }}
                      >
                        Reply
                      </div>
                      <div className="charName"> {message[1].charName}</div>
                      <div className="message">{message[1].message} </div>
                      <div className="time">
                        {message[1].time_stamp && (
                          <Moment local tz="Europe/Berlin" fromNow>
                            {message[1].time_stamp}
                          </Moment>
                        )}
                      </div>
                    </div>
                  </div>
                  {showReply === message[0] && (
                    <div className="containerAddComment">
                      <div className="addComment">
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
                        <button
                          onClick={() => {
                            addReplyComment(message[0]);
                          }}
                        >
                          Add Comment
                        </button>
                        <div className="warning">{warningReply}</div>
                      </div>
                    </div>
                  )}
                  {messages.data.map(
                    (comments2, index) =>
                      message[0] === comments2[1].id_reply && (
                        <div key={comments2[0]}>
                          <div className="containerCommentReply">
                            <img
                              src={
                                (comments2[1].icon === "profileIcon1" &&
                                  IconProfile1) ||
                                (comments2[1].icon === "profileIcon2" &&
                                  IconProfile2) ||
                                (comments2[1].icon === "profileIcon3" &&
                                  IconProfile3)
                              }
                            ></img>

                            <div className="actualCommentReply">
                              <div className="charName">
                                {" "}
                                {comments2[1].charName}
                              </div>
                              <div className="message">
                                {comments2[1].message}{" "}
                              </div>
                              <div className="time">
                                {comments2[1].time_stamp && (
                                  <Moment local tz="Europe/Berlin" fromNow>
                                    {comments2[1].time_stamp}
                                  </Moment>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                  )}
                </div>
              )
          )}
        </div>
      )}
    </div>
  );
}

export default CommentSection;
