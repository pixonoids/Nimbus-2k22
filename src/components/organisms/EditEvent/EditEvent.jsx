import { Formik, Form } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import './EditEvent.scss';

export default function EditEvent({ event, onSubmit }) {
  const emptyValues = {
    name: '',
    type: 'NONE',
    shortDescription: '',
    description: '',
    from: '',
    to: '',
    venue: '',
    registrationUrl: '',
    image: '',
    pdf: '',
  };
  const intialValues = {
    name: event?.name,
    type: event?.type,
    shortDescription: event?.shortDescription,
    description: event?.description,
    from: event?.from,
    to: event?.to,
    venue: event?.venue,
    registrationUrl: event?.registrationUrl,
    image: event?.image,
    pdf: event?.pdf,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    type: Yup.string().required('Type is required'),
    shortDescription: Yup.string().required('Short description is required'),
    description: Yup.string().required('Complete description is required'),
    from: Yup.date().required('Start date is required'),
    to: Yup.date().required('End date is required'),
    venue: Yup.string().required('Venue is required'),
  });

  return (
    <div className="edit-event">
      <h1>{event ? `Edit Event ${event?.id}` : 'Creating New Event'}</h1>
      <div className="form-container">
        <Formik
          initialValues={event?.id ? intialValues : emptyValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {({
            onSubmit,
            values,
            handleChange,
            isSubmitting,
            setFieldValue,
            submitForm,
            errors,
          }) => (
            <Form onSubmit={onSubmit}>
              <div className="form-wrapper">
                <div className="form-row">
                  <div className="form-group ">
                    <label htmlFor="event-name">Name</label>

                    <input
                      className="form-control"
                      type="textarea"
                      id="name"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      placeholder="Name of the event"
                      autoComplete="off"
                    />
                  </div>

                  <div className="form-group ">
                    <label htmlFor="type">Type</label>
                    <select
                      name="type"
                      id="type"
                      className="form-control"
                      onChange={handleChange}
                      value={values.type}
                    >
                      <option value="NONE" defaultValue disabled>
                        Select Type
                      </option>
                      <option value="MAJOR">Major</option>
                      <option value="DEPARTMENTAL">Departmental</option>
                      <option value="EXHIBITION">Exhibition</option>
                      <option value="WORKSHOP">Workshop</option>
                      <option value="LECTURE">Lectures</option>
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group ">
                    <label htmlFor="shortDescription">Short Description</label>
                    <input
                      className="form-control"
                      type="text"
                      id="shortDescription"
                      name="shortDescription"
                      value={values.shortDescription}
                      onChange={handleChange}
                      placeholder="Few lines about the event"
                      autoComplete="off"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="registrationUrl">Registration URL</label>
                    <input
                      className="form-control"
                      type="url"
                      id="registrationUrl"
                      name="registrationUrl"
                      value={values.registrationUrl}
                      onChange={handleChange}
                      placeholder="Link for the registration"
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="form-row ">
                  <div className="form-group">
                    <label htmlFor="from">Starting Date</label>
                    <input
                      className="form-control"
                      type="datetime-local"
                      id="from"
                      name="from"
                      value={values.from?.replace('Z', '')}
                      onChange={handleChange}
                      autoComplete="off"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="to">End Date</label>
                    <input
                      className="form-control"
                      type="datetime-local"
                      id="to"
                      name="to"
                      value={values.to?.replace('Z', '')}
                      onChange={handleChange}
                      autoComplete="off"
                    />
                  </div>

                  <div className="form-group ">
                    <label htmlFor="venue">Venue</label>
                    <input
                      className="form-control"
                      type="text"
                      id="venue"
                      name="venue"
                      value={values.venue}
                      onChange={handleChange}
                      placeholder="eg. Students' Park, OAT, Lecture Hall, etc."
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="form-row ">
                  <div className="form-group ">
                    <label htmlFor="description">Description</label>
                    <textarea
                      className="form-control"
                      type="text"
                      id="description"
                      name="description"
                      value={values.description}
                      onChange={handleChange}
                      placeholder="Description of the event"
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="image">Image</label>
                    <input
                      className="form-control"
                      type="file"
                      id="image"
                      name="image"
                      onChange={(event) => {
                        setFieldValue('image', event.target.files[0]);
                      }}
                      placeholder="Image"
                      autoComplete="off"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="pdf">PDF</label>
                    <input
                      className="form-control"
                      type="file"
                      id="pdf"
                      name="pdf"
                      onChange={(event) => {
                        setFieldValue('pdf', event.target.files[0]);
                      }}
                      placeholder="pdf"
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>

              {isSubmitting ? (
                <div className="form-control">
                  <div className="progress-horizontal">
                    <div className="bar-horizontal"></div>
                  </div>
                </div>
              ) : null}
              <div className="form-row">
                <button
                  type="button"
                  className="btn-submit"
                  onClick={submitForm}
                >
                  Enter
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
