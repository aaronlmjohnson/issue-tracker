import { TTestObject } from "../lib/types"

interface IProps {
    testObj: TTestObject
}

const TestComponent = (props:IProps)=>{
    const { testObj } = props;
    return (
        <div>
            <p>{testObj.kind === "project" ? `manager name:${testObj.manager}` : `author name:${testObj.author}`}</p>
        </div>
    )
}

export default TestComponent