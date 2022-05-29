import { useState } from "react";
function Button(props) {
  return (
    <button onClick={() => props.SetCFunction(props.Value)}>
      +{props.mesageAttr}
    </button>
  );
}
function Display(props) {
  return <div>{props.mesage}</div>;
}
export default function App() {
  const [Counter, setCounter] = useState(0);
  const Increament = (ValueD) => setCounter(Counter + ValueD);
  return (
    <>
      <Button SetCFunction={Increament} mesageAttr={1} Value={1} />
      <Button SetCFunction={Increament} mesageAttr={2} Value={2} />
      <Button SetCFunction={Increament} mesageAttr={3} Value={3} />
      <Button SetCFunction={Increament} mesageAttr={4} Value={4} />
      <Button SetCFunction={Increament} mesageAttr={5} Value={5} />
      <Button SetCFunction={Increament} mesageAttr={5} Value={6} />

      <Display mesage={Counter} />
    </>
  );
}
