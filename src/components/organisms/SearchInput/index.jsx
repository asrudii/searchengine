import Input from '../../atoms/Input';
import Button from '../../atoms/Button';

export default function SearchInput() {
  return (
    <div className="relative">
      <form>
        <Input />
        <div className="absolute right-0 top-0 h-full flex">
          <Button title="Search Now" />
        </div>
      </form>
    </div>
  );
}
