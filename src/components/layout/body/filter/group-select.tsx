import { Row, Select } from 'antd';

interface IGroupSelectProps {
  label?: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
  defaultValue?: string;
}

export const GroupSelect: React.FC<IGroupSelectProps> = ({
  label,
  onChange,
  options,
  defaultValue,
}) => {
  return (
    <Row style={{ flexDirection: 'column' }}>
      {label ? <Row>{label}</Row> : <></>}
      <Row>
        <Select
          defaultValue={defaultValue}
          style={{ width: 120 }}
          onChange={onChange}
          options={options}
        />
      </Row>
    </Row>
  );
};
