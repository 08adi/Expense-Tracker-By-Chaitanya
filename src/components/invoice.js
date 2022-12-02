import Stylers from "../styles/invoice.module.scss"
import noking from "../media/justlogo.png"
import { Input } from 'antd';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

const dateFormat = 'YYYY/MM/DD';
function Invoice()
{
return(
    <div className={Stylers.main}>
<div className={Stylers.top}>
    <div>
<img src={noking}  className={Stylers.logocollapse} />
<h5>Office 149, 450 South Brand Brooklyn

San Diego County, CA 91905, USA

+1 (123) 456 7891, +44 (876) 543 2198</h5>
</div>
<div className={Stylers.tpleft}>
    <div>
<label>Date</label>
<DatePicker defaultValue={dayjs('2023/01/01', dateFormat)} format={dateFormat} />
</div>
<div>
<label>Due Date</label>
<DatePicker defaultValue={dayjs('2023/01/01', dateFormat)} format={dateFormat} /></div>

<div><label>Invoice</label>
<Input placeholder="Basic usage" /></div>
</div>
</div>
<div className={Stylers.middle}>
    <div>
<div className={Stylers.invoiceto}>
<label>Invoice To :</label>
<Input placeholder="Enter Students Name"  /></div>
<h5>Andrew Burns

Richardson and Sons LLC

78083 Laura Pines

Bhutan

(687) 660-2473

pwillis@cross.org</h5>
</div>
</div>
    </div>
)



}
export default Invoice;