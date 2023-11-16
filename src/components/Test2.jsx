import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import axios from "axios";
import { APIKEY } from "../redux/store/apikey";

const Test2 = ({ visibility, profile }) => {
  const [chatMessage, setChatMessage] = useState("");
  const [historyChat, setHistoryChat] = useState([]);
  const [historyChat2, setHistoryChat2] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  const requestBody = {
    messages: { role: "user", content: chatMessage },
    options: {
      temperature: 1,
      language: "it",
      max_tokens: 100,
    },
  };

  const TestGpt = (param) => {
    const config = {
      headers: {
        Authorization: `Bearer ${APIKEY}`,
        "Content-Type": "application/json",
      },
    };

    const requestBody = {
      model: "gpt-3.5-turbo",
      messages: [param],
    };

    axios
      .post("https://api.openai.com/v1/chat/completions", requestBody, config)
      .then((response) => {
        console.log(response);
        const answer = response.data.choices[0].message.content;
        if (answer.trim() !== "") {
          setHistoryChat2([...historyChat2, answer]);
          setIsloading(false);
        }
      })
      .catch((error) => {
        console.error("Errore durante la richiesta:", error);
        setIsloading(false);
      });
  };

  console.log(profile);

  const sendMessage = () => {
    if (chatMessage.trim() !== "") {
      setHistoryChat([...historyChat, chatMessage]);
      setIsloading(true);

      TestGpt(requestBody.messages);
      setChatMessage("");
    }
  };

  return (
    <Container fluid className="sticky-bottom d-flex justify-content-center">
      <Row className="bg-white chat-row border flex-column p-2 rounded">
        <Col className="d-flex justify-content-between p-3">
          <p className="m-0">Nuovo Messaggio</p>
          <i
            className="bi bi-x-lg pointer"
            onClick={() => {
              visibility(false);
            }}
          ></i>
        </Col>
        <Col className="d-flex align-items-center">
          <img
            src={profile.image}
            style={{ width: "15%" }}
            alt="user"
            className="rounded-circle"
          />
          <p className="m-0 fw-bold ms-3">
            {profile.name} {profile.surname}
          </p>
        </Col>
        <Col className="text-field p-2 rounded-3 my-3">
          {historyChat && (
            <Row>
              {isLoading ? (
                <Col>
                  {" "}
                  <div className="typing-loader m-0"></div>
                </Col>
              ) : (
                <Col className="my-4">
                  {historyChat2.map((message, index) => {
                    return (
                      <div
                        key={index}
                        className="btn btn-secondary rounded-5 chat-bubble my-3"
                      >
                        <h6 className="m-0">{message}</h6>
                      </div>
                    );
                  })}
                </Col>
              )}

              <Col className="d-flex flex-column align-items-end">
                {historyChat.map((message, index) => {
                  return (
                    <div
                      key={index}
                      className="btn btn-primary  rounded-5 chat-bubble my-3"
                    >
                      <h6 className="text-end m-0">{message}</h6>
                    </div>
                  );
                })}
              </Col>
            </Row>
          )}
        </Col>
        <Col>
          <Form
            onSubmit={(e) => {
              e.preventDefault();

              sendMessage();
            }}
          >
            <Form.Control
              type="text"
              placeholder="Scrivi un messaggio.."
              value={chatMessage}
              onChange={(e) => {
                setChatMessage(e.target.value);
              }}
            />
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Test2;
