export default function CaptionWithText(props) {
  console.log(">>> props: ", props);

  return (
    <div className="mb-3">
      {props.caption}
      <br />
      <input
        className="form-control"
        type="text"
        onChange={props.onChange}
        name={props.name}
      />
    </div>
  );
}
