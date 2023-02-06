import { Form, Input } from './Form.styled';
import Button from 'components/shared/Button';
import { RiMovie2Line } from 'react-icons/ri';
import useForm from 'components/shared/hooks/useForm';

const SearchForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm(onSubmit);

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        onChange={handleChange}
        value={state.query ? state.query : ''}
        name="query"
        required
      />
      <Button
        endicon={RiMovie2Line}
        iconSize={22}
        type="button"
        disabled={state.query?.length > 0 ? false : true}
        className="searchButton"
        ariaLable="search button"
      >
        Search
      </Button>
    </Form>
  );
};

export default SearchForm;
