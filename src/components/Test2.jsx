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
      max_tokens: 50,
    },
  };

  const combinedChatHistory = historyChat.reduce((acc, message, index) => {
    acc.push(message);
    if (historyChat2[index]) {
      acc.push(historyChat2[index]);
    }
    return acc;
  }, []);

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
      <Row className="bg-white chat-row border flex-column p-2 rounded-4">
        <Col className="d-flex justify-content-between p-3">
          <p className="m-0">Nuovo Messaggio</p>
          <i
            className="bi bi-x-lg pointer"
            onClick={() => {
              visibility(false);
            }}
          ></i>
        </Col>
        <Col className="d-flex align-items-center  border-top">
          <i className="bi bi-headset fs-2"></i>
          <p className="m-0 fw-bold ms-3">Linkedin Assistant</p>
        </Col>
        {combinedChatHistory.length > 0 && (
          <Col className="text-field p-2 rounded-3 my-3">
            <Row>
              <Col className="my-4 d-flex flex-column">
                {combinedChatHistory.map((message, index) => {
                  const isUserMessage = index % 2 === 0;
                  const bubbleClass = isUserMessage
                    ? "btn btn-primary rounded-5 chat-bubble w-50 my-3 text-end align-self-end"
                    : `btn btn-secondary rounded-5 chat-bubble w-50 my-3`;

                  return (
                    <>
                      <div key={index} className={bubbleClass}>
                        <h6 className={`m-0`}>{message}</h6>
                      </div>
                    </>
                  );
                })}
                {isLoading ? (
                  <div className="typing-loader align-self-start"></div>
                ) : (
                  ""
                )}
              </Col>
            </Row>
          </Col>
        )}
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
