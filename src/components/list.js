import Styles from "../styles/list.module.scss";
import { DatePicker } from 'antd';
import {UploadOutlined } from '@ant-design/icons';
// import Invoice from "./components/invoice";
import { Input } from 'antd';
import { Select } from 'antd';
import { Button } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

const dateFormat = 'YYYY/MM/DD';


const { Search } = Input;
const onSearch = (value) => console.log(value);
const onChange = (value) => {
    console.log(`selected ${value}`);
  };

function List()
{
return(
    <div className={Styles.whole}>
<div className={Styles.mainnav}>
<div className={Styles.left}>
<label>Date
<DatePicker defaultValue={dayjs('2023/01/01', dateFormat)} format={dateFormat} /></label>
<Button type="primary" icon={<UploadOutlined /> }>
            Upload
          </Button>

          </div>

<div className={Styles.right}>

<label>Search
    <Search style={{width:"300px"}}
      placeholder=" search "
      allowClear
      enterButton="Search"
      
      size="14"
      onSearch={onSearch}
    />
    </label>
  <Select style={{width:"150px"}}
    showSearch
    placeholder="Select Status"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={(input, option) =>
      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
    options={[
      {
        value: 'jack',
        label: 'Jack',
      },
      {
        value: 'lucy',
        label: 'Lucy',
      },
      {
        value: 'tom',
        label: 'Tom',
      },
    ]}
  />

</div>
</div>
<div className={Styles.list}>
<div>Date</div>
<div>Student Name</div>
<div>Email</div>
<div>Phone Number</div>
<div>Paid Amount</div>
<div>Balance</div>

<div>Actions</div>


</div>


</div>


)

}
export default List;