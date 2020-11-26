import { Collapse } from 'antd';
import 'antd/dist/antd.css';

const CollapseSec = () => {

    const { Panel } = Collapse;

    function callback(key) {
        console.log(key);
    }

    const text = 'This is the first layer'

    return (
        <Collapse defaultActiveKey={['1']} onChange={callback}>
            <Panel header="This is panel header 1" key="1">
                <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 2" key="2">
                <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 3" key="3" disabled>
                <p>{text}</p>
            </Panel>
        </Collapse>
    )

}

export default CollapseSec;



