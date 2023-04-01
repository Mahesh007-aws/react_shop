import { useState, useEffect } from "react";

export default function useDocTitle(currentPage) {
  useEffect(() => {
    document.title = `your on ${currentPage} Page`;
  }, [currentPage]);
  return;
}

export function useInput() {
  const [value, setvalue] = useState("");
  const bind = {
    value,
    onChange: (e) => {
      setvalue(e.target.value);
    },
  };

  return [value, bind];
}

export function useCheckBox(labelname) {
  const [check, setcheck] = useState(true);
  const checkbox = (
    <>
      <input
        id="check"
        type="checkbox"
        className="form-check-input"
        onChange={() => setcheck(!check)}
        checked={check}
      />
      <label htmlFor="check">
        <b>{labelname}</b>
      </label>
    </>
  );
  return [check, checkbox];
}
