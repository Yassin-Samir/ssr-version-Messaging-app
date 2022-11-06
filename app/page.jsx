import { Fragment } from "react";
const fetchData = async () => {
  return (
    (await (await fetch("https://jsonplaceholder.cypress.io/users/")).json()) ||
    {}
  );
};
async function page() {
  const data = await fetchData();
  const DataComponent = ({ name, email, website }) => {
    return (
      <div className="data">
        <p>{name}</p>
        <a href={`mailto:${email}`}>{email}</a>
        <a href={`https://facebook.com`} target={"_blank"}>
          {website}
        </a>
      </div>
    );
  };
  return (
    <Fragment>
      {data && data.map((i, ind) => <DataComponent {...i} key={ind + 1} />)}
    </Fragment>
  );
}
export default page;
