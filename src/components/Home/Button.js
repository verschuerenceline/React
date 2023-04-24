import Link from 'next/link'

function Button(props) {
    return (
      <button onClick={props.onClick}>
        {props.label}
      </button>
    );
  }
  
  export default Button;