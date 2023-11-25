import React, { ChangeEvent, useState } from "react";
import { Button, FloatingLabel, Form, Spinner } from "react-bootstrap";

interface PromptProps {
  onSubmit: (value: string) => void;
  busy: boolean;
}

function Prompt({ onSubmit, busy }: PromptProps) {
  const [promptState, setPromptState] = useState<string>();
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <FloatingLabel label="Prompt">
          <Form.Control
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              if (e.target) {
                const value = e.target.value;
                setPromptState(value);
              }
            }}
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "200px" }}
          />
        </FloatingLabel>
      </Form.Group>

      <Button
        onClick={() => {
          if (promptState !== undefined) {
            onSubmit(promptState);
          }
        }}
        disabled={promptState && !busy ? false : true}
        size="sm"
        variant="primary"
        type="submit"
      >
        {!busy ? (
          "Submit"
        ) : (
          <>
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Fetching...
          </>
        )}
      </Button>
    </Form>
  );
}

export default Prompt;
