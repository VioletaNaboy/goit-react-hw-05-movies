import { Wrapper, Input, Icon } from './SearchBox.styled';

export const SearchBox = ({ value, onChange, onKeyPress }) => {
  return (
    <Wrapper>
      <Icon />
      <Input
        type="text"
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
        placeholder="Search movies..."
      />
    </Wrapper>
  );
};
