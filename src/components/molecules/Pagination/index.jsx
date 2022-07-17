import Button from '../../atoms/Button';

export default function Pagination() {
  return (
    <div className="flex gap-3 mt-10 mx-auto text-lg">
      <Button title="Prev" type="standard" />
      <Button title="1" type="standard" />
      <Button title="2" type="standard" />
      <Button title="3" type="standard" />
      <Button title="4" type="standard" />
      <Button title="Next" type="standard" />
    </div>
  );
}
