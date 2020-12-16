const Error = (props) => {
  console.log(props)
  return (
    <div className="d-flex justify-content-center">
      <p className="alert alert-danger p-2 text-uppercase font-weight-bolder">
       {props.error}
      </p>
    </div>
  );
};
export default Error;
