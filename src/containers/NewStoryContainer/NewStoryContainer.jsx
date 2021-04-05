import { useState } from 'react';
import { postStory } from '../../services/api';
import { getCurrentUser } from '../../services/localApi';

import './NewStoryContainer.css';

const initialState = {
  url: '',
  title: '',
};

const NewStoryContainer = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [formValues, setFormValues] = useState(initialState);

  const handleChange = ({ target: { name, value } }) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  // Note: URL validation is not implemented intentionally to test the failure scenario while posting a new story.
  const isFormInvalid = () => !(formValues.url && formValues.title);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormInvalid()) return;

    setLoading(true);

    postStory({
      ...formValues,
      username: getCurrentUser(),
      timestamp: Date.now(),
    })
      .then(message => setSuccess(message) && setFormValues(initialState))
      .catch(message => setError(message))
      .finally(() => setLoading(false));
  };

  return (
    <div className="new-story-container">
      <h2>New story</h2>
      {loading && <div className="new-story-container__loading">Posting...</div>}
      {error && <div className="new-story-container__error">{error}</div>}
      {success && <div className="new-story-container__success">{success}</div>}
      <form noValidate onSubmit={handleSubmit} className="new-story-container__form">
        <label htmlFor="title">
          Enter title of the story
          <input
            id="title"
            name="title"
            type="text"
            value={formValues.title}
            aria-label="Enter title of the story"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="url">
          Provide a link to the story
          <input
            id="url"
            name="url"
            type="url"
            value={formValues.url}
            aria-label="Enter a link to the story"
            onChange={handleChange}
          />
        </label>
        <div>
          <button
            type="submit"
            className="btn-submit"
            disabled={isFormInvalid() || loading}
          >
            Submit story
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewStoryContainer;
