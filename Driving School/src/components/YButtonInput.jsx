import SearchButton from '@/components/ui/SearchButton';
import Input from '@/components/ui/input';

function InputWithButton() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="email" placeholder="Email" />
      <SearchButton type="submit">Subscribe</SearchButton>
    </div>
  );
}

export default InputWithButton;