import { Spin } from "antd";

const LoadingSpin: React.FC = () => {
  return (
    <div className="flex size-full justify-center items-center">
      <Spin spinning />
    </div>
  )
}

export default LoadingSpin;
