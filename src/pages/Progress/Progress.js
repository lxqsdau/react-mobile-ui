import Progress from 'components/Progress'
class _Progress extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          percent1: 0,
          percent2: 30,
          percent3: 70,
        }
    }

    render() {
        const t = this;
        
        if (t.state.percent1 < 100) {
            setTimeout(() => {
                t.setState({
                    percent1: t.state.percent1 + 20,
                });
            }, 1000);
        }
        return (
            <Progress
                percent={t.state.percent1} 
                status=""
                showInfo
                strokeWidth="5"
            />
        )
    }
}
export default _Progress