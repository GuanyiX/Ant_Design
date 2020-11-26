import { Cascader } from 'antd';
import 'antd/dist/antd.css';

const DropDown = () => {

    const options = [
        {
            value: 'Sep-2020',
            label: 'Sep-2020',
        },
        {
            value: 'Aug-2020',
            label: 'Aug-2020',
        },
    ];

    function onChange(value) {
        console.log(value);
    }

    return (
        <Cascader
            options={options}
            onChange={onChange}
            changeOnSelect
            placeholder="Oct-2020"
        />
    )


}



export default DropDown;