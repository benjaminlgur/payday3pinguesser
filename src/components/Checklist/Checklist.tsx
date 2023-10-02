import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import "./checklist.css";

interface Props {
  checklist: string[];
}

const Checklist = (props: Props) => {
  const quarterLength = Math.ceil(props.checklist.length / 4);
  const columns = Array.from({ length: 4 }, (_, i) =>
    props.checklist.slice(i * quarterLength, (i + 1) * quarterLength)
  );

  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>(
    () => JSON.parse(localStorage.getItem("checkedItems") || "{}")
  );

  useEffect(() => {
    localStorage.setItem("checkedItems", JSON.stringify(checkedItems));
  }, [checkedItems]);

  const handleCheck =
    (item: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setCheckedItems((prev) => ({
        ...prev,
        [item]: event.target.checked,
      }));
    };

  return (
    <>
      <Form className="checklist-form">
        {columns.map((column, columnIndex) => (
          <div key={columnIndex} className="checklist-column">
            {column.map((item, index) => (
              <Form.Check
                key={index}
                type="checkbox"
                label={item}
                checked={checkedItems[item] || false}
                onChange={handleCheck(item)}
              />
            ))}
          </div>
        ))}
      </Form>
    </>
  );
};

export default Checklist;
