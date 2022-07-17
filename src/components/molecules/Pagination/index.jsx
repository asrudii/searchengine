import Button from '../../atoms/Button';
import ChevronRight from '../../../assets/icons/chevron-right.svg';
import ChevronLeft from '../../../assets/icons/chevron-left.svg';

export default function Pagination() {
  return (
    <div className="flex gap-3 mt-10 mx-auto text-lg">
      <Button src={ChevronLeft} type="standard" />
      <Button title="1" type="standard" />
      <Button title="2" type="standard" />
      <Button title="3" type="standard" />
      <Button title="4" type="standard" />
      <Button src={ChevronRight} type="standard" />
    </div>
  );
}
