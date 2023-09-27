import { Button } from "react-bootstrap";

const MySideBarLoader = () => {
  return (
    <aside
      style={{ width: "300px", animation: "blink 1.2s linear infinite" }}
      className="bg-white border rounded mt-sidebar "
    >
      <div className="rounded  p-4 mb-2">
        <div className="relative d-flex justify-content-between">
          <div className="fw-bold">
            <p className="div-fs-sm bg-dark"> </p>
            <p className="div-subtitle-loader bg-secondary"></p>
          </div>
          <div></div>
        </div>
        <hr className="mt-4 mb-4" />
        <div className="relative d-flex flex-column">
          <div className="d-flex justify-content-between">
            <p className="div-fs-sm bg-dark"> </p>
          </div>
          <p className="div-subtitle-loader bg-secondary"></p>
        </div>
      </div>
      <hr className="my-1 text-white" />
      <section>
        <div className="d-flex py-3">
          <div style={{ paddingRight: "20px" }}>
            <div
              className="rounded-circle ms-2 bg-danger"
              style={{ width: "50px", height: "50px", animation: "blink 1.2s linear infinite" }}
            ></div>
          </div>
          <div className="w-100">
            <p className="div-fs-sm bg-dark"> </p>
            <p className="div-subtitle-loader bg-secondary"></p>
            <div>
              <Button className="button-loader bg-success me-1" style={{ fontWeight: "500" }}></Button>
            </div>
          </div>
        </div>
        <hr />
        <div className="d-flex py-3">
          <div style={{ paddingRight: "20px" }}>
            <div
              className="rounded-circle ms-2 bg-danger"
              style={{ width: "50px", height: "50px", animation: "blink 1.2s linear infinite" }}
            ></div>
          </div>
          <div className="w-100">
            <p className="div-fs-sm bg-dark"> </p>
            <p className="div-subtitle-loader bg-secondary"></p>
            <div>
              <Button className="button-loader bg-success me-1" style={{ fontWeight: "500" }}></Button>
            </div>
          </div>
        </div>
      </section>
    </aside>
  );
};
export default MySideBarLoader;
