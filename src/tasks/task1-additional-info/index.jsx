import { useEffect, useLayoutEffect, useRef, useState } from "react";
import CaptionWithRadio from "../../components/caption-with-radio";
import CaptionWithText from "../../components/caption-with-text";

export default function Task1AdditionalInfo() {
  const [purpose, setPurpose] = useState("client");
  const [label, setLabel] = useState("");
  const [key, setKey] = useState("");
  const [status, setStatus] = useState("active");
  console.log(">> All state values:", { purpose, label, key, status });

  const additionalInfoFormRef = useRef();
  const containerRef = useRef();

  useEffect(() => {
    console.log(">> useEffect çalıştı.");

    return () => {
      console.log(">>> Component unmount olduğunda burası çalışır.");
    };
  }, []);

  useEffect(() => {
    console.log(">> status değişkeni güncellendi: ", status);
  }, [status]);

  useLayoutEffect(() => {
    containerRef.current.style.backgroundColor = "red";
    console.log(">> useLayoutEffect çalıştı.");
  }, []);

  const optionsArr = Array(80).fill(0);
  return (
    <div
      className="row"
      ref={containerRef}
      style={{ backgroundColor: "green" }}
    >
      <div className="col-3">
        <form ref={additionalInfoFormRef}>
          <div className="mb-3">
            Purpose:
            <br />
            <CaptionWithRadio
              name="purpose"
              id="purpose_client"
              value="client"
              label="Client"
              onClick={(event) => setPurpose(event.target.value)}
            />
            <CaptionWithRadio
              name="purpose"
              id="purpose_group"
              value="group"
              label="Group"
              onClick={(event) => setPurpose(event.target.value)}
            />
            <CaptionWithRadio
              name="purpose"
              id="purpose_agent"
              value="agent"
              label="Agent"
              onClick={(event) => setPurpose(event.target.value)}
            />
          </div>

          <div className="mb-3">
            Purpose:
            <br />
            <select
              name="purpose_select"
              class="form-select"
              aria-label="Default select example"
            >
              <option selected>Open this select menu</option>

              {optionsArr.map((item, index) => (
                <option value={index}>{index}</option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            Purpose:
            <br />
            <select
              name="purpose_multiselect"
              class="form-select"
              aria-label="Default select example"
              multiple
            >
              <option selected>Open this select menu</option>

              {optionsArr.map((item, index) => (
                <option value={index}>{index}</option>
              ))}
            </select>
          </div>

          <CaptionWithText
            onChange={(event) => setLabel(event.target.value)}
            name="label"
            caption="Label:"
          />
          <CaptionWithText
            onChange={(event) => setKey(event.target.value)}
            name="key"
            caption="Key:"
          />

          <div className="mb-3">
            Status:
            <br />
            <CaptionWithRadio
              name="status"
              id="status_active"
              value="active"
              label="Active"
              onClick={(e) => setStatus(e.target.value)}
            />
            <CaptionWithRadio
              name="status"
              id="status_passive"
              value="passive"
              label="Passive"
              onClick={(e) => setStatus(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary w-100 p-3"
            onClick={(e) => {
              console.log(
                ">>> additionalInfoFormRef",
                additionalInfoFormRef.current
              );

              const myObj = {
                key1: "val1",
                key2: "val2",
              };

              let myMap = new Map();
              myMap.set("key1", "val1");
              console.log(">> myMap", myMap);
              for (let i = 0; i < 100; i++) {
                myMap.set("val" + i, i);
                myObj["val" + i] = 0;
              }

              const formValues = Object.fromEntries(
                new FormData(additionalInfoFormRef.current).entries()
              );

              console.log(">> Form values:", formValues);
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
