import { Card } from "react-bootstrap";
import { GetResponse } from "./service/ChatgptService";
import Prompt from "./Prompt";
import Response from "./Response";
import { useState } from "react";

function Chatgpt() {
  const [responseContent, setResponseContent] = useState("");
  const [busy, setBusy] = useState(false);

  const onSubmit = async (value: string) => {
    try {
      setBusy(true);
      const { data } = await GetResponse(value);
      const content = data.choices?.[0]?.message?.content;
      if (content) {
        setResponseContent(content);
        setBusy(false);
      }
    } catch (error) {
      console.log(error);
      setBusy(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center w-100 vh-100">
      <Card style={{ width: "25rem" }}>
        <Card.Body>
          <Card.Title>Ask to Chat GPT</Card.Title>
          {responseContent ? (
            <Response
              setResponseContent={setResponseContent}
              responseContent={responseContent}
            />
          ) : (
            <Prompt busy={busy} onSubmit={onSubmit} />
          )}
        </Card.Body>
      </Card>
    </div>
  );
}

export default Chatgpt;
