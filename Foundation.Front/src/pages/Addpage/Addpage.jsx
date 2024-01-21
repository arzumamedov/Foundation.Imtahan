import React, { useContext, useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Addpage.scss";
import { Helmet } from "react-helmet";
import { SearchContext } from "../../Context/SearchContext";
function Addpage() {
  const [sort, setSort] = useState(null);
  const [data, setData] = useState([]);
  const { search, handleSearch } = useContext(SearchContext);

  function getAll() {
    fetch("http://localhost:6060/")
      .then((res) => res.json())
      .then((api) => setData(api));
  }
  useEffect(() => {
    getAll();
  }, []);

  async function addFormik(data) {
    await fetch("http://localhost:6060/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    await getAll();
  }

  async function deleteData(id) {
    await fetch(`http://localhost:6060/${id}`, {
      method: "DELETE",
    });
    await getAll();
  }

  return (
    <>
      <Helmet>
        <title>Add</title>
      </Helmet>
      <input type="text" onChange={handleSearch} />

      <button onClick={() => setSort({ property: "name", asc: true })}>
        A-z
      </button>
      <button onClick={() => setSort({ property: "name", asc: false })}>
        Z-a
      </button>
      <button onClick={() => setSort(null)}>Defult</button>

      <Formik
        initialValues={{ icon: "", name: "", title: "" }}
        validationSchema={Yup.object({
          icon: Yup.string().required("Required"),
          name: Yup.string().required("Required"),
          title: Yup.string().required("Required"),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            setSubmitting(false);
            addFormik(values);
            resetForm();
          }, 400);
        }}
      >
        <Form>
          <label htmlFor="icon">Icon</label>
          <Field name="icon" type="text" />
          <ErrorMessage name="icon" />

          <label htmlFor="name">Name</label>
          <Field name="name" type="text" />
          <ErrorMessage name="name" />

          <label htmlFor="title">Title</label>
          <Field name="title" type="text" />
          <ErrorMessage name="title" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>

      <table>
        <thead>
          <tr>
            <th>Icon</th>
            <th>Name</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {[...data]
            .filter((x) => x.name.toLowerCase().includes(search.toLowerCase()))
            .sort((a, b) => {
              if (!sort) {
                return 0;
              } else if (sort.asc) {
                return a[sort.property] > b[sort.property]
                  ? 1
                  : b[sort.property] > a[sort.property]
                  ? -1
                  : 0;
              } else if (sort.asc === false) {
                return a[sort.property] < b[sort.property]
                  ? 1
                  : b[sort.property] < a[sort.property]
                  ? -1
                  : 0;
              }
            })
            .map((x) => (
              <tr key={x._id}>
                <td>
                  <i className={x.icon}></i>
                </td>
                <td>{x.name}</td>
                <td>{x.title}</td>
                <td onClick={() => deleteData(x._id)}>
                  <i className="fa-solid fa-trash"></i>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default Addpage;
