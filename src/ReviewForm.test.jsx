import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import ReviewForm from './ReviewForm';

describe('ReviewForm', () => {
  const handleSubmit = jest.fn();
  const handleChange = jest.fn();

  const renderReviewForm = (loginFields = {}) => render(
    <ReviewForm
      onSubmit={handleSubmit}
      onChange={handleChange}
      fields={loginFields}
    />,
  );

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('input-controls', () => {
    const inputControls = [
      { label: '평점', name: 'rate' },
      { label: '리뷰 내용', name: 'description' },
    ];

    it('are rendered', () => {
      const { queryByLabelText } = renderReviewForm();

      inputControls.forEach(({ label }) => {
        expect(queryByLabelText(label)).not.toBeNull();
      });
    });

    // it('show values', () => {
    //   const fields = {
    //     email: 'origin@example.com',
    //     password: 'origin',
    //   };

    //   const { getByLabelText } = renderReviewForm(fields);

    //   inputControls.forEach(({ label, name }) => {
    //     expect(getByLabelText(label)).toHaveValue(fields[name]);
    //   });
    // });

    // it('listen change events', () => {
    //   const { getByLabelText } = renderReviewForm();

    //   inputControls.forEach(({ label, name, value }) => {
    //     fireEvent.change(getByLabelText(label), {
    //       target: { value },
    //     });

    //     expect(handleChange).toBeCalledWith({ name, value });
    //   });
    // });
  });

  // describe('login button', () => {
  //   const loginButton = 'Log In';

  //   it('is rendered', () => {
  //     const { queryByText } = renderReviewForm();

  //     expect(queryByText(loginButton)).not.toBeNull();
  //   });

  //   it('listens click event', () => {
  //     const { getByText } = renderReviewForm();

  //     expect(handleSubmit).not.toBeCalled();

  //     fireEvent.click(getByText(loginButton));

  //     expect(handleSubmit).toBeCalledTimes(1);
  //   });
  // });
});
