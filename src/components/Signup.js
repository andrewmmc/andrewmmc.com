import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import rgba from 'polished/lib/color/rgba';
import darken from 'polished/lib/color/darken';

const FORM_ID = '1373319';

const Signup = () => {
  return (
    <Container>
      <h3>Subscribe to the Newsletter</h3>
      <p>Subscribe to get my latest content by email.</p>
      <StyledForm
        action={`//app.convertkit.com/forms/${FORM_ID}/subscriptions`}
        method="post"
      >
        <StyledInput
          type="text"
          className="formkit-input"
          name="fields[first_name]"
          aria-label="Your name"
          placeholder="Your name"
          required
        />
        <StyledInput
          type="email"
          className="formkit-input"
          name="email_address"
          aria-label="Your email"
          placeholder="Your email"
          required
        />
        <StyledButton data-element="submit" className="formkit-submit">
          Subscribe Now
        </StyledButton>
      </StyledForm>
      <small>
        <strong>No spam</strong> - You can unsubscribe at <i>any time</i>.
      </small>
    </Container>
  );
};

const Container = styled.div`
  padding: 1rem 1.5rem;
  border-radius: 4px;
  border: 1px solid #f4f4f4;
  text-align: center;
`;

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;

  ${media.greaterThan('small')`
    flex-direction: row;
  `};
`;

const StyledInput = styled.input`
  border: 1px solid ${({ theme }) => rgba(theme.colors.primaryText, 0.1)};
  border-radius: 4px;
  padding: 0.25rem 0.6rem;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primaryText};
  width: 100%;
  margin: 0 0 1rem 0;

  ${media.greaterThan('small')`
    width: 200px;
    margin: 0 1rem 0 0;
  `};

  &:focus,
  &:active {
    border: 1px solid ${({ theme }) => darken(0.1, theme.colors.primary)};
    outline-width: 0;
    box-shadow: 0 0 0 4px ${({ theme }) => rgba(theme.colors.primary, 0.4)};
  }
`;

const StyledButton = styled.button`
  padding: 0.4rem 1rem;
  color: ${({ theme }) => theme.colors.background};
  background-color: ${({ theme }) => theme.colors.primary};
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  font-size: 1rem;
  vertical-align: middle;
  width: 100%;

  ${media.greaterThan('small')`
    width: auto;
  `};

  &:focus,
  &:active {
    outline-width: 0;
    background-color: ${({ theme }) => darken(0.1, theme.colors.primary)};
    box-shadow: 0 0 0 4px ${({ theme }) => rgba(theme.colors.primary, 0.4)};
  }
`;

export default Signup;
