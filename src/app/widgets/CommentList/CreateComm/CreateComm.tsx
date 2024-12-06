import { Button, Form } from "antd";
import TextArea from "antd/es/input/TextArea";
import { ChangeEvent } from "react";

export const CreateComm: React.FC<{
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: () => void;
  submitting: boolean;
  value: string;
}> = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>

    <Form.Item>
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary"
      >
        Добавить комментарий
      </Button>
    </Form.Item>
  </>
);
