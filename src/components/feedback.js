function Feedback() {
  return (
    <div className="FeedbackPage">
      <div>
        <h3>Feedback Page coming soon.</h3>
        <div className="messageList">
          <div className="messageBox">
            <div className="detailsMessage">
              <p className="user">User: Belfu</p>
              <p className="date">15.10.2022</p>
            </div>
            <p className="titleMessage">Title test</p>
            <p className="message">New message test</p>
          </div>
          <div className="messageBox">
            <div className="detailsMessage">
              <p className="user">User: Belfu</p>
              <p className="date">15.10.2022</p>
            </div>
            <p className="titleMessage">Title test 2</p>
            <p className="message">
              This mesasge is new but bigger than the first.
            </p>
          </div>
          <div className="messageBox">
            <div className="detailsMessage">
              <p className="user">User: Belfu</p>
              <p className="date">15.10.2022</p>
            </div>
            <p className="titleMessage">Title test 3</p>
            <p className="message">
              This should be a very big message: test test test test test test
              test test test.
            </p>
          </div>
        </div>
      </div>
      <div className="createMessage">
        <h4>Write your feedback here</h4>
        <div className="titleUserMessage">
          <input placeholder="User..." />
          <input placeholder="Title..." />
        </div>
        <textarea placeholder="Write your message here..." />
        <button>Send</button>
      </div>
    </div>
  );
}

export default Feedback;
