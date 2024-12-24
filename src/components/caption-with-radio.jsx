export default function CaptionWithRadio(props) {
  return (
    <div className="form-check form-check-inline">
      <input
        type="radio"
        className="form-check-input"
        name={props.name}
        id={props.id}
        value={props.value}
        onClick={props.onClick}
      />
      <label className="form-check-label" for={props.id}>
        {props.label}
      </label>
    </div>
  );
}
