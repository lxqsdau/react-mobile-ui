import Slot from 'components/Slot'
class _Slot extends React.Component {
    constructor(props) {
        super(props);
        // 数据格式化
        const { data, value } = Slot.formatDataValue([
            2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009,
        ]);
    
        this.state = {
            data, // 数据模型
            value, // 选中的值
            confirmedValue: value, // 上次选中的值（取消选择时恢复用）
        };
    
        this.showSlot = this.showSlot.bind(this);
        this.handleConfirm = this.handleConfirm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    showSlot() {
        this.refs.slot.show();
    }

    handleConfirm(value) {
        // 确认选中项目
        this.setState({
            confirmedValue: value,
            value,
        });
    }
    
    handleChange(value) {
        // 改变了选中项
        this.setState({
            value,
        });
    }
    
    handleCancel() {
        // 取消操作时要恢复上次选中的项
        this.setState({
            value: this.state.confirmedValue,
        });
    }

    render() {
        return (
            <div>
                <button size="large" onClick={this.showSlot}>show slot</button>
                <div>确认值：{this.state.confirmedValue[0].text}</div>
                <div>临时值：{this.state.value[0].text}</div>
                <Slot
                    ref="slot"
                    data={this.state.data}
                    value={this.state.value}
                    title="选择日期"
                    onConfirm={this.handleConfirm}
                    onChange={this.handleChange}
                    onCancel={this.handleCancel}
                />
            </div>
            
        )
    }
}
export default _Slot